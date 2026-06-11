import type { Metadata } from "next";
import { CollectionView } from "@/components/shop/CollectionView";
import { getAllProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Colecția",
  description:
    "Descoperă colecția Elemental Episodes — polo-uri premium Basic și Zipper, plus pachete la cea mai bună valoare.",
};

export default function CollectionPage() {
  return (
    <CollectionView
      title="Toată colecția"
      subtitle="Esențiale premium, croite din materiale superioare. Brățară cadou 199 lei la fiecare comandă."
      products={getAllProducts()}
      active="all"
    />
  );
}
