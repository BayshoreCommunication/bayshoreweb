
import AiSearchSeoSection from "@/components/SEO-Service/seo-company-dunedin/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/seo-company-dunedin/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/seo-company-dunedin/ContactSection";
import Hero from "@/components/SEO-Service/seo-company-dunedin/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/seo-company-dunedin/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/seo-company-dunedin/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/seo-company-dunedin/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/seo-company-dunedin/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/seo-company-dunedin/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/seo-company-dunedin/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/seo-company-dunedin/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/seo-company-dunedin/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/seo-company-dunedin/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/seo-company-dunedin/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/seo-company-dunedin/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/seo-company-dunedin/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/seo-company-dunedin/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "SEO Company Dunedin | Reviews, Pricing & Results",
  description:
    "Explore how an SEO company in Dunedin, Florida, can improve rankings, traffic, leads & long-term growth in your business.",

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
    canonical: "/seo-company-dunedin",
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
