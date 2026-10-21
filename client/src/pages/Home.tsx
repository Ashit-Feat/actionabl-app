/* Actionabl Landing Page — Home
   Design: Architectural Minimalism
   Sections: Hero → Marquee → Problem → Platform → Pillars → Differentiators → Capabilities → Stats → Benefits → Ecosystem → About → CTA → Footer */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ProblemSection from "@/components/ProblemSection";
import PlatformSection from "@/components/PlatformSection";
import PillarsSection from "@/components/PillarsSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import StatsSection from "@/components/StatsSection";
import BenefitsSection from "@/components/BenefitsSection";
import EcosystemSection from "@/components/EcosystemSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ProblemSection />
      <PlatformSection />
      <PillarsSection />
      <DifferentiatorsSection />
      <CapabilitiesSection />
      <StatsSection />
      <BenefitsSection />
      <EcosystemSection />
      <CTASection />
    </div>
  );
}
