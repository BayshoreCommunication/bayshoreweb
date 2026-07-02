import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["orlando-law-firm-seo-agency"];
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const services = [
  {
    title: "Legal Keyword Research and Search Intent Mapping",
    image: images.seoServicesSection.keywordResearchImage.src,
    description:
      "Identifying Orlando residents' search patterns through keyword research to separate high intent case generating terms from informational queries.",
  },
  {
    title: "Practice Area Page Optimization",
    image: images.seoServicesSection.onPageOptimizationImage.src,
    description:
      "Each page gets written around Florida specific legal context, Orange County court procedures and exact scenarios your target clients are searching for.",
  },
  {
    title: "Google Business Profile Management",
    image: images.seoServicesSection.localSeoMapPackImage.src,
    description:
      "Your GBP listing gets fully built out with accurate practice area categories and service areas across Orange, Seminole, Osceola and Lake Counties. Ongoing management through regular posts, photo updates, and review responses.",
  },
  {
    title: "AI Overview Optimization for Legal Queries",
    image: images.seoServicesSection.askEngineOptimizationImage.src,
    description:
      "Getting your firm cited in Google's AI Overviews summaries for appearing on a large share of legal searches.",
  },
  {
    title: "Legal Schema Markup and Structured Data Implementation",
    image: images.seoServicesSection.technicalSeoImage.src,
    description:
      "Attorney schema, local business schema, review markup, and FAQ structured data make your law firm reliable to Google for recommendations.",
  },
  {
    title: "Florida Bar Compliant Content Strategy",
    image: images.seoServicesSection.contentDevelopmentImage.src,
    description:
      "Every content piece produced is reviewed against Florida Bar advertising rules. You get authorized content and convert clients without creating compliance exposure for your practice.",
  },
  {
    title: "Technical SEO Audit and Site Health Management",
    image: images.seoServicesSection.technicalSeoImage.src,
    description:
      "A full technical audit covers Core Web Vitals, mobile performance, page speed and site architecture, with ranking issue fixes.",
  },
  {
    title: "Orlando Legal Citation Building and Directory Management",
    image: images.seoServicesSection.offPageSeoImage.src,
    description:
      "Consistent citations across Martindale Hubbell, Justia, Florida specific legal directories, Avvo, FindLaw signal geographic authority to Google for Orlando searches.",
  },
  {
    title: "Competitor Gap Analysis",
    image: images.seoServicesSection.generativeEngineOptimizationImage.src,
    description:
      "A full competitor gap analysis map helps outrank competitors through analyzing Orlando's legal search results with specific content, links and technical advantages.",
  },
  {
    title: "Monthly Reporting of Case Inquiries and Rankings",
    image: images.seoServicesSection.seoWebsiteAuditImage.src,
    description:
      "Monthly reports cover organic traffic by practice area, GBP call volume, contact form submissions, and ranking movement to measure performance compared to client intake.",
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
                Orlando
                <br />
                Law Firms,
              </span>
              <br />
              Crafted for the
              <br />
              AI-Driven Search Era
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#FF6F00]" />

            <div className="mt-8 space-y-6 text-[15px] leading-8 text-black/70 md:text-[16px]">
              <p>
                As an Orlando law firm SEO agency, our every service is built to bring more qualified clients finding your firm before they find a competitor.
              </p>

              <p>
                Search optimization in 2026 demands far more than keyword placement on a page. Google&apos;s AI-assisted systems and voice-activated tools have changed how Orlando residents find legal counsel. We build strategies that perform across traditional rankings, AI answers, and every channel your next client uses.
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
