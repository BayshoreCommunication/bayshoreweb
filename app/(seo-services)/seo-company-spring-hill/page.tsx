
import AiSearchSeoSection from "@/components/SEO-Service/seo-company-spring-hill/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/seo-company-spring-hill/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/seo-company-spring-hill/ContactSection";
import Hero from "@/components/SEO-Service/seo-company-spring-hill/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/seo-company-spring-hill/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/seo-company-spring-hill/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/seo-company-spring-hill/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/seo-company-spring-hill/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/seo-company-spring-hill/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/seo-company-spring-hill/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/seo-company-spring-hill/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/seo-company-spring-hill/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/seo-company-spring-hill/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/seo-company-spring-hill/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/seo-company-spring-hill/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/seo-company-spring-hill/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/seo-company-spring-hill/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "SEO Company Spring Hill | Reviews, Pricing & Results",
  description: "Explore how an SEO company in Spring Hill, Florida, can improve rankings, traffic, leads & long-term growth in your business.",

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
    canonical: "/seo-company-spring-hill",
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
