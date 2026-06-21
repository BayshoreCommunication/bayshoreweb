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
  title: "SEO Company Wesley Chapel | Find The Best SEO Agency for You",
  description:
    "Looking for an SEO Company in Wesley Chapel? Review our service offerings and get a partner that matches your requirements.",

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
