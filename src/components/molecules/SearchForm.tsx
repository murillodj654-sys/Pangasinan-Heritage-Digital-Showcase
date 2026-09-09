"use client";

import { FormEvent, useState } from "react";
import Icon from "@/components/atoms/Icon";
import Button from "@/components/atoms/Button";
import { categories, type HeritageCategory } from "@/data/heritage-sites";

interface SearchFormProps {
  onSearch: (query: string, category: HeritageCategory | "All") => void;
  initialQuery?: string;
}

/**
 * Molecule: Search Form
 * Usage: Placed at the top of the Home/Search Screen. Combines a text Icon,
 * a native input, and a category filter to satisfy the "search by name or category" requirement.
 *
 * Responsive logic: stacks input + select + button vertically below 480px (mobile),
 * and lays out horizontally in a single row from the `sm` breakpoint (tablet) up.
 */
export default function SearchForm({
  onSearch,
  initialQuery = "",
}: SearchFormProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<HeritageCategory | "All">("All");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query, category);
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Search heritage sites"
      className="flex flex-col sm:flex-row gap-2 w-full"
    >
      <div className="relative flex-1">
        <Icon
          name="search"
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500"
          aria-hidden="true"
        />
        <label htmlFor="site-search" className="sr-only">
          Search heritage sites by name
        </label>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Hundred Islands, Bolinao Lighthouse..."
          className="w-full pl-10 pr-3 py-2 rounded-xl border border-ink-200 focus-visible:ring-2 focus-visible:ring-ocean-500"
        />
      </div>

      <label htmlFor="site-category" className="sr-only">
        Filter by category
      </label>
      <select
        id="site-category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as HeritageCategory | "All")
        }
        className="rounded-xl border border-ink-200 px-3 py-2 bg-white"
      >
        <option value="All">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <Button type="submit" size="md">
        Search
      </Button>
    </form>
  );
}
