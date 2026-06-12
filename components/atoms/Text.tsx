import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type TextSize = "lg" | "md" | "sm" | "xs";
type TextColor = "primary" | "secondary" | "muted" | "accent";

interface TextProps {
  children: React.ReactNode;
  size?: TextSize;
  color?: TextColor;
  className?: string;
  as?: "p" | "span" | "div";
}

const sizeStyles: Record<TextSize, string> = {
  lg: "text-lg leading-relaxed",
  md: "text-base leading-relaxed",
  sm: "text-sm leading-relaxed",
  xs: "text-xs leading-normal",
};

const colorStyles: Record<TextColor, string> = {
  primary: "text-[var(--color-text-primary)]",
  secondary: "text-[var(--color-text-secondary)]",
  muted: "text-[var(--color-text-muted)]",
  accent: "text-[var(--color-text-accent)]",
};

export default function Text({
  children,
  size = "md",
  color = "secondary",
  className,
  as: Tag = "p",
}: TextProps) {
  return (
    <Tag
      className={twMerge(
        clsx(sizeStyles[size], colorStyles[color], className)
      )}
    >
      {children}
    </Tag>
  );
}
