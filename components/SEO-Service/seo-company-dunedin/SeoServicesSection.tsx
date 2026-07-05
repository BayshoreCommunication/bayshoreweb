import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["seo-company-dunedin"];
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "Local SEO",
    image: images.seoServicesSection.localSeoMapPackImage.src,
    description:
      "Optimized profiles begin with precise categorization, followed by verified details and carefully chosen location-based terms. Through trusted platforms specific to Dunedin, citations are established then maintained over time. Positioning within map rankings improves when each component aligns with regional visibility standards.",
  },
  {
    title: "On-Page SEO",
    image: images.seoServicesSection.onPageOptimizationImage.src,
    description:
      "Every service page gets rebuilt from the beginning shaped by how people in Dunedin Florida search for things. Our service pages are made to fit the way people in Dunedin Florida look for stuff. Instead of guessing, we shape headlines, subheads, and titles around real queries. Content flows follow what matters now, not outdated tricks. Pages connect through smart internal paths that boost visibility where it counts. Even small details like meta descriptions reflect live user behavior. Authority shifts naturally to key sections without forced tactics. What shows up in results feels clear because the structure supports intent.",
  },
  {
    title: "Technical SEO",
    image: images.seoServicesSection.technicalSeoImage.src,
    description:
      "Starting with how easily bots can navigate your site, we check loading times, key performance signals, mobile experience, organized content markup, plus indexing problems. Because fixing each problem matters, corrections happen carefully to match what today’s search systems expect technically. When the base is solid, everything else in the plan works better down the line.",
  },
  {
    title: "Off-Page SEO and Link Building",
    image: images.seoServicesSection.offPageSeoImage.src,
    description:
      "Not every connection earns a spot. Outreach shapes the backbone of our approach, targeting trusted neighborhood outlets first. Links come from places like trade listings or city-focused platforms, never chosen at random. Each one gets studied - does it fit, does it hold weight, will it last. Only then does it become part of the plan.",
  },
  {
    title: "Content Strategy and SEO Copywriting",
    image: images.seoServicesSection.contentDevelopmentImage.src,
    description:
      "We research the exact questions Dunedin, Florida, consumers ask before making a purchase decision and build content that answers those questions with authority. Service pages, location landing pages, and supporting blog content are all written to satisfy search intent and encourage conversion. Every content piece is reviewed against current AI-era quality standards before publication.",
  },
  {
    title: "E-Commerce SEO",
    image: images.seoServicesSection.keywordResearchImage.src,
    description:
      "We optimize product listings, category page structures, and crawl pathways for Dunedin, Florida businesses that sell online. Transactional keyword targeting connects your product pages with buyers who are ready to purchase right now. Indexation management ensures your entire catalog remains accessible and competitive across all relevant search queries.",
  },
  {
    title: "Ask Engine Optimization (AEO)",
    image: images.seoServicesSection.askEngineOptimizationImage.src,
    description:
      "We structure your website content to answer the specific questions. Dunedin, Florida, consumers ask on AI-powered platforms, including ChatGPT, Perplexity, and Google AI Overviews. AEO positions your business as the authoritative answer when a potential customer asks for a local recommendation and expects an immediate, reliable response. This channel is growing rapidly and early optimization creates a significant competitive advantage.",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    image: images.seoServicesSection.generativeEngineOptimizationImage.src,
    description:
      "We format your content for citation and recommendation in AI-generated summaries and search results. As more Dunedin, Florida, consumers use generative tools to research local businesses, GEO ensures your name appears as a trusted recommendation. This emerging discipline extends your visibility well beyond traditional organic search results.",
  },
  {
    title: "SEO Reporting and Analytics",
    image: images.seoServicesSection.seoWebsiteAuditImage.src,
    description:
      "Monthly performance updates follow a clear format, showing shifts in keyword rankings alongside changes in organic visit numbers. Because local search visibility affects outcomes, those measurements appear with equal weight. Conversion patterns emerge through careful tracking rather than assumptions. A straightforward explanation follows each dataset, outlining recent developments together with their implications. Insight into upcoming actions comes included, not withheld. Clarity around results links directly to budget allocation. Every financial commitment receives matching accountability in reported progress.",
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
                Dunedin Florida
              </span>
              <br />
              Crafted for the
              <br />
              AI-Driven Search Era
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                Internet search behaviour in 2026 is quite different from a few years back. Search behavior has changed a lot. Now we have computers that can think for themselves. They decide what search results are the most important. People are also using their voices to ask for things.. When you search for something the internet can even create new information just for you. All of this means that search behavior and the way we compete with each other on the internet is very different now. As a leading seo company dunedin, Bayshore Communication, delivers a full suite of services designed to satisfy every dimension of modern search visibility for Dunedin, Florida businesses.
              </p>
            </div>

            {/* <button
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
            </button> */}
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
