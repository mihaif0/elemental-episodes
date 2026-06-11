"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart/CartContext";
import { formatPrice, type Product, type Size } from "@/lib/catalog";

export function ProductDetail({
  product,
  initialColorKey,
}: {
  product: Product;
  initialColorKey?: string;
}) {
  const { addItem, openCart } = useCart();
  const [colorKey, setColorKey] = useState(
    product.colors.find((c) => c.key === initialColorKey)?.key ?? product.colors[0].key,
  );
  const color = product.colors.find((c) => c.key === colorKey) ?? product.colors[0];

  const gallery = useMemo(() => {
    const imgs = [color.images.front, color.images.back, color.images.closeup];
    return Array.from(new Set(imgs));
  }, [color]);

  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState<Size | null>(null);
  const [showGuide, setShowGuide] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const [zoom, setZoom] = useState(false);

  function selectColor(key: string) {
    setColorKey(key);
    setActiveImg(0);
  }

  function addToCart() {
    if (!size) {
      setNote("Te rugăm să alegi o mărime.");
      return;
    }
    addItem({
      slug: product.slug,
      name: product.name,
      colorKey: color.key,
      colorName: color.name,
      size,
      price: product.price,
      image: color.images.front,
    });
    setNote(null);
    openCart();
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Gallery */}
      <div className="flex flex-col-reverse gap-4 md:flex-row">
        {gallery.length > 1 && (
          <div className="flex gap-3 md:flex-col">
            {gallery.map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveImg(i)}
                aria-label={`Imaginea ${i + 1}`}
                className={`relative h-20 w-16 overflow-hidden border transition-colors ${
                  i === activeImg ? "border-fog" : "border-line hover:border-steel"
                }`}
              >
                <Image src={src} alt="" fill sizes="64px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
        <button
          onClick={() => setZoom(true)}
          aria-label="Mărește imaginea"
          className="group relative aspect-[4/5] flex-1 cursor-zoom-in overflow-hidden border border-line bg-ink-3"
        >
          <Image
            src={gallery[activeImg]}
            alt={`${product.name} — ${color.name}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[var(--ease-lux)] group-hover:scale-[1.03]"
          />
          <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center border border-line-soft bg-ink/60 text-fog opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
            <ZoomIcon className="h-4 w-4" />
          </span>
        </button>
      </div>

      {/* Info */}
      <div className="lg:py-4">
        <p className="eyebrow">{product.tagline}</p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-platinum md:text-5xl">
          {product.name}
        </h1>

        <div className="mt-5 flex items-center gap-3">
          <span className="text-2xl text-platinum">{formatPrice(product.price)}</span>
          {product.compareAt && (
            <span className="text-base text-ash line-through">
              {formatPrice(product.compareAt)}
            </span>
          )}
        </div>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-fog">{product.description}</p>

        {/* Color */}
        {product.colors.length > 1 && (
          <div className="mt-9">
            <div className="mb-3 flex items-center justify-between">
              <span className="eyebrow">Culoare</span>
              <span className="text-xs text-fog">{color.name}</span>
            </div>
            <div className="flex items-center gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.key}
                  onClick={() => selectColor(c.key)}
                  title={c.name}
                  aria-label={c.name}
                  className={`h-8 w-8 rounded-full border-2 transition-all ${
                    c.key === colorKey ? "border-fog" : "border-line hover:border-steel"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Size */}
        <div className="mt-9">
          <div className="mb-3 flex items-center justify-between">
            <span className="eyebrow">Mărime</span>
            <button
              onClick={() => setShowGuide((v) => !v)}
              className="text-xs text-steel underline-offset-4 transition-colors hover:text-platinum hover:underline"
            >
              Ghid mărimi
            </button>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSize(s);
                  setNote(null);
                }}
                className={`h-11 min-w-11 border px-4 text-sm transition-colors ${
                  s === size
                    ? "border-fog bg-platinum text-ink"
                    : "border-line text-fog hover:border-steel hover:text-platinum"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {showGuide && (
            <div className="surface mt-4 overflow-hidden">
              <div className="relative aspect-[1100/1300] w-full bg-white">
                <Image
                  src={`/size/${product.sizeChart}.webp`}
                  alt={`Ghid mărimi ${product.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-9">
          <Button onClick={addToCart} size="lg" className="w-full sm:w-auto">
            Adaugă în coș — {formatPrice(product.price)}
          </Button>
          {note && <p className="mt-3 text-xs text-fog">{note}</p>}
        </div>

        {/* Bracelet callout */}
        <div className="surface mt-6 flex items-center gap-4 p-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden border border-line">
            <Image src="/brand/bracelet.webp" alt="Brățară cadou" fill sizes="56px" className="object-cover" />
          </div>
          <p className="text-xs leading-relaxed text-fog">
            <span className="text-platinum">Brățară cadou 199 lei</span> inclusă la această comandă —
            se adaugă automat în coș.
          </p>
        </div>

        {/* Highlights */}
        <ul className="mt-9 space-y-3 border-t border-line/60 pt-8">
          {product.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm text-fog">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fog/70" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      {zoom && (
        <div
          onClick={() => setZoom(false)}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
        >
          <button
            onClick={() => setZoom(false)}
            aria-label="Închide"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-line-soft text-fog transition-colors hover:text-platinum"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
          <div className="relative h-full max-h-[85vh] w-full max-w-3xl">
            <Image
              src={gallery[activeImg]}
              alt={`${product.name} — ${color.name}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ZoomIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
