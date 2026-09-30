"use client";

import React from "react";
import { motion } from "framer-motion";

export interface BayshoreVsTraditionalSectionProps {
  theme?: "light" | "dark";
  titleTag?: string;
  headlineMain?: string;
  headlineHighlight?: string;
  subtitle?: string;
  onGetStartedClick?: () => void;
}

export const BayshoreVsTraditionalSection: React.FC<BayshoreVsTraditionalSectionProps> = ({
  theme = "light",
  titleTag = "Bayshore vs. Traditional Hiring",
  headlineMain = "Why Bayshore Is the Cost-Effective Way to Hire",
  headlineHighlight = "Get Skilled Support Without the Full-Time Hiring Cost.",
  subtitle = "Get the same high-quality support without the heavy overhead. Bayshore Virtual Solutions gives you skilled, dedicated professionals from Bangladesh at a fraction of the cost of traditional hiring.",
}) => {
  const isDark = theme === "dark";

  const rowsData = [
    {
      label: "Cost",
      bayshoreValue: "$3 / hour",
      bayshoreSub: "Affordable & Predictable",
      traditionalValue: "$45,000 - $60,000",
      traditionalSub: "Annual Salary",
    },
    {
      label: "Benefits",
      bayshoreValue: "No Benefits",
      bayshoreSub: "You Don't Pay Extra",
      traditionalValue: "$10,000+",
      traditionalSub: "Benefits (Health, PTO, etc.)",
    },
    {
      label: "Equipment & Tools",
      bayshoreValue: "No Overhead",
      bayshoreSub: "No Equipment, No Office Costs",
      traditionalValue: "$5,000+",
      traditionalSub: "Equipment & Software",
    },
    {
      label: "Office Space",
      bayshoreValue: "Skilled Support",
      bayshoreSub: "On-Demand, Scalable",
      traditionalValue: "$5,000+",
      traditionalSub: "Office Space & Overhead",
    },
  ];

  return (
    <section
      id="comparison"
      className={`relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#07192C] text-white" : "bg-[#F0F8FA] text-[#0C1827]"
      }`}
    >
      <div className="relative mx-auto max-w-[1280px] px-4 xs:px-5 sm:px-6 md:px-8 z-10">
        {/* Section Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mx-auto mb-10 sm:mb-14 md:mb-16 flex flex-col items-center "
        >
          <span
            className="inline-block text-[12px] md:text-[16px] font-bold uppercase tracking-[0.2em] mb-2.5 sm:mb-3 font-playfair text-[#F97316]"
          >
            {titleTag}
          </span>
          <h2
            className={`text-[32px] xs:text-[38px] sm:text-4xl lg:text-[46px] font-black !leading-[1.22] sm:!leading-[1.3] mb-4 font-playfair ${
              isDark ? "text-white" : "text-[#0C1827]"
            }`}
          >
            {headlineMain}{"\u00A0"}
            <span className="text-[#F97316]">
              {headlineHighlight}
            </span>
          </h2>
          <p
            style={{ lineHeight: 1.6 }}
            className={`text-[16px] xs:text-[17px] sm:text-[18px] font-normal font-instrument  ${
              isDark ? "text-slate-300" : "text-[#4A6068]"
            }`}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Compact Reference Layout Comparison Container */}
        <div className="relative w-full mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch gap-5 md:gap-4 lg:gap-6">

            {/* Left Labels Column (Desktop: 3 cols) */}
            <div className="hidden md:flex md:col-span-3 flex-col pt-[76px] lg:pt-[84px] pb-4 pr-4 justify-between">
              {rowsData.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center min-h-[90px] lg:min-h-[108px] text-[#0C1827] dark:text-slate-100 font-extrabold text-[12px] md:text-[16px] font-playfair tracking-tight"
                >
                  <span>{row.label}</span>
                </div>
              ))}
            </div>

            {/* Cards Area (Desktop: 9 cols with 2 Cards + Center VS Badge) */}
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 relative items-stretch gap-6 md:gap-5 lg:gap-6">

              {/* CARD 1: Bayshore VA (Dark Card) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="max-w-[420px] md:max-w-none mx-auto w-full rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 lg:p-8 bg-[#07192C] text-white shadow-xl shadow-[#07192C]/20 z-20 flex flex-col justify-between"
              >
                {/* Header Title */}
                <div className="min-h-[56px] sm:min-h-[60px] flex items-center justify-center text-center border-b border-white/15 pb-4 mb-2">
                  <h3 className="text-[28px] xs:text-[32px] sm:text-3xl lg:text-[32px] font-black tracking-tight font-playfair text-white">
                    Bayshore VA
                  </h3>
                </div>

                {/* Rows Content */}
                <div className="flex flex-col">
                  {rowsData.map((row, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col items-center justify-center text-center py-5 md:min-h-[90px] lg:min-h-[108px] font-instrument ${
                        idx !== rowsData.length - 1 ? "border-b border-white/50" : ""
                      }`}
                    >
                      {/* Mobile Row Label Badge */}
                      <span className="md:hidden inline-block bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30 px-4 py-1.5 rounded-full text-[13px] xs:text-[14px] font-black uppercase tracking-wider mb-2">
                        {row.label}
                      </span>
                      <span className="text-[28px] xs:text-[32px] md:text-[28px]  font-black leading-tight text-white">
                        {row.bayshoreValue}
                      </span>
                      <span className="text-[16px] xs:text-[17px] md:text-[18px]  text-slate-200 font-medium mt-1.5">
                        {row.bayshoreSub}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Center Floating VS Badge (Desktop seam overlay) */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <div className="w-13 h-13 lg:w-16 lg:h-16 rounded-full bg-[#07192C] border-[3px] border-[#F97316] text-white font-black text-sm lg:text-lg flex items-center justify-center shadow-xl">
                  VS
                </div>
              </div>

              {/* Mobile VS Badge */}
              <div className="md:hidden flex items-center justify-center -my-3 sm:-my-4 z-30">
                <div className="w-20 h-20 rounded-full bg-[#07192C] text-white font-black text-[16px] flex items-center justify-center shadow-lg border-[3px] border-[#F97316]">
                  VS
                </div>
              </div>

              {/* CARD 2: Full-Time Hire (White / Light Card) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`max-w-[420px] md:max-w-none mx-auto w-full rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 lg:p-8 transition-all duration-300 shadow-md shadow-slate-200/70 dark:shadow-none border z-10 flex flex-col justify-between ${
                  isDark
                    ? "bg-[#0B1A2D] border-slate-800 text-white"
                    : "bg-white border-slate-200/90 text-[#0C1827]"
                }`}
              >
                {/* Header Title */}
                <div className="min-h-[56px] sm:min-h-[60px] flex items-center justify-center text-center border-b border-slate-200 dark:border-slate-800 pb-4 mb-2">
                  <h3 className="text-[28px] xs:text-[32px] sm:text-3xl lg:text-[32px] font-black tracking-tight font-playfair">
                    Full-Time Hire
                  </h3>
                </div>

                {/* Rows Content */}
                <div className="flex flex-col">
                  {rowsData.map((row, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col items-center justify-center text-center py-5 md:min-h-[90px] lg:min-h-[108px] font-instrument ${
                        idx !== rowsData.length - 1 ? "border-b border-slate-200 dark:border-slate-800" : ""
                      }`}
                    >
                      {/* Mobile Row Label Badge */}
                      <span className="md:hidden inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-full text-[13px] xs:text-[14px] font-black uppercase tracking-wider mb-2">
                        {row.label}
                      </span>
                      <span className="text-[28px] xs:text-[32px] md:text-[28px] lg:text-[32px] font-bold leading-tight">
                        {row.traditionalValue}
                      </span>
                      <span className="text-[16px] xs:text-[17px] md:text-[18px] lg:text-[20px] text-[#4A6068] dark:text-slate-300 font-medium mt-1.5">
                        {row.traditionalSub}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BayshoreVsTraditionalSection;




