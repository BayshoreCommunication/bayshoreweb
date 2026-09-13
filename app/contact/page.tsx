"use client";

import React, { useState } from "react";
import Navbar from "@/components/bayshore-solutions/Navbar";
import { MultiStepHiringForm } from "@/components/bayshore-solutions/MultiStepHiringForm";
import { Footer } from "@/components/bayshore-solutions/Footer";

export default function ContactPage() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");

  return (
    <div
      className={`min-h-screen w-full max-w-full overflow-x-hidden transition-colors duration-300 font-sans pt-[100px] pb-16 md:pt-[120px] md:pb-24 flex flex-col justify-between ${
        currentTheme === "dark" ? "bg-[#05111F] text-white dark" : "bg-[#F4F6F9] text-[#07192C]"
      }`}
    >
      {/* Navbar Component */}
      <Navbar
        defaultTheme={currentTheme}
        onThemeChange={(theme) => setCurrentTheme(theme)}
      />

      {/* Main Container displaying 2-Step Hiring Request Form */}
      <main className="container mx-auto max-w-[1650px] px-4 sm:px-6 md:px-[30px] my-auto">
        <MultiStepHiringForm theme={currentTheme} />
      </main>

      {/* Footer Component */}
      <Footer theme={currentTheme} />
    </div>
  );
}
