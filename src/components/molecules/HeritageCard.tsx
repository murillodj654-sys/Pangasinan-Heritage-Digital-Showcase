"use client";

import Link from "next/link";
import Image from "@/components/atoms/Image";
import Typography from "@/components/atoms/Typography";
import Icon from "@/components/atoms/Icon";
import type { HeritageSite } from "@/data/heritage-sites";

interface HeritageCardProps {
  site: HeritageSite;
  isFavorite?: boolean;
  onToggleFavorite?: (slug: string) => void;
}

/**
 * Molecule: Heritage Card
 * Usage: The single, exclusive way a heritage site preview is displayed —
 * inside the Heritage Grid organism on the Home Screen, the Search results,
 * and the Favorites Screen. Combines Image + Typography + Icon + Button-like tap target.
 *
 * This component is fully controlled: it has no favorite state of its own.
 * `isFavorite` (read from the global FavoritesContext by the parent) decides
 * the heart icon, and `onToggleFavorite` is called on click — that's what
 * lets the Home Screen's heart button and the Favorites Screen agree on the
 * same list instead of drifting out of sync.
 *
 * Responsive logic: the card itself is fluid width (w-full); the number of
 * columns is controlled by the parent Heritage Grid, not by the card.
 */
export default function HeritageCard({
  site,
  isFavorite = false,
  onToggleFavorite,
}: HeritageCardProps) {
  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    onToggleFavorite?.(site.slug);
  };

  return (
    <Link
      href={`/sites/${site.slug}`}
      className="group block w-full rounded-2xl overflow-hidden bg-white border border-ink-200 shadow-sm hover:shadow-md transition-shadow focus-visible:ring-2 focus-visible:ring-ocean-500"
    >
      <div className="relative">
        <Image
          src={site.image}
          alt={`Photo of ${site.name}, ${site.location}`}
          ratio="video"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleFavorite}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Remove ${site.name} from favorites`
              : `Add ${site.name} to favorites`
          }
          className="absolute top-2 right-2 bg-white/90 rounded-full p-2 text-terracotta-500 hover:bg-white"
        >
          <Icon name={isFavorite ? "heart-filled" : "heart"} size={18} />
        </button>
        <span className="absolute bottom-2 left-2 bg-ocean-700/90 text-white text-xs font-semibold px-2 py-1 rounded">
          {site.category}
        </span>
      </div>
      <div className="p-4">
        <Typography variant="h3" className="!text-lg mb-1">
          {site.name}
        </Typography>
        <div className="flex items-center gap-1 text-ink-500 text-sm mb-2">
          <Icon name="location" size={14} aria-hidden="true" />
          <span>{site.location}</span>
        </div>
        <Typography variant="caption" className="line-clamp-2">
          {site.shortDescription}
        </Typography>
      </div>
    </Link>
  );
}
