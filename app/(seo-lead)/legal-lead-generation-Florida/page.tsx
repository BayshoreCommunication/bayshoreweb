import React from "react";
import LegalHero from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalHero";
import LegalPipelineWhy from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalPipelineWhy";
import LegalRootProblem from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalRootProblem";
import LegalThreePillars from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalThreePillars";
import LegalExecutionTactics from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalExecutionTactics";
import LegalPracticeAreas from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalPracticeAreas";
import LegalSixMarkets from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalSixMarkets";
import LegalVsGeneric from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalVsGeneric";
import LegalProcess from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalProcess";
import LegalEngagementModels from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalEngagementModels";
import LegalProvenResults from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalProvenResults";
import LegalTestimonials from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalTestimonials";
import LegalFaq from "@/components/SEO-Lead/legal-lead-generation-Florida/LegalFaq";

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
    canonical: "/legal-lead-generation-Florida",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

const Page = () => {
  return (
    <main className="w-full">
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
