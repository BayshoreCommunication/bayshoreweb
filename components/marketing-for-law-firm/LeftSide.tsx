import React from "react";
import LawFirmMarketing from "./LawFirmMarketing";
import LawFirmMarketingTwo from "./LawFirmMarketingTwo";
import LawFirmMarketingExtra from "./LawFirmMarketingExtra";
import LawFirmMarketingContent from "./LawFirmMarketingContent";
import LawFirmMarketingExtraTwo from "./LawFirmMarketingExtraTwo";
import LawFirmMarketingAdvanced from "./LawFirmMarketingAdvanced";
import LawFirmMarketingFinalCTA from "./LawFirmMarketingFinalCTA";

const LeftSide = () => {
  return (
    <div className="max-w-[1040px] mx-auto px-4">
      <LawFirmMarketing />
      <LawFirmMarketingTwo />
      <LawFirmMarketingExtra />
      <LawFirmMarketingContent />
      <LawFirmMarketingExtraTwo />
      <LawFirmMarketingAdvanced />
      <LawFirmMarketingFinalCTA />
    </div>
  );
};

export default LeftSide;
