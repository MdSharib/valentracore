"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function HeroDesktop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const frameCount = 240;
    const currentFrame = (index: number) => 
      `/clinic-frames/frame-${index}.jpg`;

    const images: HTMLImageElement[] = [];
    const clinicState = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    images[0].onload = () => {
      render();
    };

    function render() {
      if (!canvas || !context) return;
      // Object fit max calculation
      const hRatio = canvas.width / images[clinicState.frame].width;
      const vRatio = canvas.height / images[clinicState.frame].height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - images[clinicState.frame].width * ratio) / 2;
      const centerShift_y = (canvas.height - images[clinicState.frame].height * ratio) / 2;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        images[clinicState.frame], 
        0, 0, images[clinicState.frame].width, images[clinicState.frame].height,
        centerShift_x, centerShift_y, images[clinicState.frame].width * ratio, images[clinicState.frame].height * ratio
      );
    }

    // Add continuous slow levitation to the canvas so it feels alive
    gsap.set(canvasRef.current, { scale: 1.05 }); // Scale up slightly to prevent edge bleed during float
    gsap.to(canvasRef.current, {
      y: -20,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Fade out scroll indicator quickly
    tl.to(".hero-scroll-indicator", { opacity: 0, duration: 0.1 }, 0);

    // Scrub canvas frames
    tl.to(clinicState, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => { requestAnimationFrame(render); },
      duration: 1
    }, 0);

    // Fade in the dark overlay and text incrementally at the end of the sequence
    tl.to(".hero-overlay", { opacity: 1, duration: 0.4, ease: "power2.inOut" }, ">")
      .fromTo(".hero-content-item", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, ease: "power2.out" },
      "<"
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-screen w-full bg-gradient-to-b from-[#5D656C] to-[#C0BFC8] overflow-hidden flex flex-col items-center justify-center">
      {/* Cinematic Glow Backing */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] opacity-70 z-0" />
      
      {/* 3D Sequence Canvas */}
      <div ref={containerRef} className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="w-[150%] sm:w-[120%] md:w-full h-auto md:h-full max-w-none md:max-w-full object-contain md:object-cover"
        />
        {/* Mobile Edge Fade Gradients to blend the letterbox effect smoothly */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#5D656C] via-[#5D656C]/80 to-transparent md:hidden pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#C0BFC8] via-[#C0BFC8]/80 to-transparent md:hidden pointer-events-none" />
      </div>

      <div className="hero-overlay opacity-0 absolute inset-0 bg-black/70 z-20 pointer-events-none" />
      
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 mt-[-5vh]">
        <div className="hero-content-item opacity-0 flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface-highlight/50 backdrop-blur-md mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-accent-blue text-accent-blue" />
            ))}
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#e2e8f0]">Trusted by 500+ Premium Clinics</span>
        </div>

        <style>{`
          @keyframes gradient-xy {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
          .animate-gradient-xy {
            background-size: 400% 400%;
            animation: gradient-xy 6s ease-in-out infinite;
          }
          @keyframes border-sweep {
            0% { left: -150px; }
            100% { left: 100%; }
          }
          .animate-border-sweep {
            animation: border-sweep 3s linear infinite;
          }
        `}</style>
        <h1 className="hero-content-item opacity-0 font-display text-5xl sm:text-6xl md:text-[6rem] font-semibold tracking-tight text-white max-w-[100rem] leading-[1.05] mb-8">
          The <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-500 animate-gradient-xy drop-shadow-[0_0_40px_rgba(217,70,239,0.5)]">AI Operating System</span> Powering <br className="hidden md:block"/> the Next Generation of Clinics
        </h1>

        <p className="hero-content-item opacity-0 text-lg md:text-[1.5rem] font-medium max-w-[55rem] mb-10 text-white/90">
          Automate appointments, eliminate missed calls, and grow your clinic with AI systems designed to run your front desk and operations seamlessly.
        </p>

        <div className="hero-content-item opacity-0 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative group active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]">
            {/* Outer blur glow (outside overflow-hidden to prevent clipping) */}
            <div className="absolute inset-0 bg-black rounded-full blur-[15px] opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] pointer-events-none" />

            <a 
              href="#contact"
              className="relative flex items-center justify-center px-8 py-5 md:px-12 md:py-[30px] text-[18px] md:text-[24px] leading-none text-white rounded-full overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
              
              {/* Sweeping left-to-right border beam */}
              <div 
                className="absolute inset-y-0 w-[150px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80 animate-border-sweep" 
              />
              
              {/* Inner dark masking area (leaves a 2px border gap for the beam to shine) */}
              <div className="absolute inset-[2px] bg-black rounded-full group-hover:bg-[#111] transition-colors duration-300" />
              
              {/* Static subtle border backing */}
              <div className="absolute inset-0 rounded-full border border-white/10" />

              <span className="relative z-10 flex items-center gap-3 font-bold tracking-wide text-white">
                Transform Your Clinic <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-primary-dim">Scroll to Reveal</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-dim to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 w-full h-1/2 bg-foreground"
          />
        </div>
      </div>
    </section>
  );
}
