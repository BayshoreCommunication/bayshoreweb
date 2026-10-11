import AiSearchSeoSection from "@/components/SEO-Service/florida-seo-company/AiSearchSeoSection";
import CommonSeoMistakes from "@/components/SEO-Service/florida-seo-company/CommonSeoMistakes";
import ContactSection from "@/components/SEO-Service/florida-seo-company/ContactSection";
import Hero from "@/components/SEO-Service/florida-seo-company/Hero";
import SeoAuditForm from "@/components/SEO-Service/florida-seo-company/SeoAuditForm";
import SeoCtaSection from "@/components/SEO-Service/florida-seo-company/SeoCtaSection";
import SeoCustomerJourney from "@/components/SEO-Service/florida-seo-company/SeoCustomerJourney";
import SeoFaqSection from "@/components/SEO-Service/florida-seo-company/SeoFaqSection";
import SeoPackagesSection from "@/components/SEO-Service/florida-seo-company/SeoPackagesSection";
import SeoProcessSection from "@/components/SEO-Service/florida-seo-company/SeoProcessSection";
import SeoRoiSection from "@/components/SEO-Service/florida-seo-company/SeoRoiSection";
import SeoServicesSection from "@/components/SEO-Service/florida-seo-company/SeoServicesSection";
import ServiceAreasSection from "@/components/SEO-Service/florida-seo-company/ServiceAreasSection";
import TestimonialsSection from "@/components/SEO-Service/florida-seo-company/TestimonialsSection";
import WhyChooseBayshore from "@/components/SEO-Service/florida-seo-company/WhyChooseBayshore";
import WhyLosingCustomers from "@/components/SEO-Service/florida-seo-company/WhyLosingCustomers";
import React from "react";

export const metadata = {
  title: "Florida SEO Company | Grow Leads With Local Search",
  description:
    "Get customized SEO services from a Florida SEO Company to improve search visibility, reach local customers, and generate qualified leads.",

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
    title: "Florida SEO Company | Grow Leads With Local Search",
    description:
      "Get customized SEO services from a Florida SEO Company to improve search visibility, reach local customers, and generate qualified leads.",
    url: "https://bayshorecommunication.com/florida-seo-company",
    siteName: "Bayshore Communication",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Florida SEO Company | Grow Leads With Local Search",
    description:
      "Get customized SEO services from a Florida SEO Company to improve search visibility, reach local customers, and generate qualified leads.",
  },

  alternates: {
    canonical: "/florida-seo-company",
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
