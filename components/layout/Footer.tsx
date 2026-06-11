import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";

const columns = [
  {
    title: "Magazin",
    links: [
      { label: "Polo Basics", href: "/colectie/basics" },
      { label: "Polo Zipper", href: "/colectie/zipper" },
      { label: "Pachete", href: "/colectie/pachete" },
      { label: "Ghid mărimi", href: "/ghid-marimi" },
    ],
  },
  {
    title: "Brand",
    links: [
      { label: "Despre noi", href: "/despre" },
      { label: "Materiale", href: "/materiale" },
      { label: "Sustenabilitate", href: "/sustenabilitate" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Suport",
    links: [
      { label: "Livrare", href: "/livrare" },
      { label: "Retur", href: "/retur" },
      { label: "Întrebări frecvente", href: "/faq" },
      { label: "Termeni & confidențialitate", href: "/termeni" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-line/60 bg-ink-2">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Logo monogramClassName="h-9 w-9 text-platinum" />
            <p className="mt-5 text-sm leading-relaxed text-steel">
              Esențiale premium, croite din materiale superioare. Calitate de lux, fără
              compromisuri.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-fog transition-colors hover:text-platinum"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline" />

        <div className="flex flex-col items-center justify-between gap-3 py-8 text-xs text-ash md:flex-row">
          <p>© {new Date().getFullYear()} Elemental Episodes. Toate drepturile rezervate.</p>
          <p className="uppercase tracking-[0.3em]">Supreme Basics</p>
        </div>
      </Container>
    </footer>
  );
}
