"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiShield } from "react-icons/fi";

export interface ManagedStaffingSectionProps {
  theme?: "light" | "dark";
  bgImage?: string;
  headlineMain?: string;
  headlineHighlight?: string;
  subtitle?: string;
  features?: string[];
  quoteText?: string;
  quoteAuthor?: string;
}

export const DEFAULT_FEATURES: string[] = [
  "Vetted Professionals",
  "U.S. Time Zone Alignment",
  "Managed Operations",
  "Dedicated Account Manager",
  "Ongoing Support",
  "Scalable Teams",
  "Security & Compliance",
  "Focus on Long-Term Success",
];

export const ManagedStaffingSection: React.FC<ManagedStaffingSectionProps> = ({
  theme = "light",
  bgImage = "/assets/bayshore-solutions/home/managed-staffing.png",
  headlineMain = "Not a Freelancer Marketplace. A Managed",
  headlineHighlight = "Staffing Operation.",
  subtitle = "We do more than connect you with freelancers. We manage the entire staffing process - from vetting to onboarding to ongoing support - so you get reliable talent and real results.",
  features = DEFAULT_FEATURES,
  quoteText = '"Bayshore gives us the structure, support, and accountability we never get from freelance platforms."',
  quoteAuthor = "- Managing Partner Law Firm, Florida",
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className={`relative w-full max-w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[740px] flex items-center overflow-hidden transition-colors duration-300 py-16 sm:py-20 lg:py-24 ${
        theme === "dark"
          ? "bg-[#07192C] text-white"
          : "bg-[#F5F7FA] text-[#0C1827]"
      }`}
    >
      {/* BACKGROUND IMAGE & GRADIENT BLEND LAYERS (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Right Side Image Area */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[58%] h-full z-0">
          {!imgError ? (
            <div className="relative w-full h-full">
              <Image
                src={bgImage}
                alt="Managed Staffing Operation Background"
                fill
                priority
                className={`object-cover object-right transition-opacity duration-300 ${
                  theme === "dark" ? "brightness-90 opacity-90" : "brightness-95 opacity-95"
                }`}
                onError={() => setImgError(true)}
              />
              {/* Smooth Left Edge Color Fade over Image */}
              <div
                className={`absolute inset-y-0 left-0 w-72 xl:w-96 pointer-events-none transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#07192C] via-[#07192C]/80 to-transparent"
                    : "bg-gradient-to-r from-[#F5F7FA] via-[#F5F7FA]/80 to-transparent"
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
          className={`absolute left-0 top-0 bottom-0 w-[45%] xl:w-[48%] h-full z-[1] transition-colors duration-300 ${
            theme === "dark" ? "bg-[#07192C]" : "bg-[#F5F7FA]"
          }`}
        />

        {/* Smooth Seamless Middle Transition Fade Overlay */}
        <div
          className={`absolute inset-y-0 left-[40%] xl:left-[44%] w-[20%] pointer-events-none z-[2] transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-r from-[#07192C] via-[#07192C]/40 to-transparent"
              : "bg-gradient-to-r from-[#F5F7FA] via-[#F5F7FA]/40 to-transparent"
          }`}
        />
      </div>

      {/* FOREGROUND CONTENT CONTAINER */}
      <div className="container mx-auto max-w-[1650px] px-6 sm:px-8 md:px-[30px] relative z-10 w-full">
        <div className="w-full lg:w-[54%] xl:w-[50%] flex flex-col justify-center pr-0 lg:pr-6">
          {/* Main Headline */}
          <h2
            className={`text-3xl sm:text-5xl lg:text-[52px] xl:text-[60px] font-extrabold tracking-tight leading-[1.25] sm:leading-[1.2] mb-6 sm:mb-8 ${
              theme === "dark" ? "!text-white" : "!text-[#0C1827]"
            }`}
          >
            <span className="block mb-2 sm:mb-2.5">Not a Freelancer Marketplace.</span>
            <span className="block">
              A Managed{" "}
              <span
                className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}
              >
                {headlineHighlight}
              </span>
            </span>
          </h2>

          {/* Subtitle Paragraph */}
          <p
            className={`text-base sm:text-lg lg:text-[19px] leading-relaxed sm:leading-[1.65] mb-8 sm:mb-10 font-medium max-w-xl lg:max-w-2xl xl:max-w-3xl ${
              theme === "dark" ? "!text-slate-100" : "!text-[#475569]"
            }`}
          >
            {subtitle}
          </p>

          {/* Mobile Image Card (Shown on mobile for clean contrast & visual appeal) */}
          <div className="w-full h-[280px] sm:h-[340px] rounded-2xl sm:rounded-3xl relative mb-8 overflow-hidden lg:hidden shadow-lg border border-slate-200/60 dark:border-slate-800">
            <Image
              src={bgImage}
              alt="Managed Staffing Professional"
              fill
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* 8 Feature Items Grid (2 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10 sm:mb-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full shrink-0 flex items-center justify-center border shadow-xs ${
                    theme === "dark"
                      ? "bg-slate-800/90 border-slate-700 text-[#FF5500]"
                      : "bg-white border-slate-200/90 text-[#0C1827]"
                  }`}
                >
                  <FiShield className="text-base sm:text-lg" />
                </div>
                <span
                  className={`text-base sm:text-lg font-bold tracking-tight ${
                    theme === "dark" ? "!text-slate-100" : "!text-[#1E293B]"
                  }`}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Testimonial Quote Callout Box */}
          <div
            className={`rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 max-w-xl transition-all duration-300 backdrop-blur-md ${
              theme === "dark"
                ? "bg-[#0B1A2D]/95 border border-slate-800/90 shadow-xl text-white"
                : "bg-white border border-slate-200/80 shadow-xs text-[#0C1827]"
            }`}
          >
            <p
              className={`text-base sm:text-lg lg:text-[19px] font-extrabold leading-snug mb-3  ${
                theme === "dark" ? "!text-white" : "!text-[#0C1827]"
              }`}
            >
              {quoteText}
            </p>
            <p
              className={`text-sm sm:text-base font-semibold ${
                theme === "dark" ? "!text-slate-300" : "!text-[#64748B]"
              }`}
            >
              {quoteAuthor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedStaffingSection;
