import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "Local SEO for Brandon Florida",
    image: "/seo-company-wesley-chapel/service-5.png",
    description:
      "Optimizes Google Business Profile, NAP consistency, local citations, review strategy, nearby signals and map pack rankings to capture Brandon residents’ hight intent local queries.",
  },
  {
    title: "On Page Search Engine Optimization",
    image: "/seo-company-wesley-chapel/service-3.png",
    description:
      "Check header format, title tags, meta descriptions, internal linking and keyword alignment on each page of the website. Brandon specific search terms are integrated into content naturally.",
  },
  {
    title: "Technical SEO Audits and Fixes",
    image: "/seo-company-wesley-chapel/service-4.png",
    description:
      "Review and correction for site loading speed, indexation, Google standardized metrics, web crawlability, mobile response time and structured data.",
  },
  {
    title: "Content Strategy and SEO Copywriting",
    image: "/seo-company-wesley-chapel/service-6.png",
    description:
      "Service pages, location pages and blog content are written around exact queries Brandon customers type. Medical, legal, financial and industry specific content is created to rank and convert.",
  },
  {
    title: "Link Building and Digital PR",
    image: "/seo-company-wesley-chapel/service-7.png",
    description:
      "Earning backlinks from Tampa Bay media, Brandon area business directories, industry publications and authoritative sites builds domain authority for sustained long term rankings.",
  },
  {
    title: "E-Commerce SEO for Brandon Retailers",
    image: "/seo-company-wesley-chapel/service-1.png",
    description:
      "Product page optimization, category architecture, schema markup and shopping feed management for Brandon retail businesses competing in both local and national organic search.",
  },
  {
    title: "AI Search and Answer Engine Optimization",
    image: "/seo-company-wesley-chapel/service-8.png",
    description:
      "Content structured for Google's AI Overviews, Perplexity and ChatGPT citations. Brandon businesses' appearance in AI generated answers capture searchers more than clicking traditional results.",
  },
  {
    title: "SEO Reporting and Analytics",
    image: "/seo-company-wesley-chapel/service-2.png",
    description:
      "Monthly reports tracking keyword rankings, organic traffic, lead conversions and Google Business Profile metrics for every Brandon campaign.",
  },
];

export default function SeoServicesSection() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[430px_minmax(0,1fr)] xl:gap-12 xl:grid-cols-[500px_minmax(0,1040px)] 2xl:gap-14 2xl:grid-cols-[520px_minmax(0,1040px)]">
          {/* Left Content */}
          <div className="lg:sticky lg:top-24 h-fit">
            <span className="text-xl font-semibold uppercase tracking-wider text-[#FF6F00]">
              Our Services
            </span>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.1] text-black md:text-[54px]">
              Complete <span className="text-[#FF6F00]">SEO</span>
              <br />
              Services in
              <br />
              <span className="text-[#FF6F00]">
                Brandon,
                <br />
                Florida,
              </span>
              <br />
              Crafted for the
              <br />
              AI-Driven Search Era
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                As a Brandon SEO company, we provide strategies designed for both Google&apos;s search results and AI generated summaries in Gemini overview, ChatGPT, Grok, featured snippets and structured answers.
              </p>

              <p>
                Search optimization in 2026 demands far more than keyword placement on a page. Google&apos;s AI-assisted systems and voice-activated tools have changed how Brandon residents find local businesses. We build strategies that perform across traditional rankings, AI answers, and every channel your next customer uses.
              </p>
            </div>

            <button
              className="
                group
                relative
                mt-10
                flex
                h-[52px]
                items-center
                gap-3
                overflow-hidden
                rounded-md
                bg-[#FF6F00]
                px-6
                font-semibold
                text-white
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full" />

              <span className="relative flex items-center gap-3">
                <CalendarDays size={18} />
                SCHEDULE A FREE CASE REVIEW
              </span>
            </button>
          </div>

          {/* Right Services */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  group
                  grid
                  items-start
                  gap-4
                  rounded-[20px]
                  border
                  border-black/5
                  bg-white
                  p-4
                  md:p-8
                  shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                  md:grid-cols-[minmax(0,1fr)_350px]
                
                "
              >
                <div>
                  <h3 className="text-[20px] font-bold text-black md:text-[24px]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[16px] leading-relaxed text-black/70 md:text-[16px] w-full md:max-w-[70%]">
                    {service.description}
                  </p>
                </div>

                <div className="relative  w-full h-[250px]  overflow-hidden rounded-[16px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
