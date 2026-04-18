"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Globe, MessageCircle, CalendarClock, Bot, Sparkles } from "lucide-react";

const offerings = [
  {
    icon: Globe,
    title: "Website Experience",
    description: "Cinematic, lightning-fast web architecture engineered exclusively to convert premium patients and dominate local search rankings.",
    color: "from-blue-500 to-cyan-400",
    gradientColor: "shadow-blue-500/20"
  },
  {
    icon: Bot,
    title: "AI Receptionist",
    description: "Never miss a lead. Our intelligent AI handles inquiries, triages urgency, and captures patient information flawlessly 24/7.",
    color: "from-purple-500 to-indigo-400",
    gradientColor: "shadow-purple-500/20"
  },
  {
    icon: CalendarClock,
    title: "Smart Scheduling",
    description: "Frictionless multi-channel booking experience that syncs perfectly with your operations to drastically eliminate no-shows.",
    color: "from-emerald-400 to-teal-500",
    gradientColor: "shadow-emerald-500/20"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description: "Engage patients directly where they live with automated reminders, logical follow-ups, and targeted CTA campaigns.",
    color: "from-green-500 to-emerald-400",
    gradientColor: "shadow-green-500/20"
  }
];



function PlanetCard({ offer, index, angle, ANGLE_STEP, ORBIT_RADIUS, SYSTEM_TILT }: { offer: any, index: number, angle: any, ANGLE_STEP: number, ORBIT_RADIUS: string, SYSTEM_TILT: number }) {
  const itemRotationOffset = index * ANGLE_STEP;
  
  // Math to keep planets facing the camera
  const counterRotationY = useTransform(angle, (a: number) => -a - itemRotationOffset);

  // Depth & Focus math based on scroll position
  const activePosition = -itemRotationOffset;
  
  const opacity = useTransform(
    angle,
    [activePosition - 180, activePosition - 90, activePosition, activePosition + 90, activePosition + 180],
    [0.02, 0.3, 1, 0.3, 0.02]
  );
  
  const scale = useTransform(
    angle,
    [activePosition - 180, activePosition - 90, activePosition, activePosition + 90, activePosition + 180],
    [0.6, 0.8, 1.15, 0.8, 0.6]
  );

  const filter = useTransform(
    angle,
    [activePosition - 180, activePosition - 90, activePosition, activePosition + 90, activePosition + 180],
    ["blur(15px)", "blur(6px)", "blur(0px)", "blur(6px)", "blur(15px)"]
  );

  const Icon = offer.icon;

  return (
    <div 
      className="absolute left-1/2 top-1/2 w-[280px] md:w-[340px] [transform-style:preserve-3d]"
      style={{
        transform: `translate(-50%, -50%) rotateY(${itemRotationOffset}deg) translateZ(calc(${ORBIT_RADIUS}))`
      }}
    >
      <motion.div
        className="relative w-full h-auto min-h-[300px] md:min-h-[340px] flex items-center justify-center pointer-events-auto"
        style={{
          rotateY: counterRotationY, // stay facing screen
          rotateX: -SYSTEM_TILT,     // stay upright
          opacity,
          scale,
          filter
        }}
      >
         <div className="relative h-full w-full bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[2.5rem] p-6 md:p-8 flex flex-col items-center text-center border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden group">
            {/* Glass edge lighting */}
            <div className={`absolute -inset-[1px] bg-gradient-to-br ${offer.color} rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700`} />
            <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} rounded-[2.5rem] opacity-[0.03]`} />
            
            {/* Inner Top highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            {/* Planet Core Icon */}
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] flex items-center justify-center mb-6 bg-gradient-to-br ${offer.color} shadow-2xl relative z-20`}>
              <div className="absolute inset-[1px] rounded-[1.5rem] bg-black/40 backdrop-blur-md" />
              <Icon className={`w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] relative z-10`} />
            </div>
            
            {/* Editorial Typography */}
            <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-3 leading-tight relative z-20 tracking-tight">
              {offer.title}
           </h3>
           <p className="text-white/60 leading-relaxed font-light text-sm md:text-base relative z-20">
              {offer.description}
           </p>
         </div>
      </motion.div>
    </div>
  );
}

export default function Section_WhatWeOffer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  
  const NUM_ITEMS = offerings.length; // 4
  const ANGLE_STEP = 360 / NUM_ITEMS; // 90
  
  // Rotate exactly enough so the last item reaches the 0 angle (front)
  // Last item index is 3. Offset = 3 * 90 = 270. Target angle = -270.
  const angle = useTransform(smoothProgress, [0, 0.85], [0, -(NUM_ITEMS - 1) * ANGLE_STEP]);

  // Cinematic tilt
  const SYSTEM_TILT = 12; // degrees
  const ORBIT_RADIUS = "min(380px, 38vw)";

  return (
    <section ref={containerRef} className="bg-[#030303] relative z-10 w-full h-auto md:h-[400vh]" id="ecosystem">
      <div className="md:sticky md:top-0 md:h-screen w-full flex flex-col items-center justify-center overflow-hidden [perspective:1400px] py-32 md:py-0">
        {/* Immersive Deep Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.08),transparent_60%)] pointer-events-none" />
        
        {/* Header Section */}
        <div className="relative md:absolute md:top-8 md:top-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-50 w-full px-6 max-w-[90rem] pointer-events-none mb-16 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-border/50 backdrop-blur-md border border-white/10 text-white/80 mb-4 md:mb-6 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span>The Intelligence Core</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[5rem] lg:text-[5.5rem] lg:leading-[1.05] font-display font-medium tracking-tight text-white max-w-5xl relative"
          >
            Everything you need to <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-cyan">dominate the market.</span>
          </motion.h2>
        </div>
        
        {/* Mobile Vertical Stack */}
        <div className="flex md:hidden flex-col gap-8 w-full max-w-sm mx-auto px-4 relative z-20">
          {offerings.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full rounded-[2.5rem] bg-[#0a0a0a]/90 backdrop-blur-3xl p-6 border border-white/10 shadow-2xl flex flex-col items-center text-center overflow-hidden group"
              >
                <div className={`absolute -inset-[1px] bg-gradient-to-br ${offer.color} rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} rounded-[2.5rem] opacity-[0.03]`} />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                
                <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-6 bg-gradient-to-br ${offer.color} shadow-2xl relative z-20`}>
                  <div className="absolute inset-[1px] rounded-[1.5rem] bg-black/40 backdrop-blur-md" />
                  <Icon className={`w-8 h-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] relative z-10`} />
                </div>
                
                <h3 className="text-xl font-display font-medium text-white mb-3 leading-tight relative z-20 tracking-tight">
                  {offer.title}
                </h3>
                <p className="text-white/60 leading-relaxed font-light text-sm relative z-20">
                  {offer.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop 3D Solar System Platform */}
        <div 
           className="hidden md:flex absolute left-1/2 top-[68%] w-0 h-0 items-center justify-center [transform-style:preserve-3d] z-20"
           style={{ transform: `rotateX(${SYSTEM_TILT}deg)` }}
        >
             {/* Center Core Emptied for spacing */}
             <div 
               className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none [transform-style:preserve-3d] z-10"
               style={{ transform: `rotateX(${-SYSTEM_TILT}deg)` }}
             >
                {/* Deep Background Core Glow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-accent-teal/10 blur-[80px] rounded-full scale-150" />
             </div>

           {/* Spinning Orbit Ring System */}
           <motion.div 
             className="absolute left-0 top-0 w-0 h-0 [transform-style:preserve-3d]"
             style={{ rotateY: angle }}
           >
              {/* Orbital Lines */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-white/10 [transform:rotateX(90deg)] pointer-events-none"
                style={{ width: `calc(${ORBIT_RADIUS} * 2)`, height: `calc(${ORBIT_RADIUS} * 2)` }}
              />
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.5px] border-solid border-accent-cyan/10 [transform:rotateX(90deg)] pointer-events-none scale-110"
                style={{ width: `calc(${ORBIT_RADIUS} * 2)`, height: `calc(${ORBIT_RADIUS} * 2)` }}
              />

              {/* Planets (Feature Cards) */}
              {offerings.map((offer, index) => (
                <PlanetCard
                  key={index}
                  offer={offer}
                  index={index}
                  angle={angle}
                  ANGLE_STEP={ANGLE_STEP}
                  ORBIT_RADIUS={ORBIT_RADIUS}
                  SYSTEM_TILT={SYSTEM_TILT}
                />
              ))}
           </motion.div>
        </div>
      </div>
    </section>
  );
}
