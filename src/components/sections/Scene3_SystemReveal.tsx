"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, MessageCircle, Calendar, Bell, Star, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

const nodes = [
  { id: "website", icon: Globe, label: "Premium Next.js Frontend", x: "10%", y: "40%", delay: 0 },
  { id: "whatsapp", icon: MessageCircle, label: "WhatsApp Automation", x: "30%", y: "20%", delay: 0.2 },
  { id: "booking", icon: Calendar, label: "Smart Booking Engine", x: "50%", y: "50%", delay: 0.4 },
  { id: "reminders", icon: Bell, label: "Automated Reminders", x: "70%", y: "30%", delay: 0.6 },
  { id: "reviews", icon: Star, label: "Review Growth loop", x: "90%", y: "60%", delay: 0.8 },
  { id: "insights", icon: LineChart, label: "Operational Insights", x: "50%", y: "80%", delay: 1.0 },
];

export default function Scene3_SystemReveal() {
  const containerRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "+=100%",
        scrub: 1,
      }
    });

    // Animate paths drawing in
    tl.fromTo("path.connection-line", 
      { strokeDasharray: 1000, strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 2, ease: "power1.inOut" }
    );

    // Fade in nodes organically as paths reach them
    const nodeElements = gsap.utils.toArray(".system-node");
    nodeElements.forEach((node: any, i) => {
      tl.fromTo(node,
        { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.5 },
        (i * 0.2) + 0.5 // overlap with the lines drawing
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] w-full bg-background overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#030303] to-transparent z-10" />
      
      <div className="relative z-20 text-center px-6 mb-32">
        <span className="text-accent-blue font-semibold uppercase tracking-widest text-xs mb-4 block">The System</span>
        <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-6">
          A fully synchronized <br/> digital ecosystem.
        </h2>
        <p className="text-primary-dim max-w-2xl mx-auto text-lg">
          Not a collection of disjointed plugins. ValentraCore is a single, beautiful architecture designed to turn traffic into treatments automatically.
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto h-[600px] mt-12 z-20">
        {/* Connection Lines (SVG) */}
        <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.3))' }}>
          {/* We use basic percentage approximations for paths that connect the nodes */}
          <path 
            className="connection-line" 
            d="M 10% 40% C 20% 40%, 20% 20%, 30% 20% C 40% 20%, 40% 50%, 50% 50% C 60% 50%, 60% 30%, 70% 30% C 80% 30%, 80% 60%, 90% 60%" 
            fill="none" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <path 
            className="connection-line" 
            d="M 50% 50% C 50% 65%, 50% 65%, 50% 80%" 
            fill="none" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Nodes */}
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <div 
              key={node.id}
              className="system-node absolute flex flex-col items-center gap-4"
              style={{ top: node.y, left: node.x, transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative group cursor-pointer hover:scale-110 transition-transform duration-500 ease-spring">
                <div className="absolute inset-0 bg-accent-blue/20 rounded-2xl blur-xl group-hover:bg-accent-blue/40 transition-colors duration-500" />
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-surface-highlight border border-surface-border rounded-2xl flex items-center justify-center shadow-glass group-hover:border-accent-blue/50 transition-colors">
                  <Icon className="w-8 h-8 text-foreground group-hover:text-accent-blue transition-colors" />
                </div>
              </div>
              <span className="font-medium text-sm md:text-base text-primary-dim whitespace-nowrap bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full border border-surface-border">
                {node.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
