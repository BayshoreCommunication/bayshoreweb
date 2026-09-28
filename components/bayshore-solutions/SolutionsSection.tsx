"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiShield,
  FiTrendingUp,
  FiHome,
  FiBarChart2,
  FiCode,
  FiArrowRight,
  FiCpu,
  FiShoppingBag,
  FiDollarSign,
  FiHeadphones,
  FiActivity,
  FiBriefcase,
  FiUsers,
  FiBookOpen,
  FiHeart,
  FiAward,
  FiLayers,
  FiCheck,
} from "react-icons/fi";
import { TbScale } from "react-icons/tb";

export interface SolutionCardItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  features: string[];
  link?: string;
}

export interface SolutionsSectionProps {
  theme?: "light" | "dark";
  headerGraphicPath?: string;
  solutions?: SolutionCardItem[];
  showAll?: boolean;
  onFindTalentClick?: (solutionId: string) => void;
}

export const DEFAULT_SOLUTIONS: SolutionCardItem[] = [
  {
    id: "legal",
    title: "Legal Support",
    icon: <TbScale className="text-3xl sm:text-4xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/legal",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: <FiShield className="text-2xl sm:text-3xl" />,
    features: [
      "Medical Billing & Coding",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/healthcare",
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: <FiTrendingUp className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/marketing",
  },
  {
    id: "realestate",
    title: "Real Estate",
    icon: <FiHome className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/real-estate",
  },
  {
    id: "finance",
    title: "Finance & Admin",
    icon: <FiBarChart2 className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/finance",
  },
];

export const ALL_SOLUTIONS: SolutionCardItem[] = [
  ...DEFAULT_SOLUTIONS,
  {
    id: "technology",
    title: "Technology",
    icon: <FiCode className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/technology",
  },
  {
    id: "engineering",
    title: "Engineering",
    icon: <FiCpu className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/engineering",
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    icon: <FiShoppingBag className="text-2xl sm:text-3xl" />,
    features: [
      "Medical Billing & Coding",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/ecommerce",
  },
  {
    id: "finance-detail",
    title: "Finance",
    icon: <FiDollarSign className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/finance-detail",
  },
  {
    id: "customer-support",
    title: "Customer Support",
    icon: <FiHeadphones className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/customer-support",
  },
  {
    id: "operations",
    title: "Operations",
    icon: <FiActivity className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/operations",
  },
  {
    id: "sales-business",
    title: "Sales & Business",
    icon: <FiBriefcase className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/sales-business",
  },
  {
    id: "hr",
    title: "Human Resource",
    icon: <FiUsers className="text-2xl sm:text-3xl" />,
    features: [
      "Medical Billing & Coding",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/hr",
  },
  {
    id: "education",
    title: "Education",
    icon: <FiBookOpen className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/education",
  },
  {
    id: "fitness",
    title: "Fitness",
    icon: <FiHeart className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/fitness",
  },
  {
    id: "sports",
    title: "Sports",
    icon: <FiAward className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/sports",
  },
  {
    id: "creative-design",
    title: "Creative & Design",
    icon: <FiLayers className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/creative-design",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: <FiTrendingUp className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/data-analytics",
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant",
    icon: <FiUsers className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/virtual-assistant",
  },
  {
    id: "and-more",
    title: "And More",
    icon: <FiLayers className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/and-more",
  },
];

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  theme = "light",
  headerGraphicPath = "/assets/bayshore-solutions/home/header-graphic.png",
  solutions,
  showAll = false,
  onFindTalentClick,
}) => {
  const [graphicError, setGraphicError] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const displaySolutions =
    solutions || (showAll ? ALL_SOLUTIONS : DEFAULT_SOLUTIONS);

  const repeatCount = Math.max(6, Math.ceil(18 / (displaySolutions.length || 1)));
  const marqueeSolutions = Array.from({ length: repeatCount }).flatMap(() => displaySolutions);

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
      className={`py-14 sm:py-20 lg:py-24 w-full max-w-full overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#07192C] text-white"
          : "bg-white text-[#0C1827]"
      }`}
    >
      <div className="container mx-auto max-w-[1650px] px-6 sm:px-8 md:px-[30px]">
        {/* Section Header Top Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16"
        >
          {/* Left Header Titles */}
          <div className="max-w-8xl xl:max-w-8xl !text-left items-start">
            <span
              className={`inline-block text-xl sm:text-2xl font-bold uppercase tracking-[0.2em] mb-3 text-left !text-left font-playfair ${
                theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
              }`}
            >
              OUR SOLUTIONS
            </span>
            <h2 className={`text-[42px] xs:text-[46px] sm:text-6xl lg:text-[46px] xl:text-[54px] font-extrabold tracking-tight leading-[1.12] sm:leading-tight mb-4 sm:mb-6 text-left !text-left font-playfair ${
              theme === "dark" ? "!text-white" : "!text-[#0C1827]"
            }`}>
              Specialized Talent for{" "}
              <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
                Real Work.
              </span>
            </h2>
            <p
              style={{ lineHeight: 1.55 }}
              className={`text-xl md:text-2xl font-normal text-left !text-left w-full font-instrument ${
                theme === "dark" ? "!text-slate-300" : "!text-[#0C1827]"
              }`}
            >
              From client intake to bookkeeping, we provide trained, industry-ready
              professionals who integrate with your team from day one.
            </p>
          </div>

          {/* Right Header Accent Graphic */}
          <div className="flex items-center gap-5 shrink-0 self-start lg:self-end">
            <div
              className={`border-l-2 pl-4 flex flex-col font-extrabold text-xl sm:text-2xl tracking-wider uppercase leading-tight font-playfair ${
                theme === "dark"
                  ? "border-[#FF5500] !text-white"
                  : "border-[#FE6F1F] !text-[#0C1827]"
              }`}
            >
              <span>SKILLED</span>
              <span>PEOPLE.</span>
              <span className={theme === "dark" ? "!text-slate-200 font-bold" : "!text-[#556070] font-bold"}>
                STRONGER
              </span>
              <span className={theme === "dark" ? "!text-slate-200 font-bold" : "!text-[#556070] font-bold"}>
                BUSINESSES.
              </span>
            </div>

            {/* Accent Graphic Illustration */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 hidden sm:block">
              {!graphicError ? (
                <Image
                  src={headerGraphicPath}
                  alt="Skilled People Header Graphic"
                  fill
                  className="object-contain"
                  onError={() => setGraphicError(true)}
                />
              ) : null}
            </div>
          </div>
        </motion.div>

        {!showAll ? (
          <>
            {/* Infinite Marquee CSS Animation */}
            <style jsx global>{`
              @keyframes solutionsMarquee {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .solutions-marquee-track {
                display: flex;
                width: max-content;
                animation: solutionsMarquee 85s linear infinite;
                padding-top: 20px;
                padding-bottom: 24px;
                padding-left: 8px;
                padding-right: 8px;
              }
              .solutions-marquee-track:hover {
                animation-play-state: paused;
              }
            `}</style>

            {/* Infinite Marquee Solution Cards Slider */}
            <div className="relative w-full overflow-hidden mb-12 sm:mb-16 py-6 sm:py-8">
              {/* Subtle Side Fade Accents */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-6 sm:w-10 z-20 pointer-events-none opacity-40 transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#07192C] to-transparent"
                    : "bg-gradient-to-r from-white to-transparent"
                }`}
              />
              <div
                className={`absolute right-0 top-0 bottom-0 w-6 sm:w-10 z-20 pointer-events-none opacity-40 transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-l from-[#07192C] to-transparent"
                    : "bg-gradient-to-l from-white to-transparent"
                }`}
              />

              <div
                ref={scrollContainerRef}
                className="overflow-x-hidden scroll-smooth w-full"
              >
                <div className="solutions-marquee-track flex items-stretch gap-4 sm:gap-6">
                  {marqueeSolutions.map((card, idx) => (
                    <motion.div
                      key={`${card.id}-${idx}`}
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                      className={`w-[245px] xs:w-[265px] sm:w-[295px] shrink-0 rounded-2xl sm:rounded-[28px] p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-lg cursor-pointer ${
                        theme === "dark"
                          ? "bg-[#0B1A2D] border border-slate-800/90 hover:border-[#FF5500]/50 shadow-lg shadow-black/30 !text-white"
                          : "bg-[#F3F6FA] border border-slate-200/60 hover:border-[#FE6F1F]/50 shadow-sm hover:shadow-lg !text-[#0C1827]"
                      }`}
                    >
                      <div>
                        {/* Icon Container with hover pulse */}
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6 shadow-sm transition-all duration-300 group-hover:scale-110 text-3xl sm:text-4xl [&>svg]:w-7 [&>svg]:h-7 sm:[&>svg]:w-8 sm:[&>svg]:h-8 ${
                            theme === "dark"
                              ? "bg-slate-800 border border-slate-700 !text-white group-hover:bg-[#FF5500]"
                              : "bg-white border border-slate-100 !text-[#0C1827] group-hover:bg-[#07192C] group-hover:!text-white"
                          }`}
                        >
                          {card.icon}
                        </div>

                        {/* Card Title */}
                        <h3
                          className={`text-xl sm:text-[22px] lg:text-2xl font-extrabold tracking-tight mb-3.5 sm:mb-4 font-playfair ${
                            theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                          }`}
                        >
                          {card.title}
                        </h3>

                        {/* Features Bullet List */}
                        <ul className="flex flex-col gap-2.5 mb-6 sm:mb-7 font-instrument">
                          {card.features.map((feature, featureIdx) => (
                            <li
                              key={featureIdx}
                              className={`text-sm sm:text-[15px] lg:text-base leading-snug flex items-start gap-2 ${
                                theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
                              }`}
                            >
                              <span
                                className={`font-extrabold text-sm select-none mt-0.5 ${
                                  theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"
                                }`}
                              >
                                •
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Card Action CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => onFindTalentClick && onFindTalentClick(card.id)}
                        className={`w-full py-3 sm:py-3.5 px-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md font-instrument ${
                          theme === "dark"
                            ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                            : "bg-[#07192C] text-white hover:bg-[#000e1e]"
                        }`}
                      >
                        <span>Find Talent</span>
                        <FiArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Solution Cards Responsive Grid (for Solutions Page showAll=true) */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 mb-12 sm:mb-16">
            {displaySolutions.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className={`w-full rounded-2xl sm:rounded-[24px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-xl cursor-pointer ${
                  theme === "dark"
                    ? "bg-[#0B1A2D] border border-slate-800/90 hover:border-[#FF5500]/50 shadow-lg shadow-black/30 !text-white"
                    : "bg-[#F3F6FA] border border-slate-200/60 hover:border-[#FE6F1F]/50 shadow-sm hover:shadow-xl !text-[#0C1827]"
                }`}
              >
                <div>
                  {/* Icon Container with hover pulse */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6 shadow-sm transition-all duration-300 group-hover:scale-110 text-3xl sm:text-4xl [&>svg]:w-7 [&>svg]:h-7 sm:[&>svg]:w-8 sm:[&>svg]:h-8 ${
                      theme === "dark"
                        ? "bg-slate-800 border border-slate-700 !text-white group-hover:bg-[#FF5500]"
                        : "bg-white border border-slate-100 !text-[#0C1827] group-hover:bg-[#07192C] group-hover:!text-white"
                    }`}
                  >
                    {card.icon}
                  </div>

                  {/* Card Title */}
                  <h3
                    className={`text-xl sm:text-[22px] lg:text-2xl font-extrabold tracking-tight mb-3.5 sm:mb-4 font-playfair ${
                      theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  {/* Features Bullet List */}
                  <ul className="flex flex-col gap-2.5 mb-6 sm:mb-7 font-instrument">
                    {card.features.map((feature, featureIdx) => (
                      <li
                        key={featureIdx}
                        className={`text-sm sm:text-[15px] lg:text-base leading-snug flex items-start gap-2 ${
                          theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
                        }`}
                      >
                        <span
                          className={`font-extrabold text-sm select-none mt-0.5 ${
                            theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"
                          }`}
                        >
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => onFindTalentClick && onFindTalentClick(card.id)}
                  className={`w-full py-3 sm:py-3.5 px-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md font-instrument ${
                    theme === "dark"
                      ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                      : "bg-[#07192C] text-white hover:bg-[#000e1e]"
                  }`}
                >
                  <span>Find Talent</span>
                  <FiArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom Call To Action (CTA) Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 border shadow-xl transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#0B1A2D] via-[#0D223A] to-[#0B1A2D] border-slate-700/80 shadow-black/40 text-white"
              : "bg-gradient-to-br from-white via-[#F8FAFD] to-white border-slate-200/90 shadow-slate-200/60 text-[#0C1827]"
          }`}
        >
          {/* Subtle Accent Glow / Highlights */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5500]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content Area */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
             

              {/* Title */}
              <h3
                className={`text-[24px] sm:text-[18px] lg:text-[32px] font-extrabold tracking-tight mb-3 font-playfair leading-snug ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}
              >
                {!showAll
                  ? "Need a specialized role or a custom-built virtual team?"
                  : "Can't find the exact role your business needs?"}
              </h3>

              {/* Subtitle */}
        

              {/* Highlights Pill Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold font-instrument">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                    theme === "dark"
                      ? "bg-slate-800/80 border-slate-700 text-slate-300"
                      : "bg-[#F3F6FA] border-slate-200 text-[#0C1827]"
                  }`}
                >
                  <FiCheck className="text-[#FF5500] text-[20px] shrink-0" />
                  <span>48-Hour Matching</span>
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                    theme === "dark"
                      ? "bg-slate-800/80 border-slate-700 text-slate-300"
                      : "bg-[#F3F6FA] border-slate-200 text-[#0C1827]"
                  }`}
                >
                  <FiCheck className="text-[#FF5500] text-[20px] shrink-0" />
                  <span>Top 1% Pre-Vetted</span>
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                    theme === "dark"
                      ? "bg-slate-800/80 border-slate-700 text-slate-300"
                      : "bg-[#F3F6FA] border-slate-200 text-[#0C1827]"
                  }`}
                >
                  <FiCheck className="text-[#FF5500] text-[20px] shrink-0" />
                  <span>Dedicated Management</span>
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                    theme === "dark"
                      ? "bg-slate-800/80 border-slate-700 text-slate-300"
                      : "bg-[#F3F6FA] border-slate-200 text-[#0C1827]"
                  }`}
                >
                  <FiCheck className="text-[#FF5500] text-[20px] shrink-0" />
                  <span>Zero Overhead</span>
                </span>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto shrink-0 font-instrument">
              {!showAll ? (
                <>
                  {/* View All Solutions Button (Outline Pill) */}
                  <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                    <Link
                      href="/bayshore-solutions/solutions"
                      className={`group w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-full font-bold text-sm sm:text-base border-2 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md whitespace-nowrap ${
                        theme === "dark"
                          ? "border-slate-700 bg-slate-800/80 !text-white hover:border-[#FF5500] hover:!text-[#FF5500]"
                          : "border-[#07192C] bg-white !text-[#07192C] hover:bg-[#07192C] hover:!text-white"
                      }`}
                    >
                      <span>View All Solutions</span>
                      <FiArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>

                  {/* Find Talent for My Role Button (Solid Pill - Matching Card Button) */}
                  <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                    <Link
                      href="/bayshore-solutions/get-started"
                      className={`group w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl whitespace-nowrap ${
                        theme === "dark"
                          ? "bg-[#FF5500] !text-white hover:bg-[#e04a00]"
                          : "bg-[#07192C] !text-white hover:bg-[#000e1e]"
                      }`}
                    >
                      <span>Find Talent for My Role</span>
                      <FiArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </>
              ) : (
                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Link
                    href="/bayshore-solutions/get-started"
                    className={`group w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl whitespace-nowrap ${
                      theme === "dark"
                        ? "bg-[#FF5500] !text-white hover:bg-[#e04a00]"
                        : "bg-[#07192C] !text-white hover:bg-[#000e1e]"
                    }`}
                  >
                    <span>Hire Custom Talent Now</span>
                    <FiArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;