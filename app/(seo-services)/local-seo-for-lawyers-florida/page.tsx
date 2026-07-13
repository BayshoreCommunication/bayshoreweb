
import AiSearchSeoSection from "@/components/SEO-Service/local-seo-for-lawyers-florida/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/local-seo-for-lawyers-florida/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/local-seo-for-lawyers-florida/ContactSection";
import Hero from "@/components/SEO-Service/local-seo-for-lawyers-florida/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/local-seo-for-lawyers-florida/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/local-seo-for-lawyers-florida/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/local-seo-for-lawyers-florida/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/local-seo-for-lawyers-florida/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/local-seo-for-lawyers-florida/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/local-seo-for-lawyers-florida/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/local-seo-for-lawyers-florida/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/local-seo-for-lawyers-florida/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/local-seo-for-lawyers-florida/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/local-seo-for-lawyers-florida/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/local-seo-for-lawyers-florida/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/local-seo-for-lawyers-florida/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/local-seo-for-lawyers-florida/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Local SEO Services for Lawyers in Florida",
  description:
    "Attract more qualified clients with Bayshore's local SEO for lawyers in Florida. Rank higher in Google Search,Maps and AI search to grow your law firm.",

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
    canonical: "/local-seo-for-lawyers-florida",
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
