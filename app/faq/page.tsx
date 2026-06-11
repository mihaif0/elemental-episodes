import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Întrebări frecvente",
  description: "Răspunsuri la cele mai frecvente întrebări despre produse, livrare, retur și ofertă.",
};

const faqs = [
  {
    q: "Ce mărime ar trebui să aleg?",
    a: "Pentru o persoană de 1.80 m și 80 kg, mărimea M oferă un fit sculptat, iar L un fit relaxat. Consultă Ghidul de mărimi pentru dimensiuni exacte în centimetri.",
  },
  {
    q: "Brățara cadou e cu adevărat gratuită?",
    a: "Da. La fiecare comandă primești cadou o brățară premium în valoare de 199 lei, adăugată automat în coș. Fără cod, fără cost ascuns.",
  },
  {
    q: "Cât durează livrarea?",
    a: "Procesăm comanda în 1–2 zile lucrătoare, iar livrarea prin curier durează 2–4 zile lucrătoare. Livrarea este gratuită.",
  },
  {
    q: "Pot returna un produs?",
    a: "Da, ai 14 zile pentru retur, conform legislației. Produsele trebuie să fie nepurtate, cu etichetele intacte. Vezi pagina Retur pentru detalii.",
  },
  {
    q: "Din ce sunt făcute polo-urile?",
    a: "Polo Basic este croit din bumbac Supima 100%, iar Polo Zipper din fibre de bambus termoreglatoare. Ambele sunt alese pentru confort și durabilitate.",
  },
  {
    q: "Cum am grijă de produse?",
    a: "Recomandăm spălare la 30°C, pe dos, cu culori similare. Evită înălbitorul și uscarea agresivă. Materialele noastre își păstrează forma și prospețimea timp îndelungat.",
  },
];

export default function FaqPage() {
  return (
    <PageIntro eyebrow="Suport" title="Întrebări frecvente">
      <div className="divide-y divide-line/60 border-y border-line/60">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm text-platinum">
              {f.q}
              <span className="text-steel transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-steel">{f.a}</p>
          </details>
        ))}
      </div>
    </PageIntro>
  );
}
