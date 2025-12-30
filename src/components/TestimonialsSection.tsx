import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      avatar: avatar1,
      name: "Sarah Johnson",
      rating: 5,
      text: "RankLocal made finding a reliable dentist so easy. The comparison features saved me hours of research!",
    },
    {
      avatar: avatar2,
      name: "Mike Thompson",
      rating: 5,
      text: "Finally a platform that gives honest reviews. Found the perfect gym near my home within minutes.",
    },
    {
      avatar: avatar3,
      name: "Emily Davis",
      rating: 5,
      text: "The AI recommendations were spot on. Highly recommend this platform for anyone looking for local services.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="section-container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-midnight">
            Loved by Clients Everywhere
          </h2>
          <div className="hidden md:flex items-center gap-2">
            <button className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-forest hover:text-white hover:border-forest transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-forest hover:text-white hover:border-forest transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-card"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-midnight/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-midnight">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">Verified User</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
