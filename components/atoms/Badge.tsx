import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "blue" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase font-mono",
          variant === "default" &&
            "bg-[rgba(37,99,235,0.12)] text-[var(--color-brand-blue-light)] border border-[rgba(96,165,250,0.2)]",
          variant === "blue" &&
            "bg-[var(--color-brand-blue)] text-white",
          variant === "outline" &&
            "bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border)]",
          className
        )
      )}
    >
      {children}
    </span>
  );
}
