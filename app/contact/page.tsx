import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ia legătura cu echipa Elemental Episodes — suntem aici pentru orice întrebare.",
};

const channels = [
  {
    label: "E-mail",
    value: "contact@elementalepisodes.com",
    href: "mailto:contact@elementalepisodes.com",
  },
  {
    label: "Instagram",
    value: "@elementalepisodes",
    href: "https://instagram.com/elementalepisodes",
  },
  { label: "Program", value: "Luni–Vineri, 9:00–17:00", href: undefined },
];

export default function ContactPage() {
  return (
    <PageIntro
      eyebrow="Suntem aici"
      title="Contact"
      subtitle="Ai o întrebare despre o comandă, o mărime sau materialele noastre? Scrie-ne — răspundem rapid."
    >
      <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
        {channels.map((c) => (
          <div key={c.label} className="bg-ink-2 p-7">
            <p className="eyebrow">{c.label}</p>
            {c.href ? (
              <a
                href={c.href}
                className="mt-3 block text-sm text-platinum underline-offset-4 hover:underline"
              >
                {c.value}
              </a>
            ) : (
              <p className="mt-3 text-sm text-fog">{c.value}</p>
            )}
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm leading-relaxed text-steel">
        Pentru retururi sau schimburi, include numărul comenzii în mesaj ca să te putem ajuta cât
        mai repede. Vezi și pagina <a className="text-platinum underline underline-offset-4" href="/faq">Întrebări frecvente</a>.
      </p>
    </PageIntro>
  );
}
