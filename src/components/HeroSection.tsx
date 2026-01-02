import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import AnimatedWord from "@/components/AnimatedWord";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Decorative blocks */}
      <div className="absolute top-20 right-[10%] w-12 h-12 bg-forest/20 rounded-lg transform rotate-12 hidden lg:block" />
      <div className="absolute top-32 right-[15%] w-8 h-8 bg-forest rounded-lg transform -rotate-6 hidden lg:block" />
      <div className="absolute top-40 right-[8%] w-6 h-6 bg-forest/40 rounded-md hidden lg:block" />
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 mb-6 shadow-card">
            <span className="text-forest text-sm font-medium">{t.trustedByThousands}</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-midnight leading-tight mb-6">
            {t.heroHeadline1}{" "}
            <AnimatedWord />
            ,
            <br />
            {t.heroHeadline2}
          </h1>
          
          {/* Subheading */}
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.heroSubheading}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="btn-forest px-8 py-4 text-lg">
              {t.getStartedToday}
            </button>
            <button className="btn-outline px-8 py-4 text-lg">
              {t.learnMore}
            </button>
          </div>
          
          {/* Floating Avatars - Left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="relative">
              <img
                src={avatar1}
                alt="User"
                className="w-16 h-16 rounded-full border-4 border-card shadow-lg object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-forest rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Floating Avatar - Right */}
          <div className="absolute right-0 top-1/3 hidden lg:block">
            <img
              src={avatar2}
              alt="User"
              className="w-14 h-14 rounded-full border-4 border-card shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
