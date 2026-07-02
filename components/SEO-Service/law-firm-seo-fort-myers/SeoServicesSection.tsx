import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["law-firm-seo-fort-myers"];
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "Local Keyword Research and Competitive Analysis",
    image: images.seoServicesSection.seoWebsiteAuditImage.src,
    description:
      "We identify the exact terms Fort Myers residents use when searching for legal services. We map those terms against your competitors to surface rankable opportunities.",
  },
  {
    title: "On-Page SEO and Website Optimization",
    image: images.seoServicesSection.keywordResearchImage.src,
    description:
      "Each title tag gets refined, just like meta descriptions, because clarity matters most. Headings take shape slowly, built to support how people search. We also align your schema markup with the exact signals Google uses to evaluate legal websites.",
  },
  {
    title: "Google Business Profile Management",
    image: images.seoServicesSection.onPageOptimizationImage.src,
    description:
      "We optimize your profile with accurate categories and practice area descriptions. Geo-tagged images, review responses, and weekly posts maintain freshness signals.",
  },
  {
    title: "Legal Content Development",
    image: images.seoServicesSection.technicalSeoImage.src,
    description:
      "We produce service pages designed to rank for law firm SEO Fort Myers queries. Content satisfies both search algorithms and the expectations of prospective clients.",
  },
  {
    title: "Citation Building and NAP Consistency",
    image: images.seoServicesSection.localSeoMapPackImage.src,
    description:
      "We build and maintain your firm's listings across legal directories and local platforms. Consistent name, address, and phone data strengthens your local search authority.",
  },
  {
    title: "Link Building and Domain Authority",
    image: images.seoServicesSection.contentDevelopmentImage.src,
    description:
      "We get backlinks from legal directories, Southwest Florida publications and Southwest Florida bar resources. This will help increase domain authority for ranking on competitive keywords.",
  },
  {
    title: "Technical SEO Audit and Remediation",
    image: images.seoServicesSection.offPageSeoImage.src,
    description:
      "We search for slow load times, mobile issues and broken links and fix them. During this phase, structured data is also fixed and duplicate content is removed.",
  },
  {
    title: "Monthly Reporting and Performance Tracking",
    image: images.seoServicesSection.askEngineOptimizationImage.src,
    description:
      "You receive a monthly report covering rankings, traffic, and lead attribution. A forward-looking plan for the following month is included in every report.",
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
                Fort Myers
                <br />
                Law Firms
              </span>
              <br />
              Crafted for the
              <br />
              AI-Driven Search Era
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                Law firm SEO Fort Myers can move ahead by adjusting to shifts
                tied to artificial intelligence. A lead may emerge for those
                tuning into new technological cues.
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
