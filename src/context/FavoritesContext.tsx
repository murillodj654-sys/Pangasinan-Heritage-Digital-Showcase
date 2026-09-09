"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

const STORAGE_KEY = "pangasinan-heritage:favorites";

interface FavoritesContextValue {
  favorites: string[];
  isFavorite: (slug: string) => boolean;
  toggleFavorite: (slug: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined,
);

/**
 * Global Favorites store.
 *
 * Why this exists: previously each screen (Home, Favorites) kept its own local
 * `useState` for favorites, so tapping the heart on the Home Screen never
 * reached the Favorites Screen — they were two disconnected pieces of state.
 * This Provider lives once at the root layout, so every screen reads and
 * writes the *same* list. It's also persisted to localStorage so favorites
 * survive a page refresh or closing the browser.
 */
export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load saved favorites once, on mount (client-side only — localStorage
  // isn't available during static/server rendering).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setFavorites(JSON.parse(saved));
    } catch {
      // ignore malformed/unavailable storage
    }
    setHydrated(true);
  }, []);

  // Persist every change.
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // storage may be unavailable (e.g. private browsing) — fail silently
    }
  }, [favorites, hydrated]);

  const toggleFavorite = (slug: string) => {
    setFavorites((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  };

  const isFavorite = (slug: string) => favorites.includes(slug);

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error("useFavorites must be used within a FavoritesProvider");
  return ctx;
}
