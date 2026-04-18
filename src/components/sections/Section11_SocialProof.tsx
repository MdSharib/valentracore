"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Server, Sparkles } from "lucide-react";

const reviews = [
  { 
    quote: "We abandoned 3 different heavy software tools the day we switched. The WhatsApp integration alone recovered $14k in missed appointments in month one.",
    author: "Dr. Alistair Webb",
    role: "Harley St. Aesthetics"
  },
  { 
    quote: "It feels like a modern tech company designed a medical platform. Our patients constantly comment on how easy it is to book on the new site.",
    author: "Sarah Jenkins",
    role: "Clinic Operations Director"
  },
  { 
    quote: "The SEO and automated review generation is staggering. We gained 140 genuine 5-star Google reviews in 6 months without asking manually once.",
    author: "Dr. Chen",
    role: "Precision Ortho"
  }
];

export default function Section11_SocialProof() {
  return (
    <section className="py-32 w-full bg-surface border-y border-surface-border relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Trust Headers */}
        <div className="flex flex-col items-center text-center w-full px-6 max-w-[90rem] mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-border/50 backdrop-blur-md border border-white/10 text-foreground mb-4 md:mb-6 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span>Proven Success</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[5rem] lg:text-[5.5rem] lg:leading-[1.05] font-display font-medium tracking-tight text-foreground max-w-5xl relative"
          >
            Trusted by operators who <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-cyan">refuse to compromise.</span>
          </motion.h2>

          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-lg md:text-xl text-primary-dim font-light leading-relaxed max-w-3xl mt-8 mb-12"
          >
             We deploy systems for the top 1% of clinics that demand premium digital velocity and ironclad security.
          </motion.p>
          
          <div className="flex justify-center gap-8 md:gap-16 shrink-0">
            <div className="flex flex-col gap-1 border-l-2 border-accent-teal pl-4 text-left">
              <span className="text-3xl lg:text-4xl font-display font-medium text-foreground">99.9%</span>
              <span className="text-xs lg:text-sm font-semibold uppercase tracking-widest text-primary-dim">Platform Uptime</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-accent-cyan pl-4 text-left">
              <span className="text-3xl lg:text-4xl font-display font-medium text-foreground">&lt; 1s</span>
              <span className="text-xs lg:text-sm font-semibold uppercase tracking-widest text-primary-dim">Site Load Speed</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-background border border-surface-border shadow-glass flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-primary-dim leading-relaxed mb-8 flex-1">
                &quot;{review.quote}&quot;
              </p>
              <div>
                <h4 className="font-medium text-foreground text-sm">{review.author}</h4>
                <p className="text-xs text-primary-dim mt-0.5 uppercase tracking-wide font-semibold">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security / Workflow Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-surface-highlight border border-surface-border flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-accent-teal shrink-0" />
            <div>
              <h4 className="font-medium text-foreground text-sm">Secure Data Handling</h4>
              <p className="text-xs text-primary-dim mt-1">Built with healthcare privacy models and secure infrastructure in mind.</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-surface-highlight border border-surface-border flex items-center gap-4">
            <Server className="w-8 h-8 text-accent-cyan shrink-0" />
            <div>
              <h4 className="font-medium text-foreground text-sm">Dedicated Architecture</h4>
              <p className="text-xs text-primary-dim mt-1">Isolated clinic databases ensuring blazing fast, uncompromised performance.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
