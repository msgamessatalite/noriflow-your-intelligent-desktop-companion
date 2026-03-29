import ParticleCanvas from "@/components/ParticleCanvas";
import CursorTracker from "@/components/CursorTracker";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import WorkspacesSection from "@/components/WorkspacesSection";
import ThemeShowcaseSection from "@/components/ThemeShowcaseSection";
import ComparisonSection from "@/components/ComparisonSection";
import DesktopPulseSection from "@/components/DesktopPulseSection";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleCanvas />
      <CursorTracker />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <WorkspacesSection />
      <ThemeShowcaseSection />
      <ComparisonSection />
      <DesktopPulseSection />
      <RoadmapSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
