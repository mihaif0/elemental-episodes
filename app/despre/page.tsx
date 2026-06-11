import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Monogram } from "@/components/brand/Logo";

export const metadata: Metadata = {
  title: "Despre",
  description:
    "Elemental Episodes — Supreme Basics. Esențiale premium croite din materiale superioare, pentru cei care prețuiesc calitatea în detalii.",
};

const values = [
  {
    title: "Calitate, nu zgomot",
    text: "Lux discret, fără logo țipător. Calitatea vorbește prin atingere, croială și durabilitate.",
  },
  {
    title: "Materiale superioare",
    text: "Bumbac Supima și fibre de bambus, alese pentru confort și o prospețime care durează.",
  },
  {
    title: "Esențiale atemporale",
    text: "Piese pe care le porți ani de zile, nu doar un sezon. Garderoba care nu se demodează.",
  },
];

export default function DesprePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/60">
        <Container size="wide">
          <div className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="eyebrow">Despre Elemental Episodes</p>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-metal md:text-6xl">
                Esențiale pentru
                <br />
                cei care simt diferența.
              </h1>
              <p className="mt-7 max-w-md text-base leading-relaxed text-fog">
                Elemental Episodes s-a născut dintr-o convingere simplă: un basic poate fi extraordinar.
                Croim polo-uri premium din cele mai bune materiale, pentru oameni care prețuiesc
                rafinamentul discret și calitatea care durează.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-line">
              <Image
                src="/lookbook/longsleeve-trio.webp"
                alt="Elemental Episodes — editorial"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {values.map((v) => (
              <div key={v.title}>
                <div className="hairline mb-6" />
                <h2 className="text-xl font-medium text-platinum">{v.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-steel">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brand statement */}
      <section className="border-y border-line/60 bg-ink-2/50 py-24">
        <Container size="narrow" className="text-center">
          <Monogram className="mx-auto h-10 w-10 text-fog/70" />
          <p className="mt-8 text-2xl font-medium leading-snug text-platinum md:text-3xl">
            „Supreme Basics” nu e doar un tagline. E promisiunea că fiecare piesă pe care o porți
            a fost gândită până la ultimul detaliu.
          </p>
        </Container>
      </section>

      {/* Bracelet + CTA */}
      <section className="py-20">
        <Container size="wide">
          <div className="surface grid items-center gap-8 p-10 md:grid-cols-2 md:p-16">
            <div>
              <p className="eyebrow">Mulțumim că ești aici</p>
              <h2 className="mt-5 text-3xl font-medium leading-tight text-metal md:text-4xl">
                O brățară de 199 lei, din partea casei.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-fog">
                La fiecare comandă primești cadou o brățară premium — felul nostru de a-ți
                mulțumi că faci parte din poveste.
              </p>
              <div className="mt-8">
                <Button href="/colectie" size="lg">
                  Descoperă colecția
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden border border-line">
              <Image
                src="/brand/bracelet-offer-2.webp"
                alt="Brățară cadou Elemental Episodes"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
