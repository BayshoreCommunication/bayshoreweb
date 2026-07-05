

import AiSearchSeoSection from "@/components/SEO-Service/brandon-seo-company/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/brandon-seo-company/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/brandon-seo-company/ContactSection";
import Hero from "@/components/SEO-Service/brandon-seo-company/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/brandon-seo-company/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/brandon-seo-company/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/brandon-seo-company/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/brandon-seo-company/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/brandon-seo-company/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/brandon-seo-company/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/brandon-seo-company/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/brandon-seo-company/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/brandon-seo-company/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/brandon-seo-company/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/brandon-seo-company/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/brandon-seo-company/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/brandon-seo-company/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Get Growing Your Business Leads With Brandon SEO Company",
  description:
    "Worried about capturing target customers? Bayshore's Brandon SEO company helps you reach your target clients and ranks you on Google, ChatGPT and Gemini.",

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },

  alternates: {
    canonical: "/brandon-seo-company",
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
      {/* <SeoAuditBenefits /> */}
      <WhyLosingCustomers />
      <SeoCustomerJourney />
      <CommonSeoMistakes />
      <SeoCtaSection />
      <SeoServicesSection />
      <AiSearchSeoSection />
      <SeoProcessSection />
      <WhyChooseBayshore />
      <SeoRoiSection />
      {/* <SeoPackagesSection /> */}
      <ServiceAreasSection />
      {/* <TestimonialsSection /> */}
      <SeoFaqSection />
      <ContactSection />
    </div>
  );
};

export default page;
