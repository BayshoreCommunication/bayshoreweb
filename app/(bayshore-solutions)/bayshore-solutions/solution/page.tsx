"use client";

import React, { useState } from "react";
import Navbar from "@/components/bayshore-solutions/Navbar";
import { SolutionsSection } from "@/components/bayshore-solutions/SolutionsSection";
import { Footer } from "@/components/bayshore-solutions/Footer";

export default function BayshoreSolutionPage() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  return (
    <div
      className={`min-h-screen w-full max-w-full overflow-x-hidden transition-colors duration-300 font-sans pt-[80px] md:pt-[90px] ${
        currentTheme === "dark" ? "bg-[#07192C] text-white dark" : "bg-white text-[#07192C]"
      }`}
    >
      {/* Navbar Component */}
      <Navbar
        defaultTheme={currentTheme}
        onThemeChange={(theme) => setCurrentTheme(theme)}
      />

      {/* Solutions Section displaying all 18 Solution Cards Grid */}
      <SolutionsSection theme={currentTheme} showAll={true} />

      {/* Footer Component */}
      <Footer theme={currentTheme} />
    </div>
  );
}
