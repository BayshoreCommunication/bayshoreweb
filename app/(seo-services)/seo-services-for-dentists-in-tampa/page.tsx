import AiSearchSeoSection from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/ContactSection";
import Hero from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/Hero";
import SeoAuditBenefits from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/SeoAuditBenefits";
import SeoAuditForm from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/seo-services-for-dentists-in-tampa/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "SEO Services for Dentists in Tampa| Fill Your Schedule",
  description:
    "Connect with patients searching for dental care through targeted SEO services in Tampa. Increase appointment requests and strengthen your local presence.",

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
    canonical: "/seo-services-for-dentists-in-tampa",
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
