import Typography from "@/components/atoms/Typography";
import PageHero from "@/components/organisms/PageHero";

export default function AboutPage() {
  return (
    <div>
      <PageHero compact kicker="Our Story" title="About This Showcase" />
      <div className="max-w-content mx-auto px-4 py-8 max-w-2xl">
        <Typography variant="body">
          The Pangasinan Heritage Digital Showcase is a lightweight,
          mobile-first web platform built to promote cultural awareness and
          tourism for Pangasinan&apos;s heritage sites, using a static-site
          (JAMstack) architecture for speed and reliability on 3G/4G
          connections. It provides an accessible digital platform where users
          can discover historical landmarks, cultural traditions, and local
          heritage stories through an interactive and responsive interface.
        </Typography>
      </div>
    </div>
  );
}
