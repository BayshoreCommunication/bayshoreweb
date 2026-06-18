import AiSearchSeoSection from "@/components/real-estate-seo-services-in-florida/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/real-estate-seo-services-in-florida/CommonSeoMistakes";
import ContactSection from "@/components/real-estate-seo-services-in-florida/ContactSection";
import Hero from "@/components/real-estate-seo-services-in-florida/Hero";
import SeoAuditBenefits from "@/components/real-estate-seo-services-in-florida/SeoAuditBenefits";
import SeoAuditForm from "@/components/real-estate-seo-services-in-florida/SeoAuditForm";
import SeoCtaSection from "@/components/real-estate-seo-services-in-florida/SeoCtaSection";
import SeoCustomerJourney from "@/components/real-estate-seo-services-in-florida/SeoCustomerJourney";
import SeoFaqSection from "@/components/real-estate-seo-services-in-florida/SeoFaqSection";
import SeoPackagesSection from "@/components/real-estate-seo-services-in-florida/SeoPackagesSection";
import SeoProcessSection from "@/components/real-estate-seo-services-in-florida/SeoProcessSection";
import SeoRoiSection from "@/components/real-estate-seo-services-in-florida/SeoRoiSection";
import SeoServicesSection from "@/components/real-estate-seo-services-in-florida/SeoServicesSection";
import ServiceAreasSection from "@/components/real-estate-seo-services-in-florida/ServiceAreasSection";
import TestimonialsSection from "@/components/real-estate-seo-services-in-florida/TestimonialsSection";
import WhyChooseBayshore from "@/components/real-estate-seo-services-in-florida/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/real-estate-seo-services-in-florida/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Close More Deals With Florida Real Estate SEO Services",
  description:
    "Want to rank higher and get more leads? Reach out Bayshore today for real estate SEO services in Florida to put your listings on Google and AI search.",

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
    canonical: "/real-estate-seo-services-in-florida",
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
