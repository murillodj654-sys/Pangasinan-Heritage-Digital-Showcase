"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavigationItemProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}

/**
 * Molecule: Navigation Item
 * Usage: One tappable link inside the Header Navigation organism (or a bottom
 * tab bar on small screens). Combines a Link + optional Icon + active-state styling.
 *
 * Responsive logic: shows icon + label side-by-side on desktop header;
 * the Header Navigation organism stacks these into a bottom bar (icon over label) on mobile.
 */
export default function NavigationItem({
  href,
  children,
  icon,
}: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
        isActive
          ? "text-white bg-ocean-500 shadow-sm"
          : "text-ink-700 hover:text-ocean-500"
      }`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}
