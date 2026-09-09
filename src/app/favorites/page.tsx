"use client";

import HeritageGrid from "@/components/organisms/HeritageGrid";
import PageHero from "@/components/organisms/PageHero";
import { heritageSites } from "@/data/heritage-sites";
import { useFavorites } from "@/context/FavoritesContext";

// Favorites Screen: shows heritage sites the user has saved, read from the
// same global FavoritesContext the Home Screen's heart button writes to.
export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteSites = heritageSites.filter((s) => favorites.includes(s.slug));

  return (
    <div>
      <PageHero
        compact
        kicker="Saved by You"
        title="My Favorites"
        subtitle="Heritage sites you've saved for your next Pangasinan trip."
      />
      <div className="max-w-content mx-auto px-4 py-8">
        <HeritageGrid
          sites={favoriteSites}
          favoriteSlugs={favorites}
          onToggleFavorite={toggleFavorite}
          emptyMessage="You haven't saved any heritage sites yet. Tap the heart on a site to add it here."
        />
      </div>
    </div>
  );
}
