import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "Website SEO Audit",
    image: "/seo-company-wesley-chapel/service-1.png",
    description:
      "Every engagement begins with a detailed examination of your current digital standing. Technical health, content alignment, keyword positioning, local signal strength, and competitor positioning are all assessed to produce a clear, prioritized plan of action specific to the Spring Hill Florida market.",
  },
  {
    title: "Keyword Intelligence and Strategy",
    image: "/seo-company-wesley-chapel/service-2.png",
    description:
      "We identify precisely how Spring Hill Florida customers phrase their searches when they are prepared to spend. Intent level, geographic specificity, search volume, and ranking difficulty are all weighed to build a keyword framework that attracts buyers over browsers.",
  },
  {
    title: "On-Page Optimization",
    image: "/seo-company-wesley-chapel/service-3.png",
    description:
      "Each page of your website is an individual ranking asset. We optimize every title tag, meta description, heading hierarchy, URL pattern, internal link structure, and content section to align with what Google requires to rank your Spring Hill Florida pages with full confidence.",
  },
  {
    title: "Technical Website Health",
    image: "/seo-company-wesley-chapel/service-4.png",
    description:
      "Search rankings are limited by technical barriers before content and links can contribute. We identify and resolve crawlability issues, slow load times, mobile performance gaps, indexing errors, and structural deficiencies that prevent your website from reaching its ceiling.",
  },
  {
    title: "Authority Link Building",
    image: "/seo-company-wesley-chapel/service-7.png",
    description:
      "External credibility is a primary ranking input. We acquire meaningful backlinks from credible regional, industry-specific, and Florida-wide sources, building the off-page authority profile that sustains and elevates your Spring Hill, Florida, search rankings over time.",
  },
  {
    title: "Local Search Dominance",
    image: "/seo-company-wesley-chapel/service-5.png",
    description:
      "Spring Hill, Florida local search requires a multi-signal presence strategy. We refine your Google Business Profile and build consistent citation records across directories. We also deploy location targeted content that secures your business in the map pack and in neighbourhood level search results.",
  },
  {
    title: "Content That Ranks and Converts",
    image: "/seo-company-wesley-chapel/service-6.png",
    description:
      "We produce content that earns its search placement by genuinely addressing what your audience is looking for. Each article, service page, and guide is built around verified Spring Hill Florida search behavior and designed to establish your business as the most credible local source in its category.",
  },
  {
    title: "Ask Engine Optimization (AEO)",
    image: "/seo-company-wesley-chapel/service-8.png",
    description:
      "Consumers increasingly receive answers from AI before visiting any website. We structure your content so your Spring Hill, Florida, business is referenced as an authoritative source when platforms including ChatGPT, Perplexity, and Google AI Search respond to consumer questions in your market.",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    image: "/seo-company-wesley-chapel/service-9.png",
    description:
      "We optimize your digital presence for AI-generated summaries and conversational search responses. As Spring Hill, Florida consumers use AI tools more frequently to locate local businesses, your brand is present and recommended in the answers those tools deliver.",
  },
  {
    title: "Performance Tracking and Monthly Reporting",
    image: "/seo-company-wesley-chapel/service-1.png",
    description:
      "Every strategy decision is grounded in real data, and every outcome is tracked and shared transparently. Monthly reports document ranking movement, organic traffic trends, lead activity, and ROI relative to your Spring Hill, Florida, SEO investment.",
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
                Spring Hill Florida
              </span>
              <br />
              Crafted for the
              <br />
              AI-Driven Search Era
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                The foundation of search has shifted. AI-powered platforms, voice queries, entity-based evaluation, and intent-driven algorithms now determine which Spring Hill, Florida, businesses earn visibility and which go unnoticed. As a full-service SEO company Spring Hill Bayshore Communication delivers every capability your business needs to lead local search in 2026 and well beyond.
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
