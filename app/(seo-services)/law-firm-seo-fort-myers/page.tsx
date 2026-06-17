
import AiSearchSeoSection from "@/components/law-firm-seo-fort-myers/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/law-firm-seo-fort-myers/CommonSeoMistakes";
import ContactSection from "@/components/law-firm-seo-fort-myers/ContactSection";
import Hero from "@/components/law-firm-seo-fort-myers/Hero";
import SeoAuditBenefits from "@/components/law-firm-seo-fort-myers/SeoAuditBenefits";
import SeoAuditForm from "@/components/law-firm-seo-fort-myers/SeoAuditForm";
import SeoCtaSection from "@/components/law-firm-seo-fort-myers/SeoCtaSection";
import SeoCustomerJourney from "@/components/law-firm-seo-fort-myers/SeoCustomerJourney";
import SeoFaqSection from "@/components/law-firm-seo-fort-myers/SeoFaqSection";
import SeoPackagesSection from "@/components/law-firm-seo-fort-myers/SeoPackagesSection";
import SeoProcessSection from "@/components/law-firm-seo-fort-myers/SeoProcessSection";
import SeoRoiSection from "@/components/law-firm-seo-fort-myers/SeoRoiSection";
import SeoServicesSection from "@/components/law-firm-seo-fort-myers/SeoServicesSection";
import ServiceAreasSection from "@/components/law-firm-seo-fort-myers/ServiceAreasSection";
import TestimonialsSection from "@/components/law-firm-seo-fort-myers/TestimonialsSection";
import WhyChooseBayshore from "@/components/law-firm-seo-fort-myers/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/law-firm-seo-fort-myers/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Law Firm SEO Fort Myers| Improve Your Rankings",
  description:
    "Compare the best law firm SEO strategies in Fort Myers. Learn what drives rankings, leads, and long-term growth for attorneys.",

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
    canonical: "/law-firm-seo-fort-myers",
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
