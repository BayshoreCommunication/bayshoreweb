
import AiSearchSeoSection from "@/components/SEO-Service/orlando-law-firm-seo-agency/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/orlando-law-firm-seo-agency/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/orlando-law-firm-seo-agency/ContactSection";
import Hero from "@/components/SEO-Service/orlando-law-firm-seo-agency/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/orlando-law-firm-seo-agency/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/orlando-law-firm-seo-agency/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/orlando-law-firm-seo-agency/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/orlando-law-firm-seo-agency/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/orlando-law-firm-seo-agency/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/orlando-law-firm-seo-agency/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/orlando-law-firm-seo-agency/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/orlando-law-firm-seo-agency/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/orlando-law-firm-seo-agency/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/orlando-law-firm-seo-agency/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/orlando-law-firm-seo-agency/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/orlando-law-firm-seo-agency/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/orlando-law-firm-seo-agency/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Orlando Law Firm SEO Agency | Get More Case Inquiries",
  description:
    "Grow your Orlando law firm with SEO that improves your visibility in AI and Google Search and Maps. Get more qualified leads and case inquiries with Bayshore.",

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
    canonical: "/orlando-law-firm-seo-agency",
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
