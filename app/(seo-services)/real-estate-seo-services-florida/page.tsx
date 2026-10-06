import AiSearchSeoSection from "@/components/SEO-Service/real-estate-seo-services-florida/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/real-estate-seo-services-florida/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/real-estate-seo-services-florida/ContactSection";
import Hero from "@/components/SEO-Service/real-estate-seo-services-florida/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/real-estate-seo-services-florida/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/real-estate-seo-services-florida/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/real-estate-seo-services-florida/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/real-estate-seo-services-florida/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/real-estate-seo-services-florida/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/real-estate-seo-services-florida/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/real-estate-seo-services-florida/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/real-estate-seo-services-florida/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/real-estate-seo-services-florida/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/real-estate-seo-services-florida/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/real-estate-seo-services-florida/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/real-estate-seo-services-florida/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/real-estate-seo-services-florida/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Real Estate SEO Services in Florida | Generate More Leads",
  description:
    "Bayshore provides real estate SEO services in Florida to help agents and brokerages rank higher on Google and attract more qualified buyers and sellers.",

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
    canonical: "/real-estate-seo-services-florida",
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
