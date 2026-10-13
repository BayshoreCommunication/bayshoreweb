import React from "react";
import Hero from "@/components/SEO-Lead/local-lead-generation-florida/Hero";
import WhyLeadGen from "@/components/SEO-Lead/local-lead-generation-florida/WhyLeadGen";
import LeadProblem from "@/components/SEO-Lead/local-lead-generation-florida/LeadProblem";
import TheSolution from "@/components/SEO-Lead/local-lead-generation-florida/TheSolution";
import PillarTactics from "@/components/SEO-Lead/local-lead-generation-florida/PillarTactics";
import PracticeAreas from "@/components/SEO-Lead/local-lead-generation-florida/PracticeAreas";
import ServiceTerritory from "@/components/SEO-Lead/local-lead-generation-florida/ServiceTerritory";
import FullFootprint from "@/components/SEO-Lead/local-lead-generation-florida/FullFootprint";
import RegionalBreakdown from "@/components/SEO-Lead/local-lead-generation-florida/RegionalBreakdown";
import MarketData from "@/components/SEO-Lead/local-lead-generation-florida/MarketData";
import TheDifference from "@/components/SEO-Lead/local-lead-generation-florida/TheDifference";
import TheProcess from "@/components/SEO-Lead/local-lead-generation-florida/TheProcess";
import OrganicPaidLeadGen from "@/components/SEO-Lead/local-lead-generation-florida/OrganicPaidLeadGen";
import FastFollowUp from "@/components/SEO-Lead/local-lead-generation-florida/FastFollowUp";
import WhyUs from "@/components/SEO-Lead/local-lead-generation-florida/WhyUs";
import EngagementOptions from "@/components/SEO-Lead/local-lead-generation-florida/EngagementOptions";
import RealResults from "@/components/SEO-Lead/local-lead-generation-florida/RealResults";
import TestimonialQuoteSlider from "@/components/SEO-Lead/local-lead-generation-florida/TestimonialQuoteSlider";
import LegalFaq from "@/components/SEO-Lead/local-lead-generation-florida/LegalFaq";

export const metadata = {
  title: "Local Lead Generation Florida | Bayshore Communication",
  description:
    "Local lead generation in Florida for qualified calls, forms and bookings. Reach the right service areas and turn searches into leads. Get a free audit.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "/local-lead-generation-florida",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

const Page = () => {
  return (
    <main className="w-full">
      {/* 01. Hero / H1 */}
      <Hero />

      {/* 02. Why Florida Local Businesses Need Lead Generation */}
      <WhyLeadGen />

      {/* 16. What Florida Clients Say About Bayshore */}
      <TestimonialQuoteSlider />
      
      {/* 03. Qualified Local Leads Matter More Than Lead Volume */}
      <LeadProblem />

      {/* 04. Local Lead Generation System Built Around Three Pillars */}
      <TheSolution />

      {/* 05. Services We Provide For Local Businesses To Generate Leads */}
      <PillarTactics />

      {/* 06. Which Industries We Serve For Local Lead Generation in Florida */}
      <PracticeAreas />

      {/* 07. Lead Generation Locally Starts With the Right Market */}
      <ServiceTerritory />
      <FullFootprint />
      <RegionalBreakdown />

      {/* 08. Seasonality and Local Demand Cycles */}
      <MarketData />

      {/* 09. Local Lead Generation vs General Digital Marketing */}
      <TheDifference />

      {/* 10. How Our Local Lead Generation Process Works */}
      <TheProcess />

      {/* 11. Organic and Paid Lead Generation Work Best Together */}
      <OrganicPaidLeadGen />

      {/* 12. Turn Local Leads Into Customers With Fast Follow Up */}
      <FastFollowUp />

      {/* 13. Why Businesses Choose Bayshore for Local Lead Generation */}
      <WhyUs />

      {/* 14. Local Lead Generation Pricing */}
      <EngagementOptions />

      {/* 15. Results From Local Lead Generation Florida Campaigns */}
      <RealResults />

      

      {/* 17. Frequently Asked Questions & Final Audit CTA */}
      <LegalFaq />
    </main>
  );
};

export default Page;
