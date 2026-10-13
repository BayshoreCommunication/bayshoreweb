import Hero from "@/components/SEO-Lead/local-lead-generation-florida/Hero";
import WhyLeadGen from "@/components/SEO-Lead/local-lead-generation-florida/WhyLeadGen";
import LeadProblem from "@/components/SEO-Lead/local-lead-generation-florida/LeadProblem";
import TheSolution from "@/components/SEO-Lead/local-lead-generation-florida/TheSolution";
import PillarTactics from "@/components/SEO-Lead/local-lead-generation-florida/PillarTactics";
import PracticeAreas from "@/components/SEO-Lead/local-lead-generation-florida/PracticeAreas";
import MarketData from "@/components/SEO-Lead/local-lead-generation-florida/MarketData";
import ServiceTerritory from "@/components/SEO-Lead/local-lead-generation-florida/ServiceTerritory";
import FullFootprint from "@/components/SEO-Lead/local-lead-generation-florida/FullFootprint";
import TestimonialQuoteSlider from "@/components/SEO-Lead/local-lead-generation-florida/TestimonialQuoteSlider";
import React from "react";
import RegionalBreakdown from "@/components/SEO-Lead/local-lead-generation-florida/RegionalBreakdown";
import TheDifference from "@/components/SEO-Lead/local-lead-generation-florida/TheDifference";
import TheProcess from "@/components/SEO-Lead/local-lead-generation-florida/TheProcess";
import WhyUs from "@/components/SEO-Lead/local-lead-generation-florida/WhyUs";
import EngagementOptions from "@/components/SEO-Lead/local-lead-generation-florida/EngagementOptions";
import RealResults from "@/components/SEO-Lead/local-lead-generation-florida/RealResults";
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
      <Hero />
      <WhyLeadGen />
      <TestimonialQuoteSlider />
      <LeadProblem />
      <TheSolution />
      <PillarTactics />
      <PracticeAreas />
      <MarketData />
      <ServiceTerritory />
      <FullFootprint />
      <RegionalBreakdown />
      <TheDifference />
      <TheProcess />
      <WhyUs />
      <EngagementOptions />
      <RealResults />
      <LegalFaq />
    </main>
  );
};

export default Page;
