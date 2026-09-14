"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FiUser, FiTrendingUp, FiShield, FiArrowRight, FiChevronDown, FiCheckCircle } from "react-icons/fi";

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
  supportType: string;
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
    supportType: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [leftImgError, setLeftImgError] = useState(false);
  const [rightImgError, setRightImgError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmitForm) {
      onSubmitForm(formData, e);
    }
    setSubmitted(true);
  };

  const supportOptions = [
    "Virtual Assistant / Admin Support",
    "Software Engineer / Web Developer",
    "Digital Marketing & SEO",
    "UI/UX & Graphic Design",
    "Customer Care Specialist",
    "Bookkeeping & Financial Ops",
  ];

  return (
    <section
      className={`relative w-full max-w-full h-auto lg:h-[72vh] lg:min-h-[700px] flex items-center justify-center overflow-hidden transition-colors duration-300 pt-[80px] md:pt-[90px] pb-12 lg:pb-0 ${
        theme === "dark"
          ? "bg-[#07192C] text-white"
          : "bg-white text-[#0C1827]"
      }`}
    >
      {/* Background Layering Setup */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Full Section Layer: Right Background Image (Office photo spanning full section width) */}
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
              {/* Full Section Image Color/Tint Overlay */}
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

        {/* Left Side Layer (On Top of Full Background): Opaque Left Bg Image Container covering Left Side Only */}
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
              {/* Dark Mode Overlay on Left Image */}
              {theme === "dark" && (
                <div className="absolute inset-0 bg-[#07192C]/50 pointer-events-none" />
              )}
              {/* Soft Gradient Fade on Right Edge of Left Layer */}
              <div
                className={`hidden lg:block absolute inset-y-0 right-0 w-40 pointer-events-none backdrop-blur-[4px] ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-transparent via-[#07192C]/80 to-transparent"
                    : "bg-gradient-to-r from-transparent via-white/80 to-transparent"
                }`}
              />
              {/* Mobile Gradient Fade */}
              <div
                className={`lg:hidden absolute inset-x-0 bottom-0 h-1/3 pointer-events-none ${
                  theme === "dark"
                    ? "bg-gradient-to-b from-transparent to-[#07192C]"
                    : "bg-gradient-to-b from-transparent to-white"
                }`}
              />
            </div>
          ) : (
            /* Fallback */
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

      {/* Main Content Area matching project max width constraint */}
      <div className="container mx-auto max-w-[1650px] px-6 sm:px-8 md:px-[30px] relative z-10 py-8 lg:py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center w-full">
          {/* Left Column: Headline, Description & 3 Circular Feature Badges */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pr-0 lg:pr-4">
            {/* Top Sub-badge */}
            <span
              className={`inline-block text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] mb-4 ${
                theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
              }`}
            >
              VIRTUAL TALENT. REAL IMPACT.
            </span>

            {/* Headline with enlarged typography on mobile & desktop */}
            <h1 className={`text-[42px] xs:text-[46px] sm:text-6xl lg:text-[72px] xl:text-[82px] font-extrabold tracking-tight leading-[1.08] sm:leading-[1.04] mb-6 text-left !text-left ${
              theme === "dark" ? "!text-white" : "!text-[#0C1827]"
            }`}>
              Great Talent
              <br />
              Doesn&apos;t Have to
              <br />
              <span className={theme === "dark" ? "!text-[#FF5500]" : "!text-[#FE6F1F]"}>Be Local.</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p
              className={`text-lg sm:text-xl lg:text-[20px] xl:text-[21px] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-medium text-left !text-left w-full ${
                theme === "dark" ? "!text-slate-100" : "!text-[#556070]"
              }`}
            >
              Pre-vetted virtual professionals for law firms, healthcare providers, real estate teams, and growing businesses. Save time, reduce costs, and focus on what matters most.
            </p>

            {/* 3 Circular Feature Badges (Enlarged match to screenshot) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-8 w-full max-w-xl pt-2">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 sm:w-22 sm:h-22 rounded-full flex items-center justify-center mb-3 transition-transform hover:scale-105 ${
                    theme === "dark"
                      ? "bg-slate-800 !text-white shadow-inner border border-slate-700"
                      : "bg-[#F3F5F8] !text-[#0C1827] shadow-sm border border-slate-200/50"
                  }`}
                >
                  <FiUser className="text-[26px] sm:text-[34px]" />
                </div>
                <span className={`text-sm sm:text-base xl:text-lg font-bold leading-tight ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}>
                  Skilled &<br />
                  Vetted Talent
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 sm:w-22 sm:h-22 rounded-full flex items-center justify-center mb-3 transition-transform hover:scale-105 ${
                    theme === "dark"
                      ? "bg-slate-800 !text-white shadow-inner border border-slate-700"
                      : "bg-[#F3F5F8] !text-[#0C1827] shadow-sm border border-slate-200/50"
                  }`}
                >
                  <FiTrendingUp className="text-[26px] sm:text-[34px]" />
                </div>
                <span className={`text-sm sm:text-base xl:text-lg font-bold leading-tight ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}>
                  Flexible<br />
                  and Scalable
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 sm:w-22 sm:h-22 rounded-full flex items-center justify-center mb-3 transition-transform hover:scale-105 ${
                    theme === "dark"
                      ? "bg-slate-800 !text-white shadow-inner border border-slate-700"
                      : "bg-[#F3F5F8] !text-[#0C1827] shadow-sm border border-slate-200/50"
                  }`}
                >
                  <FiShield className="text-[26px] sm:text-[34px]" />
                </div>
                <span className={`text-sm sm:text-base xl:text-lg font-bold leading-tight ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}>
                  No Long-Term<br />
                  Commitments
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Enlarged Floating Form Card (Height & EmailJS friendly) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div
              className={`w-full max-w-[590px] px-6 py-8 sm:p-12 lg:p-14 xl:p-16 rounded-[36px] sm:rounded-[40px] shadow-2xl backdrop-blur-md transition-all duration-300 ${
                theme === "dark"
                  ? "bg-[#0B1A2D]/95 !text-white border border-slate-800/90 shadow-black/60"
                  : "bg-white !text-[#0C1827] border border-slate-100 shadow-2xl shadow-slate-900/15"
              }`}
            >
              {/* Card Header */}
              <div className="mb-7 sm:mb-9">
                <span
                  className={`block text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] mb-2 ${
                    theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
                  }`}
                >
                  GET STARTED TODAY
                </span>
                <h2 className={`text-3xl sm:text-[38px] xl:text-[44px] font-extrabold tracking-tight leading-tight mb-3 ${
                  theme === "dark" ? "!text-white" : "!text-[#0C1827]"
                }`}>
                  Tell Us Who You Need.
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed font-medium ${
                    theme === "dark" ? "!text-slate-100" : "!text-[#556070]"
                  }`}
                >
                  We&apos;ll match you with the right virtual talent based on your goals and industry.
                </p>
              </div>

              {/* Form Body - EmailJS Compatible with Form Ref & Standard Input Names */}
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4">
                    <FiCheckCircle size={38} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Thank You!</h3>
                  <p className={`text-base ${theme === "dark" ? "text-slate-300" : "text-[#556070]"}`}>
                    Your request has been received. Our talent matchmaker will reach out within 2 business hours.
                  </p>
                </div>
              ) : (
                <form
                  ref={formRef}
                  id={formId}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 sm:gap-6"
                >
                  {/* Full Name Input */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={`w-full px-6 py-5 sm:px-7 sm:py-6 rounded-lg sm:rounded-2xl text-base sm:text-lg font-medium border transition-all outline-none focus:ring-2 focus:ring-[#FE6F1F]/40 ${
                        theme === "dark"
                          ? "bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-[#FF5500]"
                          : "bg-[#FAFAFC] border-slate-200/90 text-[#0C1827] placeholder-slate-400 focus:bg-white focus:border-[#07192C]"
                      }`}
                    />
                  </div>

                  {/* Work Email Input */}
                  <div>
                    <input
                      type="email"
                      name="workEmail"
                      id="workEmail"
                      required
                      placeholder="Work Email"
                      value={formData.workEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, workEmail: e.target.value })
                      }
                      className={`w-full px-6 py-5 sm:px-7 sm:py-6 rounded-lg sm:rounded-2xl text-base sm:text-lg font-medium border transition-all outline-none focus:ring-2 focus:ring-[#FE6F1F]/40 ${
                        theme === "dark"
                          ? "bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-[#FF5500]"
                          : "bg-[#FAFAFC] border-slate-200/90 text-[#0C1827] placeholder-slate-400 focus:bg-white focus:border-[#07192C]"
                      }`}
                    />
                  </div>

                  {/* Company Name Input */}
                  <div>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      required
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      className={`w-full px-6 py-5 sm:px-7 sm:py-6 rounded-lg sm:rounded-2xl text-base sm:text-lg font-medium border transition-all outline-none focus:ring-2 focus:ring-[#FE6F1F]/40 ${
                        theme === "dark"
                          ? "bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-[#FF5500]"
                          : "bg-[#FAFAFC] border-slate-200/90 text-[#0C1827] placeholder-slate-400 focus:bg-white focus:border-[#07192C]"
                      }`}
                    />
                  </div>

                  {/* Support Needed Select Dropdown */}
                  <div className="relative">
                    <select
                      name="supportType"
                      id="supportType"
                      required
                      value={formData.supportType}
                      onChange={(e) =>
                        setFormData({ ...formData, supportType: e.target.value })
                      }
                      className={`w-full px-6 py-5 sm:px-7 sm:py-6 rounded-lg sm:rounded-2xl text-base sm:text-lg font-medium border appearance-none transition-all outline-none focus:ring-2 focus:ring-[#FE6F1F]/40 ${
                        theme === "dark"
                          ? "bg-slate-900/80 border-slate-700 text-white focus:border-[#FF5500]"
                          : "bg-[#FAFAFC] border-slate-200/90 text-[#0C1827] focus:bg-white focus:border-[#07192C]"
                      } ${!formData.supportType ? "text-slate-400" : ""}`}
                    >
                      <option value="" disabled hidden>
                        What type of support do you need?
                      </option>
                      {supportOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className={theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-[#0C1827]"}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    <FiChevronDown
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      size={22}
                    />
                  </div>

                  {/* Submit CTA Button matching screenshots */}
                  <button
                    type="submit"
                    className={`w-full py-5 sm:py-6 rounded-full font-extrabold text-lg sm:text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform active:scale-98 mt-3 ${
                      theme === "dark"
                        ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                        : "bg-[#07192C] text-white hover:bg-[#000e1e]"
                    }`}
                  >
                    <span>Find Talent</span>
                    <FiArrowRight size={24} />
                  </button>

                  {/* Form Footer Disclaimer */}
                  <p
                    className={`text-center text-sm sm:text-base mt-2 font-medium ${
                      theme === "dark" ? "!text-slate-200" : "!text-[#556070]"
                    }`}
                  >
                    No obligation. Just a conversation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

