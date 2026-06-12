import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";
type HeadingSize = "xl" | "lg" | "md" | "sm";

interface HeadingProps {
  children: React.ReactNode;
  level?: HeadingLevel;
  size?: HeadingSize;
  gradient?: boolean;
  className?: string;
}

const sizeStyles: Record<HeadingSize, string> = {
  xl: "text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-800 leading-[0.9] tracking-tight",
  lg: "text-3xl sm:text-4xl lg:text-5xl font-display font-700 leading-[1.05] tracking-tight",
  md: "text-2xl sm:text-3xl lg:text-4xl font-display font-700 leading-[1.1] tracking-tight",
  sm: "text-xl sm:text-2xl font-display font-600 leading-snug",
};

export default function Heading({
  children,
  level = "h2",
  size = "lg",
  gradient = false,
  className,
}: HeadingProps) {
  const Tag = level;

  return (
    <Tag
      className={twMerge(
        clsx(
          sizeStyles[size],
          gradient
            ? "gradient-text"
            : "text-[var(--color-text-primary)]",
          className
        )
      )}
    >
      {children}
    </Tag>
  );
}
