"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/bayshore-solutions/Navbar";
import { MultiStepHiringForm } from "@/components/bayshore-solutions/MultiStepHiringForm";
import { Footer } from "@/components/bayshore-solutions/Footer";

export default function BayshoreContactPage() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("bayshore_theme") as "light" | "dark" | null;
      if (saved === "light" || saved === "dark") return saved;
    }
    return "dark";
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
      className={`min-h-screen w-full flex flex-col justify-between transition-colors duration-300 font-sans ${
        currentTheme === "dark" ? "bg-[#05111F] text-white dark" : "bg-[#F4F6F9] text-[#07192C]"
      }`}
    >
      {/* Navbar Component */}
      <Navbar
        defaultTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />

      {/* Main Container displaying 2-Step Hiring Request Form */}
      <main className="w-full flex-1 flex items-center justify-center pt-36 sm:pt-40 md:pt-44 pb-24 sm:pb-28 md:pb-32 px-4 sm:px-6 lg:px-8">
        <MultiStepHiringForm theme={currentTheme} />
      </main>

      {/* Footer Component */}
      <Footer theme={currentTheme} />
    </div>
  );
}

