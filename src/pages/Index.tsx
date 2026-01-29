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
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="RankLocal - Find & Compare Trusted Local Services"
        description="Discover and compare trusted local services in your area. From hospitals to restaurants, RankLocal helps you make informed decisions with verified reviews and ratings."
        canonical="https://ranklocal.com"
        keywords="local services, compare businesses, trusted reviews, local business ratings, find services near me"
      />
      <Navbar />
      <main>
        <HeroSection />
        <ScrollAnimationWrapper>
          <LogosSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <MetricsSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <SearchSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <FeaturesSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <IntelligenceSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <HowItWorksSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <ComparisonSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <WhyChooseSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <TestimonialsSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <CTASection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <CategoriesSection />
        </ScrollAnimationWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
