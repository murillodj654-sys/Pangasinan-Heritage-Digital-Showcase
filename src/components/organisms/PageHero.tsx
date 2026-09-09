import Typography from "@/components/atoms/Typography";
import type { ReactNode } from "react";

interface PageHeroProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
  children?: ReactNode;
}

/**
 * Organism: Page Hero
 * Usage: The shared banner used at the top of every screen (Home, Favorites,
 * About) so the Pangasinan Capitol photo and heading treatment stay
 * consistent across the whole app instead of only appearing on one page.
 *
 * `compact` shrinks the vertical padding for secondary pages (Favorites,
 * About) so the capitol background reads as a page banner rather than a
 * full landing hero.
 */
export default function PageHero({
  kicker,
  title,
  subtitle,
  compact = false,
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/pangasinan-capitol.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 via-ocean-900/70 to-sand-50" />
      <div
        className={`relative max-w-content mx-auto px-4 text-center ${compact ? "py-14 md:py-16" : "py-20 md:py-28"}`}
      >
        {kicker && (
          <span className="inline-block bg-white/15 text-white text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4">
            {kicker}
          </span>
        )}
        <Typography
          variant="h1"
          className={`!text-white drop-shadow-sm ${compact ? "!text-3xl md:!text-4xl" : ""}`}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body"
            className="mt-3 max-w-2xl mx-auto !text-white/90"
          >
            {subtitle}
          </Typography>
        )}
        {children}
      </div>
    </section>
  );
}
