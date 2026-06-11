import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Termeni & Confidențialitate",
  description:
    "Termenii și condițiile de utilizare, politica de confidențialitate și politica de cookie-uri Elemental Episodes.",
};

export default function TermeniPage() {
  return (
    <PageIntro
      eyebrow="Informații legale"
      title="Termeni & Confidențialitate"
      subtitle="Ultima actualizare: 10 iunie 2026"
    >
      <div className="prose-ee">
        <p>
          Bine ai venit pe Elemental Episodes. Prin accesarea și utilizarea acestui site, ești de
          acord cu termenii de mai jos. Te rugăm să îi citești cu atenție.
        </p>

        <h2>1. Despre noi</h2>
        <p>
          Acest magazin este operat de <strong>[Denumire companie SRL]</strong>, cu sediul în
          <strong> [adresă]</strong>, CUI <strong>[CUI]</strong>, înregistrată la Registrul
          Comerțului sub nr. <strong>[J../..../....]</strong>. Pentru orice solicitare ne poți
          contacta la <a href="mailto:contact@elementalepisodes.com">contact@elementalepisodes.com</a>.
        </p>

        <h2>2. Produse și prețuri</h2>
        <p>
          Prețurile sunt afișate în lei (RON) și includ TVA, acolo unde este aplicabil. Ne rezervăm
          dreptul de a modifica prețurile și disponibilitatea produselor fără notificare prealabilă.
          Imaginile au caracter ilustrativ; pot exista mici diferențe de nuanță în funcție de ecran.
        </p>

        <h2>3. Comenzi și plată</h2>
        <p>
          Comenzile se plasează prin parcurgerea procesului de checkout. Plata se procesează securizat
          prin Stripe. Confirmarea comenzii se trimite pe e-mail. La fiecare comandă primești cadou o
          brățară premium în valoare de 199 lei, adăugată automat.
        </p>

        <h2>4. Livrare și retur</h2>
        <p>
          Detaliile de livrare sunt descrise în pagina <a href="/livrare">Livrare</a>. Ai dreptul de a
          returna produsele conform politicii din pagina <a href="/retur">Retur</a>, în termen de 14
          zile, conform legislației privind protecția consumatorului.
        </p>

        <h2>5. Confidențialitate (GDPR)</h2>
        <p>
          Prelucrăm datele tale personale (nume, adresă, e-mail, telefon) exclusiv pentru procesarea
          comenzilor, livrare și comunicări legate de comandă. Nu vindem datele tale către terți.
          Procesatorii cu care lucrăm (ex. Stripe pentru plăți, curierul pentru livrare) respectă
          standardele GDPR.
        </p>
        <p>
          Ai dreptul de acces, rectificare, ștergere și portabilitate a datelor. Pentru exercitarea
          acestor drepturi, scrie-ne la{" "}
          <a href="mailto:contact@elementalepisodes.com">contact@elementalepisodes.com</a>.
        </p>

        <h2>6. Cookie-uri</h2>
        <p>
          Folosim cookie-uri strict necesare pentru funcționarea site-ului (ex. coșul de cumpărături)
          și, eventual, cookie-uri de analiză anonimizată pentru a îmbunătăți experiența. Poți
          gestiona preferințele din setările browserului.
        </p>

        <h2>7. Modificări</h2>
        <p>
          Ne rezervăm dreptul de a actualiza acești termeni. Versiunea curentă este întotdeauna
          disponibilă pe această pagină.
        </p>
      </div>
    </PageIntro>
  );
}
