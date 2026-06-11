"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Monogram } from "@/components/brand/Logo";
import { useCart } from "@/lib/cart/CartContext";

export default function OrderSuccessPage() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <Container size="narrow" className="py-28 text-center">
      <Monogram className="mx-auto h-12 w-12 text-fog" />
      <p className="eyebrow mt-8">Comandă confirmată</p>
      <h1 className="mt-5 text-4xl font-medium tracking-tight text-metal md:text-5xl">
        Mulțumim pentru comandă.
      </h1>
      <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-steel">
        Am primit comanda ta și o pregătim cu grijă. Vei primi un e-mail de confirmare cu
        detaliile. Brățara cadou 199 lei este inclusă, desigur.
      </p>
      <div className="mt-10">
        <Button href="/colectie" size="lg">
          Continuă cumpărăturile
        </Button>
      </div>
    </Container>
  );
}
