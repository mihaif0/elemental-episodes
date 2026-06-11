import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MaterialBenefits } from "@/components/shop/MaterialBenefits";
import { getMaterialStory } from "@/lib/benefits";

export const metadata: Metadata = {
  title: "Materiale",
  description:
    "Povestea materialelor Elemental Episodes — bumbac Supima și fibre de bambus, alese pentru confort, durabilitate și un lux discret.",
};

const sections = [
  { material: "supima" as const, image: "/products/basics/green-closeup.webp" },
  { material: "bamboo" as const, image: "/products/zipper/navyblue-closeup.webp" },
];

export default function MaterialePage() {
  return (
    <>
      <section className="border-b border-line/60 py-20 md:py-28">
        <Container size="narrow" className="text-center">
          <p className="eyebrow">Materialul contează</p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-metal md:text-6xl">
            Lux discret, în fiecare fibră.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-steel">
            Nu credem în compromisuri. Fiecare polo este croit din materiale alese pentru
            atingere, durabilitate și respect față de mediu — calitatea pe care o simți din prima
            secundă și o prețuiești ani de zile.
          </p>
        </Container>
      </section>

      {sections.map(({ material, image }, i) => {
        const story = getMaterialStory(material);
        return (
          <section key={material} className="py-20 md:py-28">
            <Container size="wide">
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-line">
                  <Image
                    src={image}
                    alt={story.label}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <MaterialBenefits material={material} />
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="border-t border-line/60 py-20">
        <Container size="narrow" className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-platinum md:text-4xl">
            Simte diferența
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-steel">
            Descoperă colecția și alege esențialul care te reprezintă.
          </p>
          <div className="mt-9">
            <Button href="/colectie" size="lg">
              Vezi colecția
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
