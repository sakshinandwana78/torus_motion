"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

export default function NavItem({ label, href, active, onClick }: NavItemProps) {
  return (
    <Link href={href} onClick={onClick} className="relative group">
      <span
        className={`text-sm font-medium transition-colors duration-200 ${
          active
            ? "text-[var(--color-text-primary)]"
            : "text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]"
        }`}
      >
        {label}
      </span>
      <motion.span
        className="absolute -bottom-0.5 left-0 h-px bg-[var(--color-brand-blue)] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: active ? "100%" : 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
}
