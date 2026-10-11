"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/bayshoreSolutions/Navbar";
import HeroSection from "@/components/bayshoreSolutions/HeroSection";

import { Footer } from "@/components/bayshoreSolutions/Footer";
import WhyBayshoreSection from "@/components/bayshoreSolutions/WhyBayshoreSection";
import HowItWorksSection from "@/components/bayshoreSolutions/HowItWorksSection";
import SupportSection from "@/components/bayshoreSolutions/SupportSection";
import SolutionsSection from "@/components/bayshoreSolutions/SolutionsSection";
import GlobalTalent from "@/components/bayshoreSolutions/GlobalTalent";
import CostEffectiveSection from "@/components/bayshoreSolutions/CostEffectiveSection";
import TrustedWorldwide from "@/components/bayshoreSolutions/TrustedWorldwide";
import ClientStoriesSection from "@/components/bayshoreSolutions/ClientStoriesSection";
import SupportForBusiness from "@/components/bayshoreSolutions/SupportForBusiness";
import FaqSection from "@/components/bayshoreSolutions/FaqSection";
import VirtualHiring from "@/components/bayshoreSolutions/VirtualHiring";
import SecureDataSection from "@/components/bayshoreSolutions/SecureDataSection";
import CalendlyModal, { openCalendlyModal } from "@/components/bayshoreSolutions/CalendlyModal";

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
            <SolutionsSection onFindTalentClick={() => openCalendlyModal()} />
            <GlobalTalent />
            <CostEffectiveSection onFindTalentForRoleClick={() => openCalendlyModal()} />
            <SecureDataSection />
            <TrustedWorldwide />
            <ClientStoriesSection />
            <SupportForBusiness />
            <FaqSection onContactClick={() => openCalendlyModal()} />
            <VirtualHiring />

            {/* Bayshore Solutions Footer Component */}
            <Footer />

            {/* Calendly Interactive Popup Modal */}
            <CalendlyModal />
        </div>
    );
}


