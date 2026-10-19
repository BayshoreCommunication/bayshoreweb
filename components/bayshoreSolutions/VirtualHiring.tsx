"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  FiArrowRight,
  FiChevronDown,
  FiSearch,
  FiCheck,
  FiX,
  FiCheckCircle,
  FiLoader,
  FiAlertCircle,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { COUNTRIES, POPULAR_COUNTRIES, Country } from "./countries";

const EMAILJS_SERVICE_ID = "service_iei07cm";
const EMAILJS_TEMPLATE_ID = "template_f6bj8oe";
const EMAILJS_PUBLIC_KEY = "v-ZgkUyuqs5r10gq-";

export const VirtualHiring = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    consent: false,
  });

  const [errors, setErrors] = useState<{
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    consent?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [countdown, setCountdown] = useState(5);

  const [selectedCountry, setSelectedCountry] = useState<Country>(
    POPULAR_COUNTRIES[0] || COUNTRIES[0]
  );
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
    };
    if (isCountryDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCountryDropdownOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isCountryDropdownOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery("");
    }
  }, [isCountryDropdownOpen]);

  // Handle 5-second countdown for success modal
  useEffect(() => {
    if (!isSuccessModalOpen) return;

    setCountdown(5);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsSuccessModalOpen(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSuccessModalOpen]);

  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const validate = () => {
    const newErrors: {
      email?: string;
      firstName?: string;
      lastName?: string;
      phone?: string;
      consent?: string;
    } = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.consent) {
      newErrors.consent = "Please check this box to agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Dynamically clear field error as user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          dialCode: selectedCountry.dialCode,
          country: selectedCountry.name,
          submission_date: new Date().toLocaleString(),
          year: new Date().getFullYear(),
          name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
          first_name: formData.firstName.trim(),
          last_name: formData.lastName.trim(),
          user_email: formData.email.trim(),
          user_phone: `${selectedCountry.dialCode} ${formData.phone.trim()}`,
          consent: formData.consent ? "Agreed" : "No",
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmittedName(`${formData.firstName.trim()} ${formData.lastName.trim()}`);
      setIsSuccessModalOpen(true);

      // Reset Form fields
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        consent: false,
      });
      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send your request. Please check your internet connection or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 md:scroll-mt-24 relative w-full py-20 lg:py-28 bg-cover bg-center bg-no-repeat overflow-hidden font-sans"
      style={{ backgroundImage: `url('/assets/bayshoreSolutions/VirtualHiring.png')` }}
    >
      {/* Light overlay for readability over background image */}
      <div className="absolute inset-0 bg-white/75 sm:bg-white/50 backdrop-blur-[2px]" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* Left Side Content */}
        <div className="flex-1 max-w-[600px] text-left">
          <h2 className="font-bold text-[28px] md:text-[46px] text-center lg:text-left text-[#0d1b2a] leading-[1.15] tracking-tight mb-6">
            Virtual Hiring <br />
            <span className="text-[#f97316]">Strategy Session</span>
          </h2>
          <p className="font-medium text-[15px] sm:text-[17px] text-gray-700 leading-relaxed text-center lg:text-left">
            During this meeting we will go over the role you&apos;re planning to hire for, what the process looks like, answer any questions you have, and proceed to next steps.
          </p>
        </div>

        {/* Right Side Form Card */}
        <div className="w-full max-w-[630px] bg-white rounded-[32px] shadow-2xl border border-gray-100 p-10 sm:p-12">

          {/* Form Header Logo */}
          <div className="flex justify-center md:justify-start mb-6">
            <div className="relative w-[150px] h-[55px] sm:w-[180px] sm:h-[58px]">
              <Image
                src="/assets/bayshoreSolutions/logo-light.png"
                alt="Bayshore Virtual Solutions"
                fill
                priority
                className="object-contain object-center md:object-left"
              />
            </div>
          </div>

          <h3 className="font-bold text-[20px] sm:text-[22px] text-[#0d1b2a] mb-6">
            Book a Free 30-Minute Consultation
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Email Field */}
            <div>
              <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                Email: <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-[14px] text-gray-800 focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-500 bg-red-50/30 focus:border-red-500"
                    : "border-gray-200 bg-gray-50/50 focus:border-[#f97316]"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-[12px] font-medium text-red-500 flex items-center gap-1.5">
                  <FiAlertCircle className="shrink-0 text-sm" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                  First Name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-[14px] text-gray-800 focus:outline-none transition-colors ${
                    errors.firstName
                      ? "border-red-500 bg-red-50/30 focus:border-red-500"
                      : "border-gray-200 bg-gray-50/50 focus:border-[#f97316]"
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1.5 text-[12px] font-medium text-red-500 flex items-center gap-1.5">
                    <FiAlertCircle className="shrink-0 text-sm" />
                    <span>{errors.firstName}</span>
                  </p>
                )}
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                  Last Name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-[14px] text-gray-800 focus:outline-none transition-colors ${
                    errors.lastName
                      ? "border-red-500 bg-red-50/30 focus:border-red-500"
                      : "border-gray-200 bg-gray-50/50 focus:border-[#f97316]"
                  }`}
                />
                {errors.lastName && (
                  <p className="mt-1.5 text-[12px] font-medium text-red-500 flex items-center gap-1.5">
                    <FiAlertCircle className="shrink-0 text-sm" />
                    <span>{errors.lastName}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Dynamic Phone Field with Country Selector */}
            <div>
              <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                Phone: <span className="text-red-500">*</span>
              </label>
              <div className="relative" ref={dropdownRef}>
                <div
                  className={`flex rounded-xl border transition-colors ${
                    errors.phone
                      ? "border-red-500 bg-red-50/30 focus-within:border-red-500"
                      : "border-gray-200 bg-gray-50/50 focus-within:border-[#f97316] focus-within:bg-white"
                  }`}
                >
                  {/* Country Flag & Dial Code Trigger */}
                  <button
                    type="button"
                    onClick={() => setIsCountryDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-2 px-3.5 py-3 border-r border-gray-200 hover:bg-gray-100/70 transition-colors rounded-l-xl text-[14px] md:text-[16px] text-gray-800 shrink-0 select-none cursor-pointer"
                    aria-label="Select Country Code"
                    title={`${selectedCountry.name} (${selectedCountry.dialCode})`}
                  >
                    <span className="text-[14px] md:text-[16px] font-bold text-gray-800 leading-none">
                      {selectedCountry.flag || selectedCountry.code}
                    </span>
                    <span className="font-semibold text-gray-800 text-[14px] md:text-[16px]">
                      {selectedCountry.dialCode}
                    </span>
                    <FiChevronDown
                      className={`text-gray-500 text-sm transition-transform duration-200 ${
                        isCountryDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Phone Input */}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(201) 555-0123"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-r-xl text-[14px] md:text-[16px] text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
                  />
                </div>

                {errors.phone && (
                  <p className="mt-1.5 text-[12px] font-medium text-red-500 flex items-center gap-1.5">
                    <FiAlertCircle className="shrink-0 text-sm" />
                    <span>{errors.phone}</span>
                  </p>
                )}

                {/* Dropdown Popover */}
                {isCountryDropdownOpen && (
                  <div className="absolute top-[calc(100%+6px)] left-0 w-full sm:w-[340px] max-h-[300px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150">
                    {/* Search Field */}
                    <div className="p-2.5 border-b border-gray-100 bg-gray-50/90 sticky top-0 z-10">
                      <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search country or code..."
                          className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#f97316]"
                        />
                      </div>
                    </div>

                    {/* Countries List */}
                    <div className="overflow-y-auto max-h-[240px] divide-y divide-gray-50">
                      {filteredCountries.length === 0 ? (
                        <div className="py-6 text-center text-xs text-gray-400">
                          No country found
                        </div>
                      ) : (
                        <>
                          {!searchQuery && (
                            <div className="px-3.5 py-1.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                              Popular Countries
                            </div>
                          )}
                          {!searchQuery &&
                            POPULAR_COUNTRIES.map((c) => {
                              const isSelected = c.code === selectedCountry.code;
                              return (
                                <button
                                  key={`pop-${c.code}`}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(c);
                                    setIsCountryDropdownOpen(false);
                                  }}
                                  className={`w-full flex items-center justify-between px-3.5 py-2 text-left hover:bg-orange-50 transition-colors cursor-pointer ${
                                    isSelected
                                      ? "bg-orange-50 font-semibold text-[#f97316]"
                                      : "text-gray-700"
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5 truncate pr-2">
                                    <span className="font-bold text-[14px] md:text-[16px] shrink-0">
                                      {c.flag || c.code}
                                    </span>
                                    <span className="truncate text-[13px] md:text-[14px]">
                                      {c.name}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <span
                                      className={`font-mono text-[13px] md:text-[14px] ${
                                        isSelected ? "text-[#f97316]" : "text-gray-500"
                                      }`}
                                    >
                                      {c.dialCode}
                                    </span>
                                    {isSelected && <FiCheck className="text-[#f97316] text-xs" />}
                                  </div>
                                </button>
                              );
                            })}

                          {!searchQuery && (
                            <div className="px-3.5 py-1.5 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                              All Countries
                            </div>
                          )}

                          {filteredCountries.map((c) => {
                            const isSelected = c.code === selectedCountry.code;
                            return (
                              <button
                                key={`${c.code}-${c.dialCode}`}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setIsCountryDropdownOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-3.5 py-2 text-left hover:bg-orange-50 transition-colors cursor-pointer ${
                                  isSelected
                                    ? "bg-orange-50 font-semibold text-[#f97316]"
                                    : "text-gray-700"
                                }`}
                              >
                                <div className="flex items-center gap-2.5 truncate pr-2">
                                  <span className="font-bold text-[14px] md:text-[16px] shrink-0">
                                    {c.flag || c.code}
                                  </span>
                                  <span className="truncate text-[13px] md:text-[14px]">
                                    {c.name}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span
                                    className={`font-mono text-[13px] md:text-[14px] ${
                                      isSelected ? "text-[#f97316]" : "text-gray-500"
                                    }`}
                                  >
                                    {c.dialCode}
                                  </span>
                                  {isSelected && <FiCheck className="text-[#f97316] text-xs" />}
                                </div>
                              </button>
                            );
                          })}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Consent Checkbox */}
            <div>
              <div className="flex items-start gap-3 mt-1">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className={`mt-1 w-5 h-5 rounded cursor-pointer ${
                    errors.consent
                      ? "border-red-500 text-red-500 focus:ring-red-500"
                      : "text-[#f97316] border-gray-300 focus:ring-[#f97316]"
                  }`}
                />
                <label htmlFor="consent" className="text-[13px] text-gray-500 leading-tight font-normal">
                  I consent to Bayshore Virtual Solutions contacting me by phone, SMS, and email. Messaging frequency varies. Standard message and data rates may apply. To unsubscribe, reply STOP anytime. By consenting I acknowledge I have read and agree to Bayshore Virtual Solutions&apos;{" "}
                  <a href="#" className="underline text-gray-600 hover:text-[#f97316]">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline text-gray-600 hover:text-[#f97316]">
                    Privacy Policy
                  </a>
                  . I can withdraw consent at any time.
                </label>
              </div>
              {errors.consent && (
                <p className="mt-1.5 ml-8 text-[12px] font-medium text-red-500 flex items-center gap-1.5">
                  <FiAlertCircle className="shrink-0 text-sm" />
                  <span>{errors.consent}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 w-full py-5 px-8 rounded-full shadow-lg flex items-center justify-center gap-3 transition-all duration-300 transform font-semibold text-[14px] md:text-[16px] text-white ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed opacity-80"
                  : "bg-[#0B192C] hover:bg-[#f97316] cursor-pointer"
              }`}
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="text-[20px] animate-spin" />
                  <span>Sending Request...</span>
                </>
              ) : (
                <>
                  <span>Callback Request</span>
                  <FiArrowRight className="text-[18px]" />
                </>
              )}
            </button>

          </form>

        </div>

      </div>

      {/* 5-Second Animated Success Modal */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-[480px] bg-white rounded-[28px] p-8 sm:p-10 text-center shadow-2xl border border-slate-100 z-10 overflow-hidden"
            >
              {/* Top Accent Orange Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FE6F1F] via-[#f97316] to-[#FF9454]" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <FiX size={20} />
              </button>

              {/* Success Icon */}
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center text-emerald-500 mb-5 shadow-sm">
                <FiCheckCircle className="w-9 h-9 sm:w-11 sm:h-11" />
              </div>

              {/* Heading */}
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0B192C] leading-snug mb-2">
                Consultation Request Received!
              </h3>

              {/* Subheading */}
              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-6">
                Thank you{submittedName ? `, ${submittedName}` : ""}! We have received your booking for a{" "}
                <span className="font-semibold text-[#0B192C]">Free 30-Minute Virtual Hiring Strategy Session</span>. Our team will contact you shortly.
              </p>

              {/* 5-Second Timer Bar & Countdown */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2 font-medium">
                  <span>Auto-closing in:</span>
                  <span className="font-bold text-[#f97316] font-mono text-[13px]">
                    {countdown}s
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#f97316] transition-all duration-1000 ease-linear rounded-full"
                    style={{ width: `${(countdown / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Close Action Button */}
              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full py-3.5 px-6 rounded-full bg-[#0B192C] hover:bg-[#f97316] text-white font-semibold text-[15px] transition-all duration-200 shadow-md cursor-pointer"
              >
                Got It
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VirtualHiring;