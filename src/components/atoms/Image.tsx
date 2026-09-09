import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends Omit<NextImageProps, "alt"> {
  alt: string; // required, never optional — enforces WCAG 1.1.1 text alternatives
  ratio?: "square" | "video" | "portrait";
}

const ratioClass: Record<NonNullable<ImageProps["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
};

/**
 * Atom: Image
 * Usage: Wraps next/image for automatic lazy-loading and responsive `sizes`,
 * which keeps mobile data usage low (Lightning Fast requirement).
 * `alt` is mandatory at the type level so a component can never ship without one.
 */
export default function Image({
  alt,
  ratio = "video",
  className = "",
  fill = true,
  sizes,
  src,
  ...rest
}: ImageProps) {
  return (
    <div
      className={`relative overflow-hidden bg-ink-200 ${ratioClass[ratio]} ${className}`}
    >
<NextImage
  alt={alt}
  src={
  typeof src === "string"
    ? `/Pangasinan-Heritage-Digital-Showcase${src}`
    : src
}
  fill={fill}
  sizes={
    sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  }
  className="object-cover"
  loading="lazy"
  {...rest}
/>
    </div>
  );
}
