"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiChevronLeft,
  FiChevronRight,
  FiGlobe,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export interface HiringFormData {
  email: string;
  firstName: string;
  lastName: string;
  companyName?: string;
  phoneNumber?: string;
  jobTitle?: string;
  selectedDate: string;
  selectedTime: string;
  timezone: string;
}

export interface MultiStepHiringFormProps {
  theme?: "light" | "dark";
  formId?: string;
  defaultStep?: 1 | 2;
  initialData?: Partial<HiringFormData> & { fullName?: string; workEmail?: string };
  onSubmitForm?: (data: HiringFormData, e?: React.FormEvent<HTMLFormElement>) => void;
  onClose?: () => void;
}

export const MultiStepHiringForm: React.FC<MultiStepHiringFormProps> = ({
  theme = "light",
  formId = "bayshore-multistep-form",
  defaultStep = 1,
  initialData,
  onSubmitForm,
  onClose,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  // Parse initial fullName into firstName and lastName if provided
  const parsedFullName = (initialData?.fullName || "").trim();
  const nameParts = parsedFullName ? parsedFullName.split(" ") : [];
  const initialFirstName = initialData?.firstName || (nameParts.length > 0 ? nameParts[0] : "");
  const initialLastName =
    initialData?.lastName || (nameParts.length > 1 ? nameParts.slice(1).join(" ") : "");

  const [step, setStep] = useState<1 | 2>(defaultStep);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<HiringFormData>(() => ({
    email: initialData?.email || initialData?.workEmail || "",
    firstName: initialFirstName,
    lastName: initialLastName,
    companyName: initialData?.companyName || "",
    phoneNumber: initialData?.phoneNumber || "",
    jobTitle: initialData?.jobTitle || "",
    selectedDate: initialData?.selectedDate || "2026-09-15",
    selectedTime: initialData?.selectedTime || "",
    timezone: initialData?.timezone || "America/New_York (EST)",
  }));

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showLockAlert, setShowLockAlert] = useState(false);
  const [selectedDayIdx, setSelectedDayIdx] = useState(2); // Tuesday 15th
  const [is24h, setIs24h] = useState(false);

  // Available Days for Selector
  const daysList = [
    { day: "Sun", date: "13" },
    { day: "Mon", date: "14" },
    { day: "Tue", date: "15" },
    { day: "Wed", date: "16" },
    { day: "Thu", date: "17" },
  ];

  // Available Time Slots
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    return newErrors;
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateStep1();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStep(2);
  };

  const handleTimeSlotClick = (timeStr: string) => {
    const validationErrors = validateStep1();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowLockAlert(true);
      setTimeout(() => setShowLockAlert(false), 3000);
      return;
    }
    setFormData((prev) => ({ ...prev, selectedTime: timeStr }));
    setStep(2);
  };

  const handleFinalSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const validationErrors = validateStep1();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStep(1);
      return;
    }
    if (onSubmitForm) {
      onSubmitForm(formData);
    }
    setSubmitted(true);
  };

  const logoPath =
    theme === "dark"
      ? "/assets/bayshore-solutions/logo-dark.png"
      : "/assets/bayshore-solutions/logo-light.png";

  return (
    <div
      className={`relative w-full max-w-[960px] mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border transition-colors duration-300 font-instrument ${
        theme === "dark"
          ? "bg-[#07192C] text-white border-slate-800 shadow-black/80"
          : "bg-white text-[#0C1827] border-slate-200/90 shadow-2xl shadow-slate-900/15"
      }`}
    >
      {/* TOP HEADER NAVIGATION BAR */}
      <div
        className={`flex items-center justify-between px-6 sm:px-8 py-4 border-b ${
          theme === "dark" ? "border-slate-800/80 bg-[#07192C]" : "border-slate-100 bg-white"
        }`}
      >
        {/* Left Spacer */}
        <div className="w-8 hidden sm:block" />

        {/* Center Progress Tabs matching reference image 1:1 */}
        <div className="flex items-center justify-center gap-6 text-[13px] sm:text-[14px] font-semibold mx-auto">
          <button
            type="button"
            onClick={() => setStep(1)}
            className={`flex items-center gap-2 transition-colors ${
              step === 1
                ? theme === "dark"
                  ? "text-white font-bold"
                  : "text-[#0C1827] font-bold"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                step === 1
                  ? theme === "dark"
                    ? "bg-[#FF5500]"
                    : "bg-[#07192C]"
                  : "bg-slate-300"
              }`}
            />
            <span>Fill out the form</span>
          </button>

          <button
            type="button"
            onClick={() => {
              const errs = validateStep1();
              if (Object.keys(errs).length === 0) setStep(2);
              else setShowLockAlert(true);
            }}
            className={`flex items-center gap-2 transition-colors ${
              step === 2
                ? theme === "dark"
                  ? "text-white font-bold"
                  : "text-[#0C1827] font-bold"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                step === 2
                  ? theme === "dark"
                    ? "bg-[#FF5500]"
                    : "bg-[#FE6F1F]"
                  : "bg-slate-300"
              }`}
            />
            <span>Book your event</span>
          </button>
        </div>

        {/* Top Right Close Button */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className={`p-2 rounded-lg transition-colors border ${
              theme === "dark"
                ? "bg-slate-800/60 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700"
                : "bg-white border-slate-200 text-slate-500 hover:text-[#0C1827] hover:bg-slate-100"
            }`}
          >
            <FiX size={18} />
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          /* SUCCESS STATE */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="p-12 sm:p-16 text-center flex flex-col items-center justify-center max-w-md mx-auto"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg ${
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
              Session Booked!
            </h2>
            <p
              className={`text-base leading-relaxed font-medium mb-8 ${
                theme === "dark" ? "text-slate-300" : "text-[#556070]"
              }`}
            >
              Thank you, {formData.firstName}! We&apos;ve reserved your hiring strategy session for{" "}
              <strong>{formData.selectedTime || "your preferred slot"}</strong>. A calendar invite
              has been sent to <strong>{formData.email}</strong>.
            </p>
            <button
              type="button"
              onClick={onClose ? onClose : () => setSubmitted(false)}
              className={`px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md ${
                theme === "dark"
                  ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                  : "bg-[#07192C] text-white hover:bg-[#000e1e]"
              }`}
            >
              {onClose ? "Close Window" : "Book Another Session"}
            </button>
          </motion.div>
        ) : (
          /* 2-COLUMN GRID CONTAINER MATCHING REFERENCE IMAGE 1:1 */
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
            {/* LEFT COLUMN: LOGO, STRATEGY SESSION DESCRIPTION & STEP 1 FORM */}
            <div
              className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-r ${
                theme === "dark" ? "border-slate-800/80" : "border-slate-100"
              }`}
            >
              <div>
                {/* Bayshore Solutions Logo matching Navbar */}
                <div className="relative h-[44px] w-[200px] mb-6 flex items-center">
                  <Image
                    src={logoPath}
                    alt="Bayshore Virtual Solutions Logo"
                    width={200}
                    height={44}
                    priority
                    className="object-contain h-auto max-h-[38px] w-auto"
                  />
                </div>

                {/* Title */}
                <h2
                  className={`text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight mb-3 font-playfair ${
                    theme === "dark" ? "text-white" : "text-[#07192C]"
                  }`}
                >
                  Hiring Strategy Session
                </h2>

                {/* Description Paragraph */}
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-4 font-normal ${
                    theme === "dark" ? "text-slate-300" : "text-[#475569]"
                  }`}
                >
                  This free strategy session is designed to fast-track you into global hiring.
                  We&apos;ll advise on your team, pinpoint which roles to move overseas, break down
                  cost savings by function &amp; region, and walk you through our exact process &amp;
                  pricing.
                </p>

                {/* Italic Callout text with pointer emoji */}
                <p
                  className={`text-xs sm:text-sm italic font-medium mb-6 ${
                    theme === "dark" ? "text-amber-300/90" : "text-[#556070]"
                  }`}
                >
                  👉 Post-call, we will hand-source candidates for you within the week based on your
                  exact requirements.
                </p>

                {/* STEP 1 INPUT FORM */}
                <form
                  ref={formRef}
                  id={formId}
                  onSubmit={handleStep1Submit}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  {/* Email Address Field */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className={`text-xs font-bold ${
                        theme === "dark" ? "text-slate-200" : "text-[#0C1827]"
                      }`}
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      className={`w-full px-4 py-3 rounded-xl text-sm font-medium border transition-all outline-none ${
                        errors.email
                          ? "border-red-500 bg-red-500/5 focus:ring-2 focus:ring-red-500/30"
                          : theme === "dark"
                          ? "bg-[#0B1A2D] border-slate-700 text-white focus:border-[#FF5500]"
                          : "bg-white border-slate-300 text-[#0C1827] focus:border-[#07192C]"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs font-semibold">{errors.email}</span>
                    )}
                  </div>

                  {/* First Name & Last Name Grid */}
                  <div className="grid grid-cols-2 gap-3.5">
                    {/* First Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="firstName"
                        className={`text-xs font-bold ${
                          theme === "dark" ? "text-slate-200" : "text-[#0C1827]"
                        }`}
                      >
                        First name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First name *"
                        value={formData.firstName}
                        onChange={(e) => {
                          setFormData({ ...formData, firstName: e.target.value });
                          if (errors.firstName)
                            setErrors((prev) => ({ ...prev, firstName: "" }));
                        }}
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium border transition-all outline-none ${
                          errors.firstName
                            ? "border-red-500 bg-red-500/5 focus:ring-2 focus:ring-red-500/30"
                            : theme === "dark"
                            ? "bg-[#0B1A2D] border-slate-700 text-white focus:border-[#FF5500]"
                            : "bg-white border-slate-300 text-[#0C1827] focus:border-[#07192C]"
                        }`}
                      />
                      {errors.firstName && (
                        <span className="text-red-500 text-xs font-semibold">
                          {errors.firstName}
                        </span>
                      )}
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="lastName"
                        className={`text-xs font-bold ${
                          theme === "dark" ? "text-slate-200" : "text-[#0C1827]"
                        }`}
                      >
                        Last name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last name *"
                        value={formData.lastName}
                        onChange={(e) => {
                          setFormData({ ...formData, lastName: e.target.value });
                          if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: "" }));
                        }}
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium border transition-all outline-none ${
                          errors.lastName
                            ? "border-red-500 bg-red-500/5 focus:ring-2 focus:ring-red-500/30"
                            : theme === "dark"
                            ? "bg-[#0B1A2D] border-slate-700 text-white focus:border-[#FF5500]"
                            : "bg-white border-slate-300 text-[#0C1827] focus:border-[#07192C]"
                        }`}
                      />
                      {errors.lastName && (
                        <span className="text-red-500 text-xs font-semibold">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Terms Consent Disclaimer */}
                  <p
                    className={`text-xs leading-relaxed font-normal mt-1 ${
                      theme === "dark" ? "text-slate-400" : "text-[#64748B]"
                    }`}
                  >
                    By entering your information, you consent to your data being saved in
                    accordance with our{" "}
                    <span className="font-bold underline cursor-pointer">Terms</span> &amp;{" "}
                    <span className="font-bold underline cursor-pointer">Privacy Policy</span>.
                  </p>

                  {/* Continue CTA Button */}
                  <button
                    type="submit"
                    className={`mt-2 w-full py-3.5 px-6 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                      theme === "dark"
                        ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                        : "bg-[#07192C] text-white hover:bg-[#000e1e]"
                    }`}
                  >
                    <span>Continue</span>
                    <FiChevronRight size={18} />
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: CALENDAR & TIME SLOTS SELECTION */}
            <div
              className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 relative flex flex-col justify-between ${
                theme === "dark" ? "bg-[#051424]" : "bg-[#FAFBFD]"
              }`}
            >
              {/* Floating Validation Tooltip Alert matching reference screenshot 1:1 */}
              <AnimatePresence>
                {showLockAlert && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute inset-0 z-30 flex items-center justify-center p-6 bg-black/20 backdrop-blur-[2px]"
                    onClick={() => setShowLockAlert(false)}
                  >
                    <div
                      className={`p-6 rounded-2xl shadow-2xl max-w-xs text-center border font-medium text-sm sm:text-base ${
                        theme === "dark"
                          ? "bg-[#07192C] text-white border-slate-700"
                          : "bg-white text-[#0C1827] border-slate-200"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Please fill out the form before choosing your time slot.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                {/* Date Picker Header Bar */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-lg sm:text-xl font-bold font-playfair ${
                      theme === "dark" ? "text-white" : "text-[#0C1827]"
                    }`}
                  >
                    September 2026
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Previous Month"
                      className={`p-2 rounded-lg border transition-colors ${
                        theme === "dark"
                          ? "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                          : "border-slate-200 text-slate-400 hover:text-[#0C1827] hover:bg-slate-100"
                      }`}
                    >
                      <FiChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      aria-label="Next Month"
                      className={`p-2 rounded-lg border transition-colors ${
                        theme === "dark"
                          ? "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                          : "border-slate-200 text-slate-400 hover:text-[#0C1827] hover:bg-slate-100"
                      }`}
                    >
                      <FiChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Days Cards Row */}
                <div className="grid grid-cols-5 gap-2.5 mb-6">
                  {daysList.map((d, idx) => {
                    const isSelected = selectedDayIdx === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedDayIdx(idx)}
                        className={`flex flex-col items-center justify-center py-3.5 px-2 rounded-2xl border transition-all ${
                          isSelected
                            ? theme === "dark"
                              ? "bg-[#07192C] border-[#FF5500] text-white font-bold shadow-md"
                              : "bg-white border-[#07192C] text-[#0C1827] font-bold shadow-md"
                            : theme === "dark"
                            ? "bg-[#07192C]/50 border-slate-800 text-slate-400 hover:border-slate-700"
                            : "bg-white border-slate-200/80 text-slate-400 hover:border-slate-300"
                        }`}
                      >
                        <span className="text-xs uppercase font-medium mb-1">{d.day}</span>
                        <span className="text-base sm:text-lg font-bold">{d.date}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Timezone & 24h Bar */}
                <div className="flex items-center justify-between text-xs font-semibold mb-6 px-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <FiGlobe size={15} />
                    <span>America/New_York (EST)</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIs24h(!is24h)}
                    className={`px-2.5 py-1 rounded-full border transition-colors ${
                      is24h
                        ? theme === "dark"
                          ? "bg-[#FF5500] text-white border-[#FF5500]"
                          : "bg-[#07192C] text-white border-[#07192C]"
                        : theme === "dark"
                        ? "border-slate-800 text-slate-400"
                        : "border-slate-200 text-slate-500"
                    }`}
                  >
                    24h
                  </button>
                </div>

                {/* Time Slots Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {timeSlots.map((t, idx) => {
                    const isSelected = formData.selectedTime === t;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleTimeSlotClick(t)}
                        className={`py-3 px-3 rounded-2xl border text-sm font-semibold transition-all ${
                          isSelected
                            ? theme === "dark"
                              ? "bg-[#FF5500] border-[#FF5500] text-white shadow-md"
                              : "bg-[#07192C] border-[#07192C] text-white shadow-md"
                            : theme === "dark"
                            ? "bg-[#07192C] border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                            : "bg-white border-slate-200/90 text-slate-600 hover:border-slate-300 hover:text-[#0C1827]"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Confirm Event Booking Action (Visible when time is selected or step 2 active) */}
              {formData.selectedTime && (
                <button
                  type="button"
                  onClick={() => handleFinalSubmit()}
                  className={`w-full py-4 px-6 rounded-2xl font-extrabold text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                    theme === "dark"
                      ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                      : "bg-[#FE6F1F] text-white hover:bg-[#d44e00]"
                  }`}
                >
                  <span>Confirm Strategy Session ({formData.selectedTime})</span>
                </button>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MultiStepHiringForm;
