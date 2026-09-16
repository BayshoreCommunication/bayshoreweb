"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/bayshore-solutions/Navbar";
import { SolutionsBreadcrumb } from "@/components/bayshore-solutions/SolutionsBreadcrumb";
import { SolutionsSection } from "@/components/bayshore-solutions/SolutionsSection";
import { Footer } from "@/components/bayshore-solutions/Footer";

export default function BayshoreSolutionsGridPage() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("bayshore_theme") as "light" | "dark" | null;
      if (saved === "light" || saved === "dark") return saved;
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("bayshore_theme") as "light" | "dark" | null;
      if (saved === "light" || saved === "dark") {
        setCurrentTheme(saved);
      }
    }
  }, []);

  const handleThemeChange = (theme: "light" | "dark") => {
    setCurrentTheme(theme);
    if (typeof window !== "undefined") {
      localStorage.setItem("bayshore_theme", theme);
    }
  };

  return (
    <div
      className={`min-h-screen w-full max-w-full overflow-x-hidden transition-colors duration-300 font-sans pt-[80px] md:pt-[90px] ${
        currentTheme === "dark" ? "bg-[#07192C] text-white dark" : "bg-white text-[#07192C]"
      }`}
    >
      {/* Navbar Component */}
      <Navbar
        defaultTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />

      {/* Solutions Breadcrumb Banner */}
      <SolutionsBreadcrumb theme={currentTheme} />

      {/* Solutions Section displaying all 18 Solution Cards Grid */}
      <SolutionsSection theme={currentTheme} showAll={true} />

      {/* Footer Component */}
      <Footer theme={currentTheme} />
    </div>
  );
}
