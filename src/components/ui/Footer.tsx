import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-surface-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        {/* Brand Column */}
        <div className="lg:col-span-1">
          <div className="font-display font-semibold text-2xl tracking-wide flex items-center gap-2 mb-6">
            <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-background" />
            </div>
            ValentraCore
          </div>
          <p className="text-primary-dim text-sm leading-relaxed mb-6">
            The premium operational infrastructure for medical clinics that refuse to compromise on patient acquisition and workflow efficiency.
          </p>
          <div className="flex gap-4">
            {/* Social / Contact short links */}
            <a href="#" className="w-10 h-10 rounded-full bg-background border border-surface-border flex items-center justify-center hover:border-accent-teal hover:text-accent-teal transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Links: Platform */}
        <div>
          <h4 className="font-semibold text-foreground mb-6">Platform</h4>
          <ul className="flex flex-col gap-4 text-sm text-primary-dim">
            <li><a href="#" className="hover:text-accent-teal transition-colors">Digital Presence</a></li>
            <li><a href="#" className="hover:text-accent-teal transition-colors">WhatsApp Automation</a></li>
            <li><a href="#" className="hover:text-accent-teal transition-colors">AI Receptionist</a></li>
            <li><a href="#" className="hover:text-accent-teal transition-colors">Patient Dashboard</a></li>
            <li><a href="#" className="hover:text-accent-teal transition-colors">Review Growth</a></li>
          </ul>
        </div>

        {/* Links: Specialties */}
        <div>
          <h4 className="font-semibold text-foreground mb-6">Specialties</h4>
          <ul className="flex flex-col gap-4 text-sm text-primary-dim">
            <li><a href="#" className="hover:text-accent-teal transition-colors">Dental Clinics</a></li>
            <li><a href="#" className="hover:text-accent-teal transition-colors">Dermatology</a></li>
            <li><a href="#" className="hover:text-accent-teal transition-colors">Orthopedics</a></li>
            <li><a href="#" className="hover:text-accent-teal transition-colors">General Practice</a></li>
            <li><a href="#" className="hover:text-accent-teal transition-colors">ENT Specialists</a></li>
          </ul>
        </div>

        {/* Links: Company */}
        <div>
          <h4 className="font-semibold text-foreground mb-6">Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-primary-dim">
            <li><a href="#" className="hover:text-accent-teal transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-accent-teal transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-accent-teal transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-accent-teal transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-accent-teal transition-colors text-accent-teal font-medium">Book a Demo</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-surface-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-dim">
        <p>&copy; {new Date().getFullYear()} ValentraCore Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">Data Security</a>
        </div>
      </div>
    </footer>
  );
}
