"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [mounted, setMounted] = useState(false);
  
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
    onClose();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          key="demo-modal"
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 font-satoshi"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-surface border border-surface-border rounded-[2rem] p-6 md:p-10 shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-surface-highlight text-primary-dim hover:text-foreground transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-8 pr-12 relative z-10">
              <h2 className="text-3xl font-display font-semibold text-foreground mb-2">Book your Demo</h2>
              <p className="text-primary-dim">Tell us about your clinic so we can tailor your workflow.</p>
            </div>

            <form className="relative z-10 flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

              <button type="submit" className="mt-4 w-full flex items-center justify-center gap-2 bg-accent-teal hover:bg-accent-teal/90 text-background font-semibold py-4 rounded-xl transition-all active:scale-[0.98]">
                Request Private Demo <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
