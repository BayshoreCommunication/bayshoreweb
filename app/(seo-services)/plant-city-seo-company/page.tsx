

import AiSearchSeoSection from "@/components/SEO-Service/plant-city-seo-company/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/plant-city-seo-company/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/plant-city-seo-company/ContactSection";
import Hero from "@/components/SEO-Service/plant-city-seo-company/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/plant-city-seo-company/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/plant-city-seo-company/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/plant-city-seo-company/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/plant-city-seo-company/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/plant-city-seo-company/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/plant-city-seo-company/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/plant-city-seo-company/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/plant-city-seo-company/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/plant-city-seo-company/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/plant-city-seo-company/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/plant-city-seo-company/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/plant-city-seo-company/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/plant-city-seo-company/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Plant City SEO Company | Drive Local Search & Business Growth",
  description:
    "Grow your Plant City business with targeted local SEO services. Dominate Google Map 3-Pack, boost organic traffic, and win more local customers in Hillsborough County.",
  keywords: [
    "Plant City SEO company",
    "local SEO Plant City FL",
    "digital marketing agency Plant City",
    "Google Maps SEO Plant City",
    "search engine optimization Plant City Florida",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Plant City SEO Company | Drive Local Search & Business Growth",
    description:
      "Grow your Plant City business with targeted local SEO services. Dominate Google Map 3-Pack, boost organic traffic, and win more local customers in Hillsborough County.",
    url: "https://bayshorecommunication.com/plant-city-seo-company",
    siteName: "Bayshore Communication",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plant City SEO Company | Drive Local Search & Business Growth",
    description:
      "Grow your Plant City business with targeted local SEO services. Dominate Google Map 3-Pack, boost organic traffic, and win more local customers in Hillsborough County.",
  },
  alternates: {
    canonical: "/plant-city-seo-company",
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
