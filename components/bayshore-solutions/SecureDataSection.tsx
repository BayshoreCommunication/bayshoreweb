"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiLock,
  FiMonitor,
  FiFileText,
  FiUsers,
  FiShield,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

export interface SecureDataFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SecureDataSectionProps {
  theme?: "light" | "dark";
  id?: string;
  onBuildTeamClick?: () => void;
}

export const DEFAULT_SECURE_FEATURES: SecureDataFeature[] = [
  {
    id: "f1",
    title: "Dedicated Devices",
    description: "Individual devices for individual professionals.",
    icon: <FiMonitor className="text-xl sm:text-2xl" />,
  },
  {
    id: "f2",
    title: "Controlled Access",
    description: "Access is limited to what each role requires.",
    icon: <FiLock className="text-xl sm:text-2xl" />,
  },
  {
    id: "f3",
    title: "Protected Workflows",
    description:
      "Client work and business information stay within dedicated working environments.",
    icon: <FiFileText className="text-xl sm:text-2xl" />,
  },
  {
    id: "f4",
    title: "Confidential Support",
    description:
      "Your information is handled with the care and confidentiality your business expects.",
    icon: <FiUsers className="text-xl sm:text-2xl" />,
  },
];

export const SecureDataSection: React.FC<SecureDataSectionProps> = ({
  theme = "light",
  id = "secure-data",
  onBuildTeamClick,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id={id}
      className={`scroll-mt-20 md:scroll-mt-24 py-16 sm:py-20 lg:py-24 w-full max-w-full overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#07192C] text-white"
          : "bg-white text-[#0C1827]"
      }`}
    >
      <div className=" mx-auto max-w-[1650px] px-10 md:px-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headings, 4 Features Grid & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tagline Sub-badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-6 bg-[#FE6F1F] dark:bg-[#FF5500] rounded-full inline-block" />
              <span
                className={`text-base sm:text-lg font-extrabold uppercase tracking-[0.25em] font-instrument ${
                  theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
                }`}
              >
                SECURE DATA
              </span>
            </div>

            {/* Main Headline */}
            <h2
              className={`text-[36px] xs:text-[42px] sm:text-5xl lg:text-[48px] xl:text-[56px] font-extrabold tracking-tight leading-[1.12] sm:leading-[1.18] mb-6 font-playfair ${
                theme === "dark" ? "!text-white" : "!text-[#0C1827]"
              }`}
            >
              Your Business Data{" "}
              <span
                className={
                  theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"
                }
              >
                Deserves a Secure Environment.
              </span>
            </h2>

            {/* Subtitle Description */}
            <p
              style={{ lineHeight: 1.6 }}
              className={`text-[14px] md:text-[16px] font-normal  mb-8 sm:mb-10 font-instrument ${
                theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
              }`}
            >
              Your business information should remain protected whether your team
              works in the office or remotely. Bayshore provides dedicated
              professionals with individual devices and controlled work
              environments, helping keep client information, files,
              communications, and business operations separated and protected.
            </p>

            {/* 4 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-9 sm:mb-11 font-instrument">
              {DEFAULT_SECURE_FEATURES.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-[16px] md:rounded-[20px] p-4 md:p-6 lg:p-8 flex flex-col justify-start border transition-all duration-300 shadow-xs hover:shadow-lg cursor-pointer ${
                    theme === "dark"
                      ? "bg-[#0B1A2D] border-slate-800/90 text-white hover:border-[#FF5500]/40 shadow-black/40"
                      : "bg-[#F8FAFC] border-slate-200/90 text-[#0C1827] hover:border-[#FE6F1F]/40 shadow-slate-200/50"
                  }`}
                >
                  <div>
                   <div className=" text-[#FE6F1F] dark:text-[#FF5500] flex items-start justify-start mb-3.5 md:mb-5 lg:mb-6 shadow-xs shrink-0 [&>svg]:text-[24px] md:[&>svg]:text-[30px]">
  {item.icon}
</div>
                    <h3
                      className={`text-lg sm:text-[19px] font-extrabold tracking-tight mb-2 font-playfair ${
                        theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    className={`text-[14px] md:text-[16px] leading-relaxed font-medium ${
                      theme === "dark" ? "!text-slate-300" : "!text-[#556070]"
                    }`}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            
          </motion.div>

          {/* Right Column: Visual Laptop Setup Graphic with 3 Floating Glassmorphism Badges */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center w-full font-instrument pt-6 lg:pt-0"
          >
            <div className="relative w-full max-w-[580px] group">
              {/* Laptop Main Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                {!imgError ? (
                  <Image
                    src="/assets/bayshore-solutions/home/secure-data-laptop.png"
                    alt="Bayshore Secure Data Laptop Environment"
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#07192C] to-slate-800 text-white p-6">
                    <FiShield size={64} className="text-[#FE6F1F] mb-4 animate-pulse" />
                    <span className="text-xl font-bold font-playfair">Secure Work Environment</span>
                  </div>
                )}

                {/* Subtle Ambient Vignette & Tech Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                {/* Glowing Shield Hotspot Pulse Node on Laptop Screen */}
                <div className="absolute top-[48%] left-[47%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FE6F1F]/30 rounded-full blur-md animate-pulse pointer-events-none" />
              </div>

              {/* Floating Glassmorphism Badge 1: Individual Device Access (Top Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -top-5 left-2 sm:-top-6 sm:left-4 z-20 flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border shadow-xl backdrop-blur-md transition-all ${
                  theme === "dark"
                    ? "bg-[#0B1A2D]/95 border-slate-700 text-white shadow-black/50"
                    : "bg-white/95 border-slate-200/90 text-[#0C1827] shadow-slate-900/10"
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-50 dark:bg-slate-800 text-[#FE6F1F] dark:text-[#FF5500] flex items-center justify-center shrink-0">
                  <FiMonitor size={20} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-extrabold font-playfair leading-tight">
                    Individual
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold font-playfair leading-tight">
                    Device Access
                  </span>
                </div>
              </motion.div>

              {/* Floating Glassmorphism Badge 2: Secure Work Environment (Top Right) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className={`absolute -top-5 right-2 sm:-top-6 sm:right-4 z-20 flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border shadow-xl backdrop-blur-md transition-all ${
                  theme === "dark"
                    ? "bg-[#0B1A2D]/95 border-slate-700 text-white shadow-black/50"
                    : "bg-white/95 border-slate-200/90 text-[#0C1827] shadow-slate-900/10"
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-50 dark:bg-slate-800 text-[#FE6F1F] dark:text-[#FF5500] flex items-center justify-center shrink-0">
                  <FiLock size={20} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-extrabold font-playfair leading-tight">
                    Secure
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold font-playfair leading-tight">
                    Work Environment
                  </span>
                </div>
              </motion.div>

              {/* Floating Glassmorphism Badge 3: Confidential Client Data (Middle Right) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 z-20 flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border shadow-xl backdrop-blur-md transition-all ${
                  theme === "dark"
                    ? "bg-[#0B1A2D]/95 border-slate-700 text-white shadow-black/50"
                    : "bg-white/95 border-slate-200/90 text-[#0C1827] shadow-slate-900/10"
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-50 dark:bg-slate-800 text-[#FE6F1F] dark:text-[#FF5500] flex items-center justify-center shrink-0">
                  <FiFileText size={20} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-extrabold font-playfair leading-tight">
                    Confidential
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold font-playfair leading-tight">
                    Client Data
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecureDataSection;
