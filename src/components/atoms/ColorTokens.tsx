/**
 * Atom: Color Tokens
 * Usage: A living style-guide reference (rendered on an internal /style-guide page).
 * Not used directly in end-user UI — its purpose is to document the palette defined
 * in tailwind.config.ts so every other component reuses the same tokens instead of
 * hard-coded hex values.
 */
const tokens = [
  { name: "Ocean 500 (Primary)", className: "bg-ocean-500", hex: "#1c6ea4" },
  { name: "Ocean 700", className: "bg-ocean-700", hex: "#124a70" },
  { name: "Sand 500 (Secondary)", className: "bg-sand-500", hex: "#dba64a" },
  {
    name: "Terracotta 500 (Accent/CTA)",
    className: "bg-terracotta-500",
    hex: "#c15b3c",
  },
  { name: "Ink 900 (Text)", className: "bg-ink-900", hex: "#1a2027" },
  { name: "Ink 500 (Muted text)", className: "bg-ink-500", hex: "#6b7280" },
];

export default function ColorTokens() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {tokens.map((t) => (
        <div
          key={t.hex}
          className="rounded-lg overflow-hidden border border-ink-200"
        >
          <div className={`h-16 ${t.className}`} />
          <div className="p-2 bg-white">
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-ink-500">{t.hex}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
