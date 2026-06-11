import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/shop/ProductCard";
import { ComingSoonCard } from "@/components/shop/ComingSoonCard";
import { categories, getCards, type Category, type Product } from "@/lib/catalog";

export function CollectionView({
  title,
  subtitle,
  products,
  active,
}: {
  title: string;
  subtitle: string;
  products: Product[];
  active: Category | "all";
}) {
  const chips = [{ key: "all" as const, label: "Toate", href: "/colectie" }, ...categories];

  return (
    <Container size="wide" className="py-16 md:py-20">
      <header className="text-center">
        <p className="eyebrow">Colecția</p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-metal md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-steel">{subtitle}</p>
      </header>

      <nav className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
        {chips.map((c) => {
          const isActive = c.key === active;
          return (
            <Link
              key={c.key}
              href={c.href}
              className={`border px-5 py-2 text-[0.68rem] uppercase tracking-[0.2em] transition-colors duration-300 ${
                isActive
                  ? "border-fog bg-platinum text-ink"
                  : "border-line text-steel hover:border-fog hover:text-platinum"
              }`}
            >
              {c.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-14 grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4">
        {getCards(products).map((card) => (
          <ProductCard key={card.key} card={card} />
        ))}
        <ComingSoonCard />
      </div>
    </Container>
  );
}
