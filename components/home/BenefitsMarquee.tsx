const benefits = [
  "Bumbac Supima 100%",
  "Termoreglare naturală",
  "Rezistent la șifonare",
  "Respirabil & lejer",
  "Durabilitate excepțională",
  "Fibre de bambus",
  "Eco-friendly & sustenabil",
];

export function BenefitsMarquee() {
  // Duplicate the list so the loop is seamless.
  const items = [...benefits, ...benefits];

  return (
    <section className="border-y border-line/60 bg-ink-2/60 py-5">
      <div className="marquee group">
        <div className="marquee-track">
          {items.map((b, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.22em] text-steel"
            >
              {b}
              <span className="h-1 w-1 rounded-full bg-fog/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
