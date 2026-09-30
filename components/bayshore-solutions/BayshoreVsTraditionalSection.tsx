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
      bayshoreHighlight: true,
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
      className={`relative w-full max-w-full py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#07192C] text-white" : "bg-[#F5F7FA] text-[#0C1827]"
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-15 ${
            isDark ? "bg-[#FF5500]" : "bg-orange-300"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-[1650px] px-4 xs:px-6 md:px-[30px] z-10">
        {/* Section Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left max-w-4xl mb-12 sm:mb-16"
        >
          <span
            className={`inline-block text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] mb-4 sm:mb-5 font-playfair ${
              isDark ? "!text-slate-300" : "!text-[#556070]"
            }`}
          >
            {titleTag}
          </span>
          <h2
            className={`text-[36px] xs:text-[42px] sm:text-5xl lg:text-[46px] xl:text-[54px] font-extrabold tracking-tight leading-[1.14] sm:leading-[1.18] mb-4 sm:mb-6 font-playfair ${
              isDark ? "!text-white" : "!text-[#0C1827]"
            }`}
          >
            {headlineMain}{" "}
            <span className={isDark ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
              {headlineHighlight}
            </span>
          </h2>
          <p
            style={{ lineHeight: 1.55 }}
            className={`text-[14px] md:text-[16px] font-normal text-left w-full max-w-3xl font-instrument ${
              isDark ? "!text-slate-300" : "!text-[#0C1827]"
            }`}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Reference Image Layout Comparison Grid */}
        <div className="relative w-full max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">

            {/* 1. Left Feature Labels Column (Desktop: 3 cols) */}
            <div className="hidden md:flex md:col-span-3 flex-col pt-[88px] pb-6 pr-6">
              {rowsData.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center h-[96px] py-3 text-[#0C1827] dark:text-slate-200 font-extrabold text-base lg:text-lg font-playfair"
                >
                  <span>{row.label}</span>
                </div>
              ))}
            </div>

            {/* Container wrapper for Middle + Right cards with seam VS badge */}
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-12 relative items-stretch gap-4 md:gap-0">
              
              {/* 2. MIDDLE COLUMN: Bayshore VA (Dark Featured Card) */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6 }}
                className="md:col-span-6 relative rounded-3xl p-6 xs:p-8 md:p-8 lg:p-10 bg-[#07192C] text-white border-2 border-[#FF5500] shadow-2xl z-20 flex flex-col justify-between"
              >
                {/* Header Logo / Title */}
                <div className="h-[64px] flex flex-col justify-center text-center mb-6 border-b border-slate-800/80 pb-4">
                  <h3 className="text-2xl xs:text-3xl font-black tracking-tight font-playfair text-white flex items-center justify-center gap-2">
                    <span className="text-[#FF5500]">Bayshore</span> VA
                  </h3>
                </div>

                {/* Rows Content */}
                <div className="flex flex-col">
                  {rowsData.map((row, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center text-center h-[96px] py-3 border-b border-slate-800/50 last:border-0 font-instrument"
                    >
                      {/* Mobile Row Label */}
                      <span className="md:hidden text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        {row.label}
                      </span>
                      <span
                        className={`text-lg xs:text-xl lg:text-2xl font-extrabold ${
                          row.bayshoreHighlight
                            ? "text-[#FF5500] font-black text-xl xs:text-2xl lg:text-[26px]"
                            : "text-white"
                        }`}
                      >
                        {row.bayshoreValue}
                      </span>
                      <span className="text-xs xs:text-sm text-slate-300 mt-0.5">
                        {row.bayshoreSub}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Seamless Overlapping VS Badge Divider between Middle & Right Cards */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <div className="w-13 h-13 lg:w-14 lg:h-14 rounded-full bg-[#07192C] border-2 border-[#FF5500] text-white font-black text-sm lg:text-base flex items-center justify-center shadow-xl">
                  VS
                </div>
              </div>

              {/* Mobile VS Badge */}
              <div className="md:hidden flex items-center justify-center my-1">
                <div className="w-11 h-11 rounded-full bg-[#FF5500] text-white font-black text-xs flex items-center justify-center shadow-lg border-2 border-white dark:border-[#07192C]">
                  VS
                </div>
              </div>

              {/* 3. RIGHT COLUMN: Full-Time Hire (White / Light Card) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={`md:col-span-6 rounded-3xl p-6 xs:p-8 md:p-8 lg:p-10 border transition-all duration-300 shadow-md flex flex-col justify-between md:-ml-2 z-10 ${
                  isDark
                    ? "bg-[#0B1A2D] border-slate-800 text-white"
                    : "bg-white border-slate-200/90 text-[#0C1827]"
                }`}
              >
                {/* Header */}
                <div className="h-[64px] flex flex-col justify-center text-center mb-6 border-b border-slate-200 dark:border-slate-800/80 pb-4">
                  <h3 className="text-2xl xs:text-3xl font-extrabold tracking-tight font-playfair">
                    Full-Time Hire
                  </h3>
                </div>

                {/* Rows Content */}
                <div className="flex flex-col">
                  {rowsData.map((row, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center text-center h-[96px] py-3 border-b border-slate-100 dark:border-slate-800/50 last:border-0 font-instrument"
                    >
                      {/* Mobile Row Label */}
                      <span className="md:hidden text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                        {row.label}
                      </span>
                      <span className="text-lg xs:text-xl lg:text-2xl font-bold">
                        {row.traditionalValue}
                      </span>
                      <span className="text-xs xs:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
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

