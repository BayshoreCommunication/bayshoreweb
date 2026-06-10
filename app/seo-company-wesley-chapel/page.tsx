import AiSearchSeoSection from "@/components/seo-company-wesley-chapel/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/seo-company-wesley-chapel/CommonSeoMistakes";
import ContactSection from "@/components/seo-company-wesley-chapel/ContactSection";
import Hero from "@/components/seo-company-wesley-chapel/Hero";
import SeoAuditBenefits from "@/components/seo-company-wesley-chapel/SeoAuditBenefits";
import SeoAuditForm from "@/components/seo-company-wesley-chapel/SeoAuditForm";
import SeoCtaSection from "@/components/seo-company-wesley-chapel/SeoCtaSection";
import SeoCustomerJourney from "@/components/seo-company-wesley-chapel/SeoCustomerJourney";
import SeoFaqSection from "@/components/seo-company-wesley-chapel/SeoFaqSection";
import SeoPackagesSection from "@/components/seo-company-wesley-chapel/SeoPackagesSection";
import SeoProcessSection from "@/components/seo-company-wesley-chapel/SeoProcessSection";
import SeoRoiSection from "@/components/seo-company-wesley-chapel/SeoRoiSection";
import SeoServicesSection from "@/components/seo-company-wesley-chapel/SeoServicesSection";
import ServiceAreasSection from "@/components/seo-company-wesley-chapel/ServiceAreasSection";
import TestimonialsSection from "@/components/seo-company-wesley-chapel/TestimonialsSection";
import WhyChooseBayshore from "@/components/seo-company-wesley-chapel/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/seo-company-wesley-chapel/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "SEO Company Wesley Chapel| Find The Best SEO Agency for You",
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
