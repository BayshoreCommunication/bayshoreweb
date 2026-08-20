
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
  title: "Orlando Law Firm SEO Agency | Get More High-Value Case Inquiries",
  description:
    "Grow your Orlando law firm with targeted legal SEO strategies. Dominate Google Search, Map Pack 3-Pack, and AI Overviews to sign more qualified clients.",
  keywords: [
    "Orlando law firm SEO agency",
    "lawyer SEO Orlando FL",
    "attorney search engine optimization Orlando",
    "legal marketing agency Orlando",
    "Google Maps SEO for law firms Orlando",
    "personal injury lawyer SEO Orlando",
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
    title: "Orlando Law Firm SEO Agency | Get More High-Value Case Inquiries",
    description:
      "Grow your Orlando law firm with targeted legal SEO strategies. Dominate Google Search, Map Pack 3-Pack, and AI Overviews to sign more qualified clients.",
    url: "https://bayshorecommunication.com/orlando-law-firm-seo-agency",
    siteName: "Bayshore Communication",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Law Firm SEO Agency | Get More High-Value Case Inquiries",
    description:
      "Grow your Orlando law firm with targeted legal SEO strategies. Dominate Google Search, Map Pack 3-Pack, and AI Overviews to sign more qualified clients.",
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
      <TestimonialsSection />
      <SeoFaqSection />
      <ContactSection />
    </div>
  );
};

export default page;
