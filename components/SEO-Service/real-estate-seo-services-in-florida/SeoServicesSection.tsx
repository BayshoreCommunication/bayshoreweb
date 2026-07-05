import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["real-estate-seo-services-in-florida"];
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "Local SEO for Florida Real Estate Markets",
    image: images.seoServicesSection.seoWebsiteAuditImage.src,
    description:
      "City, neighborhood, and county level optimization ensures you rank where your specific buyers are actually searching.",
  },
  {
    title: "Google Business Profile Optimization and Management",
    image: images.seoServicesSection.keywordResearchImage.src,
    description:
      "We claim, optimize, and actively manage your GBP to strengthen map pack placement and local call volume.",
  },
  {
    title: "AI Overview and Generative Search Visibility",
    image: images.seoServicesSection.onPageOptimizationImage.src,
    description:
      "We structure your content and authority signals to earn placement inside Google AI Overviews, ChatGPT, and Perplexity answers.",
  },
  {
    title: "Florida Real Estate Content Creation",
    image: images.seoServicesSection.technicalSeoImage.src,
    description:
      "We produce local market specific content, hyper targeted blogs, listing videos that build regional expert authority and turns readers into leads.",
  },
  {
    title: "Technical SEO Audit and Ongoing Correction",
    image: images.seoServicesSection.localSeoMapPackImage.src,
    description:
      "We continuously audit to resolve indexation bottlenecks and monitor website efficiency, mobile usability, crawl health, structured data to meet Google's performance thresholds.",
  },
  {
    title: "IDX and Listing Page Optimization",
    image: images.seoServicesSection.contentDevelopmentImage.src,
    description:
      "Property search and listing pages are optimized to drive organic traffic rather than relying entirely on paid portal leads.",
  },
  {
    title: "Editorial Link Building for Domain Authority",
    image: images.seoServicesSection.offPageSeoImage.src,
    description:
      "We secure backlinks from Florida publications, local media, and credible real estate resources to build ranking power.",
  },
  {
    title: "Real Estate Schema Markup",
    image: images.seoServicesSection.askEngineOptimizationImage.src,
    description:
      "LocalBusiness, FAQ, and property specific schema tell Google and AI tools exactly what your business offers and where you operate.",
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
              Complete Real Estate <span className="text-[#FF6F00]">SEO</span>
              <br />
              Services in
              <br />
              <span className="text-[#FF6F00]">
                Florida
              </span>
              <br />
              Crafted for the
              <br />
              AI-Driven Search Era
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                Bayshore Communication&apos;s real estate SEO services in Florida
                cover every layer of search visibility your business needs to
                compete in 2026.
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
