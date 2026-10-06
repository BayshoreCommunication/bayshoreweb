import AiSearchSeoSection from "@/components/SEO-Service/dental-seo-services-tampa/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/dental-seo-services-tampa/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/dental-seo-services-tampa/ContactSection";
import Hero from "@/components/SEO-Service/dental-seo-services-tampa/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/dental-seo-services-tampa/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/dental-seo-services-tampa/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/dental-seo-services-tampa/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/dental-seo-services-tampa/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/dental-seo-services-tampa/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/dental-seo-services-tampa/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/dental-seo-services-tampa/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/dental-seo-services-tampa/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/dental-seo-services-tampa/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/dental-seo-services-tampa/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/dental-seo-services-tampa/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/dental-seo-services-tampa/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/dental-seo-services-tampa/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "SEO Services for Dentists in Tampa | Fill Your Schedule & Grow Revenue",
  description:
    "Drive more patient inquiries with expert dental SEO services in Tampa, FL. Rank #1 on Google Maps, build patient trust, and fill your appointment schedule.",
  keywords: [
    "SEO services for dentists in Tampa",
    "dental SEO Tampa FL",
    "dentist local SEO Tampa",
    "Google Maps optimization for dentists Tampa",
    "dental practice marketing Tampa",
    "cosmetic dentistry SEO Tampa",
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
    title: "SEO Services for Dentists in Tampa | Fill Your Schedule & Grow Revenue",
    description:
      "Drive more patient inquiries with expert dental SEO services in Tampa, FL. Rank #1 on Google Maps, build patient trust, and fill your appointment schedule.",
    url: "https://bayshorecommunication.com/dental-seo-services-tampa",
    siteName: "Bayshore Communication", 
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services for Dentists in Tampa | Fill Your Schedule & Grow Revenue",
    description:
      "Drive more patient inquiries with expert dental SEO services in Tampa, FL. Rank #1 on Google Maps, build patient trust, and fill your appointment schedule.",
  },
  alternates: {
    canonical: "/dental-seo-services-tampa",
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
