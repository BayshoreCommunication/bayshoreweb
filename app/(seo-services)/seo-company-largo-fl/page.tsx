

import AiSearchSeoSection from "@/components/SEO-Service/seo-company-largo-fl/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/seo-company-largo-fl/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/seo-company-largo-fl/ContactSection";
import Hero from "@/components/SEO-Service/seo-company-largo-fl/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/seo-company-largo-fl/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/seo-company-largo-fl/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/seo-company-largo-fl/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/seo-company-largo-fl/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/seo-company-largo-fl/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/seo-company-largo-fl/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/seo-company-largo-fl/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/seo-company-largo-fl/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/seo-company-largo-fl/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/seo-company-largo-fl/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/seo-company-largo-fl/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/seo-company-largo-fl/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/seo-company-largo-fl/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "SEO Company Largo FL | Expert Local SEO Services & AI Search Optimization",
  description:
    "Partner with a premier SEO company in Largo, FL. Boost Google Maps 3-Pack rankings, drive organic search traffic, and capture high-intent local buyers.",
  keywords: [
    "SEO company Largo FL",
    "Largo FL SEO services",
    "local SEO Largo Florida",
    "Google Maps optimization Largo",
    "digital marketing agency Largo FL",
    "search engine optimization Pinellas County",
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
    title: "SEO Company Largo FL | Expert Local SEO Services",
    description:
      "Drive consistent organic growth in Largo, FL with custom SEO strategies, Google Maps optimization, and AI search readiness.",
    url: "https://bayshorecommunication.com/seo-company-largo-fl",
    siteName: "Bayshore Communication",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company Largo FL | Expert Local SEO Services",
    description:
      "Drive consistent organic growth in Largo, FL with custom SEO strategies, Google Maps optimization, and AI search readiness.",
  },
  alternates: {
    canonical: "/seo-company-largo-fl",
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
