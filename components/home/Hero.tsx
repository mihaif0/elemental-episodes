"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, type Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export function Hero() {
  const mx = useMotionValue(50);
  const my = useMotionValue(18);
  const spotlight = useMotionTemplate`radial-gradient(620px circle at ${mx}% ${my}%, rgba(130,140,160,0.18), transparent 62%)`;

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }

  return (
    <section onMouseMove={handleMove} className="relative overflow-hidden">
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0"
      />
      <Container size="wide">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24"
        >
          <div className="order-1 md:order-1">
            <motion.p variants={item} className="eyebrow">
              Elemental Episodes — Supreme Basics
            </motion.p>
            <motion.h1
              variants={item}
              className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-tight text-metal sm:text-6xl md:text-8xl"
            >
              Esența
              <br />
              <span className="italic">rafinamentului.</span>
            </motion.h1>
            <motion.p variants={item} className="mt-7 max-w-md text-base leading-relaxed text-fog">
              Polo-uri premium croite din materiale superioare — Supima, bambus și fibre tehnice.
              Eleganță atemporală, fără logo țipător.
            </motion.p>
            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Button href="/colectie" size="lg">
                  Descoperă colecția
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="/materiale" variant="outline" size="lg">
                  Povestea materialelor
                </Button>
              </Magnetic>
            </motion.div>
            <motion.p
              variants={item}
              className="mt-8 text-[0.7rem] uppercase tracking-[0.28em] text-steel"
            >
              <span className="text-platinum">Brățară cadou 199 lei</span> la fiecare comandă
            </motion.p>
          </div>

          <motion.div variants={item} className="order-2 md:order-2">
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
              className="relative mx-auto aspect-[4/5] w-2/3 overflow-hidden border border-line sm:w-1/2 md:w-full"
            >
              <Image
                src="/lookbook/navy-pedestal.webp"
                alt="Polo Elemental Episodes bleumarin, prezentat editorial"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
