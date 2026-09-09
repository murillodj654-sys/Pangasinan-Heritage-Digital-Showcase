"use client";

import HeritageCard from "@/components/molecules/HeritageCard";
import Typography from "@/components/atoms/Typography";
import type { HeritageSite } from "@/data/heritage-sites";

interface HeritageGridProps {
  sites: HeritageSite[];
  favoriteSlugs?: string[];
  onToggleFavorite?: (slug: string) => void;
  emptyMessage?: string;
}

/**
 * Organism: Heritage Grid
 * Usage: The primary content area of the Home Screen and the Search results
 * and the Favorites Screen — anywhere a *collection* of Heritage Cards is shown.
 * Owns the responsive column count so individual cards stay simple/reusable.
 *
 * Responsive logic:
 *  - Mobile (<640px): 1 column, cards stacked full-width.
 *  - Tablet (640–1024px): 2 columns.
 *  - Desktop (>1024px): 3 columns, capped at max-w-content (1200px) container.
 */
export default function HeritageGrid({
  sites,
  favoriteSlugs = [],
  onToggleFavorite,
  emptyMessage,
}: HeritageGridProps) {
  if (sites.length === 0) {
    return (
      <div className="text-center py-16">
        <Typography variant="body">
          {emptyMessage || "No heritage sites found."}
        </Typography>
      </div>
    );
  }

  return (
    <div
      role="list"
      aria-label="Heritage sites"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-content mx-auto"
    >
      {sites.map((site) => (
        <div role="listitem" key={site.slug}>
          <HeritageCard
            site={site}
            isFavorite={favoriteSlugs.includes(site.slug)}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </div>
  );
}
