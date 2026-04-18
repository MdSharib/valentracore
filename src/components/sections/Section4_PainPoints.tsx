"use client";

import { motion } from "framer-motion";
import { MonitorX, PhoneMissed, CalendarOff, UserMinus, MessageSquareDashed, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const painPoints = [
  {
    title: "Outdated Clinic Website",
    desc: "Patients bounce from slow, template-based websites that fail to communicate medical authority.",
    icon: MonitorX,
  },
  {
    title: "Missed Patient Calls",
    desc: "Busy front desks miss vital leads daily, immediately losing potential high-value patients to competitors.",
    icon: PhoneMissed,
  },
  {
    title: "No Online Booking",
    desc: "Forcing patients to call during business hours creates massive friction in the conversion funnel.",
    icon: CalendarOff,
  },
  {
    title: "Weak Follow-up Systems",
    desc: "Post-consultation leads go cold without automated, intelligent nurturing sequences.",
    icon: UserMinus,
  },
  {
    title: "Poor WhatsApp Flow",
    desc: "Chaotic manual messaging leads to ignored inquiries and completely unscalable patient handling.",
    icon: MessageSquareDashed,
  },
  {
    title: "No Unified Visibility",
    desc: "Doctors fly blind with fragmented systems, unable to see daily lead flow or appointment health.",
    icon: EyeOff,
  }
];

export default function Section4_PainPoints() {
  return (
    <section className="py-32 w-full bg-background relative z-20 overflow-hidden" id="problems">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.03),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surface-border bg-surface text-[11px] font-semibold tracking-widest uppercase text-accent-teal mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
            </span>
            The Clinic Bottleneck
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight mb-6 text-foreground">
            Your clinic may already be losing leads every day.
          </h2>
          <p className="text-xl text-primary-dim font-light leading-relaxed">
            Most modern clinics deliver exceptional medical care, but lose patients before the first appointment due to friction-heavy digital operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 rounded-2xl bg-surface border border-surface-border overflow-hidden transition-colors hover:border-surface-highlight"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-background border border-surface-border flex items-center justify-center mb-6 shadow-glass group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                  <point.icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-medium text-primary mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-primary-dim leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
