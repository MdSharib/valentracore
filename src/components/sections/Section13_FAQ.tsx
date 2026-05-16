"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Do you only build websites, or full clinic systems too?",
    a: "We build the entire end-to-end system. While a premium website is the frontend of the experience, we deploy the AI reception, WhatsApp scheduling, and the underlying unified dashboard behind it."
  },
  {
    q: "Can patients book directly through WhatsApp?",
    a: "Yes. Our native WhatsApp API integration allows patients to view available slots, ask preliminary questions via AI, and confirm bookings entirely within their chat."
  },
  {
    q: "Can this work for multi-doctor clinics?",
    a: "Absolutely. The dashboard is designed to handle multiple schedules, doctor-specific inquiry routing, and specialty-based conversion tracking."
  },
  {
    q: "How long does setup take?",
    a: "Most clinic structures are deployed and live within 2-4 weeks, depending on the complexity of legacy data migration and the size of your staff."
  },
  {
    q: "How do you handle patient data and trust concerns?",
    a: "Security is foundational. All architectures are isolated, encrypted, and designed with healthcare data workflow standards. Patient data is never co-mingled."
  }
];

export default function Section13_FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 w-full bg-surface dark:bg-[#030303] border-y border-surface-border relative z-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center w-full px-6 max-w-[90rem] mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-border/50 backdrop-blur-md border border-white/10 text-foreground mb-4 md:mb-6 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span>Clarity & Transparency</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[5rem] lg:text-[5.5rem] lg:leading-[1.05] font-display font-medium tracking-tight text-foreground max-w-5xl relative"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-cyan">Questions.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-dim font-light leading-relaxed max-w-3xl mt-8"
          >
            Everything you need to know about implementing the ValentraCore growth engine.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-background border-accent-teal/30" : "bg-transparent border-surface-border hover:border-primary-dim/30"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                >
                  <span className="font-medium text-lg text-foreground pr-8">{faq.q}</span>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", isOpen ? "bg-accent-teal text-background" : "bg-surface-highlight text-primary-dim")}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-primary-dim leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
