import AiSearchSeoSection from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/ContactSection";
import Hero from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/seo-services-for-small-businesses-in-florida/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Get More Buyers For Florida Small Business With SEO Services",
  description:
    "Get more calls for your florida small business with Bayshore's SEO services and rank your business on Google, ChatGPT, and Gemini.",

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
    canonical: "/seo-services-for-small-businesses-in-florida",
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
