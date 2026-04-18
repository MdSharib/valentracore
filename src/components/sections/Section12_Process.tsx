"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery Call", desc: "We map your current capacity, patient acquisition costs, and operational bottlenecks." },
  { num: "02", title: "Workflow Mapping", desc: "Our architects design the automated paths for WhatsApp, forms, and phone leads." },
  { num: "03", title: "Deployment", desc: "We build and launch your premium clinic website alongside the operational dashboard." },
  { num: "04", title: "Refinement", desc: "We fine-tune the AI reception and follow-up sequences based on initial patient interactions." },
  { num: "05", title: "Growth Engine Live", desc: "Your hands-free, automated clinic growth system begins capturing and scaling revenue." }
];

export default function Section12_Process() {
  return (
    <section className="py-32 w-full bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6 text-foreground">
            Simple rollout for busy clinics.
          </h2>
          <p className="text-xl text-primary-dim font-light leading-relaxed">
            Deployment requires zero technical effort from your staff. We build, install, and optimize the engine while you focus on medicine.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line connector */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-surface-border hidden md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-start relative z-10"
              >
                <div className="w-20 h-20 rounded-full bg-surface border-2 border-surface-border shadow-glass flex items-center justify-center shrink-0">
                  <span className="font-display text-xl font-bold text-accent-teal">{step.num}</span>
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-xl font-medium text-foreground mb-2">{step.title}</h3>
                  <p className="text-primary-dim leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
