import AiSearchSeoSection from "@/components/SEO-Service/seo-for-small-businesses-florida/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/seo-for-small-businesses-florida/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/seo-for-small-businesses-florida/ContactSection";
import Hero from "@/components/SEO-Service/seo-for-small-businesses-florida/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/seo-for-small-businesses-florida/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/seo-for-small-businesses-florida/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/seo-for-small-businesses-florida/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/seo-for-small-businesses-florida/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/seo-for-small-businesses-florida/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/seo-for-small-businesses-florida/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/seo-for-small-businesses-florida/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/seo-for-small-businesses-florida/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/seo-for-small-businesses-florida/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/seo-for-small-businesses-florida/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/seo-for-small-businesses-florida/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/seo-for-small-businesses-florida/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/seo-for-small-businesses-florida/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "SEO Services for Small Businesses in Florida",
  description:
    "Bayshore helps Florida small businesses increase traffic,calls and sales with SEO services that improve visibility on Google Search,Maps and AI search.",

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
    canonical: "/seo-for-small-businesses-florida",
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
