import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Livrare",
  description:
    "Informații despre livrarea comenzilor Elemental Episodes — termene, costuri și curieri.",
};

export default function LivrarePage() {
  return (
    <PageIntro
      eyebrow="Suport"
      title="Livrare"
      subtitle="Livrare gratuită la fiecare comandă. Iată ce trebuie să știi."
    >
      <div className="prose-ee">
        <h2>Costuri</h2>
        <p>
          <strong>Livrarea este gratuită</strong> pentru toate comenzile, fără sumă minimă. Prețul pe
          care îl vezi la checkout este prețul final.
        </p>

        <h2>Termene de livrare</h2>
        <ul>
          <li>Procesare comandă: 1–2 zile lucrătoare</li>
          <li>Livrare în România: 2–4 zile lucrătoare prin curier</li>
          <li>Vei primi un cod de urmărire (AWB) pe e-mail imediat ce comanda este expediată</li>
        </ul>

        <h2>Curier</h2>
        <p>
          Livrăm prin parteneri de curierat de încredere. La momentul expedierii, vei primi toate
          detaliile pentru a-ți urmări coletul în timp real.
        </p>

        <h2>Brățara cadou</h2>
        <p>
          Brățara premium de 199 lei este inclusă în fiecare colet, fără cost suplimentar și fără să fie
          nevoie de vreun cod.
        </p>

        <h2>Întrebări?</h2>
        <p>
          Pentru orice nelămurire legată de livrare, scrie-ne la{" "}
          <a href="mailto:contact@elementalepisodes.com">contact@elementalepisodes.com</a> sau
          consultă pagina <a href="/faq">Întrebări frecvente</a>.
        </p>
      </div>
    </PageIntro>
  );
}
