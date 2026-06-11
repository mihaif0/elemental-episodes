import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Retur",
  description:
    "Politica de retur Elemental Episodes — 14 zile pentru returnarea produselor, conform legislației.",
};

export default function ReturPage() {
  return (
    <PageIntro
      eyebrow="Suport"
      title="Retur & Schimb"
      subtitle="Vrem să fii pe deplin mulțumit. Returul este simplu."
    >
      <div className="prose-ee">
        <h2>Dreptul de retur</h2>
        <p>
          Ai la dispoziție <strong>14 zile calendaristice</strong> de la primirea comenzii pentru a
          returna produsele, fără a fi nevoie să justifici decizia, conform OUG 34/2014.
        </p>

        <h2>Condiții</h2>
        <ul>
          <li>Produsele trebuie să fie nepurtate, nespălate și cu etichetele intacte</li>
          <li>În ambalajul original, în stare bună</li>
          <li>Însoțite de dovada comenzii (e-mail de confirmare sau factură)</li>
        </ul>

        <h2>Cum returnezi</h2>
        <ul>
          <li>
            Scrie-ne la{" "}
            <a href="mailto:contact@elementalepisodes.com">contact@elementalepisodes.com</a> cu
            numărul comenzii
          </li>
          <li>Îți trimitem instrucțiunile de retur și adresa</li>
          <li>După recepție și verificare, procesăm rambursarea în maximum 14 zile</li>
        </ul>

        <h2>Schimb de mărime</h2>
        <p>
          Dacă ai nevoie de altă mărime, contactează-ne și te ajutăm cu un schimb rapid, în limita
          stocului disponibil. Consultă <a href="/ghid-marimi">Ghidul de mărimi</a> pentru alegerea
          corectă.
        </p>

        <h2>Rambursare</h2>
        <p>
          Rambursarea se face prin aceeași metodă de plată folosită la comandă. Brățara cadou nu se
          returnează separat — o poți păstra.
        </p>
      </div>
    </PageIntro>
  );
}
