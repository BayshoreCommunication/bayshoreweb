"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { FiArrowRight, FiChevronDown, FiSearch, FiCheck } from "react-icons/fi";
import { COUNTRIES, POPULAR_COUNTRIES, Country } from "./countries";

export const VirtualHiring = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    consent: false,
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // এখানে আপনার ফর্ম সাবমিট লজিক বা API কল বসাতে পারেন
    console.log("Form Submitted:", {
      ...formData,
      country: selectedCountry,
    });
  };

  return (
    <section
      className="relative w-full py-20 lg:py-28 bg-cover bg-center bg-no-repeat overflow-hidden font-sans"
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
        <div className="w-full max-w-[530px] bg-white rounded-[32px] shadow-2xl border border-gray-100 p-10 sm:p-12">

          {/* Form Header Logo */}
          <div className="flex justify-center md:justify-start mb-6">
            <div className="relative w-[200px] h-[55px] sm:w-[210px] sm:h-[58px]">
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
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] text-gray-800 focus:outline-none focus:border-[#f97316] transition-colors bg-gray-50/50"
              />
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
                  required
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] text-gray-800 focus:outline-none focus:border-[#f97316] transition-colors bg-gray-50/50"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                  Last Name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] text-gray-800 focus:outline-none focus:border-[#f97316] transition-colors bg-gray-50/50"
                />
              </div>
            </div>

            {/* Dynamic Phone Field with Country Selector */}
            <div>
              <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                Phone: <span className="text-red-500">*</span>
              </label>
              <div className="relative" ref={dropdownRef}>
                <div className="flex rounded-xl border border-gray-200 bg-gray-50/50 focus-within:border-[#f97316] focus-within:bg-white transition-colors">

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
                      className={`text-gray-500 text-sm transition-transform duration-200 ${isCountryDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Phone Input */}
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(201) 555-0123"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-3 rounded-r-xl text-[14px] md:text-[16px] text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
                  />
                </div>

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
                                  className={`w-full flex items-center justify-between px-3.5 py-2 text-left hover:bg-orange-50 transition-colors cursor-pointer ${isSelected
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
                                      className={`font-mono text-[13px] md:text-[14px] ${isSelected ? "text-[#f97316]" : "text-gray-500"
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
                                  Platform
                                }}
                                className={`w-full flex items-center justify-between px-3.5 py-2 text-left hover:bg-orange-50 transition-colors cursor-pointer ${isSelected
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
                                    className={`font-mono text-[13px] md:text-[14px] ${isSelected ? "text-[#f97316]" : "text-gray-500"
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
            <div className="flex items-start gap-3 mt-1">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-[#f97316] rounded border-gray-300 focus:ring-[#f97316] cursor-pointer"
              />
              <label htmlFor="consent" className="text-[11px] text-gray-500 leading-tight">
                I consent to Bayshore Virtual Solutions contacting me by phone, SMS, and email. Messaging frequency varies. Standard message and data rates may apply. To unsubscribe, reply STOP anytime. By consenting I acknowledge I have read and agree to Bayshore Virtual Solutions&apos; <a href="#" className="underline text-gray-600 hover:text-[#f97316]">Terms & Conditions</a> and <a href="#" className="underline text-gray-600 hover:text-[#f97316]">Privacy Policy</a>. I can withdraw consent at any time.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full py-3.5 px-8 bg-[#0B192C] hover:bg-[#f97316] text-white font-bold text-[14px] md:text-[16px] rounded-[8px] lg:rounded-[16px] shadow-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.01] cursor-pointer"
            >
              <span>BOOK FREE CALL</span>
              <FiArrowRight className="text-[18px]" />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default VirtualHiring;