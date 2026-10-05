"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/bayshoreSolutions/Navbar";
import HeroSection from "@/components/bayshoreSolutions/HeroSection";

import { Footer } from "@/components/bayshoreSolutions/Footer";
import WhyBayshoreSection from "@/components/bayshoreSolutions/WhyBayshoreSection";
import HowItWorksSection from "@/components/bayshoreSolutions/HowItWorksSection";
import SupportSection from "@/components/bayshoreSolutions/SupportSection";
import SolutionsSection from "@/components/bayshoreSolutions/SolutionsSection";

export default function BayshoreSolutionsPage() {


    return (
        <div
            className="min-h-screen w-full max-w-full overflow-x-hidden transition-colors duration-300 font-inter"
        >
            {/* Bayshore Solutions Navbar Component */}
            <Navbar />

            {/* Body */}
            <HeroSection />
            <WhyBayshoreSection />
            <HowItWorksSection />
            <SupportSection />
            <SolutionsSection />

            {/* Bayshore Solutions Footer Component */}
            <Footer />
        </div>
    );
}


