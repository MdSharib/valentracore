"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, CalendarCheck, ActivitySquare, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const categories = [
  { id: "acquisition", label: "Patient Acquisition", icon: Users },
  { id: "booking", label: "Booking & Comms", icon: CalendarCheck },
  { id: "operations", label: "Clinic Operations", icon: ActivitySquare },
  { id: "growth", label: "Growth & Retention", icon: ArrowUpRight },
];

const featuresData: Record<string, { title: string, subtitle: string, image: string, items: string[] }> = {
  acquisition: {
    title: "Convert traffic into patients.",
    subtitle: "We don't just build websites; we engineer high-conversion local landing zones.",
    image: "/api/image?file=C:/Users/md. Sharib/.gemini/antigravity/brain/c52269ba-cbca-468e-9b3e-38cd28ef5e9a/happy_patients_acquisition_1775755694700.png",
    items: [
      "High-conversion clinic website architecture",
      "Dedicated landing pages for high-ticket treatments",
      "Frictionless lead capture forms",
      "Dynamic trust-building layouts",
      "Local SEO conversion optimization"
    ]
  },
  booking: {
    title: "Zero missed opportunities.",
    subtitle: "Capture every lead instantly with multi-channel booking and AI assistance.",
    image: "/api/image?file=C:/Users/md. Sharib/.gemini/antigravity/brain/c52269ba-cbca-468e-9b3e-38cd28ef5e9a/happy_patients_booking_1775755710190.png",
    items: [
      "Deep WhatsApp CTA integration",
      "Native online appointment booking engine",
      "AI receptionist for after-hours calls",
      "Immediate missed-call capture via SMS/WhatsApp",
      "Automated appointment reminders and intelligent confirmations"
    ]
  },
  operations: {
    title: "Command your clinic.",
    subtitle: "A unified dashboard giving doctors and staff complete operational clarity.",
    image: "/api/image?file=C:/Users/md. Sharib/.gemini/antigravity/brain/c52269ba-cbca-468e-9b3e-38cd28ef5e9a/happy_clinic_operations_1775755725365.png",
    items: [
      "Unified doctor & staff dashboard view",
      "Live appointment health overview",
      "Centralized multi-channel inquiry management",
      "Automated lead status tracking",
      "One-click follow-up scheduling"
    ]
  },
  growth: {
    title: "Compound your clinic's value.",
    subtitle: "Turn satisfied patients into a powerful, automated marketing engine.",
    image: "/api/image?file=C:/Users/md. Sharib/.gemini/antigravity/brain/c52269ba-cbca-468e-9b3e-38cd28ef5e9a/happy_clinic_growth_1775755744140.png",
    items: [
      "Automated Google review request systems",
      "Smart recall and reactivation flows",
      "Repeat patient nurturing campaigns",
      "Granular campaign conversion analytics",
      "Macro performance insights & reporting"
    ]
  }
};

export default function Section5_SolutionStack() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.matchMedia();

    ctx.add("(min-width: 1024px)", () => {
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 30px",
        end: "+=300%",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          let index = Math.floor(progress * categories.length);
          if (index >= categories.length) index = categories.length - 1;
          if (index < 0) index = 0;
          
          setActiveTab((prev) => {
            const next = categories[index].id;
            return prev !== next ? next : prev;
          });
        }
      });
      return () => st.kill();
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="py-32 w-full bg-surface border-y border-surface-border relative z-20" id="solutions">
      <div className="max-w-[100rem] mx-auto px-6">
        <div className="flex flex-col items-center text-center w-full px-6 max-w-[90rem] mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-border/50 backdrop-blur-md border border-white/10 text-foreground mb-4 md:mb-6 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span>Complete Solution</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[4rem] xl:text-[5rem] lg:leading-[1.05] font-display font-medium tracking-tight text-foreground max-w-none relative"
          >
            Everything your clinic needs to <br className="hidden xl:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-cyan xl:whitespace-nowrap">attract, convert, and manage patients.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar / Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {categories.map((category, index) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveTab(category.id);
                    // To sync scroll position on click, we could calculate the scroll target and use gsap.to(window, {scrollTo: ...})
                    // For now, it will act as a manual override until next scroll event.
                  }}
                  className={cn(
                    "relative flex items-center gap-4 px-6 py-5 rounded-2xl text-left transition-colors",
                    isActive ? "text-foreground" : "text-primary-dim hover:text-primary hover:bg-surface-highlight/50"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-surface-highlight border border-surface-border rounded-2xl"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-4">
                    <category.icon className={cn("w-5 h-5", isActive ? "text-accent-teal" : "")} />
                    <span className="font-medium text-lg">{category.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Panel */}
          <div className="w-full lg:w-2/3 relative min-h-[450px] md:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-background border border-surface-border rounded-3xl p-6 md:p-10 shadow-glass flex flex-col md:flex-row gap-8 overflow-hidden"
              >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-display text-3xl font-medium text-foreground mb-3">
                    {featuresData[activeTab].title}
                  </h3>
                  <p className="text-primary-dim text-lg mb-8 max-w-lg">
                    {featuresData[activeTab].subtitle}
                  </p>

                  <div className="flex-1 grid grid-cols-1 gap-4">
                    {featuresData[activeTab].items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-accent-teal/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                        </div>
                        <span className="text-primary font-medium text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="hidden md:block w-full md:w-[45%] relative rounded-2xl overflow-hidden shadow-2xl border border-surface-border">
                   <img 
                      src={featuresData[activeTab].image} 
                      alt={featuresData[activeTab].title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
