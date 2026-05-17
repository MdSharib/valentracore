import { cn } from "@/lib/utils";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-surface dark:bg-[#030303] border-t border-surface-border pt-24 pb-12 overflow-hidden">
      {/* Premium subtle glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-accent-teal/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 lg:gap-24 mb-20">
        
        {/* Brand Column */}
        <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col">
          <div className="flex items-center gap-4 group cursor-pointer mb-8">
            {/* VC Masterpiece Logo Icon */}
            <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-surface-highlight to-background border border-surface-border backdrop-blur-xl shadow-[0_8px_32px_-12px_rgba(6,182,212,0.4)] overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/20 via-transparent to-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#14b8a6_100%)] opacity-20 group-hover:animate-[spin_4s_linear_infinite]" />
              <div className="absolute inset-[1px] bg-background/90 rounded-2xl backdrop-blur-2xl" />

              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-8 h-8 group-hover:scale-110 transition-transform duration-700 ease-out">
                <defs>
                  {/* Fluid Tech Gradient */}
                  <linearGradient id="vc-fluid" x1="18" y1="25" x2="83" y2="75" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="30%" stopColor="#2dd4bf" />
                    <stop offset="70%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#083344" />
                  </linearGradient>

                  {/* Deep Tech Gradient for Echo */}
                  <linearGradient id="vc-echo" x1="18" y1="25" x2="83" y2="75" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#0891b2" />
                  </linearGradient>
                  
                  <filter id="glow-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#06b6d4" floodOpacity="0.6"/>
                  </filter>
                </defs>

                {/* Echo / Glass Layer */}
                <path d="M 18 25 L 38 75 L 58 25 A 25 25 0 0 1 58 75" 
                      fill="none" 
                      stroke="url(#vc-echo)" 
                      strokeWidth="10" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      opacity="0.4" 
                      transform="translate(0, 4)" 
                      filter="blur(2px)"/>

                {/* Main Continuous Flow VC */}
                <path d="M 18 25 L 38 75 L 58 25 A 25 25 0 0 1 58 75" 
                      fill="none" 
                      stroke="url(#vc-fluid)" 
                      strokeWidth="10" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      filter="url(#glow-shadow)" />

                {/* The "Core" Element */}
                <circle cx="38" cy="42" r="5" fill="#ffffff" filter="drop-shadow(0 0 8px #ffffff)" />
                <circle cx="38" cy="42" r="10" fill="#2dd4bf" opacity="0.4" filter="blur(3px)" />
              </svg>
            </div>
            
            {/* Masterpiece Typography */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center tracking-[0.2em] leading-none uppercase">
                <span className="font-satoshi text-[24px] font-light text-foreground drop-shadow-sm">
                  Valentra
                </span>
                <span className="font-satoshi text-[24px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-accent-teal via-accent-cyan to-white drop-shadow-md ml-1">
                  Core
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-foreground/70 text-[15px] font-light leading-relaxed max-w-sm">
            The premium operational infrastructure for medical clinics that refuse to compromise on patient acquisition and workflow efficiency.
          </p>
        </div>

        {/* Navigation & Action Container */}
        <div className="w-full md:w-7/12 lg:w-6/12 flex flex-col sm:flex-row justify-between gap-12 sm:gap-6 mt-4 md:mt-0">
          {/* Links: Platform */}
          <div className="flex flex-col">
            <h4 className="font-satoshi font-semibold text-foreground tracking-widest text-xs uppercase text-foreground/40 mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4 text-[15px] text-foreground/70 font-medium">
              <li><a href="#platform" className="hover:text-foreground transition-colors duration-300">Platform</a></li>
              <li><a href="#solutions" className="hover:text-foreground transition-colors duration-300">Solutions</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors duration-300">How it works</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors duration-300">Pricing</a></li>
            </ul>
          </div>

          {/* Links: Action */}
          <div className="flex flex-col">
            <h4 className="font-satoshi font-semibold text-foreground tracking-widest text-xs uppercase text-foreground/40 mb-6">Connect</h4>
            <ul className="flex flex-col gap-5">
              <li>
                <a href="#contact" className="group inline-flex items-center gap-2 text-[15px] font-medium text-foreground hover:text-accent-cyan transition-colors duration-300">
                  Book a Private Demo
                  <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-foreground/50 font-light">
        <p className="tracking-wide">&copy; {new Date().getFullYear()} ValentraCore Systems. All rights reserved.</p>
        <p className="tracking-wide">Designed for Excellence.</p>
      </div>
    </footer>
  );
}
