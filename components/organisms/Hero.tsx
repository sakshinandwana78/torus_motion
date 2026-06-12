"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Zap, Shield, Cpu } from "lucide-react";
import Button from "@/components/atoms/Button";
import Badge from "@/components/atoms/Badge";

const stats = [
  { icon: <Zap size={12} />, label: "98.5% Efficiency" },
  { icon: <Shield size={12} />, label: "IP67 Rated" },
  { icon: <Cpu size={12} />, label: "Smart Control" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg)]">

      {/* SUBTLE NOISE + GLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(37,99,235,0.18),transparent_60%)] blur-2xl" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-3xl px-6 flex flex-col items-center text-center">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Badge>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-blue-light)] animate-pulse" />
            Next-Gen Electric Motors
          </Badge>
        </motion.div>

        {/* HEADLINE (STRONG TYPOGRAPHY SYSTEM) */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display font-bold tracking-[-0.03em] leading-[1.05]
                     text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem]"
        >
          Power{" "}
          <span className="gradient-text">Redefined.</span>
          <br />
          Motion Perfected.
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-[0.95rem] sm:text-base text-[var(--color-text-secondary)] leading-[1.7] max-w-[520px]"
        >
          High-density axial flux motors engineered for unmatched torque,
          efficiency, and reliability powering next-generation machines.
        </motion.p>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-7 flex flex-wrap justify-center gap-2"
        >
          {stats.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                         text-[11px] font-mono bg-[var(--color-surface)]
                         border border-[var(--color-border)] text-[var(--color-text-secondary)]"
            >
              <span className="text-[var(--color-brand-blue-light)]">
                {item.icon}
              </span>
              {item.label}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-3"
        >
          <Button variant="primary" size="md" icon={<ArrowRight size={15} />}>
            Explore Motors
          </Button>
          <Button variant="secondary" size="md">
            View Specs
          </Button>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <div className="mt-12 flex items-center gap-2 text-[10px]
                        text-[var(--color-text-muted)] font-mono uppercase tracking-[0.12em]">
          <ChevronDown size={13} className="animate-bounce" />
          Scroll to explore
        </div>

      </div>
    </section>
  );
}