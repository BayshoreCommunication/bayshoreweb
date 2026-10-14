import React from "react";
import LegalHero from "@/components/SEO-Lead/legal-lead-generation-florida/LegalHero";
import LegalPipelineWhy from "@/components/SEO-Lead/legal-lead-generation-florida/LegalPipelineWhy";
import LegalRootProblem from "@/components/SEO-Lead/legal-lead-generation-florida/LegalRootProblem";
import LegalThreePillars from "@/components/SEO-Lead/legal-lead-generation-florida/LegalThreePillars";
import LegalExecutionTactics from "@/components/SEO-Lead/legal-lead-generation-florida/LegalExecutionTactics";
import LegalPracticeAreas from "@/components/SEO-Lead/legal-lead-generation-florida/LegalPracticeAreas";
import LegalSixMarkets from "@/components/SEO-Lead/legal-lead-generation-florida/LegalSixMarkets";
import LegalVsGeneric from "@/components/SEO-Lead/legal-lead-generation-florida/LegalVsGeneric";
import LegalProcess from "@/components/SEO-Lead/legal-lead-generation-florida/LegalProcess";
import LegalEngagementModels from "@/components/SEO-Lead/legal-lead-generation-florida/LegalEngagementModels";
import LegalProvenResults from "@/components/SEO-Lead/legal-lead-generation-florida/LegalProvenResults";
import LegalTestimonials from "@/components/SEO-Lead/legal-lead-generation-florida/LegalTestimonials";
import LegalFaq from "@/components/SEO-Lead/legal-lead-generation-florida/LegalFaq";

export const metadata = {
  title: "Legal Lead Generation Florida | Bayshore Communication",
  description:
    "Generate qualified legal leads in Florida with targeted SEO, paid media, local search, and intake strategies built around your law firm.",
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
    canonical: "/legal-lead-generation-florida",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

const Page = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* 01. Hero / H1 */}
      <LegalHero />

      {/* 02. Build a Lead Pipeline That Supports Firm Growth */}
      <LegalPipelineWhy />

      {/* 03. The Root Problem of Lead Quality Over Raw Volume */}
      <LegalRootProblem />

      {/* 12. Client Testimonials Slider */}
      <LegalTestimonials />
      
      {/* 04. A Three Pillar System Built for Signed Cases */}
      <LegalThreePillars />

      {/* 05. Operational Execution Across the Pipeline */}
      <LegalExecutionTactics />

      {/* 06. Specialized Campaigns Across Major Practice Areas */}
      <LegalPracticeAreas />

      {/* 07. 6 Distinct Florida Markets with Customized Playbooks */}
      <LegalSixMarkets />

      {/* 08. Bayshore Advantage Versus Generic Agencies */}
      <LegalVsGeneric />

      {/* 09. Strategic Implementation: 4 Step Execution Framework */}
      <LegalProcess />

      {/* 10. Flexible Engagement Models for Growing Firms */}
      <LegalEngagementModels />

      {/* 11. Proven Results and Direct Lead Ownership */}
      <LegalProvenResults />

      

      {/* 13. Frequently Asked Questions & Final Audit CTA */}
      <LegalFaq />
    </main>
  );
};

export default Page;
