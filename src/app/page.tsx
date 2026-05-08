"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PhoneMockup from "@/components/PhoneMockup";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import AppDemo from "@/components/AppDemo";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import WaitlistPricing from "@/components/WaitlistPricing";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Simple fade up animation for sections
    const sections = gsap.utils.toArray(".animate-section");
    
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      
      <div className="animate-section">
        <Hero />
      </div>
      
      <div className="animate-section">
        <PhoneMockup />
      </div>

      <div className="animate-section flex justify-center">
        <ProblemSection />
      </div>

      <div className="animate-section">
        <FeaturesSection />
      </div>

      <div className="animate-section">
        <HowItWorks />
      </div>

      <div className="animate-section">
        <AppDemo />
      </div>

      <div className="animate-section">
        <Testimonials />
      </div>

      <div className="animate-section">
        <AboutSection />
      </div>

      <div className="animate-section">
        <WaitlistPricing />
      </div>

      <div className="animate-section">
        <Footer />
      </div>
    </main>
  );
}
