import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { CartButton } from "@/components/cart/CartButton";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";

const nav = [
  { label: "Colecție", href: "/colectie" },
  { label: "Polo Basics", href: "/colectie/basics" },
  { label: "Polo Zipper", href: "/colectie/zipper" },
  { label: "Pachete", href: "/colectie/pachete" },
  { label: "Despre", href: "/despre" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar — conversion hook (rotating) */}
      <AnnouncementBar />

      {/* Main bar */}
      <div className="border-b border-line/60 bg-ink/80 backdrop-blur-xl">
        <Container>
          <div className="flex h-[72px] items-center justify-between gap-6">
            <Link href="/" aria-label="Elemental Episodes — acasă">
              <Logo monogramClassName="h-9 w-9 text-platinum" />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[0.72rem] uppercase tracking-[0.22em] text-steel transition-colors duration-300 hover:text-platinum"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-5">
              <button
                aria-label="Caută"
                className="text-steel transition-colors hover:text-platinum"
              >
                <SearchIcon className="h-[18px] w-[18px]" />
              </button>
              <CartButton />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

