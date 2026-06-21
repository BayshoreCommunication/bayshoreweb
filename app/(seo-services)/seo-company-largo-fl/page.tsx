

import AiSearchSeoSection from "@/components/SEO-Service/seo-company-largo-fl/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/seo-company-largo-fl/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/seo-company-largo-fl/ContactSection";
import Hero from "@/components/SEO-Service/seo-company-largo-fl/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/seo-company-largo-fl/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/seo-company-largo-fl/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/seo-company-largo-fl/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/seo-company-largo-fl/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/seo-company-largo-fl/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/seo-company-largo-fl/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/seo-company-largo-fl/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/seo-company-largo-fl/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/seo-company-largo-fl/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/seo-company-largo-fl/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/seo-company-largo-fl/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/seo-company-largo-fl/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/seo-company-largo-fl/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "SEO Company Largo FL| What Services Do You  Actually Need?",
  description:
    "Find out the principal questions to ask before hiring a SEO company in Largo, Florida to maximize your SEO investment.",

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
    canonical: "/seo-company-largo-fl",
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
