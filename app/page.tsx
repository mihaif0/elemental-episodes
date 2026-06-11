import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Monogram } from "@/components/brand/Logo";
import { ProductCard } from "@/components/shop/ProductCard";
import { Hero } from "@/components/home/Hero";
import { BenefitsMarquee } from "@/components/home/BenefitsMarquee";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { getAllProducts, getCards } from "@/lib/catalog";

const featuredKeys = [
  "polo-basic__black",
  "polo-basic__green",
  "polo-zipper__navyblue",
  "polo-zipper__grey",
];

export default function Home() {
  const allCards = getCards(getAllProducts());
  const featured = featuredKeys
    .map((k) => allCards.find((c) => c.key === k))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <Hero />

      <BenefitsMarquee />

      {/* ---------------- FEATURED ---------------- */}
      <section className="py-24">
        <Container size="wide">
          <Reveal className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Colecția</p>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-platinum md:text-5xl">
                Esențiale selecționate
              </h2>
            </div>
            <Button href="/colectie" variant="ghost" className="hidden sm:inline-flex">
              Vezi tot →
            </Button>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 md:gap-x-5">
            {featured.map((card) => (
              <RevealItem key={card.key}>
                <ProductCard card={card} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ---------------- BRACELET OFFER ---------------- */}
      <section className="py-12">
        <Container size="wide">
          <Reveal className="surface relative overflow-hidden">
            <div className="grid items-center gap-8 p-10 md:grid-cols-2 md:p-16">
              <div>
                <p className="eyebrow">Ofertă limitată</p>
                <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-metal md:text-5xl">
                  O brățară de 199 lei,
                  <br />
                  <span className="italic">din partea casei.</span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-fog">
                  La fiecare comandă primești cadou o brățară premium în valoare de 199 lei. Se
                  adaugă automat în coș — fără cod, fără bătăi de cap.
                </p>
                <div className="mt-9">
                  <Button href="/colectie" size="lg">
                    Cumpără acum
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square w-full overflow-hidden border border-line">
                <Image
                  src="/brand/bracelet-offer-1.webp"
                  alt="Brățară cadou Elemental Episodes"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- MATERIAL STORY ---------------- */}
      <section className="py-24">
        <Container size="narrow" className="text-center">
          <Reveal>
            <Monogram className="mx-auto h-10 w-10 text-fog/70" />
            <p className="eyebrow mt-8">Materialul contează</p>
            <h2 className="mt-5 font-display text-3xl font-medium leading-snug text-platinum md:text-4xl">
              Croite din bumbac Supima american și fibre de bambus, pentru o atingere care durează
              ani, nu sezoane.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-steel">
              Fiecare polo este gândit pentru confort termoreglat, respirabilitate naturală și o
              rezistență care sfidează timpul. Lux discret, în detalii.
            </p>
            <div className="mt-10">
              <Button href="/materiale" variant="outline" size="lg">
                Află mai multe
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
