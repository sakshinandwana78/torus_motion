"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Button from "@/components/atoms/Button";

export default function CTA() {
  return (
    <section id="about" className="relative py-28 bg-[var(--color-bg-secondary)] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(37,99,235,0.18)_0%,transparent_70%)] blur-[80px]" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8"
        >
          {/* Pre-headline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-bright)] text-xs font-mono uppercase tracking-widest text-[var(--color-text-accent)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-blue-light)] animate-pulse" />
            Ready to engineer together
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[0.95] tracking-tight">
            <span className="text-[var(--color-text-primary)]">Let&apos;s build something</span>{" "}
            <span className="gradient-text">extraordinary.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
            Whether you need a standard motor or a fully custom solution, our
            engineering team is ready to help you move fast and build right.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight size={17} />}
            >
              Request a Quote
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Mail size={16} />}
              iconPosition="left"
            >
              Talk to Engineering
            </Button>
          </div>

          {/* Trust strip */}
          <p className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-widest">
            ISO 9001 Certified · CE Marked · Global Shipping · 24/7 Support
          </p>
        </motion.div>
      </div>
    </section>
  );
}
