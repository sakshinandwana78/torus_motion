"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatCardProps {
  value: string;
  suffix?: string;
  label: string;
  description?: string;
  index?: number;
}

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

export default function StatCard({
  value,
  suffix = "",
  label,
  description,
  index = 0,
}: StatCardProps) {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isNumeric = !isNaN(numericValue);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(numericValue, 1800, inView && isNumeric);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const displayValue = isNumeric ? `${count}${suffix}` : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-5xl lg:text-6xl font-display font-bold gradient-text mb-2 tabular-nums">
        {displayValue}
      </div>
      <div className="text-sm font-medium text-[var(--color-text-primary)] mb-1">{label}</div>
      {description && (
        <div className="text-xs text-[var(--color-text-muted)]">{description}</div>
      )}
    </motion.div>
  );
}
