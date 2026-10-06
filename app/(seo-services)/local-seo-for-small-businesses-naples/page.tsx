
import AiSearchSeoSection from "@/components/SEO-Service/local-seo-for-small-businesses-naples/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/local-seo-for-small-businesses-naples/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/local-seo-for-small-businesses-naples/ContactSection";
import Hero from "@/components/SEO-Service/local-seo-for-small-businesses-naples/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/local-seo-for-small-businesses-naples/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/local-seo-for-small-businesses-naples/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/local-seo-for-small-businesses-naples/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/local-seo-for-small-businesses-naples/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/local-seo-for-small-businesses-naples/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/local-seo-for-small-businesses-naples/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/local-seo-for-small-businesses-naples/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/local-seo-for-small-businesses-naples/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/local-seo-for-small-businesses-naples/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/local-seo-for-small-businesses-naples/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/local-seo-for-small-businesses-naples/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/local-seo-for-small-businesses-naples/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/local-seo-for-small-businesses-naples/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Local SEO Services for Small Businesses in Naples,Florida",
  description:
    "Grow your Naples business with local SEO services from Bayshore. Improve your Google Maps rankings,attract nearby customers and generate more qualified leads.",

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
    canonical: "/local-seo-for-small-businesses-naples",
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
      <TestimonialsSection />
      <SeoFaqSection />
      <ContactSection />
    </div>
  );
};

export default page;
