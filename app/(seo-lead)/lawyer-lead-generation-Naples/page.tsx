import React from "react";
import NaplesHero from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesHero";
import NaplesWhyLeadGen from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesWhyLeadGen";
import NaplesProblem from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesProblem";
import NaplesThreePillars from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesThreePillars";
import NaplesTactics from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesTactics";
import NaplesPracticeAreas from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesPracticeAreas";
import NaplesMarketOverview from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesMarketOverview";
import NaplesSixMarkets from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesSixMarkets";
import FloridaBarRules from "@/components/SEO-Lead/lawyer-lead-generation-naples/FloridaBarRules";
import NaplesVsGeneric from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesVsGeneric";
import NaplesProcess from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesProcess";
import NaplesPackages from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesPackages";
import NaplesResults from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesResults";
import NaplesWhyUs from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesWhyUs";
import NaplesTestimonials from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesTestimonials";
import NaplesFaq from "@/components/SEO-Lead/lawyer-lead-generation-naples/NaplesFaq";

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
    <main className="w-full overflow-x-hidden">
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
