import ConnectCountUpSection from "@/components/connect/ConnectCountUpSection";
import ConnectHeroSection from "@/components/connect/ConnectHeroSection";
import LegalGrowthEngineSection from "@/components/connect/LegalGrowthEngineSection";
import ResultsSection from "@/components/connect/ResultsSection";
import TopMarquee from "@/components/connect/TopMarquee";
import Header from "@/components/giftFromUs/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <ConnectHeroSection />
      <TopMarquee />
      <ConnectCountUpSection />
      <LegalGrowthEngineSection />
      <ResultsSection />
    </>
  );
};

export default page;
