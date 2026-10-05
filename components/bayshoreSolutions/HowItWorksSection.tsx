"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FiFileText,
  FiUsers,
  FiCheckCircle,
  FiShield,
  FiArrowRight,
} from "react-icons/fi";

import { TbRocket, TbUserSearch } from "react-icons/tb";

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
    description:
      "Share your requirements and goals—only takes a minute.",
    icon: (
      <FiFileText className="text-4xl xs:text-[42px] sm:text-4xl lg:text-[44px]" />
    ),
  },
  {
    stepNumber: "02",
    title: "We Find the Right Match",
    description:
      "We source and vet candidates based on your industry and specific needs.",
    icon: (
      <TbUserSearch className="text-4xl xs:text-[42px] sm:text-4xl lg:text-[44px]" />
    ),
  },
  {
    stepNumber: "03",
    title: "Meet Your Candidates",
    description:
      "Interview top candidates and find the best fit for your team.",
    icon: (
      <FiUsers className="text-4xl xs:text-[42px] sm:text-4xl lg:text-[44px]" />
    ),
  },
  {
    stepNumber: "04",
    title: "You Onboard",
    description:
      "We handle the setup, training and integration with your tools.",
    icon: (
      <FiCheckCircle className="text-4xl xs:text-[42px] sm:text-4xl lg:text-[44px]" />
    ),
  },
  {
    stepNumber: "05",
    title: "We Manage the Rest",
    description:
      "Ongoing support, performance mentoring and easy replacements when you need it.",
    icon: (
      <TbRocket className="text-4xl xs:text-[42px] sm:text-4xl lg:text-[44px]" />
    ),
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
      className={`
        scroll-mt-20
        md:scroll-mt-24
        relative
        w-full
        max-w-full
        py-16
        sm:py-20
        lg:py-24
        overflow-hidden
        transition-colors
        duration-300
        font-inter
        ${theme === "dark"
          ? "bg-[#07192C] text-white"
          : "bg-[#F8F9FA] text-[#0C1827]"
        }
      `}
    >
      {/* =========================================================
          BACKGROUND WORLD MAP
      ========================================================= */}

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

            <div
              className={`
                absolute
                inset-0
                pointer-events-none
                transition-colors
                duration-300
                ${theme === "dark"
                  ? "bg-gradient-to-b from-[#07192C]/40 via-transparent to-[#07192C]/60"
                  : "bg-gradient-to-b from-[#F8F9FA]/30 via-transparent to-[#F8F9FA]/40"
                }
              `}
            />
          </div>
        ) : (
          /* SVG FALLBACK */
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
                  fill={
                    theme === "dark" ? "#FFFFFF" : "#0C1827"
                  }
                  opacity="0.3"
                />
              </pattern>

              <rect
                width="100%"
                height="100%"
                fill="url(#how-it-works-dots)"
              />
            </svg>

            <div
              className={`
                absolute
                inset-0
                pointer-events-none
                ${theme === "dark"
                  ? "bg-[#07192C]/30"
                  : "bg-[#F8F9FA]/30"
                }
              `}
            />
          </div>
        )}
      </div>

      {/* =========================================================
          DECORATIVE HOTSPOTS
      ========================================================= */}

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

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="mx-auto max-w-[1650px] px-6 sm:px-8 md:px-[30px] relative z-10">

        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="w-full mx-auto mb-12 sm:mb-16 text-center"
        >
          {/* Small Label */}
          <span
            className={`
              inline-block
              text-sm
              sm:text-base
              lg:text-lg
              font-bold
              uppercase
              tracking-[0.18em]
              mb-4
              font-inter
              text-center
              ${theme === "dark"
                ? "!text-slate-300"
                : "!text-[#556070]"
              }
            `}
          >
            {titleTag}
          </span>

          {/* Main Title */}
          <h2
            className={`
              w-full
              mx-auto
              text-center
              !text-center
              font-inter
              text-[36px]
              xs:text-[42px]
              sm:text-5xl
              lg:text-[52px]
              xl:text-[58px]
              font-extrabold
              tracking-[-0.025em]
              leading-[1.1]
              mb-4
              sm:mb-5
              ${theme === "dark"
                ? "!text-white"
                : "!text-[#0C1827]"
              }
            `}
          >
            {headlineMain}{" "}
            <span
              className={
                theme === "dark"
                  ? "!text-[#FF5500]"
                  : "!text-[#FE6F1F]"
              }
            >
              {headlineHighlight}
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className={`
              w-full
              max-w-3xl
              mx-auto
              text-center
              !text-center
              font-inter
              text-[15px]
              sm:text-[16px]
              lg:text-[17px]
              font-normal
              leading-[1.6]
              ${theme === "dark"
                ? "!text-slate-300"
                : "!text-[#0C1827]"
              }
            `}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* =======================================================
            5 STEPS PROCESS
        ======================================================= */}

        <div className="relative mb-16 sm:mb-20 min-h-[440px]">

          {/* Curved Dotted Connecting Line */}
          <div className="hidden lg:block absolute left-0 right-0 top-0 w-full h-[400px] pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 400"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 100 152 C 170 192, 230 232, 300 232 C 370 232, 430 195, 500 162 C 570 128, 630 82, 700 82 C 770 82, 830 98, 900 122"
                stroke={
                  theme === "dark"
                    ? "#FF5500"
                    : "#FE6F1F"
                }
                strokeWidth="3.5"
                strokeDasharray="0.1 12"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>
          </div>

          {/* Ambient Glows */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-hidden max-w-[1350px] mx-auto">
            <div className="absolute top-[152px] left-[10%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FE6F1F]/20 rounded-full blur-md" />

            <div className="absolute top-[232px] left-[30%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#FE6F1F]/25 rounded-full blur-lg" />

            <div className="absolute top-[162px] left-[50%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FE6F1F]/20 rounded-full blur-md" />

            <div className="absolute top-[82px] left-[70%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#FE6F1F]/30 rounded-full blur-lg" />

            <div className="absolute top-[122px] left-[90%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FE6F1F]/20 rounded-full blur-md" />
          </div>

          {/* =====================================================
              5 STEP COLUMNS
          ===================================================== */}

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-4 relative z-10 items-start">
            {steps.map((item, idx) => {
              const desktopPaddingTop =
                idx === 0
                  ? "lg:pt-[70px]"
                  : idx === 1
                    ? "lg:pt-[150px]"
                    : idx === 2
                      ? "lg:pt-[80px]"
                      : idx === 3
                        ? "lg:pt-[0px]"
                        : "lg:pt-[40px]";

              const isLastOddItem =
                idx === steps.length - 1 &&
                steps.length % 2 !== 0;

              return (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-40px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -4 }}
                  className={`
                    flex
                    flex-col
                    items-center
                    text-center
                    transition-all
                    duration-300
                    group
                    cursor-pointer
                    ${desktopPaddingTop}
                    ${isLastOddItem
                      ? "col-span-2 lg:col-span-1 max-w-[260px] mx-auto mt-2 lg:mt-0"
                      : ""
                    }
                  `}
                >
                  {/* Step Number */}
                  <span
                    className={`
                      text-2xl
                      sm:text-3xl
                      lg:text-[36px]
                      xl:text-[40px]
                      font-extrabold
                      mb-5
                      sm:mb-6
                      lg:mb-7
                      tracking-tight
                      font-inter
                      ${theme === "dark"
                        ? "!text-[#FF5500]"
                        : "!text-[#FE6F1F]"
                      }
                    `}
                  >
                    {item.stepNumber}
                  </span>

                  {/* Icon Circle */}
                  <div
                    className={`
                      w-20
                      h-20
                      sm:w-[104px]
                      sm:h-[104px]
                      lg:w-28
                      lg:h-28
                      rounded-full
                      flex
                      items-center
                      justify-center
                      mb-6
                      sm:mb-8
                      lg:mb-10
                      border-2
                      transition-all
                      duration-300
                      shadow-md
                      group-hover:shadow-xl
                      relative
                      z-10
                      ${theme === "dark"
                        ? "bg-[#0B1A2D] border-slate-700 text-white group-hover:bg-[#FF5500] shadow-black/40"
                        : "bg-white border-slate-200 text-[#0C1827] group-hover:bg-[#07192C] group-hover:!text-white shadow-slate-200/60"
                      }
                    `}
                  >
                    {/* Inner Glow */}
                    <div
                      className={`
                        absolute
                        inset-0
                        rounded-full
                        ${theme === "dark"
                          ? "bg-[#FF5500]/10"
                          : "bg-[#FE6F1F]/5"
                        }
                      `}
                    />

                    <div
                      className={`
                        transition-colors
                        duration-300
                        [&_svg]:!w-9
                        [&_svg]:!h-9
                        xs:[&_svg]:!w-10
                        xs:[&_svg]:!h-10
                        text-4xl
                        xs:text-[42px]
                        ${theme === "dark"
                          ? "text-[#FF5500] group-hover:text-white"
                          : "text-[#0C1827] group-hover:text-white"
                        }
                      `}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex flex-col items-center text-center px-1 w-full">
                    <h3
                      className={`
                        text-base
                        sm:text-[22px]
                        lg:text-[24px]
                        font-extrabold
                        tracking-tight
                        mb-1.5
                        max-w-[170px]
                        sm:max-w-[220px]
                        leading-snug
                        text-center
                        !text-center
                        font-inter
                        ${theme === "dark"
                          ? "!text-white"
                          : "!text-[#0C1827]"
                        }
                      `}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`
                        text-[14px]
                        md:text-[16px]
                        max-w-[180px]
                        sm:max-w-[240px]
                        text-center
                        !text-center
                        font-inter
                        leading-[1.5]
                        ${theme === "dark"
                          ? "!text-slate-300"
                          : "!text-[#0C1827]"
                        }
                      `}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
};

export default HowItWorksSection;