"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  FiTerminal,
  FiBriefcase,
  FiUsers,
  FiBookOpen,
  FiHeart,
  FiAward,
  FiLayers,
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
    icon: <TbScale className="text-3xl sm:text-5xl" />,
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
];

export const ALL_SOLUTIONS: SolutionCardItem[] = [
  ...DEFAULT_SOLUTIONS,
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
    id: "technology-dev",
    title: "Technology",
    icon: <FiTerminal className="text-2xl sm:text-3xl" />,
    features: [
      "Client intake & Follow-Up",
      "Document Preparation",
      "Case Management",
      "Legal Research",
      "Calendar Management",
    ],
    link: "/solutions/technology-dev",
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

  const displaySolutions =
    solutions || (showAll ? ALL_SOLUTIONS : DEFAULT_SOLUTIONS);

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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          {/* Left Header Titles */}
          <div className="max-w-4xl xl:max-w-5xl text-left !text-left items-start">
            <span
              className={`inline-block text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] mb-3 text-left !text-left ${
                theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
              }`}
            >
              OUR SOLUTIONS
            </span>
            <h2 className={`text-[42px] xs:text-[46px] sm:text-6xl lg:text-[46px] xl:text-[54px] font-extrabold tracking-tight leading-[1.12] sm:leading-tight mb-4 sm:mb-6 text-left !text-left ${
              theme === "dark" ? "!text-white" : "!text-[#0C1827]"
            }`}>
              Specialized Talent for{" "}
              <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>
                Real Work.
              </span>
            </h2>
            <p
              className={`text-lg sm:text-xl lg:text-[22px] leading-relaxed font-medium text-left !text-left w-full ${
                theme === "dark" ? "!text-slate-100" : "!text-[#556070]"
              }`}
            >
              From client intake to bookkeeping, we provide trained, industry-ready
              professionals who integrate with your team from day one.
            </p>
          </div>

          {/* Right Header Accent Graphic */}
          <div className="flex items-center gap-5 shrink-0 self-start lg:self-end">
            <div
              className={`border-l-2 pl-4 flex flex-col font-extrabold text-xl sm:text-2xl tracking-wider uppercase leading-tight ${
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
        </div>

        {/* 6 or 18 Solution Cards Responsive Grid (2 columns on mobile, 6 columns on lg screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 xl:gap-6 mb-12 sm:mb-16">
          {displaySolutions.map((card) => (
            <div
              key={card.id}
              className={`rounded-2xl sm:rounded-[28px] p-4 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 transform hover:-translate-y-1.5 ${
                theme === "dark"
                  ? "bg-[#0B1A2D] border border-slate-800/90 hover:border-slate-700 shadow-lg shadow-black/30 !text-white"
                  : "bg-[#F3F6FA] border border-slate-200/60 hover:border-slate-300 shadow-sm hover:shadow-md !text-[#0C1827]"
              }`}
            >
              <div>
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-6 shadow-sm ${
                    theme === "dark"
                      ? "bg-slate-800 border border-slate-700 !text-white"
                      : "bg-white border border-slate-100 !text-[#0C1827]"
                  }`}
                >
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3
                  className={`text-xl sm:text-2xl font-extrabold tracking-tight mb-5  ${
                    theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                  }`}
                >
                  {card.title}
                </h3>

                {/* Features Bullet List */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {card.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`text-sm sm:text-base font-semibold leading-snug flex items-start gap-2.5 ${
                        theme === "dark" ? "!text-slate-100" : "!text-[#3B4758]"
                      }`}
                    >
                      <span
                        className={`font-extrabold text-base select-none ${
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
              <button
                type="button"
                onClick={() => onFindTalentClick && onFindTalentClick(card.id)}
                className={`w-full py-3.5 px-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md ${
                  theme === "dark"
                    ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                    : "bg-[#07192C] text-white hover:bg-[#000e1e]"
                }`}
              >
                <span>Find Talent</span>
                <FiArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom "View All Solutions" Button (Shown only when not showAll) */}
        {!showAll && (
          <div className="flex justify-center">
            <Link
              href="/bayshore-solutions/solutions"
              className={`px-8 py-3.5 rounded-full font-bold text-sm sm:text-base border transition-all duration-300 flex items-center gap-3 shadow-sm hover:shadow-md transform active:scale-98 ${
                theme === "dark"
                  ? "border-slate-700 text-white hover:bg-white hover:text-[#07192C]"
                  : "border-[#07192C] text-[#07192C] hover:bg-[#07192C] hover:text-white"
              }`}
            >
              <span>View All Solutions</span>
              <FiArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionsSection;
