import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Sustenabilitate",
  description:
    "Angajamentul Elemental Episodes pentru materiale sustenabile și producție responsabilă.",
};

export default function SustenabilitatePage() {
  return (
    <PageIntro
      eyebrow="Responsabilitate"
      title="Sustenabilitate"
      subtitle="Credem că lucrurile bune se fac cu grijă — față de oameni și față de planetă."
    >
      <div className="prose-ee">
        <h2>Materiale alese cu grijă</h2>
        <p>
          Folosim <strong>bumbac Supima cultivat sustenabil în SUA</strong> și{" "}
          <strong>fibre de bambus</strong>, o resursă regenerabilă cu impact redus asupra mediului.
          Ambele sunt alese pentru durabilitate — o piesă care durează ani de zile este, în sine, o
          alegere sustenabilă.
        </p>

        <h2>Calitate peste cantitate</h2>
        <p>
          Nu credem în fast-fashion. Construim esențiale atemporale, gândite să fie purtate sezon
          după sezon, nu aruncate după câteva spălări. Mai puține piese, dar mai bune.
        </p>

        <h2>Producție responsabilă</h2>
        <p>
          Lucrăm pentru a ne asigura că produsele noastre sunt realizate în condiții corecte, cu
          respect pentru oamenii implicați în fiecare etapă.
        </p>

        <h2>Un drum, nu o destinație</h2>
        <p>
          Sustenabilitatea este un proces continuu. Ne îmbunătățim constant alegerile de materiale,
          ambalaje și logistică, pas cu pas.
        </p>
      </div>
    </PageIntro>
  );
}
