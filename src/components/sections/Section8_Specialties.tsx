"use client";

import { motion } from "framer-motion";
import { Sparkles, Smile, Bone, Stethoscope, Ear, Baby } from "lucide-react";

const specialties = [
  {
    name: "Dental Clinics",
    icon: Smile,
    points: ["High-ticket treatment landing pages", "WhatsApp inquiry capture", "Implant & cosmetic lead flows", "Automated recall systems"]
  },
  {
    name: "Dermatology & Aesthetics",
    icon: Sparkles,
    points: ["Visual-first premium galleries", "Consultation booking automation", "Pre-care instruction drops", "Treatment review compounding"]
  },
  {
    name: "Orthopedic Centers",
    icon: Bone,
    points: ["Pain-point specific funnels", "Post-op automated check-ins", "Physio scheduling workflows", "Patient mobility tracking forms"]
  },
  {
    name: "General Practice",
    icon: Stethoscope,
    points: ["High-volume queue management", "Instant AI call handling", "Family booking linking", "Prescription renewal pathways"]
  },
  {
    name: "ENT Clinics",
    icon: Ear,
    points: ["Symptom-based routing", "Specialist booking filters", "Pre-visit audiogram uploads", "Follow-up care scheduling"]
  },
  {
    name: "Fertility & Pediatrics",
    icon: Baby,
    points: ["High-trust communication portals", "Sensitive data handling", "Long-term journey tracking", "Partner/Family notifications"]
  }
];

export default function Section8_Specialties() {
  return (
    <section className="py-32 w-full bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center w-full px-6 max-w-[90rem] mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-border/50 backdrop-blur-md border border-white/10 text-foreground mb-4 md:mb-6 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span>Versatile Workflows</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[5rem] lg:text-[5.5rem] lg:leading-[1.05] font-display font-medium tracking-tight text-foreground max-w-5xl relative"
          >
            Built for modern clinics <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-cyan">across specialties.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group p-8 rounded-2xl bg-surface border border-surface-border hover:border-accent-teal/50 transition-colors shadow-glass relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                 <spec.icon className="w-32 h-32 text-accent-teal" />
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-surface-highlight border border-surface-border flex items-center justify-center mb-6 shadow-glow shrink-0 relative z-10">
                <spec.icon className="w-6 h-6 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4 relative z-10">{spec.name}</h3>
              <ul className="flex flex-col gap-3 relative z-10">
                {spec.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-primary-dim">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-teal/60 mt-1.5 shrink-0" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
