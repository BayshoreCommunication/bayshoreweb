import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "SEO Audit",
    image: "/seo-company-wesley-chapel/service-1.png",
    description:
      "A thorough technical, on-page, and off-page analysis of your law firm's website. Every gap, error, and missed ranking opportunity is identified and mapped into a clear, prioritized action plan specific to your practice.",
  },
  {
    title: "Keyword Research",
    image: "/seo-company-wesley-chapel/service-2.png",
    description:
      "Deep legal keyword research that uncovers the precise search terms Tampa clients use when looking for attorneys in your practice areas. Every keyword is evaluated for search volume, competition, and actual hiring intent so that rankings translate into consultations.",
  },
  {
    title: "On-Page SEO",
    image: "/seo-company-wesley-chapel/service-3.png",
    description:
      "Practice area pages, meta tags, title tags, headings, internal links, and content structure are all optimized to perform well in search and convert visitors into consultation requests. Nothing is left unoptimized on your most important pages.",
  },
  {
    title: "Technical SEO",
    image: "/seo-company-wesley-chapel/service-4.png",
    description:
      "Site speed, mobile optimization, structured data, XML sitemaps, crawl error resolution, and indexing fixes which are the technical foundation that every law firm's search rankings depend on, and the layer that many Tampa firms overlook entirely.",
  },
  {
    title: "Off-Page SEO",
    image: "/seo-company-wesley-chapel/service-5.png",
    description:
      "High-quality legal backlinks, brand mentions, authoritative legal directory listings, and strategic digital PR to build domain authority and the trust signals that search engines and potential clients both rely on",
  },
  {
    title: "Local SEO",
    image: "/seo-company-wesley-chapel/service-6.png",
    description:
      "Google Business Profile optimization, Tampa legal citations, and location-specific keyword targeting to secure your firm's position in the local map pack and neighborhood-level search results across Tampa Bay.",
  },
  {
    title: "Law Firm Content Marketing",
    image: "/seo-company-wesley-chapel/service-7.png",
    description:
      "Authoritative legal content includes practice area pages, FAQ articles, blog posts, and legal guides. It is written around real questions Tampa residents ask before hiring an attorney. The content ranks and converts, not merely exists.",
  },
  {
    title: "Ask Engine Optimization (AEO)",
    image: "/seo-company-wesley-chapel/service-8.png",
    description:
      "When Tampa residents ask questions about the law and require answers right away, your firm will be found by AI-driven tools such as ChatGPT, Perplexity, Grok, and Google AI Search with structured content that directly addresses the legal questions.",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    image: "/seo-company-wesley-chapel/service-9.png",
    description:
      "AI-friendly content, such as optimized for summarizing and assistance for conversational legal searches, so that your firm can be cited and recommended when potential clients have legal questions.",
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
              Services for
              <br />
              <span className="text-[#FF6F00]">
                Tampa Law Firms
              </span>
              <br />
              Crafted for the
              <br />
              AI-Driven Search Era
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                Legal search has changed dramatically. AI-powered platforms, voice search, and smarter algorithms mean your Tampa law firm needs more than traditional SEO to stay competitive and maintain consistent visibility. As a lawyer SEO agency tampa, Bayshore Communication covers every dimension of legal SEO from foundational rankings to AI-powered discovery.
              </p>

              {/* <p>
                Bayshore Communication is the reliable SEO company in Wesley
                Chapel, Florida, that understands this shift. We build
                strategies that perform across traditional rankings, AI answers,
                and every channel your next customer uses.
              </p> */}
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
