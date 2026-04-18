import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Scene2_Friction from "@/components/sections/Scene2_Friction";
import Scene3_SystemReveal from "@/components/sections/Scene3_SystemReveal";
import Scene4_FeatureWorlds from "@/components/sections/Scene4_FeatureWorlds";
import Scene5_Trust from "@/components/sections/Scene5_Trust";
import Scene6_Pricing from "@/components/sections/Scene6_Pricing";
import Section3_TrustBar from "@/components/sections/Section3_TrustBar";
import Section4_PainPoints from "@/components/sections/Section4_PainPoints";
import Section_WhatWeOffer from "@/components/sections/Section_WhatWeOffer";
import Section5_SolutionStack from "@/components/sections/Section5_SolutionStack";
import Section6_HowItWorks from "@/components/sections/Section6_HowItWorks";
import Section7_ProductInAction from "@/components/sections/Section7_ProductInAction";
import Section8_Specialties from "@/components/sections/Section8_Specialties";
import Section9_Outcomes from "@/components/sections/Section9_Outcomes";
import Section10_WhyUs from "@/components/sections/Section10_WhyUs";
import Section11_SocialProof from "@/components/sections/Section11_SocialProof";
import Section12_Process from "@/components/sections/Section12_Process";
import Section13_FAQ from "@/components/sections/Section13_FAQ";
import Section14_CTA from "@/components/sections/Section14_CTA";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="bg-background w-full overflow-x-clip min-h-screen text-foreground selection:bg-accent-teal/30 selection:text-accent-teal">
      <Navbar />
      <Hero />
      <Scene2_Friction />
      {/* <Scene3_SystemReveal /> */}
      <Section_WhatWeOffer />
      <Section6_HowItWorks />
      <Section7_ProductInAction />
      <Section5_SolutionStack />
      {/* <Scene4_FeatureWorlds /> */}
      <Section8_Specialties />
      <Section9_Outcomes />
      <Section10_WhyUs />
      <Section11_SocialProof />
      {/* <Section12_Process /> */}
      <Section13_FAQ />
      <Scene6_Pricing />
      <Section14_CTA />
      <Footer />
    </main>
  );
}
