// ---------------------------------------------------------------------------
// Elemental Episodes — catalog (single source of truth).
// NOTE: prices are PLACEHOLDERS (EUR) pending the client's real pricing.
// ---------------------------------------------------------------------------

export type Size = "S" | "M" | "L" | "XL";
export type Category = "basics" | "zipper" | "pachete";
export type SizeChart = "basics" | "zipper";
export type Material = "supima" | "bamboo";

export interface ColorOption {
  key: string;
  name: string;
  hex: string;
  images: { front: string; back: string; closeup: string };
}

export interface Product {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  price: number;
  compareAt?: number;
  badge?: string;
  sizes: Size[];
  colors: ColorOption[];
  sizeChart: SizeChart;
  material: Material;
  description: string;
  highlights: string[];
}

const SIZES: Size[] = ["S", "M", "L", "XL"];

const COLOR_META: Record<string, { name: string; hex: string }> = {
  black: { name: "Negru", hex: "#16161a" },
  green: { name: "Verde", hex: "#2b3f35" },
  grey: { name: "Gri", hex: "#4a4e55" },
  navyblue: { name: "Bleumarin", hex: "#1f2a45" },
};

function colorsFor(model: "basics" | "zipper"): ColorOption[] {
  const base = `/products/${model}`;
  return Object.entries(COLOR_META).map(([key, meta]) => ({
    key,
    name: meta.name,
    hex: meta.hex,
    images: {
      front: `${base}/${key}-front.webp`,
      back: `${base}/${key}-back.webp`,
      closeup: `${base}/${key}-closeup.webp`,
    },
  }));
}

export const products: Product[] = [
  {
    slug: "polo-basic",
    name: "Polo Basic",
    category: "basics",
    tagline: "Esențialul redefinit",
    price: 149,
    sizes: SIZES,
    colors: colorsFor("basics"),
    sizeChart: "basics",
    material: "supima",
    description:
      "Polo-ul Basic redefinește esențialul. Croit din bumbac Supima — fibra premium, cu fir extra-lung — pentru o textură fină care rezistă ani de zile. Silueta sculptată oferă o cădere impecabilă, fără efort.",
    highlights: [
      "Bumbac Supima 100%, cultivat sustenabil în SUA",
      "Rezistent la șifonare — ideal pentru călătorii și purtare zilnică",
      "Moliciune sporită și rezistență la scămoșare",
      "Respirabil și lejer, pentru un flux optim de aer",
      "Durabilitate și rezistență excepționale",
    ],
  },
  {
    slug: "polo-zipper",
    name: "Polo Zipper",
    category: "zipper",
    tagline: "Detaliul care contează",
    price: 159,
    sizes: SIZES,
    colors: colorsFor("zipper"),
    sizeChart: "zipper",
    material: "bamboo",
    description:
      "Polo-ul Zipper aduce un accent modern prin gulerul cu fermoar și finisaj metalic discret. Țesătură cu fibre de bambus termoreglatoare, pentru confort în orice sezon. Detaliul care transformă un basic într-o declarație subtilă.",
    highlights: [
      "Guler cu fermoar premium, finisaj metalic",
      "Fibre de bambus termoreglatoare — răcoros vara, cald iarna",
      "Respirabil natural, cu evacuarea umidității",
      "Atingere fină și confortabilă, blândă cu pielea",
      "Eco-friendly și sustenabil",
    ],
  },
  {
    slug: "pachet-polo-basic",
    name: "Pachet Polo Basic",
    category: "pachete",
    tagline: "Mai multe esențiale, preț inteligent",
    price: 269,
    compareAt: 298,
    badge: "Cea mai bună valoare",
    sizes: SIZES,
    colors: [
      {
        key: "set",
        name: "Set",
        hex: "#2b2b30",
        images: {
          front: "/products/bundle-basics/front.webp",
          back: "/products/bundle-basics/back.webp",
          closeup: "/products/bundle-basics/front.webp",
        },
      },
    ],
    sizeChart: "basics",
    material: "supima",
    description:
      "Pachetul Basic adună esențialele colecției la un preț avantajos. Combinația perfectă pentru a-ți construi garderoba de bază, fără compromis la calitate.",
    highlights: [
      "Set curatoriat de polo-uri Basic",
      "Economie față de achiziția individuală",
      "Aceeași calitate Supima în fiecare piesă",
      "Cadoul perfect, gata de dăruit",
    ],
  },
  {
    slug: "pachet-polo-zipper",
    name: "Pachet Polo Zipper",
    category: "pachete",
    tagline: "Colecția Zipper, completă",
    price: 289,
    compareAt: 318,
    badge: "Cea mai bună valoare",
    sizes: SIZES,
    colors: [
      {
        key: "set",
        name: "Set",
        hex: "#2b2b30",
        images: {
          front: "/products/bundle-zipper/front.webp",
          back: "/products/bundle-zipper/back.webp",
          closeup: "/products/bundle-zipper/front.webp",
        },
      },
    ],
    sizeChart: "zipper",
    material: "bamboo",
    description:
      "Pachetul Zipper reunește polo-urile cu guler-fermoar într-un set complet. Pentru cei care își doresc semnătura modernă a colecției, la cea mai bună valoare.",
    highlights: [
      "Set curatoriat de polo-uri Zipper",
      "Economie față de achiziția individuală",
      "Fibre de bambus termoreglatoare în fiecare piesă",
      "Prezentare premium, ideală cadou",
    ],
  },
];

export const categories: { key: Category; label: string; href: string }[] = [
  { key: "basics", label: "Polo Basics", href: "/colectie/basics" },
  { key: "zipper", label: "Polo Zipper", href: "/colectie/zipper" },
  { key: "pachete", label: "Pachete", href: "/colectie/pachete" },
];

export const categoryMeta: Record<Category, { title: string; subtitle: string }> = {
  basics: {
    title: "Polo Basics",
    subtitle: "Esențiale din bumbac Supima, croite pentru a dura.",
  },
  zipper: {
    title: "Polo Zipper",
    subtitle: "Guler cu fermoar și fibre de bambus termoreglatoare.",
  },
  pachete: {
    title: "Pachete",
    subtitle: "Seturi curatoriate, la cea mai bună valoare.",
  },
};

export function getAllProducts(): Product[] {
  return products;
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(value: number): string {
  return `${value} lei`;
}

// Free gift value (in lei), shown across the site.
export const BRACELET_VALUE = "199 lei";

/**
 * A single grid card. Multi-color products expand to one card per color so the
 * catalog feels richer; bundles keep a single card. The color switcher on the
 * product page is preserved — cards just deep-link to a preselected color.
 */
export interface CatalogCard {
  key: string;
  slug: string;
  name: string;
  subtitle: string;
  colorKey: string;
  colorName?: string;
  price: number;
  compareAt?: number;
  badge?: string;
  image: string;
  hoverImage: string;
  href: string;
}

export function getCards(list: Product[]): CatalogCard[] {
  const cards: CatalogCard[] = [];
  for (const p of list) {
    const isBundle = p.category === "pachete";
    if (isBundle) {
      const c = p.colors[0];
      cards.push({
        key: p.slug,
        slug: p.slug,
        name: p.name,
        subtitle: p.tagline,
        colorKey: c.key,
        price: p.price,
        compareAt: p.compareAt,
        badge: p.badge,
        image: c.images.front,
        hoverImage: c.images.back,
        href: `/produs/${p.slug}`,
      });
    } else {
      for (const c of p.colors) {
        cards.push({
          key: `${p.slug}__${c.key}`,
          slug: p.slug,
          name: p.name,
          subtitle: c.name,
          colorKey: c.key,
          colorName: c.name,
          price: p.price,
          compareAt: p.compareAt,
          badge: p.badge,
          image: c.images.front,
          hoverImage: c.images.closeup,
          href: `/produs/${p.slug}?culoare=${c.key}`,
        });
      }
    }
  }
  return cards;
}
