import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getProduct } from "@/lib/catalog";

interface IncomingItem {
  id: string;
  qty: number;
}

export async function POST(req: Request) {
  const stripe = getStripe();
  if (!stripe) {
    return Response.json(
      {
        error:
          "Plata online nu este configurată încă. Adaugă cheile Stripe (STRIPE_SECRET_KEY) pentru a activa checkout-ul.",
      },
      { status: 503 },
    );
  }

  let body: { items?: IncomingItem[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Cerere invalidă." }, { status: 400 });
  }

  const incoming = body.items ?? [];
  if (incoming.length === 0) {
    return Response.json({ error: "Coșul este gol." }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? new URL(req.url).origin;
  const allowImages = origin.startsWith("https://");

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  for (const entry of incoming) {
    const [slug, colorKey, size] = entry.id.split("__");
    const product = getProduct(slug);
    if (!product) continue;
    const color = product.colors.find((c) => c.key === colorKey) ?? product.colors[0];
    const qty = Math.max(1, Math.min(99, Math.floor(entry.qty)));

    lineItems.push({
      quantity: qty,
      price_data: {
        currency: "ron",
        unit_amount: Math.round(product.price * 100),
        product_data: {
          name: product.name,
          description: `${color.name} · Mărime ${size}`,
          ...(allowImages ? { images: [`${origin}${color.images.front}`] } : {}),
        },
      },
    });
  }

  if (lineItems.length === 0) {
    return Response.json({ error: "Produsele din coș nu au putut fi găsite." }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      locale: "ro",
      billing_address_collection: "auto",
      shipping_address_collection: { allowed_countries: ["RO"] },
      phone_number_collection: { enabled: true },
      success_url: `${origin}/comanda/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/comanda/anulata`,
      metadata: { free_gift: "Brățară cadou 199 lei" },
    });

    return Response.json({ url: session.url });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Eroare la procesarea plății.";
    return Response.json({ error: message }, { status: 500 });
  }
}
