import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageIntro({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <Container size="narrow" className="py-16 md:py-20">
      <header className="mb-10">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-metal md:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-xl text-sm leading-relaxed text-steel">{subtitle}</p>}
      </header>
      {children}
    </Container>
  );
}
