import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["local-seo-services-for-small-business-naples-florida"];
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "Google Business Profile (GBP) Optimization",
    image: images.seoServicesSection.seoWebsiteAuditImage.src,
    description:
      "We fully optimize your GBP with the right categories, service descriptions, photos, Q&A responses and weekly posts. An optimized GBP generates 200+ monthly customer interactions on average.",
  },
  {
    title: "Local Keyword Research and Strategy",
    image: images.seoServicesSection.keywordResearchImage.src,
    description:
      "We identify every search term your Naples Florida customers use to find businesses like yours. Each keyword targets local intent, buyer readiness and competition in Naples.",
  },
  {
    title: "On-Page Local SEO Optimization",
    image: images.seoServicesSection.onPageOptimizationImage.src,
    description:
      "We optimize your website pages with Naples-specific keywords, local schema markup and clear service signals. Search engines clearly recognize your business and what you offer in Naples, Florida.",
  },
  {
    title: "Local Citation Building and NAP Management",
    image: images.seoServicesSection.technicalSeoImage.src,
    description:
      "We build and manage your business listings across the top 50+ directories, maps platforms and data aggregators. Consistent NAP data boosts your Naples local search authority and trust.",
  },
  {
    title: "Review Generation and Reputation Management",
    image: images.seoServicesSection.localSeoMapPackImage.src,
    description:
      "We implement a consistent five-star review generating system from your satisfied Naples customers. Strong reviews directly influence both your local search rankings and your customer conversion rates.",
  },
  {
    title: "Localized Content Creation",
    image: images.seoServicesSection.contentDevelopmentImage.src,
    description:
      "We create service pages, Naples neighborhood pages and locally relevant content targeting exact customer queries. Each piece is written to capture Naples Florida search traffic and convert visitors into leads.",
  },
  {
    title: "Local Link Building",
    image: images.seoServicesSection.offPageSeoImage.src,
    description:
      "We earn high-quality backlinks from Naples Chamber of commerce, local business directories and community websites. These local authority links push your business higher in Naples map and organic search results.",
  },
  {
    title: "AI and GEO Optimization (Generative Engine Optimization)",
    image: images.seoServicesSection.askEngineOptimizationImage.src,
    description:
      "We optimize your business to appear in AI-generated answers on ChatGPT, Google Gemini and Perplexity. More than half of consumers now use AI tools for local business recommendations and we make sure they find you.",
  },
  {
    title: "Google Maps and Local Pack Ranking Strategy",
    image: images.seoServicesSection.generativeEngineOptimizationImage.src,
    description:
      "We implement proven strategies to place your business in Google's top 3 map pack results to get you more traffic and more customer actions from Naples Florida searches.",
  },
  {
    title: "Local SEO Analytics and Monthly Reporting",
    image: images.seoServicesSection.localSeoMapPackImage.src,
    description:
      "You receive clear, plain-language monthly reports showing your keyword rankings, GBP interactions, website traffic, calls and conversions. Every metric connects directly to measurable growth for your Naples Florida business.",
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
              Complete <span className="text-[#FF6F00]">Local SEO</span>
              <br />
              Services for
              <br />
              <span className="text-[#FF6F00]">
                Naples Florida
                <br />
                Small Businesses,
              </span>
              <br />
              Crafted for the
              <br />
              AI-Driven Search Era
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                Bayshore Communication offers a complete package of local SEO
                services for small business Naples Florida. Every service is built
                for 2026&apos;s AI-powered search, like Google, ChatGPT, Gemini
                and Perplexity, all competing to answer your consumers&apos; queries.
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

                <div className="w-full">
                  <div className="relative w-full h-[250px] overflow-hidden rounded-[16px]">
                    {(() => {
                      const imgData = Object.values(images.seoServicesSection).find(
                        (item) => item.src === service.image
                      );
                      if (!imgData) return null;
                      return (
                        <Image
                          src={imgData.src}
                          alt={imgData.alt}
                          title={imgData.title}
                          fill
                          className="
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-105
                          "
                        />
                      );
                    })()}
                  </div>
                  {(() => {
                    const imgData = Object.values(images.seoServicesSection).find(
                      (item) => item.src === service.image
                    );
                    if (!imgData) return null;
                    return (
                      <div style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }}>
                        {imgData.caption && <p>{imgData.caption}</p>}
                        {imgData.description && <p>{imgData.description}</p>}
                      </div>
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
