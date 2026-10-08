"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import {
  FiChevronLeft,
  FiChevronRight,
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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
    icon: <TbScale className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiShield className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiTrendingUp className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiHome className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiBarChart2 className="text-3xl xs:text-[32px] sm:text-4xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/finance",
  },
  {
    id: "technology",
    title: "Technology",
    icon: <FiCode className="text-3xl xs:text-[32px] sm:text-4xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/technology",
  },
];

export const ALL_SOLUTIONS: SolutionCardItem[] = [
  ...DEFAULT_SOLUTIONS,
  {
    id: "engineering",
    title: "Engineering",
    icon: <FiCpu className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiShoppingBag className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiDollarSign className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiHeadphones className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiActivity className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiBriefcase className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiUsers className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiBookOpen className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiHeart className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiAward className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiLayers className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiTrendingUp className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiUsers className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
    icon: <FiLayers className="text-3xl xs:text-[32px] sm:text-4xl" />,
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
  solutions,
  showAll = false,
  onFindTalentClick,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const displaySolutions =
    solutions || (showAll ? ALL_SOLUTIONS : DEFAULT_SOLUTIONS);

  const repeatCount = Math.max(6, Math.ceil(18 / (displaySolutions.length || 1)));
  const marqueeSolutions = Array.from({ length: repeatCount }).flatMap(() => displaySolutions);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`${inter.className} py-14 sm:py-20 lg:py-24 w-full max-w-full overflow-hidden transition-colors duration-300 ${theme === "dark"
        ? "bg-[#07192C] text-white"
        : "bg-[#F5F7FD] text-[#0C1827]"
        }`}
    >
      <div className="mx-auto max-w-[1650px] px-6 sm:px-10 md:px-[30px]" id="solutions">
        {/* Section Header Top Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16"
        >
          {/* Header Titles */}
          <div className=" mx-auto text-center">
            {/* <span
              className={`inline-block text-sm sm:text-base font-semibold uppercase tracking-[0.2em] mb-3 text-center ${theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
                }`}
            >
              OUR SOLUTIONS
            </span> */}
            <h2
              className={`text-[28px] md:text-[46px] font-bold tracking-tight leading-[1.15] mb-4 sm:mb-6 text-center ${theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}
            >
              Specialized Talent for{" "}
              <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
                Real Work.
              </span>
            </h2>
            <p
              style={{ lineHeight: 1.6 }}
              className={`text-[14px] md:text-[16px] text-center  mx-auto ${theme === "dark" ? "!text-slate-300" : "!text-[#4B5563]"
                }`}
            >
              From client intake to bookkeeping, we provide trained, industry-ready
              professionals who integrate with your team from day one.
            </p>
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
                padding-top: 16px;
                padding-bottom: 24px;
                padding-left: 8px;
                padding-right: 8px;
              }
              .solutions-marquee-track:hover {
                animation-play-state: paused;
              }
              @media (min-width: 1024px) {
                .solutions-marquee-card {
                  width: calc((100cqw - 80px) / 6) !important;
                }
              }
            `}</style>

            {/* Marquee Solution Cards Slider */}
            <div className="relative w-full overflow-hidden mb-12 sm:mb-16 py-4">
              {/* Left Navigation Arrow */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => handleScroll("left")}
                aria-label="Scroll Left"
                className={`absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border shadow-md transition-all duration-300 ${theme === "dark"
                  ? "bg-[#0B1A2D]/95 text-white border-slate-700 hover:bg-[#FF5500] hover:border-[#FF5500]"
                  : "bg-white/95 text-[#0C1827] border-slate-200 hover:bg-[#07192C] hover:text-white"
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
                className={`absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border shadow-md transition-all duration-300 ${theme === "dark"
                  ? "bg-[#0B1A2D]/95 text-white border-slate-700 hover:bg-[#FF5500] hover:border-[#FF5500]"
                  : "bg-white/95 text-[#0C1827] border-slate-200 hover:bg-[#07192C] hover:text-white"
                  }`}
              >
                <FiChevronRight size={22} />
              </motion.button>

              {/* Side Fades */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-8 sm:w-12 z-20 pointer-events-none opacity-50 transition-colors duration-300 ${theme === "dark"
                  ? "bg-gradient-to-r from-[#07192C] to-transparent"
                  : "bg-gradient-to-r from-[#F5F7FD] to-transparent"
                  }`}
              />
              <div
                className={`absolute right-0 top-0 bottom-0 w-8 sm:w-12 z-20 pointer-events-none opacity-50 transition-colors duration-300 ${theme === "dark"
                  ? "bg-gradient-to-l from-[#07192C] to-transparent"
                  : "bg-gradient-to-l from-[#F5F7FD] to-transparent"
                  }`}
              />

              <div
                ref={scrollContainerRef}
                className="overflow-x-hidden scroll-smooth w-full [container-type:inline-size]"
              >
                <div className="solutions-marquee-track flex items-stretch gap-4 sm:gap-5">
                  {marqueeSolutions.map((card, idx) => (
                    <motion.div
                      key={`${card.id}-${idx}`}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.25 }}
                      className={`solutions-marquee-card w-[260px] xs:w-[280px] shrink-0 rounded-[12px] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group/card shadow-sm hover:shadow-md cursor-pointer ${theme === "dark"
                        ? "bg-[#0B1A2D] border border-slate-800 text-white"
                        : "bg-white border border-[#E3E8EE] text-[#0C1827]"
                        }`}
                    >
                      <div>
                        {/* Rounded Peach Icon Box */}
                        <div
                          className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover/card:scale-105 ${theme === "dark"
                            ? "bg-slate-800 border border-slate-700 text-[#FF5500]"
                            : "bg-[#FFEFEA] text-[#111827]"
                            }`}
                        >
                          <span className="text-[28px]">{card.icon}</span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-[19px] sm:text-[20px] font-bold tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-[#111827]"
                            }`}
                        >
                          {card.title}
                        </h3>

                        {/* Feature List */}
                        <ul className="flex flex-col gap-2.5 mb-8">
                          {card.features.map((feature, featureIdx) => (
                            <li
                              key={featureIdx}
                              className={`text-[13px] sm:text-[14px] leading-snug flex items-start gap-2 ${theme === "dark" ? "text-slate-300" : "text-[#374151]"
                                }`}
                            >
                              <span className="shrink-0 text-slate-400 select-none text-xs leading-none mt-1">
                                •
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <button
                        type="button"
                        data-calendly="true"
                        onClick={() => onFindTalentClick && onFindTalentClick(card.id)}
                        className={`w-full py-3.5 px-4 rounded-xl font-medium text-[14px] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${theme === "dark"
                          ? "bg-[#0C1827] border border-slate-700 text-white hover:bg-[#FF5500] hover:border-[#FF5500]"
                          : "bg-[#07192C] text-white hover:bg-[#000E1E]"
                          }`}
                      >
                        <span>Hire Now</span>
                        <FiArrowRight size={15} className="transition-transform duration-300 group-hover/card:translate-x-1" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Grid View for showAll=true */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5 mb-12 sm:mb-16">
            {displaySolutions.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className={`w-full min-h-[420px] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-md cursor-pointer ${theme === "dark"
                  ? "bg-[#0B1A2D] border border-slate-800 text-white"
                  : "bg-white border border-[#E3E8EE] text-[#0C1827]"
                  }`}
              >
                <div>
                  {/* Rounded Peach Icon Box */}
                  <div
                    className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 ${theme === "dark"
                      ? "bg-slate-800 border border-slate-700 text-[#FF5500]"
                      : "bg-[#FFEFEA] text-[#111827]"
                      }`}
                  >
                    <span className="text-[28px]">{card.icon}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-[19px] sm:text-[20px] font-bold tracking-tight mb-4 ${theme === "dark" ? "text-white" : "text-[#111827]"
                      }`}
                  >
                    {card.title}
                  </h3>

                  {/* Feature List */}
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {card.features.map((feature, featureIdx) => (
                      <li
                        key={featureIdx}
                        className={`text-[13px] sm:text-[14px] leading-snug flex items-start gap-2 ${theme === "dark" ? "text-slate-300" : "text-[#374151]"
                          }`}
                      >
                        <span className="shrink-0 text-slate-400 select-none text-xs leading-none mt-1">
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  data-calendly="true"
                  onClick={() => onFindTalentClick && onFindTalentClick(card.id)}
                  className={`w-full py-3.5 px-4 rounded-xl font-medium text-[14px] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${theme === "dark"
                    ? "bg-[#0C1827] border border-slate-700 text-white hover:bg-[#FF5500] hover:border-[#FF5500]"
                    : "bg-[#07192C] text-white hover:bg-[#000E1E]"
                    }`}
                >
                  <span>Hire Now</span>
                  <FiArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        )}


      </div>
    </section>
  );
};

export default SolutionsSection;