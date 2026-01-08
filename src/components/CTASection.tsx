import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";

const CTASection = () => {
  return (
    <section className="py-12 xs:py-16 lg:py-24 bg-midnight relative overflow-hidden">
      {/* Decorative elements - Hidden on small screens */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative">
          <img
            src={avatar1}
            alt="User"
            className="w-16 xl:w-20 h-16 xl:h-20 rounded-full border-4 border-cloud/20 shadow-lg object-cover absolute -top-16 right-0"
          />
          <img
            src={avatar2}
            alt="User"
            className="w-14 xl:w-16 h-14 xl:h-16 rounded-full border-4 border-cloud/20 shadow-lg object-cover absolute top-8 right-12"
          />
        </div>
      </div>
      
      <div className="section-container relative">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-bold text-cloud mb-4 xs:mb-6">
            Only the Best.{" "}
            <span className="text-forest">Ranked Smart.</span>
          </h2>
          <p className="text-cloud/70 mb-6 xs:mb-8 text-sm xs:text-base lg:text-lg leading-relaxed">
            Join thousands of users who trust RankLocal to find the best local services. Start your comparison journey today.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4">
            <button className="btn-forest px-6 xs:px-8 py-3.5 xs:py-4 text-sm xs:text-base lg:text-lg min-h-[48px] w-full xs:w-auto">
              Get Started Free
            </button>
            <button className="border-2 border-cloud/30 text-cloud rounded-full px-6 xs:px-8 py-3.5 xs:py-4 font-medium hover:bg-cloud/10 transition-colors text-sm xs:text-base lg:text-lg min-h-[48px] w-full xs:w-auto">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
