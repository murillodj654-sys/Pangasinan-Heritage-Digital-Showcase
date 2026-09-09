import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-ocean-500 text-white hover:bg-ocean-700",
  secondary: "bg-sand-500 text-ink-900 hover:bg-sand-700 hover:text-white",
  outline:
    "bg-transparent border-2 border-ocean-500 text-ocean-500 hover:bg-ocean-50",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-6 py-3",
};

/**
 * Atom: Button
 * Usage: The single interactive trigger element for all actions (navigate, submit, favorite).
 * Never restyle inline — pass `variant`/`size` instead, so every button in the app stays consistent.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`rounded-full font-body font-semibold transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
