import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Capabilities } from "@/components/home/Capabilities";
import { SpotlightBand } from "@/components/home/SpotlightBand";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <TrustBar />
      <FeaturedProjects />
      <Capabilities />
      <SpotlightBand />
      <AboutTeaser />
      <ContactSection />
    </main>
  );
}
