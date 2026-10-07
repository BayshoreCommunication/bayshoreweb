"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiLock,
  FiMonitor,
  FiFileText,
  FiUsers,
  FiShield,
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
  id = "secure-data",
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id={id}
      className="scroll-mt-20 md:scroll-mt-24 py-16 sm:py-20 lg:py-24 w-full bg-white text-[#0B192C] overflow-hidden"
    >
      {/* Standard Section Container - Matching other sections with max-w-[1380px] */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headings & 4 Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tagline Sub-badge */}
            {/* <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-5 bg-[#FE6F1F] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#556070]">
                SECURE DATA
              </span>
            </div> */}

            {/* Main Headline */}
            <h2 className="text-[28px] md:text-[46px] font-bold text-[#0B192C] tracking-tight leading-[1.18] mb-4">
              Your Business Data{" "}
              <span className="text-[#FE6F1F]">
                Deserves a Secure Environment.
              </span>
            </h2>

            {/* Subtitle Description */}
            {/* <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#475569] leading-relaxed mb-8">
              Your business information should remain protected whether your team
              works in the office or remotely. Bayshore provides dedicated
              professionals with individual devices and controlled work
              environments, helping keep client information, files,
              communications, and business operations separated and protected.
            </p> */}

            {/* 4 Feature Cards Grid (2x2 Grid for optimal readability & spacing) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {DEFAULT_SECURE_FEATURES.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-[18px] p-5 sm:p-6 flex flex-col justify-start border border-slate-200/80 bg-[#F8FAFC] text-[#0B192C] hover:border-[#FE6F1F]/40 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div className="text-[#FE6F1F] mb-3 shrink-0 [&>svg]:text-[24px] sm:[&>svg]:text-[26px]">
                    {item.icon}
                  </div>
                  <h3 className="text-[16px] sm:text-[17px] font-bold tracking-tight mb-1 text-[#0B192C]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#475569]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Laptop Setup Graphic with 3 Floating Glassmorphism Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center w-full pt-8 lg:pt-0"
          >
            <div className="relative w-full max-w-[500px] group">
              {/* Laptop Main Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100">
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
                    <span className="text-xl font-bold">Secure Work Environment</span>
                  </div>
                )}

                {/* Subtle Ambient Vignette & Tech Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                {/* Glowing Shield Hotspot Pulse Node on Laptop Screen */}
                <div className="absolute top-[48%] left-[47%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FE6F1F]/30 rounded-full blur-md animate-pulse pointer-events-none" />
              </div>

          

              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecureDataSection;
