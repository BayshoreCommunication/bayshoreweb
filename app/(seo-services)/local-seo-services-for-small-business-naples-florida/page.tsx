
import AiSearchSeoSection from "@/components/local-seo-services-for-small-business-naples-florida/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/local-seo-services-for-small-business-naples-florida/CommonSeoMistakes";
import ContactSection from "@/components/local-seo-services-for-small-business-naples-florida/ContactSection";
import Hero from "@/components/local-seo-services-for-small-business-naples-florida/Hero";
import SeoAuditBenefits from "@/components/local-seo-services-for-small-business-naples-florida/SeoAuditBenefits";
import SeoAuditForm from "@/components/local-seo-services-for-small-business-naples-florida/SeoAuditForm";
import SeoCtaSection from "@/components/local-seo-services-for-small-business-naples-florida/SeoCtaSection";
import SeoCustomerJourney from "@/components/local-seo-services-for-small-business-naples-florida/SeoCustomerJourney";
import SeoFaqSection from "@/components/local-seo-services-for-small-business-naples-florida/SeoFaqSection";
import SeoPackagesSection from "@/components/local-seo-services-for-small-business-naples-florida/SeoPackagesSection";
import SeoProcessSection from "@/components/local-seo-services-for-small-business-naples-florida/SeoProcessSection";
import SeoRoiSection from "@/components/local-seo-services-for-small-business-naples-florida/SeoRoiSection";
import SeoServicesSection from "@/components/local-seo-services-for-small-business-naples-florida/SeoServicesSection";
import ServiceAreasSection from "@/components/local-seo-services-for-small-business-naples-florida/ServiceAreasSection";
import TestimonialsSection from "@/components/local-seo-services-for-small-business-naples-florida/TestimonialsSection";
import WhyChooseBayshore from "@/components/local-seo-services-for-small-business-naples-florida/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/local-seo-services-for-small-business-naples-florida/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Rank #1 Your Naples Florida Small Business With Local SEO",
  description:
    "Worried about ranking in Google? Bayshore's local SEO services for small business in Naples, Florida get you into Google's 3-pack.",

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
    canonical: "/local-seo-services-for-small-business-naples-florida",
    languages: {
      "en-US": "/en-USA",
    },
  },
};

const page = () => {
  return (
    <div>
      <Hero />
      <SeoAuditForm />
      <SeoAuditBenefits />
      <WhyLosingCustomers />
      <SeoCustomerJourney />
      <CommonSeoMistakes />
      <SeoCtaSection />
      <SeoServicesSection />
      <AiSearchSeoSection />
      <SeoProcessSection />
      <WhyChooseBayshore />
      <SeoRoiSection />
      <SeoPackagesSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <SeoFaqSection />
      <ContactSection />
    </div>
  );
};

export default page;
