
import AiSearchSeoSection from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/ContactSection";
import Hero from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/local-seo-services-for-small-business-naples-florida/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Local SEO Services for Small Businesses in Naples, Florida",
  description:
    "Grow your Naples business with local SEO services from Bayshore. Improve your Google Maps rankings, attract nearby customers, and generate more qualified leads.",

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
