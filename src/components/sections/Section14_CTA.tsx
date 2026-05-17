"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Section14_CTA() {
  const [formData, setFormData] = useState({
    clinicName: "",
    specialty: "",
    phone: "",
    city: "",
    challenge: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'd like to book a private demo!\n\n*Clinic Name:* ${formData.clinicName}\n*Specialty:* ${formData.specialty}\n*Phone:* ${formData.phone}\n*City:* ${formData.city}\n*Challenge:* ${formData.challenge}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917011359312?text=${encodedMessage}`, "_blank");
  };
  return (
    <section className="py-32 w-full bg-background relative z-20 overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Copy Side */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 text-foreground leading-[1.1]">
              Let&apos;s build the system your clinic should have had from day one.
            </h2>
            <p className="text-xl text-primary-dim font-light leading-relaxed mb-12 max-w-lg">
              Book a discovery call to see the exact workflow we would deploy for your specific medical specialty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/917011359312" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-surface-border hover:border-accent-teal hover:bg-accent-teal/5 text-foreground rounded-2xl transition-all font-medium">
                <MessageCircle className="w-5 h-5 text-green-500" />
                Contact via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Form Side */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-surface border border-surface-border p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle reactive glow behind the form */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-primary">Clinic Name</label>
                  <input required type="text" value={formData.clinicName} onChange={(e) => setFormData({...formData, clinicName: e.target.value})} className="w-full bg-background border border-surface-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal/50 transition-all" placeholder="Apex Medical" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-primary">Specialty</label>
                  <select required value={formData.specialty} onChange={(e) => setFormData({...formData, specialty: e.target.value})} className="w-full bg-background border border-surface-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal/50 transition-all appearance-none cursor-pointer">
                    <option value="" disabled>Select Specialty</option>
                    <option value="Dental">Dental</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="General Practice">General Practice</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-primary">WhatsApp Number</label>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-background border border-surface-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal/50 transition-all" placeholder="+91 00000 00000" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-primary">City / Location</label>
                  <input required type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full bg-background border border-surface-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal/50 transition-all" placeholder="New Delhi, DL" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-primary">Biggest Operational Challenge?</label>
                <textarea required rows={3} value={formData.challenge} onChange={(e) => setFormData({...formData, challenge: e.target.value})} className="w-full bg-background border border-surface-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal/50 transition-all resize-none" placeholder="Missed calls, low website conversions, no online booking..." />
              </div>

              <button type="submit" className="mt-2 w-full flex items-center justify-center gap-2 bg-accent-teal hover:bg-accent-teal/90 text-background font-semibold py-4 rounded-xl transition-all active:scale-[0.98]">
                Request Private Demo <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
