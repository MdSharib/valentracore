"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, MessageCircle, CalendarClock, TrendingUp, Sparkles, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "website",
    title: "Premium Digital Presence",
    headline: "Your clinic, translated to world-class code.",
    desc: "Patients judge your medical expertise by your digital footprint. We build lightning-fast, high-converting platforms that immediately establish absolute trust and authority in your local market.",
    metrics: ["Sub-second load times", "Awwwards-level aesthetics", "Conversion-optimized architecture"],
    Icon: Sparkles,
    bg: "bg-surface",
    accent: "text-foreground"
  },
  {
    id: "whatsapp",
    title: "WhatsApp Automation",
    headline: "Zero manual follow-ups. Zero ghosted patients.",
    desc: "A living communication experience mapped directly into WhatsApp. Pre-consultation questions, location drops, and follow-ups happen exactly when they should, automatically.",
    metrics: ["Automated sequence timing", "Smart confirmations", "Review request chaining"],
    Icon: MessageCircle,
    bg: "bg-background",
    accent: "text-accent-teal"
  },
  {
    id: "booking",
    title: "Frictionless Booking",
    headline: "Fill your calendar while you sleep.",
    desc: "We replace clunky third-party portals with a smooth, native booking engine. Embedded seamlessly into your brand, reducing drop-off by up to 60%.",
    metrics: ["Integrated time slots", "Success state confirmation", "Immediate calendar sync"],
    Icon: CalendarClock,
    bg: "bg-surface",
    accent: "text-accent-blue"
  },
  {
    id: "growth",
    title: "Review Growth Engine",
    headline: "Dominate local search organically.",
    desc: "Stop begging for reviews. The system automatically identifies satisfied patients post-treatment and routes them to Google, instantly compounding your local SEO dominance.",
    metrics: ["Automated request timing", "Negative feedback interception", "Continuous rating growth"],
    Icon: TrendingUp,
    bg: "bg-background",
    accent: "text-accent-cyan"
  }
];

export default function Scene4_FeatureWorlds() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray(".feature-panel");
    
    // Create a timeline that pins the container and slides panels up over each other
    gsap.to(panels, {
      yPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        // Base the end position on how many panels there are
        end: () => "+=" + (containerRef.current?.offsetWidth || 0) * panels.length,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-background overflow-hidden flex flex-col">
      {features.map((feature, i) => {
        const Icon = feature.Icon;
        return (
          <div 
            key={feature.id} 
            className={cn(
              "feature-panel absolute inset-0 w-full h-full flex flex-col md:flex-row items-center",
              feature.bg
            )}
            style={{ top: `${i * 100}%` }}
          >
            {/* Context/Copy Side */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center">
                  <Icon className={cn("w-5 h-5", feature.accent)} />
                </div>
                <span className="font-semibold uppercase tracking-wider text-xs text-primary-dim">{feature.title}</span>
              </div>
              <h2 className="font-display text-4xl lg:text-6xl font-medium tracking-tight mb-6 leading-[1.1]">
                {feature.headline}
              </h2>
              <p className="text-lg text-primary-dim font-light leading-relaxed mb-10 max-w-lg">
                {feature.desc}
              </p>
              
              <ul className="flex flex-col gap-4">
                {feature.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className={cn("w-5 h-5", feature.accent)} />
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual/UI Side */}
            <div className="w-full md:w-1/2 h-full relative overflow-hidden flex items-center justify-center px-8">
               <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/50 z-10 hidden md:block" />
               {/* Decorative Abstract UI Container */}
               <div className="relative w-full max-w-md aspect-[4/5] bg-surface border border-surface-border rounded-[2rem] shadow-2xl overflow-hidden flex flex-col">
                 <div className="h-12 border-b border-surface-border flex items-center px-6 gap-2 bg-surface-highlight">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                 </div>
                 <div className="flex-1 p-6 flex flex-col items-center justify-center gap-6 relative">
                    {/* Subtle glow behind UI mockup */}
                    <div className={cn("absolute inset-0 opacity-10 blur-3xl", feature.accent.replace('text', 'bg'))} />
                    
                    <div className="w-full h-16 bg-background rounded-xl border border-surface-border shadow-glass transform -rotate-2" />
                    <div className="w-[90%] h-24 bg-background rounded-xl border border-surface-border shadow-glass transform rotate-1" />
                    <div className="w-full h-16 bg-background rounded-xl border border-surface-border shadow-glass" />
                 </div>
               </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
