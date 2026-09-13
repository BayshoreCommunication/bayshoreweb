"use client";

import React, { useState } from "react";
import Navbar from "@/components/bayshore-solutions/Navbar";
import { HeroSection } from "@/components/bayshore-solutions/HeroSection";
import { StatsSection } from "@/components/bayshore-solutions/StatsSection";
import { SolutionsSection } from "@/components/bayshore-solutions/SolutionsSection";
import { HowItWorksSection } from "@/components/bayshore-solutions/HowItWorksSection";
import { ManagedStaffingSection } from "@/components/bayshore-solutions/ManagedStaffingSection";
import { TalentShowcaseSection } from "@/components/bayshore-solutions/TalentShowcaseSection";
import { ClientStoriesSection } from "@/components/bayshore-solutions/ClientStoriesSection";
import { FaqSection } from "@/components/bayshore-solutions/FaqSection";
import { Footer } from "@/components/bayshore-solutions/Footer";

export default function BayshoreSolutionsPage() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  return (
    <div
      className={`min-h-screen w-full max-w-full overflow-x-hidden transition-colors duration-300 font-sans ${
        currentTheme === "dark" ? "bg-[#07192C] text-white dark" : "bg-slate-50 text-[#07192C]"
      }`}
    >
      {/* Bayshore Solutions Navbar Component */}
      <Navbar
        defaultTheme={currentTheme}
        onThemeChange={(theme) => setCurrentTheme(theme)}
      />

      {/* Bayshore Solutions Hero Section Component */}
      <HeroSection theme={currentTheme} />

      {/* Bayshore Solutions Impact & Counter Stats Banner */}
      <StatsSection theme={currentTheme} />

      {/* Bayshore Solutions Cards Grid Section */}
      <SolutionsSection theme={currentTheme} />

      {/* Bayshore Solutions How It Works Process Flow Section */}
      <HowItWorksSection theme={currentTheme} />

      {/* Bayshore Solutions Managed Staffing Operation Section */}
      <ManagedStaffingSection theme={currentTheme} />

      {/* Bayshore Solutions Client Stories Video Testimonials Section */}
      <ClientStoriesSection theme={currentTheme} />

      {/* Bayshore Solutions Meet The Talent Showcase Carousel Section */}
      <TalentShowcaseSection theme={currentTheme} />

      {/* Bayshore Solutions FAQ Section */}
      <FaqSection theme={currentTheme} />

      {/* Bayshore Solutions Footer Component */}
      <Footer theme={currentTheme} />
    </div>
  );
}


