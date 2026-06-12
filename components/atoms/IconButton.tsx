"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  label: string;
  className?: string;
  active?: boolean;
}

export default function IconButton({
  icon,
  onClick,
  label,
  className,
  active,
}: IconButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={label}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={twMerge(
        clsx(
          "relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200",
          "border border-[var(--color-border)] hover:border-[var(--color-border-bright)]",
          active
            ? "bg-[rgba(37,99,235,0.15)] text-[var(--color-brand-blue-light)]"
            : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
          className
        )
      )}
    >
      {icon}
    </motion.button>
  );
}
