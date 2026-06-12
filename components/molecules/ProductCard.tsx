"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/atoms/Badge";

interface ProductCardProps {
  name: string;
  tagline: string;
  specs: { label: string; value: string }[];
  imageSrc: string;
  badge?: string;
  index?: number;
}

export default function ProductCard({
  name,
  tagline,
  specs,
  imageSrc,
  badge,
  index = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(37,99,235,0.06)] to-transparent" />
      </div>

      {/* Image area */}
      <div className="relative h-56 bg-[var(--color-surface-raised)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-surface)] opacity-60 z-10" />
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        {badge && (
          <div className="absolute top-4 left-4 z-20">
            <Badge>{badge}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-display font-semibold text-[var(--color-text-primary)] mb-1">
            {name}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">{tagline}</p>
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-3">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="bg-[var(--color-surface)] rounded-xl px-3 py-2.5 border border-[var(--color-border)]"
            >
              <p className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-wider mb-0.5">
                {spec.label}
              </p>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-brand-blue-light)] group-hover:text-white transition-colors duration-200 pt-1">
          View Specifications
          <ArrowRight
            size={15}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </div>
      </div>
    </motion.div>
  );
}
