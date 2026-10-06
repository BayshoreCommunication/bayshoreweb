"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { FiArrowRight, FiSearch, FiCheck, FiChevronDown } from "react-icons/fi";
import { COUNTRIES, POPULAR_COUNTRIES, Country } from "./countries";

export const VirtualHiring = () => {
    // Default country: United States (+1)
    const [selectedCountry, setSelectedCountry] = useState<Country>(
        COUNTRIES.find((c) => c.code === "US") || POPULAR_COUNTRIES[0]
    );
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const phoneInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        consent: false,
    });

    // Auto-focus search input when country dropdown opens
    useEffect(() => {
        if (isDropdownOpen) {
            setTimeout(() => {
                searchInputRef.current?.focus();
            }, 50);
        } else {
            setSearchQuery("");
        }
    }, [isDropdownOpen]);

    // Handle clicks outside the dropdown & Escape key
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isDropdownOpen]);

    // Filter countries based on user search query
    const filteredCountries = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return COUNTRIES;
        const cleanQuery = query.startsWith("+") ? query.slice(1) : query;

        return COUNTRIES.filter((country) => {
            const nameMatch = country.name.toLowerCase().includes(query);
            const codeMatch = country.code.toLowerCase().includes(query);
            const dialMatch = country.dialCode.replace("+", "").includes(cleanQuery);
            return nameMatch || codeMatch || dialMatch;
        });
    }, [searchQuery]);

    // Helper for sample placeholder based on country
    const getPhonePlaceholder = (countryCode: string) => {
        switch (countryCode) {
            case "US":
            case "CA":
                return "(201) 555-0123";
            case "GB":
                return "7911 123456";
            case "BD":
                return "01712 345678";
            case "IN":
                return "98765 43210";
            case "AU":
                return "412 345 678";
            case "DE":
                return "151 23456789";
            case "FR":
                return "6 12 34 56 78";
            case "AE":
                return "50 123 4567";
            case "SG":
                return "8123 4567";
            case "PK":
                return "300 1234567";
            default:
                return "Phone number";
        }
    };

    const handleCountrySelect = (country: Country) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
        setSearchQuery("");
        // Focus the phone input immediately after selection
        setTimeout(() => {
            phoneInputRef.current?.focus();
        }, 50);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            ...formData,
            country: selectedCountry.name,
            countryCode: selectedCountry.dialCode,
            fullPhoneNumber: `${selectedCountry.dialCode} ${formData.phone}`.trim(),
        };
        console.log("Form Submitted:", payload);
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
                    <h2 className="font-extrabold text-[36px] sm:text-[46px] lg:text-[54px] text-[#0d1b2a] leading-[1.15] tracking-tight mb-6">
                        Virtual Hiring <br />
                        <span className="text-[#f97316]">Strategy Session</span>
                    </h2>
                    <p className="font-medium text-[15px] sm:text-[17px] text-gray-700 leading-relaxed">
                        During this meeting we will go over the role you&apos;re planning to hire for, what the process looks like, answer any questions you have, and proceed to next steps.
                    </p>
                </div>

                {/* Right Side Form Card */}
                <div className="w-full max-w-[530px] bg-white rounded-[32px] shadow-2xl border border-gray-100 p-10 sm:p-12">

                    {/* Form Header Logo & Title */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="relative w-[40px] h-[40px]">
                            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-[20px]">
                                B
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-[18px] tracking-tight text-[#0d1b2a] leading-tight">
                                BayShore
                            </span>
                            <span className="text-[9px] tracking-[0.2em] text-gray-500 uppercase font-medium">
                                VIRTUAL SOLUTIONS
                            </span>
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

                        {/* Dynamic Country Phone Field */}
                        <div className="relative" ref={dropdownRef}>
                            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                                Phone: <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50/50 focus-within:border-[#f97316] focus-within:bg-white transition-all relative">
                                
                                {/* Dynamic Country Trigger Button */}
                                <button
                                    type="button"
                                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                                    className="flex items-center gap-2 px-3 py-3 border-r border-gray-200 bg-gray-100/70 hover:bg-gray-200/70 transition-colors text-[14px] rounded-l-xl cursor-pointer select-none focus:outline-none"
                                    aria-haspopup="listbox"
                                    aria-expanded={isDropdownOpen}
                                    title={`${selectedCountry.name} (${selectedCountry.dialCode})`}
                                >
                                    <span
                                        className={`fi fi-${selectedCountry.code.toLowerCase()} rounded-[2px] shadow-xs flex-shrink-0`}
                                        style={{ width: "20px", height: "15px", display: "inline-block", backgroundSize: "cover" }}
                                    />
                                    <span className="font-semibold text-gray-700 text-[13px]">
                                        {selectedCountry.dialCode}
                                    </span>
                                    <FiChevronDown
                                        className={`text-[12px] text-gray-500 transition-transform duration-200 ${
                                            isDropdownOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {/* Phone Input */}
                                <input
                                    ref={phoneInputRef}
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder={getPhonePlaceholder(selectedCountry.code)}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 text-[14px] text-gray-800 bg-transparent focus:outline-none"
                                />
                            </div>

                            {/* Dynamic Country Search & Selection Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute left-0 top-full mt-2 w-full max-w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-150">
                                    {/* Search Header */}
                                    <div className="p-3 border-b border-gray-100 bg-gray-50/80">
                                        <div className="relative flex items-center">
                                            <FiSearch className="absolute left-3 text-gray-400 text-[14px]" />
                                            <input
                                                ref={searchInputRef}
                                                type="text"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                placeholder="Search country or dial code..."
                                                className="w-full pl-9 pr-3 py-2 text-[13px] bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#f97316] text-gray-800"
                                            />
                                        </div>
                                    </div>

                                    {/* Popular Countries (Only when not searching) */}
                                    {!searchQuery.trim() && (
                                        <div className="p-2 border-b border-gray-100 bg-white">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 py-1 block">
                                                Popular Countries
                                            </span>
                                            <div className="grid grid-cols-2 gap-1 mt-1">
                                                {POPULAR_COUNTRIES.slice(0, 6).map((popCountry) => {
                                                    const isSelected = selectedCountry.code === popCountry.code;
                                                    return (
                                                        <button
                                                            key={`pop-${popCountry.code}`}
                                                            type="button"
                                                            onClick={() => handleCountrySelect(popCountry)}
                                                            className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-left text-[12px] transition-colors cursor-pointer ${
                                                                isSelected
                                                                    ? "bg-orange-50 text-[#f97316] font-semibold"
                                                                    : "hover:bg-gray-50 text-gray-700"
                                                            }`}
                                                        >
                                                            <span
                                                                className={`fi fi-${popCountry.code.toLowerCase()} rounded-[2px] flex-shrink-0`}
                                                                style={{ width: "16px", height: "12px", display: "inline-block", backgroundSize: "cover" }}
                                                            />
                                                            <span className="truncate flex-1">{popCountry.name}</span>
                                                            <span className="text-gray-400 text-[11px] font-mono">
                                                                {popCountry.dialCode}
                                                            </span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* All Countries List */}
                                    <div className="max-h-[220px] overflow-y-auto divide-y divide-gray-50">
                                        {filteredCountries.length > 0 ? (
                                            filteredCountries.map((country) => {
                                                const isSelected = selectedCountry.code === country.code;
                                                return (
                                                    <button
                                                        key={country.code}
                                                        type="button"
                                                        onClick={() => handleCountrySelect(country)}
                                                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 text-left text-[13px] transition-colors cursor-pointer ${
                                                            isSelected
                                                                ? "bg-orange-50 text-[#f97316] font-semibold"
                                                                : "hover:bg-gray-50 text-gray-700"
                                                        }`}
                                                    >
                                                        <span
                                                            className={`fi fi-${country.code.toLowerCase()} rounded-[2px] flex-shrink-0`}
                                                            style={{ width: "18px", height: "13px", display: "inline-block", backgroundSize: "cover" }}
                                                        />
                                                        <span className="truncate flex-1">
                                                            {country.name}
                                                        </span>
                                                        <span className="text-gray-400 font-mono text-[12px]">
                                                            {country.dialCode}
                                                        </span>
                                                        {isSelected && (
                                                            <FiCheck className="text-[#f97316] text-[14px] flex-shrink-0" />
                                                        )}
                                                    </button>
                                                );
                                            })
                                        ) : (
                                            <div className="p-6 text-center text-gray-400 text-[13px]">
                                                No country found matching &ldquo;{searchQuery}&rdquo;
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
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
                            className="mt-4 w-full py-3.5 px-8 bg-gradient-to-r from-[#ff8c42] to-[#f35b04] hover:from-[#f35b04] hover:to-[#e24a00] text-white font-bold text-[16px] rounded-full shadow-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] cursor-pointer"
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
