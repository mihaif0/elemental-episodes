import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

/**
 * Stripe webhook. Configure the endpoint in the Stripe dashboard and set
 * STRIPE_WEBHOOK_SECRET. Until then this responds 200 without verifying.
 */
export async function POST(req: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe || !secret) {
    return Response.json({ received: true, note: "Webhook neconfigurat." });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return Response.json({ error: "Lipsește semnătura." }, { status: 400 });
  }

  const payload = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Semnătură invalidă.";
    return Response.json({ error: message }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      // TODO: persist order, send confirmation email (e.g. Resend), notify fulfillment.
      console.log("✓ Comandă plătită:", session.id, session.customer_details?.email);
      break;
    }
    default:
      break;
  }

  return Response.json({ received: true });
}
