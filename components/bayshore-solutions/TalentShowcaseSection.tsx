"use client";

import React, { useState, useRef, useEffect } from "react";
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
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { TbScale } from "react-icons/tb";

export interface TalentProfile {
  id: string;
  name: string;
  role: string;
  category: "Legal" | "Healthcare" | "Marketing" | "Real Estate" | "Tech" | "Finance" | "Admin";
  industry: string;
  joinedYear: string;
  categoryIcon: React.ReactNode;
  imagePath: string;
}

export interface TalentShowcaseSectionProps {
  theme?: "light" | "dark";
  talents?: TalentProfile[];
  onFindTalentForRoleClick?: () => void;
}

const TalentCard: React.FC<{
  person: TalentProfile;
  theme: "light" | "dark";
}> = ({ person, theme }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ duration: 0.3 }}
    className={`w-[270px] sm:w-[300px] shrink-0 rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-lg cursor-pointer ${
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
          className={`text-xl sm:text-[22px] font-extrabold tracking-tight mb-1 font-playfair line-clamp-1 ${
            theme === "dark" ? "!text-white" : "!text-[#0C1827]"
          }`}
          title={person.name}
        >
          {person.name}
        </h3>
        <p
          className={` text-[12px] md:text-[14px] font-semibold mb-4 min-h-[48px] line-clamp-2 leading-snug ${
            theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
          }`}
        >
          {person.role}
        </p>

        {/* Metadata tags: Industry & Joined Year */}
        <div className="space-y-2.5 text-[12px] md:text-[14px] font-medium pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-start gap-2">
            <span
              className={`mt-0.5 shrink-0 text-base ${
                theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"
              }`}
            >
              {person.categoryIcon}
            </span>
            <span
              className={`line-clamp-2 leading-snug ${
                theme === "dark" ? "!text-slate-200" : "!text-[#0C1827]"
              }`}
            >
              {person.industry}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock
              className={`shrink-0 text-base ${
                theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"
              }`}
            />
            <span
              className={`leading-snug ${
                theme === "dark" ? "!text-slate-200" : "!text-[#0C1827]"
              }`}
            >
              {person.joinedYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const DEFAULT_TALENTS: TalentProfile[] = [
  {
    id: "t1",
    name: "S. M. Faisal Abrar",
    role: "Director of Litigation / Case Management",
    category: "Legal",
    industry: "U.S. Immigration & Real Estate Law",
    joinedYear: "Supporting Since 2023",
    categoryIcon: <TbScale className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/S.M Faisal Abrar.png",
  },
  {
    id: "t2",
    name: "Sakawat Hossain",
    role: "Director of Legal Operations",
    category: "Legal",
    industry: "CRM Management, Lead Generation, Legal advice, legal strategy",
    joinedYear: "Supporting Since 2023",
    categoryIcon: <TbScale className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/Sakawat Hossain.png",
  },
  {
    id: "t3",
    name: "MD. Fahimur Rahman Fahim",
    role: "Client Communication Executive",
    category: "Admin",
    industry: "Client Relationship Management",
    joinedYear: "Supporting Since September 2026",
    categoryIcon: <FiUserCheck className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/MD. Fahimur Rahman Fahim.png",
  },
  {
    id: "t4",
    name: "Md Alamin Arefen",
    role: "Client Communication Executive & Senior Paralegal",
    category: "Legal",
    industry: "US Immigration & Real Estate Law",
    joinedYear: "Supporting Since September 2025",
    categoryIcon: <TbScale className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/Arefin.png",
  },
  {
    id: "t5",
    name: "Rafiul Islam Tamim",
    role: "Business Development Executive",
    category: "Admin",
    industry: "CRM & Client Acquisition",
    joinedYear: "Supporting Since June 2026",
    categoryIcon: <FiBriefcase className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/Tamim.png",
  },
  {
    id: "t6",
    name: "Khandokar Yuvair Hasan",
    role: "Client Communication Executive",
    category: "Legal",
    industry: "U.S. Personal Injury Law",
    joinedYear: "Supporting Since August 2026",
    categoryIcon: <TbScale className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/Khandokar Yuvair Hasan.png",
  },
  {
    id: "t7",
    name: "Akib Rayhan",
    role: "Jr. Software Engineer",
    category: "Tech",
    industry: "Software Development",
    joinedYear: "Supporting Since 2025",
    categoryIcon: <FiCode className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/Akib.png",
  },
  {
    id: "t8",
    name: "Rakibul Islam",
    role: "Senior Software Engineer",
    category: "Tech",
    industry: "Software Development",
    joinedYear: "Supporting Since 2022",
    categoryIcon: <FiCode className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/Rakibul.png",
  },
  {
    id: "t9",
    name: "Shamim Ahsan",
    role: "Jr. Software Engineer",
    category: "Tech",
    industry: "Software Development",
    joinedYear: "Supporting Since 2025",
    categoryIcon: <FiCode className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/Shamim Ahsan.png",
  },
  {
    id: "t10",
    name: "Md. Abdur Raof Sahak",
    role: "Software Engineer",
    category: "Tech",
    industry: "Software Development",
    joinedYear: "Supporting Since 2024",
    categoryIcon: <FiCode className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/Sahak.png",
  },
  {
    id: "t11",
    name: "Nahian Mohammad Sharian",
    role: "Jr. Graphic Designer",
    category: "Marketing",
    industry: "Digital Marketing",
    joinedYear: "Supporting Since 2025",
    categoryIcon: <FiTrendingUp className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/Sharian.png",
  },
  {
    id: "t12",
    name: "Faria Islam Laiba",
    role: "SQA Engineer",
    category: "Tech",
    industry: "Software Development",
    joinedYear: "Supporting Since 2025",
    categoryIcon: <FiCode className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/Laiba.png",
  },
  // {
  //   id: "t13",
  //   name: "Tahira Chowdhury Sheoty",
  //   role: "Digital Marketing Executive",
  //   category: "Marketing",
  //   industry: "Digital Marketing",
  //   joinedYear: "Supporting Since 2025",
  //   categoryIcon: <FiTrendingUp className="text-base" />,
  //   imagePath: "/assets/bayshore-solutions/home/demo.png",
  // },
  {
    id: "t14",
    name: "Tasnova Rashnath",
    role: "Business Development Associate",
    category: "Marketing",
    industry: "Digital Marketing",
    joinedYear: "Supporting Since 2026",
    categoryIcon: <FiBriefcase className="text-base" />,
    imagePath: "/assets/bayshore-solutions/home/Tasnova.jpg",
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
  const [manualShift, setManualShift] = useState(0);

  // Reset shift when category changes
  useEffect(() => {
    setManualShift(0);
  }, [selectedCategory]);

  const filteredTalents =
    selectedCategory === "All"
      ? talents
      : talents.filter(
          (t) =>
            t.category === selectedCategory ||
            t.industry.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  // Guarantee enough cards per track (at least 12-14 cards) so it covers any widescreen viewport
  const repeatMultiplier = Math.max(1, Math.ceil(12 / (filteredTalents.length || 1)));
  const trackCards = Array.from({ length: repeatMultiplier }).flatMap(() => filteredTalents);

  const handleScroll = (direction: "left" | "right") => {
    const cardStep = 324; // 300px card + 24px gap
    setManualShift((prev) => (direction === "left" ? prev + cardStep : prev - cardStep));
  };

  return (
    <section
      id="our-talent"
      className={`scroll-mt-20 md:scroll-mt-24 py-16 sm:py-20 lg:py-24 w-full max-w-full overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#07192C] text-white" : "bg-[#F5F7FA] text-[#0C1827]"
      }`}
    >
      <div className=" mx-auto max-w-[1650px] px-10 md:px-[30px]">
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
            className={`text-[14px] md:text-[16px] font-normal max-w-3xl text-left !text-left w-full font-instrument ${
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
                className={`relative px-6 py-3 sm:px-7 sm:py-3.5 rounded-full  text-[12px] md:text-[14px] transition-all duration-300 border shadow-xs ${
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
            transform: translateX(-100%);
          }
        }
        .talent-marquee-track {
          display: flex;
          flex-shrink: 0;
          width: max-content;
          animation: talentMarquee 60s linear infinite;
          padding-top: 20px;
          padding-bottom: 24px;
        }
        .talent-marquee-wrapper:hover .talent-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

        {/* Talent Cards Infinite Marquee Slider */}
        <div className="relative w-full overflow-hidden mb-14 sm:mb-18 py-6 sm:py-8">
          {/* Left Navigation Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll Left"
            className={`absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border shadow-xl transition-all duration-300 ${
              theme === "dark"
                ? "bg-[#0B1A2D]/95 !text-white border-slate-700 hover:bg-[#FF5500] hover:border-[#FF5500]"
                : "bg-white/95 !text-[#0C1827] border-slate-200 hover:bg-[#07192C] hover:!text-white"
            }`}
          >
            <FiChevronLeft size={22} />
          </motion.button>

          {/* Right Navigation Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll Right"
            className={`absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border shadow-xl transition-all duration-300 ${
              theme === "dark"
                ? "bg-[#0B1A2D]/95 !text-white border-slate-700 hover:bg-[#FF5500] hover:border-[#FF5500]"
                : "bg-white/95 !text-[#0C1827] border-slate-200 hover:bg-[#07192C] hover:!text-white"
            }`}
          >
            <FiChevronRight size={22} />
          </motion.button>

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

          <motion.div
            animate={{ x: manualShift }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="w-max"
          >
            <div className="flex w-max talent-marquee-wrapper -translate-x-1/4">
              {[0, 1, 2, 3].map((trackIndex) => (
                <div
                  key={`track-${trackIndex}`}
                  className="talent-marquee-track flex shrink-0 items-stretch gap-5 sm:gap-6 pr-5 sm:pr-6"
                  aria-hidden={trackIndex !== 1}
                >
                  {trackCards.map((person, idx) => (
                    <TalentCard
                      key={`card-${trackIndex}-${person.id}-${idx}`}
                      person={person}
                      theme={theme}
                    />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
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
                className={`inline-block text-[12px] md:text-[14px] font-extrabold uppercase tracking-[0.22em] mb-4 font-playfair ${
                  theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
                }`}
              >
                BUILD A STRONGER TEAM
              </span>

              <h2
                className={`text-[36px] xs:text-[40px] sm:text-4xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight leading-tight my-6 mt:mt-8 pb-4 md:pb-5 lg:whitespace-nowrap font-playfair ${
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
                className={`text-[14px] md:text-[16px] font-normal mb-8  text-left !text-left w-full font-instrument ${
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
                      <span className="text-[#FE6F1F] dark:text-[#FF5500] font-bold text-lg">
                        <FiCheck className="stroke-[3]" />
                      </span>
                      <span className="text-[14px] font-extrabold uppercase tracking-wider">
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
