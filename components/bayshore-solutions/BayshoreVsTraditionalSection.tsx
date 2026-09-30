"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiDollarSign,
  FiHeart,
  FiTv,
  FiHome,
  FiSlash,
  FiUsers,
  FiTrendingUp,
  FiCheck,
} from "react-icons/fi";
import { TbCoins, TbBuildingSkyscraper, TbDeviceDesktop } from "react-icons/tb";

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
  onGetStartedClick,
}) => {
  const isDark = theme === "dark";

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
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-15 ${
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

        {/* 3-Column / 3-Card Comparison Layout (Bayshore VA in Middle as requested) */}
        <div className="relative w-full max-w-[1440px] mx-auto">
          {/* Main Grid: Left Features Labels, Middle Bayshore VA, Right Full-Time Hire */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* 1. Left Feature Labels Column (Desktop: 3 cols) */}
            <div className="hidden md:flex md:col-span-3 flex-col gap-6 py-8 pr-2">
              {/* Cost Row Label */}
              <div className="flex items-center gap-3.5 h-[84px] p-3">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 text-[#FE6F1F] dark:text-[#FF5500] flex items-center justify-center text-xl shrink-0">
                  <TbCoins size={24} />
                </div>
                <span className="font-extrabold text-lg tracking-tight font-playfair">
                  Cost
                </span>
              </div>

              {/* Benefits Row Label */}
              <div className="flex items-center gap-3.5 h-[84px] p-3">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 text-[#FE6F1F] dark:text-[#FF5500] flex items-center justify-center text-xl shrink-0">
                  <FiHeart size={22} />
                </div>
                <span className="font-extrabold text-lg tracking-tight font-playfair">
                  Benefits
                </span>
              </div>

              {/* Equipment & Tools Row Label */}
              <div className="flex items-center gap-3.5 h-[84px] p-3">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 text-[#FE6F1F] dark:text-[#FF5500] flex items-center justify-center text-xl shrink-0">
                  <TbDeviceDesktop size={24} />
                </div>
                <span className="font-extrabold text-lg tracking-tight font-playfair">
                  Equipment & Tools
                </span>
              </div>

              {/* Office Space Row Label */}
              <div className="flex items-center gap-3.5 h-[84px] p-3">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 text-[#FE6F1F] dark:text-[#FF5500] flex items-center justify-center text-xl shrink-0">
                  <TbBuildingSkyscraper size={24} />
                </div>
                <span className="font-extrabold text-lg tracking-tight font-playfair">
                  Office Space
                </span>
              </div>
            </div>

            {/* 2. MIDDLE COLUMN: Bayshore VA (Featured Primary Card) */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5 lg:col-span-5 relative rounded-3xl p-6 xs:p-8 sm:p-9 border-2 transition-all duration-300 shadow-2xl z-20 bg-gradient-to-b from-[#0B1A2D] via-[#07192C] to-[#0A1E34] border-[#FF5500] text-white shadow-[#FF5500]/15"
            >
              {/* Top Highlight Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FE6F1F] text-white text-xs font-extrabold tracking-wider uppercase shadow-md whitespace-nowrap">
                ★ Best Value & Support
              </div>

              {/* Header */}
              <div className="text-center mb-7 pt-2">
                <h3 className="text-2xl xs:text-3xl font-extrabold font-playfair tracking-tight text-white mb-1">
                  Bayshore VA
                </h3>
                <p className="text-xs xs:text-sm text-slate-300 font-instrument font-medium">
                  Managed, Vetted & Ready-to-Work
                </p>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-4">
                {/* 1. Cost Item */}
                <div className="rounded-2xl p-4 bg-[#0F263E]/90 border border-slate-800 flex items-center gap-4 min-h-[84px] transition-all hover:border-[#FF5500]/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF5500] to-amber-500 text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                    <FiDollarSign size={22} className="stroke-[3]" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl xs:text-2xl font-extrabold text-[#FF5500] font-instrument">
                        $3 / hour
                      </span>
                    </div>
                    <p className="text-xs xs:text-sm text-slate-300 font-instrument">
                      Affordable & Predictable
                    </p>
                  </div>
                </div>

                {/* 2. Benefits Item */}
                <div className="rounded-2xl p-4 bg-[#0F263E]/90 border border-slate-800 flex items-center gap-4 min-h-[84px] transition-all hover:border-[#FF5500]/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF5500] to-amber-500 text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                    <FiSlash size={22} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-base xs:text-lg font-extrabold text-white font-instrument">
                      No Benefits
                    </h4>
                    <p className="text-xs xs:text-sm text-slate-300 font-instrument">
                      You Don&apos;t Pay Extra
                    </p>
                  </div>
                </div>

                {/* 3. Equipment & Tools Item */}
                <div className="rounded-2xl p-4 bg-[#0F263E]/90 border border-slate-800 flex items-center gap-4 min-h-[84px] transition-all hover:border-[#FF5500]/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF5500] to-amber-500 text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                    <FiUsers size={22} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-base xs:text-lg font-extrabold text-white font-instrument">
                      No Overhead
                    </h4>
                    <p className="text-xs xs:text-sm text-slate-300 font-instrument">
                      No Equipment, No Office Costs
                    </p>
                  </div>
                </div>

                {/* 4. Office Space Item */}
                <div className="rounded-2xl p-4 bg-[#0F263E]/90 border border-slate-800 flex items-center gap-4 min-h-[84px] transition-all hover:border-[#FF5500]/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF5500] to-amber-500 text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                    <FiTrendingUp size={22} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-base xs:text-lg font-extrabold text-white font-instrument">
                      Skilled Support
                    </h4>
                    <p className="text-xs xs:text-sm text-slate-300 font-instrument">
                      On-Demand, Scalable
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating VS Badge Divider */}
            <div className="md:hidden flex items-center justify-center my-2">
              <div className="w-12 h-12 rounded-full bg-[#FF5500] text-white font-black text-sm flex items-center justify-center shadow-lg border-2 border-white dark:border-[#07192C]">
                VS
              </div>
            </div>

            {/* 3. RIGHT COLUMN: Full-Time Hire (Traditional Card) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`md:col-span-4 lg:col-span-4 rounded-3xl p-6 xs:p-7 border transition-all duration-300 shadow-md relative ${
                isDark
                  ? "bg-[#0B1A2D]/80 border-slate-800 text-white"
                  : "bg-white border-slate-200/90 text-[#0C1827]"
              }`}
            >
              {/* Header */}
              <div className="text-center mb-7 pt-2">
                <h3
                  className={`text-xl xs:text-2xl font-extrabold font-playfair tracking-tight mb-1 ${
                    isDark ? "text-white" : "text-[#0C1827]"
                  }`}
                >
                  Full-Time Hire
                </h3>
                <p
                  className={`text-xs xs:text-sm font-instrument font-medium ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Traditional In-House Employee
                </p>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-4">
                {/* 1. Cost Item */}
                <div
                  className={`rounded-2xl p-4 border flex items-center gap-4 min-h-[84px] ${
                    isDark
                      ? "bg-[#07192C]/70 border-slate-800/80"
                      : "bg-slate-50/80 border-slate-200/70"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-lg shrink-0 ${
                      isDark
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200/80 text-slate-700"
                    }`}
                  >
                    <FiDollarSign size={20} />
                  </div>
                  <div>
                    <h4
                      className={`text-base xs:text-lg font-bold font-instrument ${
                        isDark ? "text-white" : "text-[#0C1827]"
                      }`}
                    >
                      $45,000 - $60,000
                    </h4>
                    <p
                      className={`text-xs xs:text-sm font-instrument ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Annual Salary
                    </p>
                  </div>
                </div>

                {/* 2. Benefits Item */}
                <div
                  className={`rounded-2xl p-4 border flex items-center gap-4 min-h-[84px] ${
                    isDark
                      ? "bg-[#07192C]/70 border-slate-800/80"
                      : "bg-slate-50/80 border-slate-200/70"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-lg shrink-0 ${
                      isDark
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200/80 text-slate-700"
                    }`}
                  >
                    <FiHeart size={18} />
                  </div>
                  <div>
                    <h4
                      className={`text-base xs:text-lg font-bold font-instrument ${
                        isDark ? "text-white" : "text-[#0C1827]"
                      }`}
                    >
                      $10,000+
                    </h4>
                    <p
                      className={`text-xs xs:text-sm font-instrument ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Benefits (Health, PTO, etc.)
                    </p>
                  </div>
                </div>

                {/* 3. Equipment & Tools Item */}
                <div
                  className={`rounded-2xl p-4 border flex items-center gap-4 min-h-[84px] ${
                    isDark
                      ? "bg-[#07192C]/70 border-slate-800/80"
                      : "bg-slate-50/80 border-slate-200/70"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-lg shrink-0 ${
                      isDark
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200/80 text-slate-700"
                    }`}
                  >
                    <FiTv size={18} />
                  </div>
                  <div>
                    <h4
                      className={`text-base xs:text-lg font-bold font-instrument ${
                        isDark ? "text-white" : "text-[#0C1827]"
                      }`}
                    >
                      $5,000+
                    </h4>
                    <p
                      className={`text-xs xs:text-sm font-instrument ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Equipment & Software
                    </p>
                  </div>
                </div>

                {/* 4. Office Space Item */}
                <div
                  className={`rounded-2xl p-4 border flex items-center gap-4 min-h-[84px] ${
                    isDark
                      ? "bg-[#07192C]/70 border-slate-800/80"
                      : "bg-slate-50/80 border-slate-200/70"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-lg shrink-0 ${
                      isDark
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-200/80 text-slate-700"
                    }`}
                  >
                    <FiHome size={18} />
                  </div>
                  <div>
                    <h4
                      className={`text-base xs:text-lg font-bold font-instrument ${
                        isDark ? "text-white" : "text-[#0C1827]"
                      }`}
                    >
                      $5,000+
                    </h4>
                    <p
                      className={`text-xs xs:text-sm font-instrument ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Office Space & Overhead
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BayshoreVsTraditionalSection;
