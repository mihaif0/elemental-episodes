import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionView } from "@/components/shop/CollectionView";
import {
  categoryMeta,
  getProductsByCategory,
  type Category,
} from "@/lib/catalog";

const validCategories: Category[] = ["basics", "zipper", "pachete"];

function isCategory(value: string): value is Category {
  return (validCategories as string[]).includes(value);
}

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!isCategory(category)) return {};
  const meta = categoryMeta[category];
  return { title: meta.title, description: meta.subtitle };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!isCategory(category)) notFound();

  const meta = categoryMeta[category];
  return (
    <CollectionView
      title={meta.title}
      subtitle={meta.subtitle}
      products={getProductsByCategory(category)}
      active={category}
    />
  );
}
