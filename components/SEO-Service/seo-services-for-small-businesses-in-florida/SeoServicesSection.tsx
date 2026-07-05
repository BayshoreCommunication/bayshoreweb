import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["seo-services-for-small-businesses-in-florida"];
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "Local SEO",
    image: images.seoServicesSection.seoWebsiteAuditImage.src,
    description:
      "We optimize your Google Business Profile, citations and local signals for Florida searches.",
  },
  {
    title: "On Page SEO",
    image: images.seoServicesSection.keywordResearchImage.src,
    description:
      "We optimize website's content, title tags, meta descriptions, headings, internal links to rank for target keywords. We improve overall structure for better user experience.",
  },
  {
    title: "Technical SEO",
    image: images.seoServicesSection.onPageOptimizationImage.src,
    description:
      "Our technical team for SEO fixes content crawl problems. We improve Core Web Vitals and ensure Google indexes every key page.",
  },
  {
    title: "Content Marketing",
    image: images.seoServicesSection.technicalSeoImage.src,
    description:
      "We create authoritative and helpful content that attracts Florida customers at every stage.",
  },
  {
    title: "Authoritative Link Building",
    image: images.seoServicesSection.localSeoMapPackImage.src,
    description:
      "We build high quality backlinks from trusted Florida-based websites that are relevant to industry.",
  },
  {
    title: "Google Business Profile Management",
    image: images.seoServicesSection.contentDevelopmentImage.src,
    description:
      "Our team manages and optimizes your profile to maximize visibility in the local map pack.",
  },
  {
    title: "Review Management",
    image: images.seoServicesSection.offPageSeoImage.src,
    description:
      "Our SEO strategy establishes 5 star reputation that converts online searchers into paying customers.",
  },
  {
    title: "AI Search Optimization (AEO)",
    image: images.seoServicesSection.askEngineOptimizationImage.src,
    description:
      "Our structured content lets ChatGPT, Perplexity and Google's AI recommend your business.",
  },
  {
    title: "Schema Markup",
    image: images.seoServicesSection.generativeEngineOptimizationImage.src,
    description:
      "We add structured data so google search engines and AI tools fully understand your business.",
  },
  {
    title: "Reputation & Citation Cleanup",
    image: images.seoServicesSection.localSeoMapPackImage.src,
    description:
      "We correct inconsistent listings across 50+ directories to rebuild trust and rankings.",
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
              Complete <span className="text-[#FF6F00]">SEO Services</span>
              <br />
              for Small Businesses
              <br />
              <span className="text-[#FF6F00]">
                in Florida
                <br />
              </span>
              Crafted for the
              <br />
              AI-Driven Search Era
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                Our SEO services are built for today&apos;s AI-driven search
                optimization tools like ChatGPT, Grok, AI Overview, Perplexity.
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
                SCHEDULE A FREE SEO AUDIT
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
