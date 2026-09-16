"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiFileText,
  FiHeadphones,
  FiUsers,
  FiCheckCircle,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";
import { TbRocket } from "react-icons/tb";

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface HowItWorksSectionProps {
  theme?: "light" | "dark";
  bgImage?: string;
  titleTag?: string;
  headlineMain?: string;
  headlineHighlight?: string;
  subtitle?: string;
  steps?: HowItWorksStep[];
  onFindTalentClick?: () => void;
}

export const DEFAULT_STEPS: HowItWorksStep[] = [
  {
    stepNumber: "01",
    title: "Tell Us What You Need",
    description: "Share your requirements and goals—only takes a minute.",
    icon: <FiFileText className="text-2xl sm:text-3xl" />,
  },
  {
    stepNumber: "02",
    title: "We Find the Right Match",
    description: "We source and vet candidates based on your industry and specific needs.",
    icon: <FiHeadphones className="text-2xl sm:text-3xl" />,
  },
  {
    stepNumber: "03",
    title: "Meet Your Candidates",
    description: "Interview top candidates and find the best fit for your team.",
    icon: <FiUsers className="text-2xl sm:text-3xl" />,
  },
  {
    stepNumber: "04",
    title: "You Onboard",
    description: "We handle the setup, training and integration with your tools.",
    icon: <FiCheckCircle className="text-2xl sm:text-3xl" />,
  },
  {
    stepNumber: "05",
    title: "We Manage the Rest",
    description: "Ongoing support, performance mentoring and easy replacements when you need it.",
    icon: <TbRocket className="text-2xl sm:text-3xl" />,
  },
];

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  theme = "light",
  bgImage = "/assets/bayshore-solutions/home/world-map-banner.png",
  titleTag = "HOW IT WORKS",
  headlineMain = 'From "I Need Help" to',
  headlineHighlight = "Hired.",
  subtitle = "Simple. Clear. No Commitment Until You Choose.",
  steps = DEFAULT_STEPS,
  onFindTalentClick,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="how-it-works"
      className={`relative w-full max-w-full py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#07192C] text-white" : "bg-[#F8F9FA] text-[#0C1827]"
      }`}
    >
      {/* Background Dotted World Map Image with Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden px-4 pt-4">
        {!imgError ? (
          <div className="relative w-full max-w-[1350px] h-[520px]">
            <Image
              src={bgImage}
              alt="World Map Background"
              fill
              priority
              className="object-contain object-center opacity-40 dark:opacity-20"
              onError={() => setImgError(true)}
            />
            {/* Background Overlay */}
            <div
              className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-b from-[#07192C]/40 via-transparent to-[#07192C]/60"
                  : "bg-gradient-to-b from-[#F8F9FA]/30 via-transparent to-[#F8F9FA]/40"
              }`}
            />
          </div>
        ) : (
          /* SVG Fallback Dotted Pattern with Overlay */
          <div className="relative w-full h-full">
            <svg
              className="w-full h-full opacity-40"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <pattern
                id="how-it-works-dots"
                x="0"
                y="0"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="3"
                  cy="3"
                  r="1.8"
                  fill={theme === "dark" ? "#FFFFFF" : "#0C1827"}
                  opacity="0.3"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#how-it-works-dots)" />
            </svg>
            <div
              className={`absolute inset-0 pointer-events-none ${
                theme === "dark" ? "bg-[#07192C]/30" : "bg-[#F8F9FA]/30"
              }`}
            />
          </div>
        )}
      </div>

      {/* Dotted Node Hotspot Glows */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden max-w-[1350px] mx-auto hidden lg:block">
        {/* Hotspot 1 */}
        <div className="absolute top-[36%] left-[18%] w-16 h-16 bg-[#FE6F1F]/25 rounded-full blur-lg" />
        <div className="absolute top-[39%] left-[20%] w-3 h-3 bg-[#FE6F1F] rounded-full shadow-[0_0_10px_#FE6F1F]" />

        {/* Hotspot 2 */}
        <div className="absolute top-[60%] left-[32%] w-14 h-14 bg-[#FE6F1F]/20 rounded-full blur-lg" />
        <div className="absolute top-[62%] left-[34%] w-2.5 h-2.5 bg-[#FE6F1F] rounded-full opacity-90" />

        {/* Hotspot 3 */}
        <div className="absolute top-[30%] left-[48%] w-20 h-20 bg-[#FE6F1F]/30 rounded-full blur-xl" />
        <div className="absolute top-[33%] left-[50%] w-3.5 h-3.5 bg-[#FE6F1F] rounded-full shadow-[0_0_12px_#FE6F1F]" />

        {/* Hotspot 4 */}
        <div className="absolute top-[26%] left-[70%] w-24 h-24 bg-[#FE6F1F]/25 rounded-full blur-xl" />
        <div className="absolute top-[29%] left-[72%] w-3 h-3 bg-[#FE6F1F] rounded-full shadow-[0_0_10px_#FE6F1F]" />

        {/* Hotspot 5 */}
        <div className="absolute top-[43%] left-[84%] w-16 h-16 bg-[#FE6F1F]/20 rounded-full blur-lg" />
        <div className="absolute top-[45%] left-[85%] w-2.5 h-2.5 bg-[#FE6F1F] rounded-full opacity-90" />
      </div>

      <div className="container mx-auto max-w-[1650px] px-6 sm:px-8 md:px-[30px] relative z-10">
        {/* Section Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left max-w-5xl mb-12 sm:mb-16"
        >
          <span
            className={`inline-block text-xl sm:text-2xl font-bold uppercase tracking-[0.2em] mb-3 font-playfair ${
              theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
            }`}
          >
            {titleTag}
          </span>
          <h2
            className={`text-[42px] xs:text-[46px] sm:text-6xl lg:text-[54px] xl:text-[60px] font-extrabold tracking-tight leading-[1.12] sm:leading-[1.18] mb-4 sm:mb-6 text-left !text-left font-playfair ${
              theme === "dark" ? "!text-white" : "!text-[#0C1827]"
            }`}
          >
            {headlineMain}{" "}
            <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
              {headlineHighlight}
            </span>
          </h2>
          <p
            style={{ lineHeight: 1.55 }}
            className={`text-xl md:text-2xl font-normal text-left !text-left w-full max-w-3xl font-instrument ${
              theme === "dark" ? "!text-slate-300" : "!text-[#0C1827]"
            }`}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* 5 Steps Process Container with Organic Wave Layout */}
        <div className="relative mb-16 sm:mb-20 min-h-[380px]">
          {/* Curved Dashed SVG Connecting Line threading through Icon Circles */}
          <div className="hidden lg:block absolute left-0 right-0 top-0 w-full h-[380px] pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 380"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 100 135 C 180 175, 240 195, 300 190 C 380 185, 440 135, 500 125 C 570 115, 640 70, 700 75 C 770 80, 840 110, 900 115"
                stroke={theme === "dark" ? "#FF5500" : "#FE6F1F"}
                strokeWidth="2.5"
                strokeDasharray="6 6"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* 5 Steps Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-4 relative z-10 items-start">
            {steps.map((item, idx) => {
              const desktopPaddingTop =
                idx === 0
                  ? "lg:pt-[55px]"
                  : idx === 1
                  ? "lg:pt-[110px]"
                  : idx === 2
                  ? "lg:pt-[45px]"
                  : idx === 3
                  ? "lg:pt-[0px]"
                  : "lg:pt-[35px]";

              const isLastOddItem = idx === steps.length - 1 && steps.length % 2 !== 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.88, rotate: idx % 2 === 0 ? -3 : 3 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: idx * 0.12, type: "spring", stiffness: 95, damping: 14 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className={`flex flex-col items-center text-center transition-all duration-300 group cursor-pointer ${desktopPaddingTop} ${
                    isLastOddItem ? "col-span-2 lg:col-span-1 max-w-[260px] mx-auto mt-2 lg:mt-0" : ""
                  }`}
                >
                  {/* Step Number Label */}
                  <span
                    className={`text-lg sm:text-2xl font-extrabold mb-2 tracking-tight font-playfair ${
                      theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"
                    }`}
                  >
                    {item.stepNumber}
                  </span>

                  {/* Icon Circle Container */}
                  <div
                    className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 border-2 transition-all duration-300 shadow-md group-hover:shadow-xl relative z-10 ${
                      theme === "dark"
                        ? "bg-[#0B1A2D] border-slate-700 text-white group-hover:bg-[#FF5500] shadow-black/40"
                        : "bg-white border-slate-200 text-[#0C1827] group-hover:bg-[#07192C] group-hover:!text-white shadow-slate-200/60"
                    }`}
                  >
                    {/* Inner Circle Glow */}
                    <div
                      className={`absolute inset-0 rounded-full ${
                        theme === "dark" ? "bg-[#FF5500]/10" : "bg-[#FE6F1F]/5"
                      }`}
                    />
                    <div className={`transition-colors duration-300 ${theme === "dark" ? "text-[#FF5500] group-hover:text-white" : "text-[#0C1827] group-hover:text-white"}`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Step Title & Description */}
                  <div className="flex flex-col items-center px-1">
                    <h3
                      className={`text-base sm:text-[22px] lg:text-[24px] font-extrabold tracking-tight mb-1.5 max-w-[170px] sm:max-w-[220px] leading-snug font-playfair ${
                        theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{ lineHeight: 1.5 }}
                      className={`text-xs sm:text-base lg:text-[15px] font-normal max-w-[180px] sm:max-w-[240px] font-instrument ${
                        theme === "dark" ? "!text-slate-300" : "!text-[#0C1827]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className={`rounded-[28px] sm:rounded-[36px] p-6 sm:px-10 sm:py-9 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 ${
            theme === "dark"
              ? "bg-[#0B1A2D] border-none !text-white shadow-xl shadow-black/30"
              : "bg-white border border-slate-200/90 !text-[#0C1827] shadow-md"
          }`}
        >
          {/* Left Info with Shield Check Icon */}
          <div className="flex items-center gap-5 sm:gap-6">
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shrink-0 flex items-center justify-center border shadow-xs ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700 !text-white"
                  : "bg-[#F8F9FA] border-slate-200 !text-[#0C1827]"
              }`}
            >
              <FiShield className={`text-2xl sm:text-3xl ${theme === "dark" ? "!text-white" : "!text-[#0C1827]"}`} />
            </div>
            <div>
              <h3
                className={`text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight mb-1 font-playfair ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}
              >
                Your success is built on real support.
              </h3>
              <p
                className={`text-base sm:text-lg font-semibold font-instrument ${
                  theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
                }`}
              >
                We don&apos;t just place talent—we&apos;re with you for the long term.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={onFindTalentClick}
            className={`px-9 py-4.5 sm:px-10 sm:py-5 rounded-full font-extrabold text-base sm:text-lg shrink-0 transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-xl !text-white ${
              theme === "dark"
                ? "bg-[#FF5500] hover:bg-[#e04a00]"
                : "bg-[#07192C] hover:bg-[#000e1e]"
            }`}
          >
            <span className="!text-white">Find Talent for My Role</span>
            <FiArrowRight size={22} className="!text-white" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
