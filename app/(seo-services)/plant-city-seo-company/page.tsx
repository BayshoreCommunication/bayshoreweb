

import AiSearchSeoSection from "@/components/SEO-Service/plant-city-seo-company/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/plant-city-seo-company/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/plant-city-seo-company/ContactSection";
import Hero from "@/components/SEO-Service/plant-city-seo-company/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/plant-city-seo-company/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/plant-city-seo-company/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/plant-city-seo-company/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/plant-city-seo-company/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/plant-city-seo-company/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/plant-city-seo-company/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/plant-city-seo-company/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/plant-city-seo-company/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/plant-city-seo-company/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/plant-city-seo-company/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/plant-city-seo-company/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/plant-city-seo-company/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/plant-city-seo-company/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Plant City SEO Company | More Traffic,More Local Leads",
  description:
    "Bayshore helps Plant City businesses improve their Google rankings,attract local customers and grow with SEO built for search engines and AI platforms.",

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
    canonical: "/plant-city-seo-company",
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
