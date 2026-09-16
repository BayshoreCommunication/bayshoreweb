"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiGlobe,
  FiCheckCircle,
  FiX,
  FiPhone,
  FiUsers,
  FiClock,
  FiCalendar,
  FiBriefcase,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export interface HiringFormData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  teamSize?: string;
  hiringType?: string;
  hiringTimeline?: string;
  businessYears?: string;
  rolesToHire?: string;
  websiteUrl?: string;
  companyName?: string;
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

  // Lock background html & body scroll when rendering inside a modal (onClose is provided)
  useEffect(() => {
    if (onClose) {
      const scrollY = window.scrollY;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        const savedScroll = document.body.style.top;
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        if (savedScroll) {
          window.scrollTo(0, parseInt(savedScroll || "0", 10) * -1);
        }
      };
    }
  }, [onClose]);

  const isModalMode = Boolean(onClose);

  // Parse initial fullName into firstName and lastName if provided
  const parsedFullName = (initialData?.fullName || "").trim();
  const nameParts = parsedFullName ? parsedFullName.split(" ") : [];
  const initialFirstName = initialData?.firstName || (nameParts.length > 0 ? nameParts[0] : "");
  const initialLastName =
    initialData?.lastName || (nameParts.length > 1 ? nameParts.slice(1).join(" ") : "");
  const initialEmail = initialData?.email || initialData?.workEmail || "";

  // Auto-expand if initial data is pre-filled from Hero form
  const shouldAutoExpand = Boolean(initialEmail && initialFirstName && initialLastName);

  const [step, setStep] = useState<1 | 2>(defaultStep);
  const [isExpanded, setIsExpanded] = useState<boolean>(shouldAutoExpand);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<HiringFormData>(() => ({
    email: initialEmail,
    firstName: initialFirstName,
    lastName: initialLastName,
    phoneNumber: initialData?.phoneNumber || "",
    teamSize: initialData?.teamSize || "",
    hiringType: initialData?.hiringType || "",
    hiringTimeline: initialData?.hiringTimeline || "",
    businessYears: initialData?.businessYears || "",
    rolesToHire: initialData?.rolesToHire || "",
    websiteUrl: initialData?.websiteUrl || "",
    companyName: initialData?.companyName || "",
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

  // Dropdown options
  const teamSizeOptions = [
    "Just Me",
    "2-5 Employees",
    "5-50 Employees",
    "50+ Employees",
  ];

  const hiringTypeOptions = [
    "💼 Full-Time (40hrs/Week)",
    "🗓️ Part-Time (10 to 30hrs/Week)",
    "🛠️ One-Time Project",
    "❌ Not Looking to Hire Currently",
  ];

  const timelineOptions = [
    "Immediately",
    "Within 30 days",
    "30 - 60 days",
    "Not Hiring Yet, Just Exploring",
  ];

  const operatingYearsOptions = [
    "New Business (Startup)",
    "< 1 Year",
    "2-5 Years",
    "5-10 Years",
    "10 Years +",
  ];

  const validateInitial3 = () => {
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

  const validateAllStep1 = () => {
    const initialErrs = validateInitial3();
    const newErrors: { [key: string]: string } = { ...initialErrs };

    if (isExpanded) {
      if (!formData.phoneNumber?.trim()) {
        newErrors.phoneNumber = "Phone number is required";
      }
      if (!formData.teamSize?.trim()) {
        newErrors.teamSize = "This field is required";
      }
      if (!formData.hiringType?.trim()) {
        newErrors.hiringType = "This field is required";
      }
      if (!formData.hiringTimeline?.trim()) {
        newErrors.hiringTimeline = "This field is required";
      }
      if (!formData.businessYears?.trim()) {
        newErrors.businessYears = "This field is required";
      }
      if (!formData.rolesToHire?.trim()) {
        newErrors.rolesToHire = "This field is required";
      }
      if (!formData.websiteUrl?.trim()) {
        newErrors.websiteUrl = "Website URL is required";
      }
    }
    return newErrors;
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();

    // First validate the initial 3 fields
    const initialErrs = validateInitial3();
    if (Object.keys(initialErrs).length > 0) {
      setErrors(initialErrs);
      return;
    }

    // If not expanded yet, expand the extended qualification form
    if (!isExpanded) {
      setErrors({});
      setIsExpanded(true);
      return;
    }

    // If already expanded, validate all extended fields before submitting
    const allErrs = validateAllStep1();
    if (Object.keys(allErrs).length > 0) {
      setErrors(allErrs);
      return;
    }

    setErrors({});
    if (onSubmitForm) {
      onSubmitForm(formData);
    }
    setSubmitted(true);
  };

  const handleTimeSlotClick = (timeStr: string) => {
    const updatedData = { ...formData, selectedTime: timeStr };
    setFormData(updatedData);

    const validationErrors = validateAllStep1();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      if (!isExpanded) setIsExpanded(true);
      setShowLockAlert(true);
      setTimeout(() => setShowLockAlert(false), 3000);
      return;
    }

    // Submit immediately when selecting time slot if form fields are all filled
    setErrors({});
    if (onSubmitForm) {
      onSubmitForm(updatedData);
    }
    setSubmitted(true);
  };

  const handleFinalSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const validationErrors = validateAllStep1();
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
      className={`relative w-full max-w-[1040px] mx-auto rounded-[24px] sm:rounded-[24px] overflow-hidden shadow-2xl border transition-colors duration-300 font-instrument p-8 ${
        theme === "dark"
          ? "bayshore-theme-dark bg-[#07192C] text-white border-slate-800 shadow-black/80"
          : "bayshore-theme-light bg-white text-[#0C1827] border-slate-200/90 shadow-2xl shadow-slate-900/10"
      }`}
    >
      {/* Sleek Custom Scrollbar, Webkit Autofill Overrides & Overscroll Containment */}
      <style jsx global>{`
        .bayshore-form-scroll {
          overscroll-behavior: contain !important;
          overscroll-behavior-y: contain !important;
          touch-action: pan-y;
          -webkit-overflow-scrolling: touch;
        }
        .bayshore-form-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .bayshore-form-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .bayshore-form-scroll::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.4);
          border-radius: 9999px;
        }
        .bayshore-form-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.7);
        }

        /* Chrome/Safari Autofill Background & Text Color Overrides */
        .bayshore-theme-light input:-webkit-autofill,
        .bayshore-theme-light input:-webkit-autofill:hover,
        .bayshore-theme-light input:-webkit-autofill:focus,
        .bayshore-theme-light textarea:-webkit-autofill,
        .bayshore-theme-light select:-webkit-autofill {
          -webkit-text-fill-color: #0c1827 !important;
          -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }

        .bayshore-theme-dark input:-webkit-autofill,
        .bayshore-theme-dark input:-webkit-autofill:hover,
        .bayshore-theme-dark input:-webkit-autofill:focus,
        .bayshore-theme-dark textarea:-webkit-autofill,
        .bayshore-theme-dark select:-webkit-autofill {
          -webkit-text-fill-color: #ffffff !important;
          -webkit-box-shadow: 0 0 0px 1000px #0b1a2d inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      {/* TOP HEADER NAVIGATION BAR */}
      <div
        className={`flex items-center justify-between px-6 sm:px-8 py-4 border-b backdrop-blur-md sticky top-0 z-20 transition-colors duration-300 ${
          theme === "dark"
            ? "border-slate-800/90 bg-[#07192C]/95"
            : "border-slate-100 bg-white/95"
        }`}
      >
        {/* Left Branding Dot */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FE6F1F] animate-pulse" />
          <span
            className={`text-xs uppercase font-extrabold tracking-widest ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Strategy Call
          </span>
        </div>

        {/* Center Progress Tabs with Pill Styling */}
        <div
          className={`flex items-center gap-1.5 p-1 rounded-full border shadow-inner mx-auto sm:mx-0 transition-colors duration-300 ${
            theme === "dark"
              ? "bg-slate-900/80 border-slate-800"
              : "bg-slate-100/90 border-slate-200/80"
          }`}
        >
          <button
            type="button"
            onClick={() => setStep(1)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-base sm:text-xl font-bold transition-all duration-200 ${
              step === 1
                ? theme === "dark"
                  ? "bg-[#07192C] text-white shadow-md border border-slate-700/60"
                  : "bg-white text-[#0C1827] shadow-sm border border-slate-200/90"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full transition-colors ${
                step === 1
                  ? theme === "dark"
                    ? "bg-[#FF5500]"
                    : "bg-[#FE6F1F]"
                  : "bg-slate-300 dark:bg-slate-600"
              }`}
            />
            <span>1. Fill out the form</span>
          </button>

          <button
            type="button"
            onClick={() => {
              const errs = validateAllStep1();
              if (Object.keys(errs).length === 0) setStep(2);
              else {
                if (!isExpanded) setIsExpanded(true);
                setShowLockAlert(true);
              }
            }}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-base sm:text-xl font-bold transition-all duration-200 ${
              step === 2
                ? theme === "dark"
                  ? "bg-[#07192C] text-white shadow-md border border-slate-700/60"
                  : "bg-white text-[#0C1827] shadow-sm border border-slate-200/90"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full transition-colors ${
                step === 2
                  ? theme === "dark"
                    ? "bg-[#FF5500]"
                    : "bg-[#FE6F1F]"
                  : "bg-slate-300 dark:bg-slate-600"
              }`}
            />
            <span>2. Book your event</span>
          </button>
        </div>

        {/* Top Right Close Button */}
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border ${
              theme === "dark"
                ? "bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700"
                : "bg-slate-100 border-slate-200 text-slate-500 hover:text-[#0C1827] hover:bg-slate-200"
            }`}
          >
            <FiX size={16} />
          </button>
        ) : (
          <div className="w-8 hidden sm:block" />
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
            className="p-10 sm:p-14 text-center flex flex-col items-center justify-center max-w-md mx-auto"
          >
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-5 shadow-xl ${
                theme === "dark"
                  ? "bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/30"
                  : "bg-emerald-100 text-emerald-600 border border-emerald-200"
              }`}
            >
              <FiCheckCircle size={40} />
            </div>
            <h2
              className={`text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 font-playfair ${
                theme === "dark" ? "text-white" : "text-[#0C1827]"
              }`}
            >
              Session Booked!
            </h2>
            <p
              className={`text-base sm:text-base leading-relaxed font-medium mb-6 ${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Thank you, {formData.firstName}! We&apos;ve reserved your hiring strategy session for{" "}
              <strong>{formData.selectedTime || "your preferred slot"}</strong>. A calendar invite
              has been sent to <strong>{formData.email}</strong>.
            </p>
            <button
              type="button"
              onClick={onClose ? onClose : () => setSubmitted(false)}
              className={`px-7 py-3.5 rounded-full font-extrabold text-sm sm:text-base transition-all shadow-lg hover:scale-105 ${
                theme === "dark"
                  ? "bg-[#FF5500] text-white hover:bg-[#e04a00]"
                  : "bg-[#FE6F1F] text-white hover:bg-[#e05807]"
              }`}
            >
              {onClose ? "Close Window" : "Book Another Session"}
            </button>
          </motion.div>
        ) : (
          /* 2-COLUMN GRID CONTAINER WITH PERFECTED SPACING & THEME CONTRAST */
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] max-h-[76vh] lg:max-h-[700px] h-[70vh]">
            {/* LEFT COLUMN: LOGO, STRATEGY SESSION DESCRIPTION & EXTENDABLE FORM */}
            <div
              className={`lg:col-span-6 p-5 sm:p-7 xl:p-8 border-r overflow-y-auto overscroll-contain bayshore-form-scroll transition-colors duration-300 ${
                theme === "dark" ? "border-slate-800/80 bg-[#07192C]" : "border-slate-100 bg-white"
              }`}
            >
              <div className="flex flex-col justify-between min-h-full">
                <div>
                  {/* Bayshore Solutions Logo */}
                  <div className="relative h-[38px] w-[180px] mb-5 flex items-center">
                    <Image
                      src={logoPath}
                      alt="Bayshore Virtual Solutions Logo"
                      width={180}
                      height={38}
                      priority
                      className="object-contain h-auto max-h-[36px] w-auto"
                    />
                  </div>

                  {/* Title */}
                  <h2
                    className={`text-2xl sm:text-3xl lg:text-[30px] font-extrabold tracking-tight mb-2.5 font-playfair leading-snug ${
                      theme === "dark" ? "text-white" : "text-[#07192C]"
                    }`}
                  >
                    Hiring Strategy Session
                  </h2>

                  {/* Description Paragraph */}
                  <p
                    className={`text-base sm:text-xl leading-relaxed mb-4 font-normal ${
                      theme === "dark" ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    This free strategy session is designed to fast-track you into global hiring.
                    We&apos;ll advise on your team, pinpoint which roles to move overseas, break down
                    cost savings by function &amp; region, and walk you through our exact process &amp;
                    pricing.
                  </p>

                  {/* Styled Callout Banner Box */}
                  <div
                    className={`p-3.5 rounded-2xl mb-6 border flex items-start gap-3 shadow-sm transition-all ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-[#FF5500]/15 via-[#FE6F1F]/10 to-transparent border-[#FF5500]/30 text-amber-200"
                        : "bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50/50 border-orange-200 text-amber-950"
                    }`}
                  >
                    <div className="p-1.5 rounded-lg bg-[#FE6F1F]/20 text-[#FE6F1F] shrink-0 mt-0.5">
                      <HiSparkles size={15} />
                    </div>
                    <p className="text-base sm:text-xl font-medium leading-relaxed">
                      <strong>Post-call benefit:</strong> We will hand-source pre-vetted candidates for you within the week based on your exact role requirements.
                    </p>
                  </div>

                  {/* STEP 1 INPUT FORM */}
                  <form
                    ref={formRef}
                    id={formId}
                    onSubmit={handleStep1Submit}
                    className="flex flex-col gap-4 sm:gap-5"
                    noValidate
                  >
                    {/* Email Address Field */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className={`text-base sm:text-xl font-bold tracking-wide flex items-center justify-between ${
                          theme === "dark" ? "text-slate-200" : "text-slate-800"
                        }`}
                      >
                        <span>
                          Email Address <span className="text-orange-500 font-bold">*</span>
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        className={`w-full px-4 py-3 sm:px-4.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm font-medium border transition-all duration-200 outline-none ${
                          errors.email
                            ? "border-red-500 bg-red-500/5 focus:ring-4 focus:ring-red-500/20"
                            : theme === "dark"
                            ? "bg-[#0B1A2D] border-slate-700/80 text-white placeholder:text-slate-500 focus:bg-[#07192C] focus:border-[#FF5500] focus:ring-4 focus:ring-[#FF5500]/20"
                            : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#FE6F1F] focus:ring-4 focus:ring-[#FE6F1F]/15 shadow-sm"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs font-semibold mt-0.5">{errors.email}</span>
                      )}
                    </div>

                    {/* First Name & Last Name Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* First Name */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="firstName"
                          className={`text-base sm:text-xl font-bold tracking-wide ${
                            theme === "dark" ? "text-slate-200" : "text-slate-800"
                          }`}
                        >
                          First name <span className="text-orange-500 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={(e) => {
                            setFormData({ ...formData, firstName: e.target.value });
                            if (errors.firstName)
                              setErrors((prev) => ({ ...prev, firstName: "" }));
                          }}
                          className={`w-full px-4 py-3 sm:px-4.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm font-medium border transition-all duration-200 outline-none ${
                            errors.firstName
                              ? "border-red-500 bg-red-500/5 focus:ring-4 focus:ring-red-500/20"
                              : theme === "dark"
                              ? "bg-[#0B1A2D] border-slate-700/80 text-white placeholder:text-slate-500 focus:bg-[#07192C] focus:border-[#FF5500] focus:ring-4 focus:ring-[#FF5500]/20"
                              : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#FE6F1F] focus:ring-4 focus:ring-[#FE6F1F]/15 shadow-sm"
                          }`}
                        />
                        {errors.firstName && (
                          <span className="text-red-500 text-xs font-semibold mt-0.5">
                            {errors.firstName}
                          </span>
                        )}
                      </div>

                      {/* Last Name */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="lastName"
                          className={`text-base sm:text-xl font-bold tracking-wide ${
                            theme === "dark" ? "text-slate-200" : "text-slate-800"
                          }`}
                        >
                          Last name <span className="text-orange-500 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={(e) => {
                            setFormData({ ...formData, lastName: e.target.value });
                            if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: "" }));
                          }}
                          className={`w-full px-4 py-3 sm:px-4.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm font-medium border transition-all duration-200 outline-none ${
                            errors.lastName
                              ? "border-red-500 bg-red-500/5 focus:ring-4 focus:ring-red-500/20"
                              : theme === "dark"
                              ? "bg-[#0B1A2D] border-slate-700/80 text-white placeholder:text-slate-500 focus:bg-[#07192C] focus:border-[#FF5500] focus:ring-4 focus:ring-[#FF5500]/20"
                              : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#FE6F1F] focus:ring-4 focus:ring-[#FE6F1F]/15 shadow-sm"
                          }`}
                        />
                        {errors.lastName && (
                          <span className="text-red-500 text-xs font-semibold mt-0.5">
                            {errors.lastName}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* DYNAMICALLY REVEALED EXTENDED QUALIFICATION FIELDS */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="flex flex-col gap-4 sm:gap-5 overflow-hidden pt-0.5"
                        >
                          {/* 1. Phone Number with Flag Pill */}
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="phoneNumber"
                              className={`text-base sm:text-xl font-bold tracking-wide ${
                                theme === "dark" ? "text-slate-200" : "text-slate-800"
                              }`}
                            >
                              Phone Number <span className="text-orange-500 font-bold">*</span>
                            </label>
                            <div className="relative flex items-center">
                              <span
                                className={`absolute left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold pointer-events-none transition-colors ${
                                  theme === "dark"
                                    ? "bg-slate-800 text-slate-200 border border-slate-700"
                                    : "bg-slate-100 text-slate-800 border border-slate-300"
                                }`}
                              >
                                🇧🇩 +880
                              </span>
                              <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="01779024048"
                                value={formData.phoneNumber}
                                onChange={(e) => {
                                  setFormData({ ...formData, phoneNumber: e.target.value });
                                  if (errors.phoneNumber)
                                    setErrors((prev) => ({ ...prev, phoneNumber: "" }));
                                }}
                                className={`w-full pl-28 pr-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm font-medium border transition-all duration-200 outline-none ${
                                  errors.phoneNumber
                                    ? "border-red-500 bg-red-500/5 focus:ring-4 focus:ring-red-500/20"
                                    : theme === "dark"
                                    ? "bg-[#0B1A2D] border-slate-700/80 text-white placeholder:text-slate-500 focus:bg-[#07192C] focus:border-[#FF5500] focus:ring-4 focus:ring-[#FF5500]/20"
                                    : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#FE6F1F] focus:ring-4 focus:ring-[#FE6F1F]/15 shadow-sm"
                                }`}
                              />
                            </div>
                            {errors.phoneNumber && (
                              <span className="text-red-500 text-xs font-semibold mt-0.5">
                                {errors.phoneNumber}
                              </span>
                            )}
                          </div>

                          {/* 2. Team Size Dropdown */}
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="teamSize"
                              className={`text-base sm:text-xl font-bold tracking-wide ${
                                theme === "dark" ? "text-slate-200" : "text-slate-800"
                              }`}
                            >
                              How big is your team size right now?{" "}
                              <span className="text-orange-500 font-bold">*</span>
                            </label>
                            <div className="relative">
                              <select
                                name="teamSize"
                                id="teamSize"
                                value={formData.teamSize}
                                onChange={(e) => {
                                  setFormData({ ...formData, teamSize: e.target.value });
                                  if (errors.teamSize)
                                    setErrors((prev) => ({ ...prev, teamSize: "" }));
                                }}
                                className={`w-full appearance-none px-4 py-3 sm:px-4.5 sm:py-3.5 pr-11 rounded-xl sm:rounded-2xl text-sm font-medium border transition-all duration-200 outline-none cursor-pointer ${
                                  errors.teamSize
                                    ? "border-red-500 bg-red-500/5 focus:ring-4 focus:ring-red-500/20"
                                    : theme === "dark"
                                    ? "bg-[#0B1A2D] border-slate-700/80 text-white focus:border-[#FF5500] focus:ring-4 focus:ring-[#FF5500]/20"
                                    : "bg-white border-slate-300 text-slate-900 focus:bg-white focus:border-[#FE6F1F] focus:ring-4 focus:ring-[#FE6F1F]/15 shadow-sm"
                                }`}
                              >
                                <option value="" disabled className={theme === "dark" ? "bg-[#07192C] text-slate-400" : "bg-white text-slate-400"}>
                                  Select team size
                                </option>
                                {teamSizeOptions.map((opt, i) => (
                                  <option key={i} value={opt} className={theme === "dark" ? "bg-[#07192C] text-white" : "bg-white text-slate-900"}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-slate-500" size={18} />
                            </div>
                            {errors.teamSize && (
                              <span className="text-red-500 text-xs font-semibold mt-0.5">
                                {errors.teamSize}
                              </span>
                            )}
                          </div>

                          {/* 3. Full-Time or Part-Time Interest Dropdown */}
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="hiringType"
                              className={`text-base sm:text-xl font-bold tracking-wide ${
                                theme === "dark" ? "text-slate-200" : "text-slate-800"
                              }`}
                            >
                              Are you interested in hiring someone Full-Time or Part-Time?{" "}
                              <span className="text-orange-500 font-bold">*</span>
                            </label>
                            <div className="relative">
                              <select
                                name="hiringType"
                                id="hiringType"
                                value={formData.hiringType}
                                onChange={(e) => {
                                  setFormData({ ...formData, hiringType: e.target.value });
                                  if (errors.hiringType)
                                    setErrors((prev) => ({ ...prev, hiringType: "" }));
                                }}
                                className={`w-full appearance-none px-4 py-3 sm:px-4.5 sm:py-3.5 pr-11 rounded-xl sm:rounded-2xl text-base sm:text-xl font-medium border transition-all duration-200 outline-none cursor-pointer ${
                                  errors.hiringType
                                    ? "border-red-500 bg-red-500/5 focus:ring-4 focus:ring-red-500/20"
                                    : theme === "dark"
                                    ? "bg-[#0B1A2D] border-slate-700/80 text-white focus:border-[#FF5500] focus:ring-4 focus:ring-[#FF5500]/20"
                                    : "bg-white border-slate-300 text-slate-900 focus:bg-white focus:border-[#FE6F1F] focus:ring-4 focus:ring-[#FE6F1F]/15 shadow-sm"
                                }`}
                              >
                                <option value="" disabled className={theme === "dark" ? "bg-[#07192C] text-slate-400" : "bg-white text-slate-400"}>
                                  Select hiring preference
                                </option>
                                {hiringTypeOptions.map((opt, i) => (
                                  <option key={i} value={opt} className={theme === "dark" ? "bg-[#07192C] text-white" : "bg-white text-slate-900"}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-slate-500" size={18} />
                            </div>
                            {errors.hiringType && (
                              <span className="text-red-500 text-xs font-semibold mt-0.5">
                                {errors.hiringType}
                              </span>
                            )}
                          </div>

                          {/* 4. Timeline Looking to Hire Dropdown */}
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="hiringTimeline"
                              className={`text-base sm:text-xl font-bold tracking-wide ${
                                theme === "dark" ? "text-slate-200" : "text-slate-800"
                              }`}
                            >
                              When are you ideally looking to make a hire?{" "}
                              <span className="text-orange-500 font-bold">*</span>
                            </label>
                            <div className="relative">
                              <select
                                name="hiringTimeline"
                                id="hiringTimeline"
                                value={formData.hiringTimeline}
                                onChange={(e) => {
                                  setFormData({ ...formData, hiringTimeline: e.target.value });
                                  if (errors.hiringTimeline)
                                    setErrors((prev) => ({ ...prev, hiringTimeline: "" }));
                                }}
                                className={`w-full appearance-none px-4 py-3 sm:px-4.5 sm:py-3.5 pr-11 rounded-xl sm:rounded-2xl text-sm font-medium border transition-all duration-200 outline-none cursor-pointer ${
                                  errors.hiringTimeline
                                    ? "border-red-500 bg-red-500/5 focus:ring-4 focus:ring-red-500/20"
                                    : theme === "dark"
                                    ? "bg-[#0B1A2D] border-slate-700/80 text-white focus:border-[#FF5500] focus:ring-4 focus:ring-[#FF5500]/20"
                                    : "bg-white border-slate-300 text-slate-900 focus:bg-white focus:border-[#FE6F1F] focus:ring-4 focus:ring-[#FE6F1F]/15 shadow-sm"
                                }`}
                              >
                                <option value="" disabled className={theme === "dark" ? "bg-[#07192C] text-slate-400" : "bg-white text-slate-400"}>
                                  Select timeline
                                </option>
                                {timelineOptions.map((opt, i) => (
                                  <option key={i} value={opt} className={theme === "dark" ? "bg-[#07192C] text-white" : "bg-white text-slate-900"}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-slate-500" size={18} />
                            </div>
                            {errors.hiringTimeline && (
                              <span className="text-red-500 text-xs font-semibold mt-0.5">
                                {errors.hiringTimeline}
                              </span>
                            )}
                          </div>

                          {/* 5. Business Operating Years Dropdown */}
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="businessYears"
                              className={`text-base sm:text-xl font-bold tracking-wide ${
                                theme === "dark" ? "text-slate-200" : "text-slate-800"
                              }`}
                            >
                              How many years has your business been operating?{" "}
                              <span className="text-orange-500 font-bold">*</span>
                            </label>
                            <div className="relative">
                              <select
                                name="businessYears"
                                id="businessYears"
                                value={formData.businessYears}
                                onChange={(e) => {
                                  setFormData({ ...formData, businessYears: e.target.value });
                                  if (errors.businessYears)
                                    setErrors((prev) => ({ ...prev, businessYears: "" }));
                                }}
                                className={`w-full appearance-none px-4 py-3 sm:px-4.5 sm:py-3.5 pr-11 rounded-xl sm:rounded-2xl text-sm font-medium border transition-all duration-200 outline-none cursor-pointer ${
                                  errors.businessYears
                                    ? "border-red-500 bg-red-500/5 focus:ring-4 focus:ring-red-500/20"
                                    : theme === "dark"
                                    ? "bg-[#0B1A2D] border-slate-700/80 text-white focus:border-[#FF5500] focus:ring-4 focus:ring-[#FF5500]/20"
                                    : "bg-white border-slate-300 text-slate-900 focus:bg-white focus:border-[#FE6F1F] focus:ring-4 focus:ring-[#FE6F1F]/15 shadow-sm"
                                }`}
                              >
                                <option value="" disabled className={theme === "dark" ? "bg-[#07192C] text-slate-400" : "bg-white text-slate-400"}>
                                  Select operating years
                                </option>
                                {operatingYearsOptions.map((opt, i) => (
                                  <option key={i} value={opt} className={theme === "dark" ? "bg-[#07192C] text-white" : "bg-white text-slate-900"}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 dark:text-slate-500" size={18} />
                            </div>
                            {errors.businessYears && (
                              <span className="text-red-500 text-xs font-semibold mt-0.5">
                                {errors.businessYears}
                              </span>
                            )}
                          </div>

                          {/* 6. Roles to Hire Textarea */}
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="rolesToHire"
                              className={`text-base sm:text-xl font-bold tracking-wide ${
                                theme === "dark" ? "text-slate-200" : "text-slate-800"
                              }`}
                            >
                              Please list all roles you&apos;d like to hire for (our team will customize
                              your call based on this info). <span className="text-orange-500 font-bold">*</span>
                            </label>
                            <textarea
                              name="rolesToHire"
                              id="rolesToHire"
                              rows={3}
                              placeholder="e.g. Executive Assistant, Lead Developer, Customer Support..."
                              value={formData.rolesToHire}
                              onChange={(e) => {
                                setFormData({ ...formData, rolesToHire: e.target.value });
                                if (errors.rolesToHire)
                                  setErrors((prev) => ({ ...prev, rolesToHire: "" }));
                              }}
                              className={`w-full px-4 py-3 sm:px-4.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm font-medium border transition-all duration-200 outline-none resize-none ${
                                errors.rolesToHire
                                  ? "border-red-500 bg-red-500/5 focus:ring-4 focus:ring-red-500/20"
                                  : theme === "dark"
                                  ? "bg-[#0B1A2D] border-slate-700/80 text-white placeholder:text-slate-500 focus:bg-[#07192C] focus:border-[#FF5500] focus:ring-4 focus:ring-[#FF5500]/20"
                                  : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#FE6F1F] focus:ring-4 focus:ring-[#FE6F1F]/15 shadow-sm"
                              }`}
                            />
                            {errors.rolesToHire && (
                              <span className="text-red-500 text-xs font-semibold mt-0.5">
                                {errors.rolesToHire}
                              </span>
                            )}
                          </div>

                          {/* 7. Business Website */}
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="websiteUrl"
                              className={`text-base sm:text-xl font-bold tracking-wide ${
                                theme === "dark" ? "text-slate-200" : "text-slate-800"
                              }`}
                            >
                              Please provide your business website: <span className="text-orange-500 font-bold">*</span>
                            </label>
                            <input
                              type="url"
                              name="websiteUrl"
                              id="websiteUrl"
                              placeholder="e.g. google.com"
                              value={formData.websiteUrl}
                              onChange={(e) => {
                                setFormData({ ...formData, websiteUrl: e.target.value });
                                if (errors.websiteUrl)
                                  setErrors((prev) => ({ ...prev, websiteUrl: "" }));
                              }}
                              className={`w-full px-4 py-3 sm:px-4.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm font-medium border transition-all duration-200 outline-none ${
                                errors.websiteUrl
                                  ? "border-red-500 bg-red-500/5 focus:ring-4 focus:ring-red-500/20"
                                  : theme === "dark"
                                  ? "bg-[#0B1A2D] border-slate-700/80 text-white placeholder:text-slate-500 focus:bg-[#07192C] focus:border-[#FF5500] focus:ring-4 focus:ring-[#FF5500]/20"
                                  : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#FE6F1F] focus:ring-4 focus:ring-[#FE6F1F]/15 shadow-sm"
                              }`}
                            />
                            {errors.websiteUrl && (
                              <span className="text-red-500 text-xs font-semibold mt-0.5">
                                {errors.websiteUrl}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Terms Consent Disclaimer */}
                    <p
                      className={`text-xs leading-relaxed font-medium mt-1 transition-colors ${
                        theme === "dark" ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      By entering your information, you consent to your data being saved in
                      accordance with our{" "}
                      <span className="font-semibold underline cursor-pointer hover:text-orange-500 transition-colors">
                        Terms
                      </span>{" "}
                      &amp;{" "}
                      <span className="font-semibold underline cursor-pointer hover:text-orange-500 transition-colors">
                        Privacy Policy
                      </span>
                      .
                    </p>

                    {/* Continue / Confirm CTA Button */}
                    <button
                      type="submit"
                      className={`mt-2 w-full py-3.5 sm:py-4 px-6 rounded-xl sm:rounded-2xl font-extrabold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg group hover:scale-[1.01] active:scale-[0.99] ${
                        theme === "dark"
                          ? "bg-[#FF5500] text-white hover:bg-[#e04a00] shadow-[#FF5500]/25"
                          : "bg-[#FE6F1F] text-white hover:bg-[#e05807] shadow-orange-500/20"
                      }`}
                    >
                      <span>
                        {!isExpanded
                          ? "Continue"
                          : formData.selectedTime
                          ? `Confirm Strategy Session (${formData.selectedTime})`
                          : "Proceed to Calendar"}
                      </span>
                      <FiChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CALENDAR & TIME SLOTS SELECTION */}
            <div
              className={`lg:col-span-6 p-5 sm:p-7 xl:p-8 relative overflow-y-auto overscroll-contain bayshore-form-scroll transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-b from-[#051424] to-[#030d18]"
                  : "bg-gradient-to-b from-[#FAFBFD] to-[#F3F5F9]"
              }`}
            >
              <div className="flex flex-col justify-between min-h-full">
                {/* Floating Validation Tooltip Alert */}
                <AnimatePresence>
                  {showLockAlert && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 0 }}
                      className="absolute inset-0 z-30 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm"
                      onClick={() => setShowLockAlert(false)}
                    >
                      <div
                        className={`p-6 rounded-2xl shadow-2xl max-w-xs text-center border font-semibold text-sm sm:text-base ${
                          theme === "dark"
                            ? "bg-[#07192C] text-white border-slate-700"
                            : "bg-white text-[#0C1827] border-slate-200 shadow-slate-900/20"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Please fill out all form fields before choosing your preferred time slot.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  {/* Date Picker Header Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`text-lg sm:text-xl font-extrabold font-playfair tracking-tight ${
                        theme === "dark" ? "text-white" : "text-[#0C1827]"
                      }`}
                    >
                      September 2026
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Previous Month"
                        className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all ${
                          theme === "dark"
                            ? "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                            : "border-slate-200 text-slate-600 hover:text-[#0C1827] hover:bg-white shadow-sm"
                        }`}
                      >
                        <FiChevronLeft size={17} />
                      </button>
                      <button
                        type="button"
                        aria-label="Next Month"
                        className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all ${
                          theme === "dark"
                            ? "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
                            : "border-slate-200 text-slate-600 hover:text-[#0C1827] hover:bg-white shadow-sm"
                        }`}
                      >
                        <FiChevronRight size={17} />
                      </button>
                    </div>
                  </div>

                  {/* Days Cards Row with Generous Spacing & Perfect Theme Contrast */}
                  <div className="grid grid-cols-5 gap-2 sm:gap-2.5 mb-6">
                    {daysList.map((d, idx) => {
                      const isSelected = selectedDayIdx === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedDayIdx(idx)}
                          className={`flex flex-col items-center justify-center py-3.5 px-2 rounded-xl sm:rounded-2xl border transition-all duration-200 ${
                            isSelected
                              ? theme === "dark"
                                ? "bg-[#07192C] border-2 border-[#FF5500] text-white font-bold shadow-lg ring-2 ring-[#FF5500]/25 scale-[1.02]"
                                : "bg-white border-2 border-[#FE6F1F] text-[#0C1827] font-bold shadow-md ring-2 ring-[#FE6F1F]/20 scale-[1.02]"
                              : theme === "dark"
                              ? "bg-[#07192C]/50 border-slate-800/90 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                              : "bg-white border-slate-200 text-slate-700 hover:border-orange-300 hover:bg-orange-50/40 shadow-sm"
                          }`}
                        >
                          <span className="text-[10px] sm:text-[11px] uppercase font-extrabold tracking-wider mb-0.5 opacity-75">
                            {d.day}
                          </span>
                          <span className="text-sm sm:text-base font-extrabold">{d.date}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Timezone & 24h Bar */}
                  <div className="flex items-center justify-between text-xs font-semibold mb-5 px-0.5">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <FiGlobe size={15} className="text-[#FE6F1F]" />
                      <span className="tracking-wide text-xs">America/New_York (EST)</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIs24h(!is24h)}
                      className={`px-2.5 py-1 rounded-full border text-[11px] font-bold transition-all ${
                        is24h
                          ? theme === "dark"
                            ? "bg-[#FF5500] text-white border-[#FF5500] shadow-sm"
                            : "bg-[#FE6F1F] text-white border-[#FE6F1F] shadow-sm"
                          : theme === "dark"
                          ? "border-slate-800 text-slate-400 hover:border-slate-700"
                          : "border-slate-200 text-slate-600 hover:border-slate-300 bg-white shadow-sm"
                      }`}
                    >
                      24h
                    </button>
                  </div>

                  {/* Time Slots Grid */}
                  <div className="grid grid-cols-3 gap-2.5 mb-6">
                    {timeSlots.map((t, idx) => {
                      const isSelected = formData.selectedTime === t;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleTimeSlotClick(t)}
                          className={`py-3 px-2.5 rounded-xl sm:rounded-2xl border text-base sm:text-xl font-bold transition-all duration-200 ${
                            isSelected
                              ? theme === "dark"
                                ? "bg-[#FF5500] border-[#FF5500] text-white shadow-lg shadow-[#FF5500]/30 scale-[1.02]"
                                : "bg-[#FE6F1F] border-[#FE6F1F] text-white shadow-md shadow-orange-500/25 scale-[1.02]"
                              : theme === "dark"
                              ? "bg-[#07192C]/70 border-slate-800 text-slate-300 hover:border-[#FF5500]/60 hover:text-white hover:bg-[#07192C]"
                              : "bg-white border-slate-200 text-slate-700 hover:border-[#FE6F1F] hover:text-[#FE6F1F] hover:bg-orange-50/40 shadow-sm"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MultiStepHiringForm;
