import ParticleCanvas from "@/components/ParticleCanvas";
import CursorTracker from "@/components/CursorTracker";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import WorkspacesSection from "@/components/WorkspacesSection";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleCanvas />
      <CursorTracker />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <WorkspacesSection />
      <RoadmapSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
