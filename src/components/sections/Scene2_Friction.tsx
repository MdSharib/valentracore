"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhoneMissed, EyeOff, ClipboardX, TrendingDown, Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Scene2_Friction() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
      }
    });

    // Initial message appearance
    tl.fromTo(".friction-title", 
      { opacity: 0, scale: 0.9, filter: "blur(10px)" }, 
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 }
    );

    // Fade out title
    tl.to(".friction-title", { opacity: 0, y: -50, filter: "blur(10px)", duration: 1 }, "+=0.5");

    // Each friction item appears, scales, and drops into the background
    const items = gsap.utils.toArray(".friction-item");
    items.forEach((item: any, i) => {
      tl.fromTo(item, 
        { opacity: 0, scale: 0.8, y: 100 }, 
        { opacity: 1, scale: 1, y: 0, duration: 1 },
        "-=0.7" // Overlap animations for a chaotic piling-up effect
      );
    });
    
    // Everything sinks slightly into darkness
    tl.to(".friction-item", { opacity: 0.1, scale: 0.95, y: -20, duration: 1.5, stagger: 0.1 }, "+=0.5");

    // Final realization message
    tl.fromTo(".friction-conclusion", 
        { opacity: 0, y: 50, filter: "blur(10px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5 }
      );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const frictionPoints = [
    { icon: PhoneMissed, title: "Missed Calls", desc: "Every missed call is a patient lost to a competitor.", x: "10%", y: "20%" },
    { icon: EyeOff, title: "Weak Visibility", desc: "Buried on page 3 of Google while others grow.", x: "60%", y: "15%" },
    { icon: ClipboardX, title: "Manual Follow-ups", desc: "Staff overwhelmed by repetitive Whatsapp messages.", x: "35%", y: "45%" },
    { icon: TrendingDown, title: "No Booking", desc: "Patients give up if they can't book instantly online.", x: "8%", y: "69%" },
    { icon: Clock3, title: "Reception Overload", desc: "Talent wasted on admin instead of patient experience.", x: "65%", y: "60%" },
  ];

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-background text-foreground overflow-hidden flex flex-col items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.05),transparent_60%)]" />

      <div ref={textRef} className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-6">
        <h2 className="friction-title font-display text-4xl md:text-6xl lg:text-[8rem] text-center font-medium max-w-[100rem] tracking-tight leading-[1.1]">
          The traditional clinic model is <br />
          <span className="text-red-500/90 drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">bleeding revenue.</span>
        </h2>
      </div>

      <div ref={itemsRef} className="absolute inset-0 z-20 max-w-7xl mx-auto w-full flex flex-col md:block items-center justify-center gap-4 px-4 pt-[20vh] md:pt-0">
        {frictionPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <div 
              key={index} 
              className={cn(
                "friction-item md:absolute relative w-full max-w-[280px] md:max-w-xs pointer-events-auto group cursor-pointer",
              )}
              style={{
                "--md-top": point.y,
                "--md-left": point.x,
              } as React.CSSProperties}
            >
              <style jsx>{`
                @media (min-width: 768px) {
                  .friction-item:nth-child(${index + 1}) {
                    top: var(--md-top);
                    left: var(--md-left);
                  }
                }
              `}</style>
              <div className="w-full h-full p-5 md:p-8 rounded-3xl bg-surface-highlight/80 border border-surface-border backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-accent-teal group-hover:shadow-[0_20px_40px_rgba(20,184,166,0.3)] relative">
                
                {/* Smooth Fill Animation */}
                <div className="absolute inset-0 bg-accent-teal translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
                
                <div className="relative z-10 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl bg-red-500/10 flex items-center justify-center md:mb-6 border border-red-500/20 group-hover:bg-white/20 group-hover:border-white/30 transition-colors duration-500">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-red-500 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-xl font-medium mb-1 md:mb-3 group-hover:text-white transition-colors duration-500">{point.title}</h3>
                    <p className="text-primary-dim text-xs md:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500">{point.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 px-6">
        <h2 className="friction-conclusion opacity-0 font-display text-4xl md:text-6xl lg:text-[8rem] text-center font-medium max-w-[100rem] tracking-tight leading-[1.1] text-foreground">
          It&apos;s time to install a <br/> <span className="text-accent-teal drop-shadow-[0_0_30px_rgba(20,184,166,0.3)]">modern operating layer.</span>
        </h2>
      </div>
    </section>
  );
}
