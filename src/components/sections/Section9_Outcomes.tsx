"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";

const outcomes = [
  { metric: "60%", label: "Reduction in missed calls", trend: "down", desc: "AI Receptionist handles overflow instantly." },
  { metric: "3x", label: "Increase in Google Reviews", trend: "up", desc: "Automated post-visit SMS requests." },
  { metric: "4hrs", label: "Front-desk time saved daily", trend: "down", desc: "No more manual confirmation calls." },
  { metric: "40%", label: "Boost in WhatsApp conversions", trend: "up", desc: "Immediate structured replies to inquiries." },
];

export default function Section9_Outcomes() {
  return (
    <section className="py-32 w-full bg-surface border-y border-surface-border relative z-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.05),transparent_60%)]" />

      <div className="w-full relative z-10">
        <div className="flex flex-col items-center text-center w-full px-6 max-w-[90rem] mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-border/50 backdrop-blur-md border border-white/10 text-foreground mb-4 md:mb-6 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span>Measurable Impact</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[5rem] lg:text-[5.5rem] lg:leading-[1.05] font-display font-medium tracking-tight text-foreground max-w-5xl relative"
          >
            What clinics gain with a <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-cyan">modern digital system.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-dim font-light leading-relaxed max-w-3xl mt-8"
          >
            True digital transformation isn&apos;t just about looking good online. It&apos;s about measurable operational leverage and reducing friction at every step of the patient journey.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="p-8 bg-background border border-surface-border rounded-2xl shadow-glass flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-display text-5xl font-semibold text-foreground tracking-tight">
                  {item.metric}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.trend === 'up' ? 'bg-accent-teal/10 text-accent-teal' : 'bg-accent-cyan/10 text-accent-cyan'}`}>
                  {item.trend === 'up' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                </div>
              </div>
              <h4 className="text-lg font-medium text-primary mb-2">{item.label}</h4>
              <p className="text-sm text-primary-dim leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16 px-6">
          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-8 py-4 rounded-full bg-surface-highlight border border-surface-border text-foreground text-sm font-medium hover:bg-surface-border transition-colors flex items-center gap-2"
          >
            Read our Case Studies <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
