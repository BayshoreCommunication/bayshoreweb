"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  FiClock,
  FiGlobe,
  FiChevronDown,
  FiArrowRight,
  FiArrowLeft,
  FiCheckCircle,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export interface HiringFormData {
  // Step 1
  fullName: string;
  workEmail: string;
  companyName: string;
  phoneNumber: string;
  // Step 2
  jobTitle: string;
  experienceLevel: string;
  hoursPerWeek: string;
  interviewDate: string;
  interviewTime: string;
  timezone: string;
}

export interface MultiStepHiringFormProps {
  theme?: "light" | "dark";
  formId?: string;
  defaultStep?: 1 | 2;
  onSubmitForm?: (data: HiringFormData, e?: React.FormEvent<HTMLFormElement>) => void;
}

export const MultiStepHiringForm: React.FC<MultiStepHiringFormProps> = ({
  theme = "dark",
  formId = "bayshore-multistep-form",
  defaultStep = 2,
  onSubmitForm,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState<1 | 2>(defaultStep);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<HiringFormData>({
    fullName: "",
    workEmail: "",
    companyName: "",
    phoneNumber: "",
    jobTitle: "",
    experienceLevel: "",
    hoursPerWeek: "40",
    interviewDate: "",
    interviewTime: "",
    timezone: "America/New_York (EST)",
  });

  const supportOptions = [
    "Virtual Assistant / Admin Support",
    "Software Engineer / Web Developer",
    "Digital Marketing & SEO",
    "UI/UX & Graphic Design",
    "Customer Care Specialist",
    "Bookkeeping & Financial Ops",
    "Legal Support / Paralegal",
    "Healthcare Billing & Coding",
  ];

  const experienceOptions = [
    "Junior (1 - 3 Years)",
    "Mid-Level (3 - 5 Years)",
    "Senior (5+ Years)",
    "Lead / Expert (8+ Years)",
  ];

  const timeOptions = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const timezoneOptions = [
    "America/New_York (EST)",
    "America/Chicago (CST)",
    "America/Denver (MST)",
    "America/Los_Angeles (PST)",
    "Europe/London (GMT)",
    "Asia/Dhaka (BST)",
    "Australia/Sydney (AEST)",
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.workEmail && formData.companyName) {
      setStep(2);
    }
  };

  const handlePrev = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmitForm) {
      onSubmitForm(formData, e);
    }
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-[860px] mx-auto"
    >
      {/* Dark Outer Backdrop Wave Gradient Ornaments matching user screenshot */}
      <div className="absolute inset-0 pointer-events-none -m-10 sm:-m-20 overflow-hidden z-0">
        <div
          className={`absolute top-1/4 -right-20 w-96 h-96 rounded-full blur-[100px] opacity-30 ${
            theme === "dark" ? "bg-[#FF5500]" : "bg-[#FE6F1F]"
          }`}
        />
        <div
          className={`absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-[100px] opacity-25 ${
            theme === "dark" ? "bg-[#072446]" : "bg-slate-300"
          }`}
        />
      </div>

      {/* Main Card Container */}
      <div
        className={`relative z-10 w-full rounded-[24px] p-7 sm:p-10 md:p-12 shadow-2xl transition-all duration-300 border ${
          theme === "dark"
            ? "bg-[#07192C] text-white border-slate-800/90 shadow-black/80"
            : "bg-white text-[#0C1827] border-slate-200 shadow-xl shadow-slate-900/10"
        }`}
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            /* THANK YOU / SUCCESS STATE */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="py-12 text-center flex flex-col items-center justify-center max-w-md mx-auto"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-lg ${
                  theme === "dark"
                    ? "bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/30"
                    : "bg-emerald-100 text-emerald-600 border border-emerald-200"
                }`}
              >
                <FiCheckCircle size={38} />
              </div>
              <h2
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 font-playfair ${
                  theme === "dark" ? "text-white" : "text-[#0C1827]"
                }`}
              >
                Request Submitted!
              </h2>
              <p
                className={`text-sm sm:text-base leading-relaxed font-medium mb-8 font-instrument ${
                  theme === "dark" ? "text-slate-300" : "text-[#556070]"
                }`}
              >
                We&apos;ll match you with top-vetted talent and confirm your interview schedule by email within 2 business hours.
              </p>
              <Link
                href="/bayshore-solutions"
                className={`px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md ${
                  theme === "dark"
                    ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                    : "bg-[#07192C] text-white hover:bg-[#0f2844]"
                }`}
              >
                Return to Home
              </Link>
            </motion.div>
          ) : (
            /* MULTI-STEP FORM BODY */
            <form
              ref={formRef}
              id={formId}
              onSubmit={step === 1 ? handleNext : handleSubmit}
              className="flex flex-col gap-6 w-full"
            >
              {/* Top Progress Segment Bar matching screenshot */}
              <div className="flex flex-col gap-2">
                <span
                  className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
                    theme === "dark" ? "text-slate-300" : "text-[#556070]"
                  }`}
                >
                  STEP {step} OF 2
                </span>
                <div className="flex items-center gap-2 w-full max-w-[140px]">
                  {/* Segment 1 */}
                  <div
                    className={`h-[4px] flex-1 rounded-full transition-all duration-300 ${
                      theme === "dark" ? "bg-[#FF5500]" : "bg-[#FE6F1F]"
                    }`}
                  />
                  {/* Segment 2 */}
                  <div
                    className={`h-[4px] flex-1 rounded-full transition-all duration-300 ${
                      step === 2
                        ? theme === "dark"
                          ? "bg-[#FF5500]"
                          : "bg-[#FE6F1F]"
                        : theme === "dark"
                        ? "bg-slate-700"
                        : "bg-slate-200"
                    }`}
                  />
                </div>
              </div>

              {/* Form Headline Header matching user screenshot */}
              <div className="mb-2">
                <h2
                  className={`text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight leading-tight mb-2.5 font-playfair ${
                    theme === "dark" ? "text-white" : "text-[#0C1827]"
                  }`}
                >
                  {step === 1
                    ? "Tell us about your hiring needs"
                    : "Role details & interview time"}
                </h2>
                <p
                  className={`text-sm sm:text-base font-normal leading-relaxed font-instrument ${
                    theme === "dark" ? "text-slate-300" : "text-[#556070]"
                  }`}
                >
                  {step === 1
                    ? "First step - tell us who you need and how to reach you."
                    : "Last step - this speeds up matching and gets a call on the books."}
                </p>
              </div>

              {/* STEP 1 INPUT FIELDS */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
                >
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="fullName"
                      className={`text-[11px] font-extrabold uppercase tracking-[0.14em] ${
                        theme === "dark" ? "text-slate-300" : "text-[#556070]"
                      }`}
                    >
                      YOUR FULL NAME
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={`w-full px-5 py-4 rounded-lg text-sm sm:text-base font-medium border transition-all outline-none ${
                        theme === "dark"
                          ? "bg-[#0B1A2D] border-slate-800 text-white placeholder-slate-500 focus:border-[#FF5500]"
                          : "bg-[#FAFAFC] border-slate-200 text-[#0C1827] placeholder-slate-400 focus:border-[#07192C]"
                      }`}
                    />
                  </div>

                  {/* Work Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="workEmail"
                      className={`text-[11px] font-extrabold uppercase tracking-[0.14em] ${
                        theme === "dark" ? "text-slate-300" : "text-[#556070]"
                      }`}
                    >
                      WORK EMAIL
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      id="workEmail"
                      required
                      placeholder="alex@company.com"
                      value={formData.workEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, workEmail: e.target.value })
                      }
                      className={`w-full px-5 py-4 rounded-lg text-sm sm:text-base font-medium border transition-all outline-none ${
                        theme === "dark"
                          ? "bg-[#0B1A2D] border-slate-800 text-white placeholder-slate-500 focus:border-[#FF5500]"
                          : "bg-[#FAFAFC] border-slate-200 text-[#0C1827] placeholder-slate-400 focus:border-[#07192C]"
                      }`}
                    />
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="companyName"
                      className={`text-[11px] font-extrabold uppercase tracking-[0.14em] ${
                        theme === "dark" ? "text-slate-300" : "text-[#556070]"
                      }`}
                    >
                      COMPANY NAME
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      required
                      placeholder="Acme Corp"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      className={`w-full px-5 py-4 rounded-lg text-sm sm:text-base font-medium border transition-all outline-none ${
                        theme === "dark"
                          ? "bg-[#0B1A2D] border-slate-800 text-white placeholder-slate-500 focus:border-[#FF5500]"
                          : "bg-[#FAFAFC] border-slate-200 text-[#0C1827] placeholder-slate-400 focus:border-[#07192C]"
                      }`}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phoneNumber"
                      className={`text-[11px] font-extrabold uppercase tracking-[0.14em] ${
                        theme === "dark" ? "text-slate-300" : "text-[#556070]"
                      }`}
                    >
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      required
                      placeholder="e.g. +1 (555) 000-0000"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNumber: e.target.value })
                      }
                      className={`w-full px-5 py-4 rounded-lg text-sm sm:text-base font-medium border transition-all outline-none ${
                        theme === "dark"
                          ? "bg-[#0B1A2D] border-slate-800 text-white placeholder-slate-500 focus:border-[#FF5500]"
                          : "bg-[#FAFAFC] border-slate-200 text-[#0C1827] placeholder-slate-400 focus:border-[#07192C]"
                      }`}
                    />
                  </div>

                  {/* Step 1 Action Button */}
                  <div className="md:col-span-2 pt-3">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className={`w-full py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                        theme === "dark"
                          ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                          : "bg-[#07192C] text-white hover:bg-[#000e1e]"
                      }`}
                    >
                      <span>Continue to Step 2</span>
                      <FiArrowRight size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2 INPUT FIELDS (Matching User Design Screenshot 1:1) */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-5 w-full"
                >
                  {/* 1. Exact Job Title */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="jobTitle"
                      className={`text-[11px] font-extrabold uppercase tracking-[0.14em] ${
                        theme === "dark" ? "text-slate-300" : "text-[#556070]"
                      }`}
                    >
                      EXACT JOB TITLE YOU&apos;RE HIRING FOR
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      required
                      placeholder="Executive Assistant"
                      value={formData.jobTitle}
                      onChange={(e) =>
                        setFormData({ ...formData, jobTitle: e.target.value })
                      }
                      className={`w-full px-5 py-4 rounded-lg text-sm sm:text-base font-medium border transition-all outline-none ${
                        theme === "dark"
                          ? "bg-[#0B1A2D] border-slate-800 text-white placeholder-slate-500 focus:border-[#FF5500]"
                          : "bg-[#FAFAFC] border-slate-200 text-[#0C1827] placeholder-slate-400 focus:border-[#07192C]"
                      }`}
                    />
                  </div>

                  {/* 2 & 3. Experience Level + Hours/Week Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Experience Level */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="experienceLevel"
                        className={`text-[11px] font-extrabold uppercase tracking-[0.14em] ${
                          theme === "dark" ? "text-slate-300" : "text-[#556070]"
                        }`}
                      >
                        EXPERIENCE LEVEL
                      </label>
                      <div className="relative">
                        <select
                          name="experienceLevel"
                          id="experienceLevel"
                          required
                          value={formData.experienceLevel}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              experienceLevel: e.target.value,
                            })
                          }
                          className={`w-full px-5 py-4 rounded-lg text-sm sm:text-base font-medium border appearance-none transition-all outline-none ${
                            theme === "dark"
                              ? "bg-[#0B1A2D] border-slate-800 text-white focus:border-[#FF5500]"
                              : "bg-[#FAFAFC] border-slate-200 text-[#0C1827] focus:border-[#07192C]"
                          } ${!formData.experienceLevel ? "text-slate-500" : ""}`}
                        >
                          <option value="" disabled hidden>
                            Select experience level
                          </option>
                          {experienceOptions.map((opt) => (
                            <option
                              key={opt}
                              value={opt}
                              className={
                                theme === "dark"
                                  ? "bg-[#07192C] text-white"
                                  : "bg-white text-[#0C1827]"
                              }
                            >
                              {opt}
                            </option>
                          ))}
                        </select>
                        <FiChevronDown
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                          size={18}
                        />
                      </div>
                    </div>

                    {/* Hours / Week */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="hoursPerWeek"
                        className={`text-[11px] font-extrabold uppercase tracking-[0.14em] ${
                          theme === "dark" ? "text-slate-300" : "text-[#556070]"
                        }`}
                      >
                        HOURS/WEEK
                      </label>
                      <div className="relative">
                        <FiClock
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                          size={18}
                        />
                        <input
                          type="text"
                          name="hoursPerWeek"
                          id="hoursPerWeek"
                          required
                          placeholder="40"
                          value={formData.hoursPerWeek}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              hoursPerWeek: e.target.value,
                            })
                          }
                          className={`w-full pl-12 pr-5 py-4 rounded-lg text-sm sm:text-base font-medium border transition-all outline-none ${
                            theme === "dark"
                              ? "bg-[#0B1A2D] border-slate-800 text-white placeholder-slate-500 focus:border-[#FF5500]"
                              : "bg-[#FAFAFC] border-slate-200 text-[#0C1827] placeholder-slate-400 focus:border-[#07192C]"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 4 & 5. Preferred Date & Time Grid matching screenshot */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Interview Date */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="interviewDate"
                        className={`text-[11px] font-extrabold uppercase tracking-[0.14em] ${
                          theme === "dark" ? "text-slate-300" : "text-[#556070]"
                        }`}
                      >
                        PREFERRED DATE
                      </label>
                      <div className="relative">
                        <FiClock
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10"
                          size={18}
                        />
                        <input
                          type="date"
                          name="interviewDate"
                          id="interviewDate"
                          required
                          value={formData.interviewDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              interviewDate: e.target.value,
                            })
                          }
                          className={`w-full pl-12 pr-10 py-4 rounded-lg text-sm sm:text-base font-medium border transition-all outline-none ${
                            theme === "dark"
                              ? "bg-[#0B1A2D] border-slate-800 text-white focus:border-[#FF5500]"
                              : "bg-[#FAFAFC] border-slate-200 text-[#0C1827] focus:border-[#07192C]"
                          } ${!formData.interviewDate ? "text-slate-500" : ""}`}
                        />
                        <FiChevronDown
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                          size={18}
                        />
                      </div>
                    </div>

                    {/* Interview Time */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="interviewTime"
                        className={`text-[11px] font-extrabold uppercase tracking-[0.14em] ${
                          theme === "dark" ? "text-slate-300" : "text-[#556070]"
                        }`}
                      >
                        PREFERRED TIME
                      </label>
                      <div className="relative">
                        <FiClock
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10"
                          size={18}
                        />
                        <select
                          name="interviewTime"
                          id="interviewTime"
                          required
                          value={formData.interviewTime}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              interviewTime: e.target.value,
                            })
                          }
                          className={`w-full pl-12 pr-10 py-4 rounded-lg text-sm sm:text-base font-medium border appearance-none transition-all outline-none ${
                            theme === "dark"
                              ? "bg-[#0B1A2D] border-slate-800 text-white focus:border-[#FF5500]"
                              : "bg-[#FAFAFC] border-slate-200 text-[#0C1827] focus:border-[#07192C]"
                          } ${!formData.interviewTime ? "text-slate-500" : ""}`}
                        >
                          <option value="" disabled hidden>
                            Select a time
                          </option>
                          {timeOptions.map((t) => (
                            <option
                              key={t}
                              value={t}
                              className={
                                theme === "dark"
                                  ? "bg-[#07192C] text-white"
                                  : "bg-white text-[#0C1827]"
                              }
                            >
                              {t}
                            </option>
                          ))}
                        </select>
                        <FiChevronDown
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                          size={18}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 6. Your Timezone */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="timezone"
                      className={`text-[11px] font-extrabold uppercase tracking-[0.14em] ${
                        theme === "dark" ? "text-slate-300" : "text-[#556070]"
                      }`}
                    >
                      YOUR TIMEZONE
                    </label>
                    <div className="relative">
                      <FiGlobe
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10"
                        size={18}
                      />
                      <select
                        name="timezone"
                        id="timezone"
                        required
                        value={formData.timezone}
                        onChange={(e) =>
                          setFormData({ ...formData, timezone: e.target.value })
                        }
                        className={`w-full pl-12 pr-10 py-4 rounded-lg text-sm sm:text-base font-medium border appearance-none transition-all outline-none ${
                          theme === "dark"
                            ? "bg-[#0B1A2D] border-slate-800 text-white focus:border-[#FF5500]"
                            : "bg-[#FAFAFC] border-slate-200 text-[#0C1827] focus:border-[#07192C]"
                        }`}
                      >
                        {timezoneOptions.map((tz) => (
                          <option
                            key={tz}
                            value={tz}
                            className={
                              theme === "dark"
                                ? "bg-[#07192C] text-white"
                                : "bg-white text-[#0C1827]"
                            }
                          >
                            {tz}
                          </option>
                        ))}
                      </select>
                      <FiChevronDown
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        size={18}
                      />
                    </div>
                  </div>

                  {/* Submit Action Button */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className={`w-full sm:w-auto px-6 py-4 rounded-full font-bold text-sm transition-all border ${
                        theme === "dark"
                          ? "border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
                          : "border-slate-300 text-[#556070] hover:bg-slate-100 hover:text-[#0C1827]"
                      }`}
                    >
                      <FiArrowLeft size={16} className="inline mr-1" />
                      <span>Back</span>
                    </button>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className={`w-full sm:flex-1 py-4 rounded-full font-extrabold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                        theme === "dark"
                          ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                          : "bg-[#FE6F1F] text-white hover:bg-[#d44e00]"
                      }`}
                    >
                      <span>Find Talent</span>
                      <FiArrowRight size={20} />
                    </motion.button>
                  </div>

                  {/* Form Disclaimer */}
                  <p
                    className={`text-center text-xs font-normal mt-1 ${
                      theme === "dark" ? "text-slate-300" : "text-[#556070]"
                    }`}
                  >
                    We&apos;ll confirm the time by email within one business day.
                  </p>
                </motion.div>
              )}
            </form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MultiStepHiringForm;
