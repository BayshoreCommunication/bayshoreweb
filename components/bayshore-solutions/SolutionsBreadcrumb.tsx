"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SolutionsBreadcrumbProps {
  theme?: "light" | "dark";
  title?: string;
  subtitle?: string;
  bgImage?: string;
  breadcrumbItems?: BreadcrumbItem[];
}

export const SolutionsBreadcrumb: React.FC<SolutionsBreadcrumbProps> = ({
  theme = "light",
  title = "Solutions",
  subtitle = "Pre-vetted virtual professionals for law firms, healthcare providers, real estate teams, and growing businesses. Save time, reduce costs, and focus on what matters most.",
  bgImage = "/assets/bayshore-solutions/home/solution-breadcrumb.png",
  breadcrumbItems = [
    { label: "Home", href: "/bayshore-solutions" },
    { label: "Solutions" },
  ],
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className={`relative w-full max-w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#07192C] text-white"
          : "bg-white text-[#0C1827]"
      }`}
    >
      {/* BACKGROUND IMAGE & BLEND LAYERS (Desktop / Tablet) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Right Side Image Area */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[58%] h-full z-0">
          {!imgError ? (
            <div className="relative w-full h-full">
              <Image
                src={bgImage}
                alt={title}
                fill
                priority
                className={`object-cover object-right transition-opacity duration-300 ${
                  theme === "dark" ? "brightness-90 opacity-90" : "brightness-95 opacity-95"
                }`}
                onError={() => setImgError(true)}
              />
              {/* Left Edge Gradient Fade over Image to merge smoothly with Left Content Area */}
              <div
                className={`absolute inset-y-0 left-0 w-72 xl:w-96 pointer-events-none transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#07192C] via-[#07192C]/85 to-transparent"
                    : "bg-gradient-to-r from-white via-white/85 to-transparent"
                }`}
              />
            </div>
          ) : (
            <div
              className={`absolute inset-0 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-slate-900 via-[#0A1E34] to-[#07192C]"
                  : "bg-gradient-to-br from-slate-100 via-white to-slate-200"
              }`}
            />
          )}
        </div>

        {/* Left Side Solid Background (Covers Text Area Completely for 100% Readability) */}
        <div
          className={`hidden lg:block absolute left-0 top-0 bottom-0 w-[46%] xl:w-[48%] h-full z-[1] transition-colors duration-300 ${
            theme === "dark" ? "bg-[#07192C]" : "bg-white"
          }`}
        />

        {/* Middle Smooth Blur & Fade Overlay */}
        <div
          className={`hidden lg:block absolute inset-y-0 left-[38%] xl:left-[42%] w-[24%] pointer-events-none z-[2] backdrop-blur-[6px] [mask-image:linear-gradient(to_right,black_20%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_20%,transparent_100%)] ${
            theme === "dark"
              ? "bg-gradient-to-r from-[#07192C] via-[#07192C]/70 to-transparent"
              : "bg-gradient-to-r from-white via-white/70 to-transparent"
          }`}
        />

        {/* Mobile Gradient Overlay */}
        <div
          className={`lg:hidden absolute inset-0 pointer-events-none ${
            theme === "dark"
              ? "bg-gradient-to-r from-[#07192C] via-[#07192C]/90 to-[#07192C]/40"
              : "bg-gradient-to-r from-white via-white/90 to-white/40"
          }`}
        />
      </div>

      {/* FOREGROUND CONTENT CONTAINER */}
      <div className="container mx-auto max-w-[1650px] px-6 sm:px-8 md:px-[30px] relative z-10 w-full py-12 sm:py-16">
        <div className="w-full lg:w-[52%] xl:w-[48%] flex flex-col justify-center items-start text-left">
          {/* Main Title with Serif Styling matching design */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`text-[42px] xs:text-[46px] sm:text-6xl lg:text-[64px] font-playfair font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6 text-left !text-left ${
              theme === "dark" ? "!text-white" : "!text-[#0C1827]"
            }`}
          >
            {title}
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className={`text-lg sm:text-xl lg:text-[22px] leading-relaxed mb-8 font-medium max-w-xl text-left !text-left w-full font-instrument ${
              theme === "dark" ? "!text-slate-300" : "!text-[#475569]"
            }`}
          >
            {subtitle}
          </motion.p>

          {/* Breadcrumb Navigation Bar */}
          <motion.nav
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            aria-label="Breadcrumb"
            className="flex items-center gap-3 font-instrument"
          >
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;

              return (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <span className="text-slate-400 font-semibold text-base sm:text-lg">
                      /
                    </span>
                  )}
                  {isLast || !item.href ? (
                    <span
                      className={`font-bold text-base sm:text-lg ${
                        theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"
                      }`}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-bold text-base sm:text-lg transition-colors hover:underline ${
                        theme === "dark"
                          ? "!text-white hover:!text-[#FF5500]"
                          : "!text-[#0C1827] hover:!text-[#FE6F1F]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </motion.nav>
        </div>
      </div>
    </section>
  );
};

export default SolutionsBreadcrumb;
