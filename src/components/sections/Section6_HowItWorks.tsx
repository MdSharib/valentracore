"use client";

import { motion } from "framer-motion";
import { MousePointerClick, CalendarPlus, DatabaseZap, Users, BellRing, TrendingUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: MousePointerClick,
    title: "Patient Discovers",
    desc: "A patient finds your premium clinic website via local search or social media."
  },
  {
    icon: CalendarPlus,
    title: "Frictionless Booking",
    desc: "They book instantly via form, WhatsApp, or AI voice assistant, exactly when they want."
  },
  {
    icon: DatabaseZap,
    title: "System Capture",
    desc: "The inquiry enters your clinic dashboard automatically, categorized and prioritized."
  },
  {
    icon: Users,
    title: "Staff Visibility",
    desc: "Your front desk gets immediate visibility and actionable follow-up prompts."
  },
  {
    icon: BellRing,
    title: "Automated Nurture",
    desc: "Pre-consult reminders and post-consult review requests are triggered automatically."
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    desc: "Reviews multiply, SEO compounds, and your clinic scales efficiently without manual overhead."
  }
];

export default function Section6_HowItWorks() {
  return (
    <section className="py-32 w-full bg-background relative z-20 overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center w-full px-6 max-w-[90rem] mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-border/50 backdrop-blur-md border border-white/10 text-foreground mb-4 md:mb-6 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span>Workflow Engine</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[5rem] lg:text-[5.5rem] lg:leading-[1.05] font-display font-medium tracking-tight text-foreground max-w-5xl relative"
          >
            From first click to <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-cyan">confirmed appointment.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-[2px] bg-surface-border">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-accent-teal origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                className="flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-8"
              >
                {/* Mobile vertical line connector */}
                {i !== steps.length - 1 && (
                  <div className="lg:hidden absolute left-[44px] mt-[90px] h-full w-[2px] bg-surface-border -z-10" />
                )}
                
                <div className="relative">
                  <div className="w-[90px] h-[90px] rounded-2xl bg-surface border border-surface-border shadow-glass flex items-center justify-center shrink-0">
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-accent-teal flex items-center justify-center text-background text-[10px] font-bold">
                    {i + 1}
                  </div>
                </div>

                <div className="flex-1 lg:text-center mt-2 lg:mt-0">
                  <h4 className="text-base font-semibold text-primary mb-2">{step.title}</h4>
                  <p className="text-sm text-primary-dim leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
