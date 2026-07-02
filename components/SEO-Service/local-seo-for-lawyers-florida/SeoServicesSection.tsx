import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["local-seo-for-lawyers-florida"];
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "Local SEO Audit",
    image: images.seoServicesSection.seoWebsiteAuditImage.src,
    description:
      "Our local SEO audit evaluates your law firm's online visibility, GBP accuracy, NAP consistency and competitor rankings before launching local optimization campaigns effectively.",
  },
  {
    title: "Legal Keyword Research",
    image: images.seoServicesSection.keywordResearchImage.src,
    description:
      "We conduct legal keyword research to identify geo-specific terms that potential clients use in local searches. Our approach enhances law firms' visibility in Google Maps and AI search results.",
  },
  {
    title: "Local On Page SEO Optimization",
    image: images.seoServicesSection.onPageOptimizationImage.src,
    description:
      "We optimize keywords, meta tags and schema markup across your law firm's website. Our on page SEO strategies ensure every site page is user-friendly and visible in local search engines.",
  },
  {
    title: "Legal Content Marketing",
    image: images.seoServicesSection.technicalSeoImage.src,
    description:
      "We develop customized content and optimize local SEO through practice-area pages, city landing pages, blogs and AI-driven insights for optimal search rankings.",
  },
  {
    title: "Local Off-Page SEO & Link Building",
    image: images.seoServicesSection.localSeoMapPackImage.src,
    description:
      "Our effective off-page strategies strengthen law firms' authority through high quality backlinks from legal directories, local news and relevant Florida sites.",
  },
  {
    title: "Local SEO & GBP Management",
    image: images.seoServicesSection.contentDevelopmentImage.src,
    description:
      "We enhance AI visibility for Florida law firms through optimizing Google Business Profiles and managing local citations. We implement effective review strategies to increase client searches in google.",
  },
  {
    title: "Technical SEO",
    image: images.seoServicesSection.offPageSeoImage.src,
    description:
      "We combine technical SEO to improve global site performance with local SEO. This approach increases geographic visibility through map packs and consistent NAP for targeted traffic and client engagement.",
  },
  {
    title: "Legal Directory & Citation Management",
    image: images.seoServicesSection.askEngineOptimizationImage.src,
    description:
      "We consistently list across Avvo, FindLaw, Justia, Martindale-Hubbell and all major Florida-specific legal directories to enhance local authority signals in Florida markets.",
  },
  {
    title: "Ask Engine Optimization (AEO)",
    image: images.seoServicesSection.generativeEngineOptimizationImage.src,
    description:
      "We combine AEO with local SEO to enhance visibility across platforms like ChatGPT, AI overview, Grok, Gemini. We improve client engagement through optimized content for voice search, \"near me\" queries and geographic relevance.",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    image: images.seoServicesSection.localSeoMapPackImage.src,
    description:
      "We optimize law firm content to boost AI citation credibility, improve search rankings and attract qualified clients. We increase consultations through our optimized local and GEO strategies.",
  },
  {
    title: "Optimization of Conversion Rate",
    image: images.seoServicesSection.seoWebsiteAuditImage.src,
    description:
      "Our SEO strategies for CRO increase consultation requests through enhancing user engagement and identifying friction points. We apply A/B testing to improve conversion rates and local SEO.",
  },
  {
    title: "Transparent Reporting",
    image: images.seoServicesSection.keywordResearchImage.src,
    description:
      "Our team provides detailed monthly reports on rankings, traffic, leads and competitor analysis. We ensure transparency and measurable results for law firm long term growth.",
  },
  {
    title: "Ongoing Strategy and Updation",
    image: images.seoServicesSection.onPageOptimizationImage.src,
    description:
      "Our ongoing SEO ensures adaptability to algorithm changes and competitor actions. We maintain visibility and improve rankings in a local competitive legal market.",
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
                Lawyers in Florida,
              </span>
              <br />
              Designed for the
              <br />
              AI-Driven Search Era
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                In 2026, legal searches extend far beyond traditional links.
                AI-driven platforms now provide direct answers to legal inquiries
                and suggest specific attorneys and law firms effectively.
              </p>

              <p>
                Our local SEO for lawyers Florida excel and exceed traditional
                search rankings and AI-driven platforms.
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
