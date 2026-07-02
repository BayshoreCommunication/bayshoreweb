import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["plant-city-seo-company"];
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "Local SEO for Plant City Businesses",
    image: images.seoServicesSection.localSeoMapPackImage.src,
    description:
      "Local SEO covers Google Business Profile optimization, citation building, and review management for Plant City businesses competing inside Hillsborough County. SEO helps direct revenue from strong local search rankings.",
  },
  {
    title: "On Page SEO and Content Optimization",
    image: images.seoServicesSection.onPageOptimizationImage.src,
    description:
      "Service pages on Plant City business websites need specific keyword targeting, proper heading structure, and metadata for matching real clients' search phrases.",
  },
  {
    title: "Technical SEO Audits and Site Health Repairs",
    image: images.seoServicesSection.technicalSeoImage.src,
    description:
      "Any service providing site in Plant City with crawl issues, duplicate content, or broken schema earns weaker rankings. Technical audit documents each issue and ranks fixes based on impact to ranking performance.",
  },
  {
    title: "Link Building and Local Authority Development",
    image: images.seoServicesSection.offPageSeoImage.src,
    description:
      "Earning backlinks from Florida based publications, Hillsborough County business associations and industry specific directories. This builds domain authority to keep first page rankings stable.",
  },
  {
    title: "AI Search and Generative Engine Optimization",
    image: images.seoServicesSection.askEngineOptimizationImage.src,
    description:
      "Google AI Overviews, ChatGPT search and Perplexity pull answers from structured, authoritative local content. Creating Content to appear in those AI generated responses.",
  },
  {
    title: "Content Strategy and SEO Copywriting",
    image: images.seoServicesSection.contentDevelopmentImage.src,
    description:
      "Blog posts, FAQ pages and service guides built around real search queries drive consistent traffic for Plant City law firms, financial advisors, travel businesses, and weight loss clinics.",
  },
  {
    title: "E-commerce and Retail SEO",
    image: images.seoServicesSection.generativeEngineOptimizationImage.src,
    description:
      "Product page optimization, category structure and schema markup help Plant City retail businesses compete against large national chains in product search results.",
  },
  {
    title: "Google Business Profile Management",
    image: images.seoServicesSection.localSeoMapPackImage.src,
    description:
      "Medical practices, law offices and tax firms with actively managed Google Business Profiles earn more calls, more appointment requests and more direction clicks.",
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
                Plant City,
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
                Search in 2026 runs on AI generated results, voice queries and competitive local listings. As a Plant City SEO company, we build SEO programs for local businesses to perform across every search engine.
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
