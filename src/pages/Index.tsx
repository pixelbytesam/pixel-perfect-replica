import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import MetricsSection from "@/components/MetricsSection";
import SearchSection from "@/components/SearchSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntelligenceSection from "@/components/IntelligenceSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import CategoriesSection from "@/components/CategoriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LogosSection />
        <MetricsSection />
        <SearchSection />
        <FeaturesSection />
        <IntelligenceSection />
        <HowItWorksSection />
        <ComparisonSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CTASection />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
