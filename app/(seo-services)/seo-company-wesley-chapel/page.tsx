import AiSearchSeoSection from "@/components/SEO-Service/seo-company-wesley-chapel/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/seo-company-wesley-chapel/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/seo-company-wesley-chapel/ContactSection";
import Hero from "@/components/SEO-Service/seo-company-wesley-chapel/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/seo-company-wesley-chapel/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/seo-company-wesley-chapel/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/seo-company-wesley-chapel/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/seo-company-wesley-chapel/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/seo-company-wesley-chapel/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/seo-company-wesley-chapel/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/seo-company-wesley-chapel/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/seo-company-wesley-chapel/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/seo-company-wesley-chapel/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/seo-company-wesley-chapel/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/seo-company-wesley-chapel/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/seo-company-wesley-chapel/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/seo-company-wesley-chapel/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "SEO Company Wesley Chapel | Find Results-Guided SEO Services",
  description:
    "Partner with a trusted SEO company in Wesley Chapel to boost rankings,increase organic traffic & generate more qualified leads for your business.",

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
    canonical: "/seo-company-wesley-chapel",
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
