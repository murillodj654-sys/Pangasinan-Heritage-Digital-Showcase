"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import NavigationItem from "@/components/molecules/NavigationItem";
import Icon from "@/components/atoms/Icon";

const links = [
  { href: "/", label: "Home" },
  { href: "/favorites", label: "Favorites" },
  { href: "/about", label: "About" },
];

/**
 * Organism: Header Navigation
 * Usage: Appears once per page, at the very top, on every screen of the app.
 * Casual redesign: a rounded, colorful logo badge instead of plain text,
 * a soft shadow/pill nav bar, and a friendly sans-serif wordmark.
 *
 * Responsive logic:
 *  - Mobile (<768px): logo + a hamburger Icon button that toggles a collapsible
 *    stacked menu.
 *  - Desktop (>=768px): logo + Navigation Items shown inline, hamburger hidden.
 */
export default function HeaderNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-ink-200 shadow-sm">
      <div className="max-w-content mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="relative flex items-center justify-center w-11 h-11 rounded-full overflow-hidden shadow-sm ring-2 ring-sand-300 group-hover:scale-105 transition-transform">
            <NextImage
              src="/images/pangasinan-heritage-logo.jpg"
              alt="Pangasinan Heritage seal logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-heading font-bold text-lg text-ocean-700 leading-none">
            Pangasinan
            <span className="block text-sand-700 text-sm font-semibold tracking-wide">
              HERITAGE
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-1 bg-sand-50 rounded-full px-2 py-1"
        >
          {links.map((l) => (
            <NavigationItem key={l.href} href={l.href}>
              {l.label}
            </NavigationItem>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-ink-700 rounded-full hover:bg-sand-50"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="md:hidden flex flex-col px-4 pb-3 gap-1"
        >
          {links.map((l) => (
            <NavigationItem key={l.href} href={l.href}>
              {l.label}
            </NavigationItem>
          ))}
        </nav>
      )}
    </header>
  );
}
