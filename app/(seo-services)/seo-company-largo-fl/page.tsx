

import AiSearchSeoSection from "@/components/seo-company-largo-fl/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/seo-company-largo-fl/CommonSeoMistakes";
import ContactSection from "@/components/seo-company-largo-fl/ContactSection";
import Hero from "@/components/seo-company-largo-fl/Hero";
import SeoAuditBenefits from "@/components/seo-company-largo-fl/SeoAuditBenefits";
import SeoAuditForm from "@/components/seo-company-largo-fl/SeoAuditForm";
import SeoCtaSection from "@/components/seo-company-largo-fl/SeoCtaSection";
import SeoCustomerJourney from "@/components/seo-company-largo-fl/SeoCustomerJourney";
import SeoFaqSection from "@/components/seo-company-largo-fl/SeoFaqSection";
import SeoPackagesSection from "@/components/seo-company-largo-fl/SeoPackagesSection";
import SeoProcessSection from "@/components/seo-company-largo-fl/SeoProcessSection";
import SeoRoiSection from "@/components/seo-company-largo-fl/SeoRoiSection";
import SeoServicesSection from "@/components/seo-company-largo-fl/SeoServicesSection";
import ServiceAreasSection from "@/components/seo-company-largo-fl/ServiceAreasSection";
import TestimonialsSection from "@/components/seo-company-largo-fl/TestimonialsSection";
import WhyChooseBayshore from "@/components/seo-company-largo-fl/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/seo-company-largo-fl/WhyLosingCustomers";
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
