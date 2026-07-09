import AiSearchSeoSection from "@/components/SEO-Service/lawyer-seo-agency-tampa/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/lawyer-seo-agency-tampa/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/lawyer-seo-agency-tampa/ContactSection";
import Hero from "@/components/SEO-Service/lawyer-seo-agency-tampa/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/lawyer-seo-agency-tampa/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/lawyer-seo-agency-tampa/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/lawyer-seo-agency-tampa/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/lawyer-seo-agency-tampa/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/lawyer-seo-agency-tampa/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/lawyer-seo-agency-tampa/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/lawyer-seo-agency-tampa/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/lawyer-seo-agency-tampa/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/lawyer-seo-agency-tampa/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/lawyer-seo-agency-tampa/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/lawyer-seo-agency-tampa/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/lawyer-seo-agency-tampa/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/lawyer-seo-agency-tampa/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Lawyer SEO Agency Tampa | Drive More Cases & Qualified Leads",
  description: "Grow your law firm with a trusted lawyer SEO agency in Tampa. Improve rankings,attract qualified leads and generate more client consultations.",

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
    canonical: "/lawyer-seo-agency-tampa",
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
