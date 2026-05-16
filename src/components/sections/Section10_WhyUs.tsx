"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const comparisonFeatures = [
  "Healthcare-specific workflow understanding",
  "Medical conversion website architecture",
  "Native WhatsApp API integration",
  "AI Receptionist / Call automation",
  "Automated review & follow-up flows",
  "Centralized operational dashboard",
  "Premium, trust-first brand execution"
];

export default function Section10_WhyUs() {
  return (
    <section className="py-32 w-full bg-background dark:bg-[#030303] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center w-full px-6 max-w-[90rem] mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-border/50 backdrop-blur-md border border-white/10 text-foreground mb-4 md:mb-6 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span>The ValentraCore Advantage</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[5rem] lg:text-[5.5rem] lg:leading-[1.05] font-display font-medium tracking-tight text-foreground max-w-5xl relative"
          >
            Why clinics <span className="text-accent-teal drop-shadow-[0_0_30px_rgba(20,184,166,0.3)]">choose us</span> over <br className="hidden md:block"/> <span className="text-red-500/90 drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">generic agencies.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-dim font-light leading-relaxed max-w-3xl mt-8"
          >
            Most agencies sell static websites. We install a living, automated operational layer engineered specifically for modern medicine.
          </motion.p>
        </div>

        <div className="w-full overflow-x-auto pb-8">
          <div className="min-w-[700px] border border-surface-border rounded-3xl overflow-hidden shadow-glass">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-surface-highlight border-b border-surface-border">
              <div className="p-6 flex items-end">
                <span className="font-semibold text-primary">Capabilities</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-surface-border bg-background/30">
                <span className="text-sm font-medium text-primary-dim">Generic Agencies</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-surface-border bg-accent-teal/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent-teal" />
                <span className="text-lg font-semibold text-accent-teal">Our System</span>
              </div>
            </div>

            {/* Feature Rows */}
            <div className="flex flex-col bg-background">
              {comparisonFeatures.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={cn(
                    "grid grid-cols-3 border-b border-surface-border hover:bg-surface/50 transition-colors",
                    idx === comparisonFeatures.length - 1 ? "border-b-0" : ""
                  )}
                >
                  <div className="p-6 flex items-center">
                    <span className="text-sm font-medium text-primary">{feature}</span>
                  </div>
                  <div className="p-6 flex items-center justify-center border-l border-surface-border">
                    <X className="w-5 h-5 text-red-500/50" />
                  </div>
                  <div className="p-6 flex items-center justify-center border-l border-surface-border bg-accent-teal/5">
                    <Check className="w-5 h-5 text-accent-teal" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
