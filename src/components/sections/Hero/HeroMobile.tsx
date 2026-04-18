"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function HeroMobile() {
  return (
    <section className="relative min-h-screen w-full bg-background overflow-hidden flex flex-col items-center justify-center pt-24 pb-16">
      {/* Cinematic Glow Backing */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_70%)] opacity-100 z-0" />
      
      {/* Subtle Mobile Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative z-30 flex flex-col items-center justify-center text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-surface-border bg-surface-highlight/50 backdrop-blur-md mb-6"
        >
          <div className="flex -space-x-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-accent-blue text-accent-blue" />
            ))}
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#e2e8f0]">Trusted by 500+ Clinics</span>
        </motion.div>

        <style>{`
          @keyframes gradient-xy {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
          .animate-gradient-xy {
            background-size: 400% 400%;
            animation: gradient-xy 6s ease-in-out infinite;
          }
          @keyframes border-sweep {
            0% { left: -150px; }
            100% { left: 100%; }
          }
          .animate-border-sweep {
            animation: border-sweep 3s linear infinite;
          }
        `}</style>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6"
        >
          The <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-500 animate-gradient-xy drop-shadow-[0_0_20px_rgba(217,70,239,0.3)]">AI Operating System</span> Powering Next-Gen Clinics
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-white/80 font-medium mb-8 max-w-sm"
        >
          Automate appointments, eliminate missed calls, and grow your clinic effortlessly.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full flex flex-col items-center gap-4 px-2"
        >
          <div className="relative w-full max-w-sm group active:scale-95 transition-all duration-300">
            {/* Outer blur glow */}
            <div className="absolute inset-0 bg-black rounded-full blur-[10px] opacity-40 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] pointer-events-none" />

            <a 
              href="#contact"
              className="relative flex items-center justify-center w-full py-5 text-[20px] leading-none text-white rounded-full overflow-hidden transition-all duration-300">
              
              {/* Sweeping border beam */}
              <div className="absolute inset-y-0 w-[100px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80 animate-border-sweep" />
              
              {/* Inner dark masking area */}
              <div className="absolute inset-[2px] bg-black rounded-full transition-colors duration-300" />
              
              <div className="absolute inset-0 rounded-full border border-white/10" />

              <span className="relative z-10 flex items-center gap-2 font-bold tracking-wide text-white">
                Transform Your Clinic <ArrowRight className="w-5 h-5" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative floating elements for mobile visual interest */}
      <motion.div 
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-32 left-4 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl"
      />
      <motion.div 
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-32 right-4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"
      />
    </section>
  );
}
