import { ElementType, ReactNode } from "react";

type Variant = "h1" | "h2" | "h3" | "body" | "caption" | "label";

interface TypographyProps {
  as?: ElementType;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  h1: "font-heading text-3xl md:text-5xl font-bold text-ink-900 leading-tight",
  h2: "font-heading text-2xl md:text-3xl font-bold text-ink-900 leading-snug",
  h3: "font-heading text-xl md:text-2xl font-semibold text-ink-900",
  body: "font-body text-base text-ink-700 leading-relaxed",
  caption: "font-body text-sm text-ink-500",
  label:
    "font-body text-xs font-semibold uppercase tracking-wide text-ocean-700",
};

const defaultTag: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  caption: "span",
  label: "span",
};

/**
 * Atom: Typography
 * Usage: The only place font-size/weight/color decisions for text live.
 * Pick a `variant` for semantic meaning; `as` lets you override the rendered tag
 * (e.g. variant="h1" as="h2" keeps H1 styling for a page's secondary heading, for correct heading order).
 */
export default function Typography({
  as,
  variant = "body",
  children,
  className = "",
}: TypographyProps) {
  const Tag = as || defaultTag[variant];
  return (
    <Tag className={`${variantStyles[variant]} ${className}`}>{children}</Tag>
  );
}
