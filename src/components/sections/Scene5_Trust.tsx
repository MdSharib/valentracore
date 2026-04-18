"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  { name: "Dr. Alistair Webb", clinic: "Harley St. Aesthetics", text: "We abandoned 3 different software tools the day we switched to ValentraCore. The Whatsapp integration alone recovered $14k in missed appointments in month one.", delay: 0 },
  { name: "Sarah Jenkins, Manager", clinic: "Lumina Dental", text: "It feels like Apple designed a medical platform. Our patients constantly comment on how easy it is to book, and we've completely eliminated the morning front-desk chaos.", delay: 0.1 },
  { name: "Dr. Chen", clinic: "Precision Ortho", text: "The SEO and automated review generation is terrifyingly effective. We gained 140 genuine 5-star Google reviews in 6 months without asking a single patient manually.", delay: 0.2 },
  { name: "Elena Rostova", clinic: "Rostova Skin Clinic", text: "Finally, software that matches the luxury experience we deliver in person. The interface is stunning and the automated reminders are flawless.", delay: 0.3 },
];

export default function Scene5_Trust() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(".trust-header", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    const cards = gsap.utils.toArray(".review-card");
    cards.forEach((card: any, i) => {
      tl.fromTo(card, 
        { opacity: 0, scale: 0.95, y: 30 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power2.out" },
        i * 0.15 + 0.5
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-background py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(250,204,21,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="trust-header flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface mb-6">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Elite Operator Verification</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Trusted by the top 1%.
          </h2>
          <p className="text-primary-dim text-lg max-w-2xl">
            Premium clinics don&apos;t compromise on patient experience. Neither do we. Here&apos;s what the highest-performing medical practices say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="review-card p-8 rounded-3xl bg-surface border border-surface-border hover:border-surface-highlight transition-colors duration-500 shadow-glass flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground mb-8 flex-1">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-highlight flex items-center justify-center font-display font-medium text-lg border border-surface-border">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{review.name}</h4>
                  <p className="text-sm text-primary-dim">{review.clinic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
