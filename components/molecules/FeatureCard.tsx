"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
  accent?: boolean;
}

export default function FeatureCard({
  icon,
  title,
  description,
  index = 0,
  accent = false,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={clsx(
        "group relative p-6 rounded-2xl border transition-all duration-300",
        accent
          ? "bg-[rgba(37,99,235,0.08)] border-[rgba(96,165,250,0.25)] hover:border-[rgba(96,165,250,0.5)] hover:bg-[rgba(37,99,235,0.12)]"
          : "glass-card hover:border-[var(--color-border-bright)]"
      )}
    >
      {/* Icon */}
      <div
        className={clsx(
          "w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
          accent
            ? "bg-[rgba(37,99,235,0.2)] text-[var(--color-brand-blue-light)] group-hover:bg-[rgba(37,99,235,0.3)]"
            : "bg-[var(--color-surface-raised)] text-[var(--color-text-accent)] border border-[var(--color-border)] group-hover:border-[var(--color-brand-blue)]"
        )}
      >
        {icon}
      </div>

      <h3 className="text-base font-display font-semibold text-[var(--color-text-primary)] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
