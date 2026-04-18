"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter Layer",
    price: "$299",
    period: "/mo",
    desc: "Essential digital infrastructure for independent clinics.",
    features: [
      "Premium Next.js Website",
      "Basic SEO Optimization",
      "Standard Booking Integration",
      "Email Support"
    ],
    highlight: false,
  },
  {
    name: "Growth Engine",
    price: "$599",
    period: "/mo",
    desc: "The complete automated operating layer for scaling clinics.",
    features: [
      "Everything in Starter, plus:",
      "WhatsApp Automation Flow",
      "Review Growth System",
      "Advanced Booking & Reminders",
      "Priority Strategy Support"
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Multi-location architecture with AI readiness.",
    features: [
      "Everything in Growth, plus:",
      "Custom Platform Architecture",
      "AI Receptionist Module",
      "API Access & Custom Integrations",
      "Dedicated Technical Account Manager"
    ],
    highlight: false,
  }
];

export default function Scene6_Pricing() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(".pricing-header", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      tl.fromTo(card, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        i * 0.15 + 0.5
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} id="pricing" className="relative w-full bg-background py-32 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="pricing-header flex flex-col items-center text-center w-full px-6 max-w-[90rem] mx-auto mb-16 md:mb-24 relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-border/50 backdrop-blur-md border border-white/10 text-foreground mb-4 md:mb-6 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase shadow-2xl">
          <Sparkles className="w-4 h-4 text-accent-cyan" />
          <span>Surgical Precision</span>
        </div>
        
        <h2 className="text-4xl md:text-[5rem] lg:text-[5.5rem] lg:leading-[1.05] font-display font-medium tracking-tight text-foreground max-w-5xl relative">
          Simple, powerful <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-cyan">architecture.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-primary-dim font-light leading-relaxed max-w-3xl mt-8">
          No hidden fees. No complicated tiers. Just pure operational leverage tailored to your clinic&apos;s scale.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6">
          {plans.map((plan, i) => (
            <div 
              key={plan.name}
              ref={el => { cardsRef.current[i] = el; }}
              className={cn(
                "relative flex-1 flex flex-col p-8 md:p-10 rounded-3xl transition-transform duration-500",
                plan.highlight 
                  ? "bg-surface-highlight border-2 border-accent-blue shadow-[0_0_50px_rgba(59,130,246,0.15)] lg:-translate-y-4" 
                  : "bg-surface border border-surface-border hover:border-primary-dim/30 hover:-translate-y-2"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-primary mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl md:text-5xl font-display font-medium text-foreground">{plan.price}</span>
                  <span className="text-primary-dim font-medium">{plan.period}</span>
                </div>
                <p className="text-sm text-primary-dim">{plan.desc}</p>
              </div>

              <div className="flex-1">
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-accent-blue" />
                      </div>
                      <span className="text-sm text-primary leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={cn(
                "w-full py-4 rounded-xl font-medium transition-all duration-300 ease-spring active:scale-95 flex items-center justify-center gap-2 group",
                plan.highlight 
                  ? "bg-accent-blue text-white hover:bg-accent-blue/90 shadow-lg shadow-accent-blue/20" 
                  : "bg-surface text-primary border border-surface-border hover:bg-surface-border"
              )}>
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
