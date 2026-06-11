"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { formatPrice, type CatalogCard } from "@/lib/catalog";

export function ProductCard({ card }: { card: CatalogCard }) {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const rotateX = useSpring(rx, { stiffness: 150, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 18 });
  const glare = useMotionTemplate`radial-gradient(180px circle at ${gx}% ${gy}%, rgba(255,255,255,0.16), transparent 60%)`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 11);
    rx.set(-py * 11);
    gx.set((e.clientX - r.left) / r.width * 100);
    gy.set((e.clientY - r.top) / r.height * 100);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <Link href={card.href} className="group block [perspective:1000px]">
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative aspect-[4/5] overflow-hidden border border-line bg-ink-3 transition-[border-color] duration-300 group-hover:border-steel"
      >
        <Image
          src={card.image}
          alt={card.colorName ? `${card.name} — ${card.colorName}` : card.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-[opacity,transform] duration-700 ease-[var(--ease-lux)] group-hover:scale-[1.05] group-hover:opacity-0"
        />
        <Image
          src={card.hoverImage}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover opacity-0 transition-[opacity,transform] duration-700 ease-[var(--ease-lux)] group-hover:scale-[1.05] group-hover:opacity-100"
        />

        {/* Cursor-tracking sheen */}
        <motion.div
          aria-hidden
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {card.badge && (
          <span className="absolute left-3 top-3 z-10 bg-platinum/95 px-2.5 py-1 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-ink">
            {card.badge}
          </span>
        )}
      </motion.div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-base tracking-wide text-fog transition-colors group-hover:text-platinum">
            {card.name}
          </h3>
          <p className="mt-1 text-xs text-steel">{card.subtitle}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-platinum">{formatPrice(card.price)}</p>
          {card.compareAt && (
            <p className="text-xs text-ash line-through">{formatPrice(card.compareAt)}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
