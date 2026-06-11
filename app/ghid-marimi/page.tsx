import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Ghid mărimi",
  description:
    "Ghidul de mărimi Elemental Episodes — dimensiuni exacte în centimetri pentru Polo Basic și Polo Zipper.",
};

const charts = [
  { title: "Polo Basic", src: "/size/basics.webp" },
  { title: "Polo Zipper", src: "/size/zipper.webp" },
];

export default function GhidMarimiPage() {
  return (
    <PageIntro
      eyebrow="Alege corect"
      title="Ghid de mărimi"
      subtitle="Pentru o persoană de 1.80 m și 80 kg, mărimea M oferă un fit sculptat, iar L un fit relaxat. Toate dimensiunile sunt în centimetri."
    >
      <div className="grid gap-10 md:grid-cols-2">
        {charts.map((c) => (
          <figure key={c.title}>
            <div className="surface relative aspect-[1100/1300] overflow-hidden bg-white">
              <Image
                src={c.src}
                alt={`Ghid mărimi ${c.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-fog">{c.title}</figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-10 text-sm leading-relaxed text-steel">
        Nu ești sigur de mărime? Scrie-ne la{" "}
        <a className="text-platinum underline underline-offset-4" href="mailto:contact@elementalepisodes.com">
          contact@elementalepisodes.com
        </a>{" "}
        și te ajutăm să alegi. Schimbul de mărime este simplu — vezi pagina{" "}
        <a className="text-platinum underline underline-offset-4" href="/retur">Retur</a>.
      </p>
    </PageIntro>
  );
}
