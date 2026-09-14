"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiChevronLeft,
  FiChevronRight,
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
    imagePath: "/assets/bayshore-solutions/home/Abrar.jpg",
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
    imagePath: "/assets/bayshore-solutions/home/arfin.jpg",
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
    imagePath: "/assets/bayshore-solutions/home/Hossain.jpg",
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
    imagePath: "/assets/bayshore-solutions/home/minhazur.jpg",
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
        <div className="text-left max-w-5xl xl:max-w-6xl mb-12 sm:mb-16">
          <span
            className={`inline-block text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] mb-4 sm:mb-5 ${
              theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
            }`}
          >
            MEET THE TALENT
          </span>
          <h2 className={`text-[42px] xs:text-[46px] sm:text-6xl lg:text-[46px] xl:text-[54px] font-extrabold tracking-tight leading-[1.12] sm:leading-[1.25] mb-4 sm:mb-6 text-left !text-left ${
            theme === "dark" ? "!text-white" : "!text-[#0C1827]"
          }`}>
            Real Talent. Ready for{" "}
            <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
              Real Work.
            </span>
          </h2>
          <p
            className={`text-lg sm:text-xl lg:text-[22px] leading-relaxed font-medium max-w-3xl text-left !text-left w-full ${
              theme === "dark" ? "!text-slate-100" : "!text-[#556070]"
            }`}
          >
            Explore the types of pre-vetted virtual professionals we can match to your business.
          </p>
        </div>

        {/* Industry Filter Pills */}
        <div className="flex items-center justify-start flex-wrap gap-2.5 sm:gap-3.5 mb-10 sm:mb-14">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-extrabold text-sm sm:text-base transition-all duration-300 border shadow-xs ${
                  isActive
                    ? theme === "dark"
                      ? "bg-[#FF5500] !text-white border-[#FF5500] shadow-md"
                      : "bg-[#07192C] !text-white border-[#07192C] shadow-md"
                    : theme === "dark"
                    ? "bg-[#0B1A2D] !text-slate-100 border-slate-700 hover:border-slate-500 hover:!text-white"
                    : "bg-white !text-[#0C1827] border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Talent Cards Carousel Wrapper with Navigation Controls */}
        <div className="relative group px-1 sm:px-3 mb-14 sm:mb-18">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll Left"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center border shadow-lg transition-all duration-300 ${
              theme === "dark"
                ? "bg-[#0B1A2D] !text-white border-slate-700 hover:bg-[#FF5500]"
                : "bg-white !text-[#0C1827] border-slate-200 hover:bg-[#07192C] hover:!text-white"
            }`}
          >
            <FiChevronLeft size={22} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll Right"
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center border shadow-lg transition-all duration-300 ${
              theme === "dark"
                ? "bg-[#0B1A2D] !text-white border-slate-700 hover:bg-[#FF5500]"
                : "bg-white !text-[#0C1827] border-slate-200 hover:bg-[#07192C] hover:!text-white"
            }`}
          >
            <FiChevronRight size={22} />
          </button>

          {/* Horizontal Scrollable Cards List */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-1 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredTalents.map((person) => (
              <div
                key={person.id}
                className={`min-w-[260px] sm:min-w-[290px] max-w-[310px] rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 ${
                  theme === "dark"
                    ? "bg-[#0B1A2D] border-none shadow-lg shadow-black/40 !text-white"
                    : "bg-white border-none shadow-sm hover:shadow-md !text-[#0C1827]"
                }`}
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative w-full h-[220px] sm:h-[240px] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <Image
                      src={person.imagePath}
                      alt={person.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Card Info Area */}
                  <div className="p-6 sm:p-7">
                    <h3 className={`text-2xl sm:text-[25px] font-extrabold tracking-tight mb-1  ${
                      theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                    }`}>
                      {person.name}
                    </h3>
                    <p
                      className={`text-base sm:text-lg font-semibold mb-4 ${
                        theme === "dark" ? "!text-slate-100" : "!text-[#556070]"
                      }`}
                    >
                      {person.role}
                    </p>

                    {/* Meta Badges - Clean Borderless Layout */}
                    <div className={`flex flex-col gap-2.5 pt-2 text-sm sm:text-base font-bold ${
                      theme === "dark" ? "!text-slate-100" : "!text-[#556070]"
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#FE6F1F] dark:text-[#FF5500]">
                          {person.categoryIcon}
                        </span>
                        <span>{person.categoryLabel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#FE6F1F] dark:text-[#FF5500]">
                          <FiClock className="text-base" />
                        </span>
                        <span>
                          {person.experience} | {person.hoursType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner ("BUILD A STRONGER TEAM") */}
        <div
          className={`relative rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 overflow-hidden transition-all duration-300 ${
            theme === "dark"
              ? "bg-[#0B1A2D] border border-slate-800 text-white shadow-2xl shadow-black/50"
              : "bg-white border border-slate-200/80 text-[#0C1827] shadow-xl shadow-slate-200/40"
          }`}
        >
          {/* Dotted World Map Background Overlay with Orange Hotspot Glows */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40 dark:opacity-20 z-0">
            <div className="relative w-full max-w-[1200px] h-[450px]">
              <Image
                src="/assets/bayshore-solutions/home/world-map-banner.png"
                alt="World Map Background"
                fill
                className="object-contain object-center"
              />
              {/* Orange Hotspot Glow Nodes */}
              <div className="absolute top-[38%] left-[28%] w-3 h-3 bg-[#FE6F1F] rounded-full shadow-[0_0_12px_#FE6F1F]" />
              <div className="absolute top-[48%] left-[45%] w-2.5 h-2.5 bg-[#FE6F1F] rounded-full shadow-[0_0_10px_#FE6F1F]" />
              <div className="absolute top-[40%] left-[58%] w-3 h-3 bg-[#FE6F1F] rounded-full shadow-[0_0_12px_#FE6F1F]" />
              <div className="absolute top-[65%] left-[72%] w-3 h-3 bg-[#FE6F1F] rounded-full shadow-[0_0_12px_#FE6F1F]" />
            </div>
          </div>

          {/* Main Content Layout Grid */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">
            {/* Left Info Column */}
            <div className="max-w-2xl xl:max-w-3xl flex-1">
              <span
                className={`inline-block text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] mb-4 ${
                  theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
                }`}
              >
                BUILD A STRONGER TEAM
              </span>

              <h2
                className={`text-[36px] xs:text-[40px] sm:text-4xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight leading-tight mb-6 sm:mb-7 lg:whitespace-nowrap ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}
              >
                Starting at{" "}
                <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
                  $3/hour.
                </span>
              </h2>

              <p
                className={`text-lg sm:text-xl lg:text-[19px] font-medium leading-relaxed mb-8 max-w-xl text-left !text-left w-full ${
                  theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
                }`}
              >
                See how businesses are using Bayshore virtual talent to support their teams, handle day-to-day work, and grow without the overhead of traditional hiring.
              </p>

              <button
                type="button"
                onClick={onFindTalentForRoleClick}
                className={`px-9 py-4.5 sm:px-10 sm:py-5 rounded-full font-extrabold text-base sm:text-lg lg:text-xl shrink-0 transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg transform active:scale-98 !text-white ${
                  theme === "dark"
                    ? "bg-[#FF5500] hover:bg-[#e04a00]"
                    : "bg-[#07192C] hover:bg-[#000e1e]"
                }`}
              >
                <span className="!text-white">Get Started Today</span>
                <FiArrowRight size={22} className="!text-white" />
              </button>
            </div>

            {/* Right Floating Cards Column */}
            <div className="flex flex-col gap-4 sm:gap-5 shrink-0 w-full sm:w-auto self-center lg:self-auto">
              {/* Top Floating Card ("Great Teams Build Greater Business") */}
              <div
                className={`rounded-2xl p-6 sm:p-7 shadow-md sm:w-[300px] border transition-all ${
                  theme === "dark"
                    ? "bg-[#07192C] border-slate-800 text-white"
                    : "bg-white border-slate-100 text-[#0C1827]"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-extrabold leading-snug tracking-tight">
                  Great Teams <br />
                  Build Greater <br />
                  Business
                </h3>
              </div>

              {/* Bottom Floating Card (5 Feature Bullet Items) */}
              <div
                className={`rounded-2xl p-6 sm:p-7 shadow-md sm:w-[300px] border transition-all ${
                  theme === "dark"
                    ? "bg-[#07192C] border-slate-800 text-white"
                    : "bg-white border-slate-100 text-[#0C1827]"
                }`}
              >
                <ul className="flex flex-col gap-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentShowcaseSection;
