import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["florida-seo-company"];
import Image from "next/image";

const services = [
  {
    title: "Search Opportunity Mapping for Florida Markets",
    image: images.seoServicesSection.opportunityMappingImage.src,
    description:
      "We pinpoint which searches carry the most actual revenue potential in your specific market. You will see exactly where customer demand exists and where your rivals have left strategic gaps. This intense focus protects your marketing budget and accelerates tangible results.",
  },
  {
    title: "Conversion Focused On Page Optimization",
    image: images.seoServicesSection.onPageOptimizationImage.src,
    description:
      "We refine title tags, meta headings, page copy and calls to action so they work in perfect harmony. Each page speaks directly to one specific customer need. Visitors immediately understand your core offer, trust your expertise and feel naturally guided toward taking action.",
  },
  {
    title: "Technical Improvements That Remove Search Barriers",
    image: images.seoServicesSection.technicalSeoImage.src,
    description:
      "We fix crawl errors, optimize heavy code templates, and resolve mobile usability issues. Core Web Vitals strictly measure loading speed, visual stability, and responsiveness. Better technical scores ensure smoother visits for humans and easier indexing for search bots. We also apply schema markup to help Google instantly understand your specific services, reviews, and office locations.",
  },
  {
    title: "Local Visibility Across Google Search and Maps",
    image: images.seoServicesSection.localMapVisibilityImage.src,
    description:
      "Many customers immediately search for businesses near them on Google Maps. We strengthen your local relevance, geographical prominence, and review velocity. Whether someone is looking on a desktop at home or a mobile phone on the highway, your business prominently appears when nearby buyers go looking.",
  },
  {
    title: "Content That Builds Topical Authority",
    image: images.seoServicesSection.topicalAuthorityContentImage.src,
    description:
      "We build deeply researched service pages, location hubs and question-and-answer resources that all work together. Comprehensive depth on one specific subject earns high trust from search engines. Visitors also find every answer they need without ever leaving your site to consult a competitor.",
  },
  {
    title: "Relevant Link Acquisition and Digital Authority",
    image: images.seoServicesSection.authorityLinkAcquisitionImage.src,
    description:
      "We pursue ethical, high-quality backlinks from relevant Florida publications and specific industry sources. A few highly credible, trusted mentions vastly outperform hundreds of weak, spammy links. Your digital authority grows steadily without ever risking manual penalties from Google.",
  },
  {
    title: "AEO for AI-Generated Search Answers",
    image: images.seoServicesSection.aeoOptimizationImage.src,
    description:
      "Answer Engine Optimization specifically structures your content so it can be quoted clearly by AI. We utilize direct factual answers, clean heading hierarchies and dedicated FAQ sections. This supports visibility in features like Google AI Overviews. While no provider can guarantee exact placement there, these practices give you the absolute highest possible chance of selection.",
  },
  {
    title: "GEO for Generative Search Visibility",
    image: images.seoServicesSection.geoOptimizationImage.src,
    description:
      "Generative Engine Optimization helps third-party tools like ChatGPT, Claude, and Perplexity understand and recommend your business. We strengthen clear facts, natural brand mentions and consistent business details across the web. These off page and on-page signals help AI systems describe you accurately to inquiring users.",
  },
  {
    title: "Google Business Profile Optimization and Management",
    image: images.seoServicesSection.gbpManagementImage.src,
    description:
      "Your Google Business Profile often earns the very first click in local search. We fully optimize your primary categories, service menus, uploaded photos, regular updates, and review responses. Ongoing, active management keeps every single detail accurate, current and highly engaging for local searchers.",
  },
  {
    title: "SEO Analytics and Business Focused Reporting",
    image: images.seoServicesSection.analyticsReportingImage.src,
    description:
      "We efficiently connect Google Search Console and Google Analytics directly to your business goals. Our monthly reports show you precise traffic numbers, tracked calls, form fills and revenue growth. You will always know exactly what your investment actually produced.",
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

            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] mt-4 font-bold leading-[1.1] text-black">
              Complete <span className="text-[#FF6F00]">SEO Services</span>
              <br />
              in Florida
              <br />
              Crafted for the
              <br />
              <span className="text-[#FF6F00]">
                AI-Driven Search Era
              </span>
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                Modern search requires a multi-layered approach that goes beyond basic keywords. We provide comprehensive services designed to capture both traditional and AI-driven search traffic.
              </p>
            </div>
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

                  <p className="mt-3 text-[15px] leading-relaxed text-black/70 md:text-[16px] w-full md:max-w-[85%]">
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
