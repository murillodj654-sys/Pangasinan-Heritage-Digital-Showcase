import { notFound } from "next/navigation";
import Image from "@/components/atoms/Image";
import Typography from "@/components/atoms/Typography";
import { heritageSites } from "@/data/heritage-sites";

// Required for static export (output: 'export') — pre-renders one page per site at build time.
export function generateStaticParams() {
  return heritageSites.map((site) => ({ slug: site.slug }));
}

// Detail Screen: shows full information about the selected heritage site.
export default function SiteDetailPage({ params }: { params: { slug: string } }) {
  const site = heritageSites.find((s) => s.slug === params.slug);
  if (!site) return notFound();

  return (
    <div className="max-w-content mx-auto px-4 py-8">
      <Image src={site.image} alt={`Photo of ${site.name}, ${site.location}`} ratio="video" className="rounded-xl mb-6" />
      <Typography variant="label">{site.category}</Typography>
      <Typography variant="h1" className="!text-3xl mt-1 mb-2">
        {site.name}
      </Typography>
      <Typography variant="caption" className="mb-4 block">
        {site.location}
      </Typography>
      <Typography variant="body">{site.description}</Typography>
      {site.contact && (
        <Typography variant="caption" className="mt-4 block">
          Contact: {site.contact}
        </Typography>
      )}
    </div>
  );
}
