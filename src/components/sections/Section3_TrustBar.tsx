"use client";

import { ShieldCheck, Activity, Brain, MessageSquare, Building2, Lock } from "lucide-react";

const trustItems = [
  { text: "Built for modern clinics", icon: Building2 },
  { text: "Healthcare workflows", icon: Activity },
  { text: "Secure systems", icon: Lock },
  { text: "WhatsApp booking ready", icon: MessageSquare },
  { text: "AI automation enabled", icon: Brain },
  { text: "Multi-specialty ready", icon: ShieldCheck },
];

export default function Section3_TrustBar() {
  return (
    <div className="w-full bg-surface border-y border-surface-border py-4 relative z-20">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden flex items-center justify-center">
        <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center opacity-80 hover:opacity-100 transition-opacity duration-500">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <item.icon className="w-4 h-4 text-accent-teal" />
              <span className="text-sm font-medium tracking-wide text-primary-dim uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
