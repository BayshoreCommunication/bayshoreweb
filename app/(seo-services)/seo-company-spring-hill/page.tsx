
import AiSearchSeoSection from "@/components/seo-company-spring-hill/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/seo-company-spring-hill/CommonSeoMistakes";
import ContactSection from "@/components/seo-company-spring-hill/ContactSection";
import Hero from "@/components/seo-company-spring-hill/Hero";
import SeoAuditBenefits from "@/components/seo-company-spring-hill/SeoAuditBenefits";
import SeoAuditForm from "@/components/seo-company-spring-hill/SeoAuditForm";
import SeoCtaSection from "@/components/seo-company-spring-hill/SeoCtaSection";
import SeoCustomerJourney from "@/components/seo-company-spring-hill/SeoCustomerJourney";
import SeoFaqSection from "@/components/seo-company-spring-hill/SeoFaqSection";
import SeoPackagesSection from "@/components/seo-company-spring-hill/SeoPackagesSection";
import SeoProcessSection from "@/components/seo-company-spring-hill/SeoProcessSection";
import SeoRoiSection from "@/components/seo-company-spring-hill/SeoRoiSection";
import SeoServicesSection from "@/components/seo-company-spring-hill/SeoServicesSection";
import ServiceAreasSection from "@/components/seo-company-spring-hill/ServiceAreasSection";
import TestimonialsSection from "@/components/seo-company-spring-hill/TestimonialsSection";
import WhyChooseBayshore from "@/components/seo-company-spring-hill/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/seo-company-spring-hill/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "SEO Company Spring Hill | Choose the Best SEO Team",
  description:
    "Learn what to look for in a SEO company in Spring Hill, from local SEO expertise to reporting, transparency, and ROI.",

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
    canonical: "/seo-company-spring-hill",
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
