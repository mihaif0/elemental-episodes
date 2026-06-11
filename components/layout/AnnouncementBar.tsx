"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const messages = [
  ["Brățară cadou 199 lei", "la fiecare comandă"],
  ["Livrare gratuită", "în toată România"],
  ["Retur simplu", "în 14 zile"],
  ["Materiale premium", "bumbac Supima & bambus"],
];

export function AnnouncementBar() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % messages.length), 3600);
    return () => clearInterval(t);
  }, []);

  const [strong, rest] = messages[i];

  return (
    <div className="border-b border-line/70 bg-ink/90 backdrop-blur">
      <div className="flex h-9 items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={i}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 text-center text-[0.64rem] uppercase tracking-[0.3em] text-fog"
          >
            <span className="text-platinum">{strong}</span>
            <span className="text-ash">·</span>
            <span>{rest}</span>
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
