import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProductDetail } from "@/components/shop/ProductDetail";
import { MaterialBenefits } from "@/components/shop/MaterialBenefits";
import { getAllProducts, getProduct } from "@/lib/catalog";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} · Elemental Episodes`,
      description: product.tagline,
      images: [product.colors[0].images.front],
    },
  };
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ culoare?: string }>;
}) {
  const { slug } = await params;
  const { culoare } = await searchParams;
  const product = getProduct(slug);
  if (!product) notFound();

  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mihaiflorea.dev";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.colors.map((c) => `${site}${c.images.front}`),
    brand: { "@type": "Brand", name: "Elemental Episodes" },
    offers: {
      "@type": "Offer",
      priceCurrency: "RON",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `${site}/produs/${product.slug}`,
    },
  };

  return (
    <Container size="wide" className="py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="mb-8 flex items-center gap-2 text-xs text-steel">
        <Link href="/colectie" className="transition-colors hover:text-platinum">
          Colecția
        </Link>
        <span className="text-ash">/</span>
        <span className="text-fog">{product.name}</span>
      </nav>
      <ProductDetail product={product} initialColorKey={culoare} />

      <div className="mt-24 border-t border-line/60 pt-16">
        <MaterialBenefits material={product.material} />
      </div>
    </Container>
  );
}
