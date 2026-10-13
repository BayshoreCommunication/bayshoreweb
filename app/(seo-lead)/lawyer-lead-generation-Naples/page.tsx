import React from "react";
import NaplesHero from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesHero";
import NaplesWhyLeadGen from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesWhyLeadGen";
import NaplesProblem from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesProblem";
import NaplesThreePillars from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesThreePillars";
import NaplesTactics from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesTactics";
import NaplesPracticeAreas from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesPracticeAreas";
import NaplesMarketOverview from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesMarketOverview";
import NaplesSixMarkets from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesSixMarkets";
import FloridaBarRules from "@/components/SEO-Lead/lawyer-lead-generation-Naples/FloridaBarRules";
import NaplesVsGeneric from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesVsGeneric";
import NaplesProcess from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesProcess";
import NaplesPackages from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesPackages";
import NaplesResults from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesResults";
import NaplesWhyUs from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesWhyUs";
import NaplesTestimonials from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesTestimonials";
import NaplesFaq from "@/components/SEO-Lead/lawyer-lead-generation-Naples/NaplesFaq";

export const metadata = {
  title: "Lawyer Lead Generation Naples | Bayshore Communication",
  description:
    "Bayshore builds lawyer lead generation for Naples firms. Legal SEO, Google Ads and intake tracking. Book a free audit.",
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
    canonical: "/lawyer-lead-generation-Naples",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

const Page = () => {
  return (
    <main className="w-full">
      {/* 01. Hero / H1 */}
      <NaplesHero />

      {/* 02. Why Lead Gen in Naples */}
      <NaplesWhyLeadGen />


      {/* 15. What Clients Say Testimonials Slider */}
      <NaplesTestimonials />
      
      {/* 03. Problem: Naples Legal Companies Rarely Lack Leads. They Lack Leads Worth Answering. */}
      <NaplesProblem />

      {/* 04. Three Pillars of Law Firm Marketing */}
      <NaplesThreePillars />

      {/* 05. Lead Generation Tactics Behind Each Pillar */}
      <NaplesTactics />

      {/* 06. Practice Areas */}
      <NaplesPracticeAreas />

      {/* 07. Naples Legal Market At A Glance */}
      <NaplesMarketOverview />

      {/* 08. Six Naples Area Markets */}
      <NaplesSixMarkets />

      {/* 09. Florida Bar Advertising Rules */}
      <FloridaBarRules />

      {/* 10. Generic vs Naples Focused Lead Generation */}
      <NaplesVsGeneric />

      {/* 11. Simple Four Steps Process */}
      <NaplesProcess />

      {/* 12. Lead Generation Packages */}
      <NaplesPackages />

      {/* 13. Results You Can Measure */}
      <NaplesResults />

      {/* 14. Why Choose Us */}
      <NaplesWhyUs />

      

      {/* 16. FAQ & Final Free Audit Call to Action */}
      <NaplesFaq />
    </main>
  );
};

export default Page;
