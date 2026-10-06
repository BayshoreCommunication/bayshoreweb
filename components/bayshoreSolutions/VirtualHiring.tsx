"use client";

import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export const VirtualHiring = () => {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        consent: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
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

                        {/* Phone Field */}
                        <div>
                            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                                Phone: <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="(201) 555-0123"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] text-gray-800 focus:outline-none focus:border-[#f97316] transition-colors bg-gray-50/50"
                            />
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
                            className="mt-4 w-full py-3.5 px-8 bg-[#0B192C] hover:bg-[#f97316] text-white font-bold text-[16px] rounded-full shadow-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.01] cursor-pointer"
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
