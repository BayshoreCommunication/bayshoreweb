
import AiSearchSeoSection from "@/components/local-seo-for-lawyers-florida/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/local-seo-for-lawyers-florida/CommonSeoMistakes";
import ContactSection from "@/components/local-seo-for-lawyers-florida/ContactSection";
import Hero from "@/components/local-seo-for-lawyers-florida/Hero";
import SeoAuditBenefits from "@/components/local-seo-for-lawyers-florida/SeoAuditBenefits";
import SeoAuditForm from "@/components/local-seo-for-lawyers-florida/SeoAuditForm";
import SeoCtaSection from "@/components/local-seo-for-lawyers-florida/SeoCtaSection";
import SeoCustomerJourney from "@/components/local-seo-for-lawyers-florida/SeoCustomerJourney";
import SeoFaqSection from "@/components/local-seo-for-lawyers-florida/SeoFaqSection";
import SeoPackagesSection from "@/components/local-seo-for-lawyers-florida/SeoPackagesSection";
import SeoProcessSection from "@/components/local-seo-for-lawyers-florida/SeoProcessSection";
import SeoRoiSection from "@/components/local-seo-for-lawyers-florida/SeoRoiSection";
import SeoServicesSection from "@/components/local-seo-for-lawyers-florida/SeoServicesSection";
import ServiceAreasSection from "@/components/local-seo-for-lawyers-florida/ServiceAreasSection";
import TestimonialsSection from "@/components/local-seo-for-lawyers-florida/TestimonialsSection";
import WhyChooseBayshore from "@/components/local-seo-for-lawyers-florida/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/local-seo-for-lawyers-florida/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Win More Cases With Local SEO Service for Florida Lawyers",
  description:
    "Want to attract more clients? Contact Bayshore to get local SEO services for lawyers in Florida to put your firm in Map Pack and AI Overviews.",

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
