"use client";

import { motion } from "framer-motion";
import Badge from "@/components/atoms/Badge";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  gradient?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  gradient = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      {badge && (
        <Badge>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-blue-light)] animate-pulse" />
          {badge}
        </Badge>
      )}
      <Heading size="lg" gradient={gradient}>
        {title}
      </Heading>
      {subtitle && (
        <Text size="lg" color="secondary" className="max-w-2xl">
          {subtitle}
        </Text>
      )}
    </motion.div>
  );
}
