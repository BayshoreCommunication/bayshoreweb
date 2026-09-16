"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/bayshore-solutions/Navbar";
import { MultiStepHiringForm } from "@/components/bayshore-solutions/MultiStepHiringForm";
import { Footer } from "@/components/bayshore-solutions/Footer";

export default function BayshoreGetStartedPage() {
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

  // Prevent background page from scrolling
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={`h-screen w-full max-w-full overflow-hidden transition-colors duration-300 font-sans pt-[75px] pb-4 flex flex-col justify-between ${
        currentTheme === "dark" ? "bg-[#05111F] text-white dark" : "bg-[#F4F6F9] text-[#07192C]"
      }`}
    >
      {/* Navbar Component */}
      <Navbar
        defaultTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />

      {/* Main Container displaying 2-Step Hiring Request Form */}
      <main className="container mx-auto max-w-[1650px] px-4 sm:px-6 md:px-[30px] my-auto flex-1 flex items-center justify-center overflow-hidden">
        <MultiStepHiringForm theme={currentTheme} />
      </main>

      {/* Footer Component */}
      <Footer theme={currentTheme} />
    </div>
  );
}

