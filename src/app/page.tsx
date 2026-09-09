"use client";

import { useMemo, useState } from "react";
import SearchForm from "@/components/molecules/SearchForm";
import HeritageGrid from "@/components/organisms/HeritageGrid";
import PageHero from "@/components/organisms/PageHero";
import { heritageSites, type HeritageCategory } from "@/data/heritage-sites";
import { useFavorites } from "@/context/FavoritesContext";

// Home Screen: lists all heritage sites + search functionality.
export default function HomePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<HeritageCategory | "All">("All");
  const { favorites, toggleFavorite } = useFavorites();

  const results = useMemo(() => {
    return heritageSites.filter((site) => {
      const matchesQuery = site.name
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory = category === "All" || site.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div>
      <PageHero
        kicker="Province of Pangasinan"
        title="Discover Pangasinan's Heritage"
        subtitle="From turquoise rivers to century-old lighthouses — explore the province's most iconic natural, historical, and religious landmarks."
      />

      <div className="max-w-content mx-auto px-4 pb-8 -mt-8 relative">
        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-md p-3">
            <SearchForm
              onSearch={(q, c) => {
                setQuery(q);
                setCategory(c);
              }}
            />
          </div>
        </section>

        <section>
          <HeritageGrid
            sites={results}
            favoriteSlugs={favorites}
            onToggleFavorite={toggleFavorite}
            emptyMessage="No heritage sites match your search."
          />
        </section>
      </div>
    </div>
  );
}
