"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiUserCheck,
  FiClock,
  FiArrowRight,
  FiBriefcase,
  FiShield,
  FiTrendingUp,
  FiHome,
  FiCode,
  FiBarChart2,
  FiCheck,
} from "react-icons/fi";
import { TbScale } from "react-icons/tb";

export interface TalentProfile {
  id: string;
  name: string;
  role: string;
  category: "Legal" | "Healthcare" | "Marketing" | "Real Estate" | "Tech" | "Finance" | "Admin";
  categoryLabel: string;
  categoryIcon: React.ReactNode;
  experience: string;
  hoursType: string;
  imagePath: string;
}

export interface TalentShowcaseSectionProps {
  theme?: "light" | "dark";
  talents?: TalentProfile[];
  onFindTalentForRoleClick?: () => void;
}

export const DEFAULT_TALENTS: TalentProfile[] = [
  {
    id: "t1",
    name: "Abrar",
    role: "Full Stack Developer",
    category: "Tech",
    categoryLabel: "Tech",
    categoryIcon: <FiCode className="text-base" />,
    experience: "5+ Years",
    hoursType: "US Hours",
    imagePath: "/assets/bayshore-solutions/home/Abrar.png",
  },
  {
    id: "t2",
    name: "Arfin",
    role: "UI/UX & Web Specialist",
    category: "Tech",
    categoryLabel: "Tech",
    categoryIcon: <FiCode className="text-base" />,
    experience: "4+ Years",
    hoursType: "US Hours",
    imagePath: "/assets/bayshore-solutions/home/arfin.png",
  },
  {
    id: "t3",
    name: "Fahim",
    role: "Legal Assistant",
    category: "Legal",
    categoryLabel: "Legal",
    categoryIcon: <TbScale className="text-base" />,
    experience: "4+ Years",
    hoursType: "US Hours",
    imagePath: "/assets/bayshore-solutions/home/Fahim.png",
  },
  {
    id: "t4",
    name: "Hossain",
    role: "Medical Billing Specialist",
    category: "Healthcare",
    categoryLabel: "Healthcare",
    categoryIcon: <FiShield className="text-base" />,
    experience: "6+ Years",
    hoursType: "US Hours",
    imagePath: "/assets/bayshore-solutions/home/Hossain.png",
  },
  {
    id: "t5",
    name: "Minhazur",
    role: "Financial Analyst & Ops",
    category: "Finance",
    categoryLabel: "Finance",
    categoryIcon: <FiBarChart2 className="text-base" />,
    experience: "5+ Years",
    hoursType: "US Hours",
    imagePath: "/assets/bayshore-solutions/home/minhazur.png",
  },
  {
    id: "t6",
    name: "Yuvir",
    role: "Digital Marketing Specialist",
    category: "Marketing",
    categoryLabel: "Marketing",
    categoryIcon: <FiTrendingUp className="text-base" />,
    experience: "4+ Years",
    hoursType: "US Hours",
    imagePath: "/assets/bayshore-solutions/home/Yuvir.png",
  },
];

export const CATEGORIES = [
  "All",
  "Legal",
  "Healthcare",
  "Marketing",
  "Real Estate",
  "Tech",
  "Finance",
  "Admin",
];

export const TalentShowcaseSection: React.FC<TalentShowcaseSectionProps> = ({
  theme = "light",
  talents = DEFAULT_TALENTS,
  onFindTalentForRoleClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredTalents =
    selectedCategory === "All"
      ? talents
      : talents.filter((t) => t.category === selectedCategory);

  // Guarantee enough cards to fill 200%+ of widescreen view for a seamless 100% infinite marquee loop
  const repeatCount = Math.max(6, Math.ceil(18 / (filteredTalents.length || 1)));
  const marqueeTalents = Array.from({ length: repeatCount }).flatMap(() => filteredTalents);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="our-talent"
      className={`py-16 sm:py-20 lg:py-24 w-full max-w-full overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#07192C] text-white" : "bg-[#F5F7FA] text-[#0C1827]"
      }`}
    >
      <div className="container mx-auto max-w-[1650px] px-6 sm:px-8 md:px-[30px]">
        {/* Section Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left max-w-5xl xl:max-w-6xl mb-12 sm:mb-16"
        >
          <span
            className={`inline-block text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] mb-4 sm:mb-5 font-playfair ${
              theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
            }`}
          >
            MEET THE TALENT
          </span>
          <h2 className={`text-[42px] xs:text-[46px] sm:text-6xl lg:text-[46px] xl:text-[54px] font-extrabold tracking-tight leading-[1.12] sm:leading-[1.25] mb-4 sm:mb-6 text-left !text-left font-playfair ${
            theme === "dark" ? "!text-white" : "!text-[#0C1827]"
          }`}>
            Real Talent. Ready for{" "}
            <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
              Real Work.
            </span>
          </h2>
          <p
            style={{ lineHeight: 1.55 }}
            className={`text-xl md:text-2xl font-normal max-w-3xl text-left !text-left w-full font-instrument ${
              theme === "dark" ? "!text-slate-300" : "!text-[#0C1827]"
            }`}
          >
            Explore the types of pre-vetted virtual professionals we can match to your business.
          </p>
        </motion.div>

        {/* Industry Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-start flex-wrap gap-2.5 sm:gap-3.5 mb-10 sm:mb-14 font-instrument"
        >
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-extrabold text-sm sm:text-base transition-all duration-300 border shadow-xs ${
                  isActive
                    ? theme === "dark"
                      ? "bg-[#FF5500] !text-white border-[#FF5500] shadow-md"
                      : "bg-[#07192C] !text-white border-[#07192C] shadow-md"
                    : theme === "dark"
                    ? "bg-[#0B1A2D] !text-slate-100 border-slate-700 hover:border-slate-500 hover:!text-white"
                    : "bg-white !text-[#0C1827] border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute inset-0 rounded-full bg-inherit z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>

      {/* Infinite Marquee CSS Animation */}
      <style jsx global>{`
        @keyframes talentMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .talent-marquee-track {
          display: flex;
          width: max-content;
          animation: talentMarquee 115s linear infinite;
          padding-top: 20px;
          padding-bottom: 24px;
          padding-left: 8px;
          padding-right: 8px;
        }
        .talent-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

        {/* Talent Cards Infinite Marquee Slider (Slowly moves right to left, pauses on hover) */}
        <div className="relative w-full overflow-hidden mb-14 sm:mb-18 -my-4 py-2">
          {/* Subtle Side Fade Accents */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-6 sm:w-10 z-20 pointer-events-none opacity-40 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-r from-[#07192C] to-transparent"
                : "bg-gradient-to-r from-[#F5F7FA] to-transparent"
            }`}
          />
          <div
            className={`absolute right-0 top-0 bottom-0 w-6 sm:w-10 z-20 pointer-events-none opacity-40 transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gradient-to-l from-[#07192C] to-transparent"
                : "bg-gradient-to-l from-[#F5F7FA] to-transparent"
            }`}
          />

          <div
            ref={scrollContainerRef}
            className="overflow-x-hidden scroll-smooth w-full"
          >
            <div className="talent-marquee-track flex items-stretch gap-5 sm:gap-6">
              {marqueeTalents.map((person, idx) => (
              <motion.div
                key={`${person.id}-${idx}`}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className={`w-[260px] sm:w-[290px] shrink-0 rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-lg cursor-pointer ${
                  theme === "dark"
                    ? "bg-[#0B1A2D] border-none shadow-lg shadow-black/40 !text-white"
                    : "bg-white border-none shadow-sm hover:shadow-lg !text-[#0C1827]"
                }`}
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative w-full h-[220px] sm:h-[240px] bg-slate-100 dark:bg-slate-800 transition-colors duration-500 group-hover:bg-[#FFF0E6] dark:group-hover:bg-[#2A1810] overflow-hidden">
                    <Image
                      src={person.imagePath}
                      alt={person.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Light Warm Orange Background Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FE6F1F]/25 via-[#FE6F1F]/15 to-[#FE6F1F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-multiply" />
                  </div>

                  {/* Card Info Area */}
                  <div className="p-6 sm:p-7">
                    <h3
                      className={`text-2xl sm:text-[25px] font-extrabold tracking-tight mb-1 font-playfair ${
                        theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                      }`}
                    >
                      {person.name}
                    </h3>
                    <p
                      className={`text-base font-semibold mb-4 ${
                        theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
                      }`}
                    >
                      {person.role}
                    </p>

                    {/* Metadata tags */}
                    <div className="space-y-2 text-sm font-semibold">
                      <div className="flex items-center gap-2">
                        <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
                          {person.categoryIcon}
                        </span>
                        <span className={theme === "dark" ? "!text-slate-200" : "!text-[#0C1827]"}>
                          {person.categoryLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"} />
                        <span className={theme === "dark" ? "!text-slate-200" : "!text-[#0C1827]"}>
                          {person.experience} | {person.hoursType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

        {/* Bottom CTA Banner ("BUILD A STRONGER TEAM") */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`relative rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 overflow-hidden transition-all duration-300 ${
            theme === "dark"
              ? "bg-[#0B1A2D] border border-slate-800 text-white shadow-2xl shadow-black/50"
              : "bg-white border border-slate-200/80 text-[#0C1827] shadow-xl shadow-slate-200/40"
          }`}
        >
          {/* Dotted World Map Background Overlay with Orange Hotspot Glows - Fitted inside padding */}
          <div className="absolute inset-4 sm:inset-8 md:inset-10 lg:inset-12 pointer-events-none flex items-center justify-center opacity-40 dark:opacity-20 z-0">
            <div className="relative w-full h-full max-w-[1000px] max-h-[360px]">
              <Image
                src="/assets/bayshore-solutions/home/world-map-banner.png"
                alt="World Map Background"
                fill
                className="object-contain object-center scale-95 sm:scale-90"
              />
              {/* Orange Hotspot Glow Nodes */}
              <div className="absolute top-[38%] left-[28%] w-3 h-3 bg-[#FE6F1F] rounded-full shadow-[0_0_12px_#FE6F1F] animate-pulse" />
              <div className="absolute top-[48%] left-[45%] w-2.5 h-2.5 bg-[#FE6F1F] rounded-full shadow-[0_0_10px_#FE6F1F] animate-pulse" />
              <div className="absolute top-[40%] left-[58%] w-3 h-3 bg-[#FE6F1F] rounded-full shadow-[0_0_12px_#FE6F1F] animate-pulse" />
              <div className="absolute top-[65%] left-[72%] w-3 h-3 bg-[#FE6F1F] rounded-full shadow-[0_0_12px_#FE6F1F] animate-pulse" />
            </div>
          </div>

          {/* Main Content Layout Grid */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">
            {/* Left Info Column */}
            <div className="max-w-2xl xl:max-w-3xl flex-1">
              <span
                className={`inline-block text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] mb-4 font-playfair ${
                  theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
                }`}
              >
                BUILD A STRONGER TEAM
              </span>

              <h2
                className={`text-[36px] xs:text-[40px] sm:text-4xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight leading-tight mb-6 sm:mb-7 lg:whitespace-nowrap font-playfair ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}
              >
                Starting at{" "}
                <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
                  $3/hour.
                </span>
              </h2>

              <p
                style={{ lineHeight: 1.55 }}
                className={`text-xl md:text-2xl font-normal mb-8 max-w-xl text-left !text-left w-full font-instrument ${
                  theme === "dark" ? "!text-slate-300" : "!text-[#0C1827]"
                }`}
              >
                See how businesses are using Bayshore virtual talent to support their teams, handle day-to-day work, and grow without the overhead of traditional hiring.
              </p>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={onFindTalentForRoleClick}
                className={`px-9 py-4.5 sm:px-10 sm:py-5 rounded-full font-extrabold text-base sm:text-lg lg:text-xl shrink-0 transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-xl !text-white font-instrument ${
                  theme === "dark"
                    ? "bg-[#FF5500] hover:bg-[#e04a00]"
                    : "bg-[#07192C] hover:bg-[#000e1e]"
                }`}
              >
                <span className="!text-white">Get Started Today</span>
                <FiArrowRight size={22} className="!text-white" />
              </motion.button>
            </div>

            {/* Right Floating Cards Column */}
            <div className="flex flex-col gap-4 sm:gap-5 shrink-0 w-full sm:w-auto self-center lg:self-auto font-instrument">
              {/* Top Floating Card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -3 }}
                className={`rounded-2xl p-6 sm:p-7 shadow-md sm:w-[300px] border transition-all ${
                  theme === "dark"
                    ? "bg-[#07192C] border-slate-800 text-white"
                    : "bg-white border-slate-100 text-[#0C1827]"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-extrabold leading-snug tracking-tight font-playfair">
                  Great Teams <br />
                  Build Greater <br />
                  Business
                </h3>
              </motion.div>

              {/* Bottom Floating Card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -3 }}
                className={`rounded-2xl p-6 sm:p-7 shadow-md sm:w-[300px] border transition-all ${
                  theme === "dark"
                    ? "bg-[#07192C] border-slate-800 text-white"
                    : "bg-white border-slate-100 text-[#0C1827]"
                }`}
              >
                <ul className="flex flex-col gap-3 font-instrument">
                  {[
                    "GLOBAL TALENT",
                    "REAL SUPPORT",
                    "LOWER COSTS",
                    "HIGHER PRODUCTIVITY",
                    "A STRONGER BUSINESS",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-[#FE6F1F] dark:text-[#FF5500] font-bold text-base">
                        <FiCheck className="stroke-[3]" />
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TalentShowcaseSection;
