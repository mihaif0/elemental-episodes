import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Comandă anulată",
  robots: { index: false },
};

export default function OrderCancelledPage() {
  return (
    <Container size="narrow" className="py-28 text-center">
      <p className="eyebrow">Plată anulată</p>
      <h1 className="mt-5 text-4xl font-medium tracking-tight text-platinum md:text-5xl">
        Nicio grijă — coșul tău e încă aici.
      </h1>
      <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-steel">
        Plata a fost anulată și nu ai fost taxat. Poți relua oricând comanda de unde ai rămas.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button href="/colectie" size="lg">
          Înapoi la colecție
        </Button>
        <Button href="/" variant="outline" size="lg">
          Pagina principală
        </Button>
      </div>
    </Container>
  );
}
