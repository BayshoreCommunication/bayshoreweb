"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiTrendingUp, FiShield, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { MultiStepHiringForm } from "./MultiStepHiringForm";

export const DUMMY_HERO_IMAGES = {
  leftBg: "/assets/bayshore-solutions/world-map-bg.png",
  rightBg: "/assets/bayshore-solutions/office-bg.jpg",
};

export interface HeroSectionProps {
  leftBgImage?: string;
  rightBgImage?: string;
  theme?: "light" | "dark";
  formId?: string;
  onSubmitForm?: (data: HeroFormData, e?: React.FormEvent<HTMLFormElement>) => void;
}

export interface HeroFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  phoneNumber: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  leftBgImage = "/assets/bayshore-solutions/home/left.png",
  rightBgImage = "/assets/bayshore-solutions/home/right.png",
  theme = "light",
  formId = "bayshore-hero-form",
  onSubmitForm,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<HeroFormData>({
    fullName: "",
    workEmail: "",
    companyName: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<{ [key in keyof HeroFormData]?: string }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leftImgError, setLeftImgError] = useState(false);
  const [rightImgError, setRightImgError] = useState(false);

  // Prevent background page from scrolling when modal is open using bulletproof body position lock
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isModalOpen]);

  const validateForm = (): { [key in keyof HeroFormData]?: string } => {
    const newErrors: { [key in keyof HeroFormData]?: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }
    return newErrors;
  };

  const handleChange = (field: keyof HeroFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    if (onSubmitForm) {
      onSubmitForm(formData, e);
    }
    setIsModalOpen(true);
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.8, rotate: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.5 + i * 0.15,
        type: "spring",
        stiffness: 110,
        damping: 12,
      },
    }),
  };

  return (
    <section
      className={`relative w-full max-w-full h-auto lg:h-[72vh] lg:min-h-[720px] flex items-center justify-center overflow-hidden transition-colors duration-300 pt-[80px] md:pt-[90px] pb-12 lg:pb-0 ${
        theme === "dark"
          ? "bg-[#07192C] text-white"
          : "bg-white text-[#0C1827]"
      }`}
    >
      {/* Background Layering Setup */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated Background Glow Orbs for rich visuals */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.35, 0.6, 0.35],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
            theme === "dark" ? "bg-[#FF5500]/20" : "bg-[#FE6F1F]/15"
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.5, 0.25],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={`absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none ${
            theme === "dark" ? "bg-cyan-500/15" : "bg-orange-300/25"
          }`}
        />

        {/* Full Section Layer: Right Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          {!rightImgError ? (
            <div className="relative w-full h-full">
              <Image
                src={rightBgImage}
                alt="Background Full Section"
                fill
                priority
                className={`object-cover object-center transition-opacity duration-300 ${
                  theme === "dark" ? "brightness-75 opacity-90" : "brightness-95 opacity-95"
                }`}
                onError={() => setRightImgError(true)}
              />
              <div
                className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-[#07192C]/40 mix-blend-multiply"
                    : "bg-slate-900/10 mix-blend-multiply"
                }`}
              />
            </div>
          ) : (
            <div
              className={`absolute inset-0 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-slate-900 via-[#0A1E34] to-[#07192C]"
                  : "bg-gradient-to-br from-amber-100/60 via-orange-50/70 to-slate-300/80"
              }`}
            />
          )}
        </div>

        {/* Left Side Layer */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-full lg:w-[54%] xl:w-[50%] h-full z-[1] ${
            theme === "dark" ? "bg-[#07192C]" : "bg-white"
          }`}
        >
          {!leftImgError ? (
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={leftBgImage}
                alt="Background Left"
                fill
                priority
                className={`object-cover object-left transition-opacity duration-300 ${
                  theme === "dark" ? "brightness-75 opacity-90" : "opacity-100"
                }`}
                onError={() => setLeftImgError(true)}
              />
              {theme === "dark" && (
                <div className="absolute inset-0 bg-[#07192C]/50 pointer-events-none" />
              )}
              <div
                className={`hidden lg:block absolute inset-y-0 right-0 w-40 pointer-events-none backdrop-blur-[4px] ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-transparent via-[#07192C]/80 to-transparent"
                    : "bg-gradient-to-r from-transparent via-white/80 to-transparent"
                }`}
              />
              <div
                className={`lg:hidden absolute inset-x-0 bottom-0 h-1/3 pointer-events-none ${
                  theme === "dark"
                    ? "bg-gradient-to-b from-transparent to-[#07192C]"
                    : "bg-gradient-to-b from-transparent to-white"
                }`}
              />
            </div>
          ) : (
            <div className="absolute inset-0 overflow-hidden opacity-25">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 600"
                fill="none"
              >
                <pattern
                  id="dot-grid"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="3"
                    cy="3"
                    r="1.8"
                    fill={theme === "dark" ? "#FF5500" : "#243248"}
                    opacity="0.35"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dot-grid)" />
              </svg>
            </div>
          )}
        </div>

        {/* Dedicated Middle Backdrop Blur Overlay Band */}
        <div
          className={`hidden lg:block absolute inset-y-0 left-[38%] xl:left-[42%] w-[24%] pointer-events-none z-[2] backdrop-blur-[6px] ${
            theme === "dark"
              ? "bg-gradient-to-r from-transparent via-[#07192C]/50 to-transparent"
              : "bg-gradient-to-r from-transparent via-white/60 to-transparent"
          }`}
        />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto max-w-[1650px] px-6 sm:px-8 md:px-[30px] relative z-10 py-8 lg:py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center w-full">
          {/* Left Column: Headline, Description & 3 Circular Feature Badges */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-7 flex flex-col items-start text-left pr-0 lg:pr-4"
          >
            {/* Top Sub-badge with scale animation */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              className="flex items-center gap-2 mb-4"
            >
              <span className={`inline-block text-base sm:text-xl uppercase tracking-[0.2em] font-instrument ${
                theme === "dark" ? "!text-white" : "!text-[#0C1827]"
              }`}>
                VIRTUAL TALENT. REAL IMPACT.
              </span>
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#FE6F1F] dark:bg-[#FF5500]"
              />
            </motion.div>

            {/* Headline with 3D perspective spring entrance */}
            <motion.h1
              initial={{ opacity: 0, y: 35, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`text-[42px] xs:text-[46px] sm:text-6xl lg:text-[72px] xl:text-[82px] font-extrabold tracking-tight leading-[1.08] sm:leading-[1.04] mb-6 !text-left font-playfair ${
                theme === "dark" ? "!text-white" : "!text-[#0C1827]"
              }`}
            >
              Great Talent
              <br />
              Doesn&apos;t Have to
              <br />
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}
              >
                Be Local.
              </motion.span>
            </motion.h1>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              style={{ lineHeight: 1.55 }}
              className={`text-xl md:text-2xl max-w-3xl mb-8 sm:mb-10 font-normal text-left !text-left w-full font-instrument ${
                theme === "dark" ? "!text-slate-300" : "!text-[#0C1827]"
              }`}
            >
              Pre-vetted virtual professionals for law firms, healthcare providers, real estate teams, and growing businesses. Save time, reduce costs, and focus on what matters most.
            </motion.p>

            {/* 3 Circular Feature Badges with rich floating loop & spring hover */}
            <div className="grid grid-cols-3 gap-3 sm:gap-8 w-full max-w-xl pt-2">
              {/* Feature 1 */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={badgeVariants}
                whileHover={{ y: -10, scale: 1.08, rotate: -2 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center p-4 mb-3 transition-all duration-300 shadow-lg group-hover:shadow-2xl relative ${
                    theme === "dark"
                      ? "bg-slate-800 !text-[#FF5500] group-hover:bg-[#FF5500] group-hover:!text-white border border-slate-700"
                      : "bg-[#F3F5F8] !text-[#0C1827] group-hover:bg-[#07192C] group-hover:!text-white border border-slate-200/50"
                  }`}
                >
                  <FiUser className="text-3xl sm:text-4xl lg:text-[64px] transition-transform duration-300 group-hover:scale-110" />
                </motion.div>
                <span className={`text-xl sm:text-2xl leading-tight font-instrument ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}>
                  Skilled &<br />
                  Vetted Talent
                </span>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={badgeVariants}
                whileHover={{ y: -10, scale: 1.08, rotate: 2 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center p-4 mb-3 transition-all duration-300 shadow-lg group-hover:shadow-2xl relative ${
                    theme === "dark"
                      ? "bg-slate-800 !text-[#FF5500] group-hover:bg-[#FF5500] group-hover:!text-white border border-slate-700"
                      : "bg-[#F3F5F8] !text-[#0C1827] group-hover:bg-[#07192C] group-hover:!text-white border border-slate-200/50"
                  }`}
                >
                  <FiTrendingUp className="text-3xl sm:text-4xl lg:text-[64px] transition-transform duration-300 group-hover:scale-110" />
                </motion.div>
                <span className={`text-xl sm:text-2xl leading-tight font-instrument ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}>
                  Flexible<br />
                  and Scalable
                </span>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={badgeVariants}
                whileHover={{ y: -10, scale: 1.08, rotate: -2 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center p-4 mb-3 transition-all duration-300 shadow-lg group-hover:shadow-2xl relative ${
                    theme === "dark"
                      ? "bg-slate-800 !text-[#FF5500] group-hover:bg-[#FF5500] group-hover:!text-white border border-slate-700"
                      : "bg-[#F3F5F8] !text-[#0C1827] group-hover:bg-[#07192C] group-hover:!text-white border border-slate-200/50"
                  }`}
                >
                  <FiShield className="text-3xl sm:text-4xl lg:text-[64px] transition-transform duration-300 group-hover:scale-110" />
                </motion.div>
                <span className={`text-xl sm:text-2xl leading-tight font-instrument ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}>
                  No Long-Term<br />
                  Commitments
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Floating Form Card with Ambient Motion */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 75, damping: 15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full font-instrument"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`w-full max-w-[590px] px-6 py-8 sm:p-12 lg:p-14 xl:p-16 rounded-[36px] sm:rounded-[40px] shadow-2xl backdrop-blur-md transition-all duration-300 relative overflow-hidden ${
                theme === "dark"
                  ? "bg-[#0B1A2D]/95 !text-white border border-slate-800/90 shadow-black/60"
                  : "bg-white !text-[#0C1827] border border-slate-100 shadow-2xl shadow-slate-900/15"
              }`}
            >
              {/* Subtle Animated Top Border Glow Accent */}
              <motion.div
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FE6F1F] via-[#FF5500] to-[#07192C] pointer-events-none"
              />

              {/* Card Header */}
              <div className="mb-7 sm:mb-9">
                <span
                  className={`blocktext-xl sm:text-2xl  leading-tight font-instrument mb-3 ${
                    theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
                  }`}
                >
                  GET STARTED TODAY
                </span>
                <h2 className={`text-3xl sm:text-[38px] xl:text-[44px] font-extrabold tracking-tight leading-tight mb-3 font-playfair ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}>
                  Tell Us Who You Need.
                </h2>
                <p
                  className={`text-xl sm:text-2xl  leading-tight font-instrument ${
                    theme === "dark" ? "!text-slate-100" : "!text-[#556070]"
                  }`}
                >
                  We&apos;ll match you with the right virtual talent based on your goals and industry.
                </p>
              </div>

              {/* Form Body */}
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="py-12 text-center flex flex-col items-center justify-center font-instrument"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4 shadow-md"
                  >
                    <FiCheckCircle size={38} />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 font-playfair">Thank You!</h3>
                  <p className={`text-base ${theme === "dark" ? "text-slate-300" : "text-[#556070]"}`}>
                    Your request has been received. Our talent matchmaker will reach out within 2 business hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  id={formId}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5 sm:gap-6 font-instrument"
                >
                  {/* Full Name Input */}
                  <div className="flex flex-col text-left">
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        className={`w-full px-6 py-5 sm:px-7 sm:py-6 rounded-lg sm:rounded-2xl text-base sm:text-lg font-medium border transition-all outline-none focus:ring-2 ${
                          errors.fullName
                            ? "border-red-500 bg-red-500/5 focus:ring-red-500/30 focus:border-red-500"
                            : theme === "dark"
                            ? "bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:ring-[#FE6F1F]/40 focus:border-[#FF5500]"
                            : "bg-[#FAFAFC] border-slate-200/90 text-[#0C1827] placeholder-slate-400 focus:ring-[#FE6F1F]/40 focus:bg-white focus:border-[#07192C]"
                        }`}
                      />
                    </motion.div>
                    {errors.fullName && (
                      <span className="text-red-500 text-xs sm:text-sm font-semibold mt-1.5 ml-2">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Work Email Input */}
                  <div className="flex flex-col text-left">
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <input
                        type="email"
                        name="workEmail"
                        id="workEmail"
                        placeholder="Work Email"
                        value={formData.workEmail}
                        onChange={(e) => handleChange("workEmail", e.target.value)}
                        className={`w-full px-6 py-5 sm:px-7 sm:py-6 rounded-lg sm:rounded-2xl text-base sm:text-lg font-medium border transition-all outline-none focus:ring-2 ${
                          errors.workEmail
                            ? "border-red-500 bg-red-500/5 focus:ring-red-500/30 focus:border-red-500"
                            : theme === "dark"
                            ? "bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:ring-[#FE6F1F]/40 focus:border-[#FF5500]"
                            : "bg-[#FAFAFC] border-slate-200/90 text-[#0C1827] placeholder-slate-400 focus:ring-[#FE6F1F]/40 focus:bg-white focus:border-[#07192C]"
                        }`}
                      />
                    </motion.div>
                    {errors.workEmail && (
                      <span className="text-red-500 text-xs sm:text-sm font-semibold mt-1.5 ml-2">
                        {errors.workEmail}
                      </span>
                    )}
                  </div>

                  {/* Company Name Input */}
                  <div className="flex flex-col text-left">
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={(e) => handleChange("companyName", e.target.value)}
                        className={`w-full px-6 py-5 sm:px-7 sm:py-6 rounded-lg sm:rounded-2xl text-base sm:text-lg font-medium border transition-all outline-none focus:ring-2 ${
                          errors.companyName
                            ? "border-red-500 bg-red-500/5 focus:ring-red-500/30 focus:border-red-500"
                            : theme === "dark"
                            ? "bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:ring-[#FE6F1F]/40 focus:border-[#FF5500]"
                            : "bg-[#FAFAFC] border-slate-200/90 text-[#0C1827] placeholder-slate-400 focus:ring-[#FE6F1F]/40 focus:bg-white focus:border-[#07192C]"
                        }`}
                      />
                    </motion.div>
                    {errors.companyName && (
                      <span className="text-red-500 text-xs sm:text-sm font-semibold mt-1.5 ml-2">
                        {errors.companyName}
                      </span>
                    )}
                  </div>

                  {/* Phone Number Input */}
                  <div className="flex flex-col text-left">
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={(e) => handleChange("phoneNumber", e.target.value)}
                        className={`w-full px-6 py-5 sm:px-7 sm:py-6 rounded-lg sm:rounded-2xl text-base sm:text-lg font-medium border transition-all outline-none focus:ring-2 ${
                          errors.phoneNumber
                            ? "border-red-500 bg-red-500/5 focus:ring-red-500/30 focus:border-red-500"
                            : theme === "dark"
                            ? "bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:ring-[#FE6F1F]/40 focus:border-[#FF5500]"
                            : "bg-[#FAFAFC] border-slate-200/90 text-[#0C1827] placeholder-slate-400 focus:ring-[#FE6F1F]/40 focus:bg-white focus:border-[#07192C]"
                        }`}
                      />
                    </motion.div>
                    {errors.phoneNumber && (
                      <span className="text-red-500 text-xs sm:text-sm font-semibold mt-1.5 ml-2">
                        {errors.phoneNumber}
                      </span>
                    )}
                  </div>

                  {/* Submit CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.03, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className={`w-full py-5 sm:py-6 rounded-full font-extrabold text-lg sm:text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl mt-3 relative overflow-hidden group ${
                      theme === "dark"
                        ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                        : "bg-[#07192C] text-white hover:bg-[#000e1e]"
                    }`}
                  >
                    <span>Book a call today</span>
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FiArrowRight size={24} />
                    </motion.div>
                  </motion.button>

                  {/* Form Footer Disclaimer */}
                  <p
                    className={`text-center text-xl sm:text-2xl  leading-tight font-instrument ${
                      theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
                    }`}
                  >
                    No obligation. Just a conversation.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Get Started MultiStep Form Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-hidden overscroll-none"
            onClick={() => setIsModalOpen(false)}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[1040px] my-auto relative"
            >
              <MultiStepHiringForm
                theme={theme}
                defaultStep={2}
                initialData={formData}
                onClose={() => setIsModalOpen(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
