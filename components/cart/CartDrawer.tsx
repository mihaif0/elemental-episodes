"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/lib/cart/CartContext";
import { formatPrice } from "@/lib/catalog";

const FREE_SHIPPING = true;

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, count } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function checkout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({ id: i.id, qty: i.qty })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Eroare la inițierea plății.");
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Ceva n-a mers. Încearcă din nou.");
      setLoading(false);
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        aria-hidden
        className={`fixed inset-0 z-[90] bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Coș de cumpărături"
        className={`fixed right-0 top-0 z-[95] flex h-full w-full max-w-md flex-col border-l border-line bg-ink-2 transition-transform duration-400 ease-[var(--ease-lux)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-line/60 px-6 py-5">
          <h2 className="text-sm uppercase tracking-[0.24em] text-platinum">
            Coș {count > 0 && <span className="text-steel">({count})</span>}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Închide coșul"
            className="text-steel transition-colors hover:text-platinum"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-sm text-steel">Coșul tău este gol.</p>
            <button
              onClick={closeCart}
              className="text-[0.72rem] uppercase tracking-[0.2em] text-platinum underline-offset-4 hover:underline"
            >
              Continuă cumpărăturile
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-line/50">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4 py-5">
                    <div className="relative h-24 w-20 shrink-0 overflow-hidden border border-line bg-ink-3">
                      <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <div>
                          <h3 className="text-sm text-platinum">{item.name}</h3>
                          <p className="mt-0.5 text-xs text-steel">
                            {item.colorName} · {item.size}
                          </p>
                        </div>
                        <p className="text-sm text-fog">{formatPrice(item.price * item.qty)}</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-line">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            aria-label="Scade cantitatea"
                            className="flex h-8 w-8 items-center justify-center text-steel hover:text-platinum"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-xs text-fog">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            aria-label="Crește cantitatea"
                            className="flex h-8 w-8 items-center justify-center text-steel hover:text-platinum"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-ash transition-colors hover:text-platinum"
                        >
                          Elimină
                        </button>
                      </div>
                    </div>
                  </li>
                ))}

                {/* Free bracelet gift */}
                <li className="flex items-center gap-4 py-5">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden border border-line bg-ink-3">
                    <Image src="/brand/bracelet.webp" alt="Brățară cadou" fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <h3 className="text-sm text-platinum">Brățară cadou</h3>
                        <p className="mt-0.5 text-xs text-steel">Adăugată automat</p>
                      </div>
                      <p className="text-sm text-fog">
                        <span className="text-ash line-through">199 lei</span>{" "}
                        <span className="text-platinum">GRATIS</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <footer className="border-t border-line/60 px-6 py-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-steel">Subtotal</span>
                <span className="text-platinum">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-ash">
                {FREE_SHIPPING ? "Livrare gratuită · " : ""}Taxe calculate la checkout.
              </p>
              {error && <p className="mt-3 text-xs text-red-300">{error}</p>}
              <button
                onClick={checkout}
                disabled={loading}
                className="mt-5 flex h-12 w-full items-center justify-center bg-platinum text-[0.72rem] font-medium uppercase tracking-[0.22em] text-ink transition-all duration-300 hover:bg-white disabled:opacity-60"
              >
                {loading ? "Se procesează…" : "Finalizează comanda"}
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
