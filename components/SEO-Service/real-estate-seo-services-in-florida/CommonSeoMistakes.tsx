import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["real-estate-seo-services-in-florida"];
import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Targeting the Whole State Instead of Specific Markets",
    description:
      "Broad statewide targeting weakens authority. City and neighborhood specific pages rank faster and attract more qualified leads.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Ignoring Google AI Overviews",
    description:
      "Buyers increasingly find answers inside Google's AI generated responses, and most real estate sites aren't built to appear there.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Scaling with Copied MLS Listing Copy",
    description:
      "Templated property descriptions from MLS feeds create duplicate content across pages, which Google's systems quietly penalize.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "No Active Review Strategy on Google",
    description:
      "Few or outdated Google reviews signal low credibility to buyers and to the algorithm evaluating your local authority.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "Creating Content Based On Listings Instead of Search Intent",
    description:
      "Listings expire, yet community pages remain online, pulling in interest months later. Even when a sale closes, neighborhood guides remain visible.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Skipping Routine Technical SEO Audits",
    description:
      "infection problem, google crawling issue, broken internal links suppress rankings with no visible warning on the front end.",
  },
];

export default function CommonSeoMistakes() {
  return (
    <section className="bg-[#F9FAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
          <div>
            <h2 className="max-w-[780px] text-[34px] font-bold leading-[1.05] text-black md:text-[52px]">
              Common <span className="text-[#FF6F00]">SEO</span> Mistakes{" "}
              <span className="text-[#FF6F00]">Florida Real Estate</span>{" "}
              Businesses Make
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              Most Florida real estate businesses share the same fixable SEO
              problems, and most don&apos;t know these issues are costing them
              leads. Real estate SEO services in Florida only deliver results
              when these gaps are addressed first.
            </p>
          </div>
        </div>

        {/* Main Image */}
        <div className="mt-10 overflow-hidden rounded-[24px] ">
          <Image
            src={images.commonSeoMistakesSection.commonSeoMistakesBanner.src}
            alt={images.commonSeoMistakesSection.commonSeoMistakesBanner.alt}
            title={images.commonSeoMistakesSection.commonSeoMistakesBanner.title}
            width={800}
            height={800}
            className="h-auto w-full object-cover"
          />
        
        <div style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }}>
          {images.commonSeoMistakesSection.commonSeoMistakesBanner.caption && (
            <p>{images.commonSeoMistakesSection.commonSeoMistakesBanner.caption}</p>
          )}
          {images.commonSeoMistakesSection.commonSeoMistakesBanner.description && (
            <p>{images.commonSeoMistakesSection.commonSeoMistakesBanner.description}</p>
          )}
        </div></div>

        {/* Cards */}
        <div className="mt-10 overflow-hidden rounded-[24px] border border-black/5 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {mistakes.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  p-6
                  md:p-8

                  border-b
                  border-black/5

                  xl:border-r

                  transition-all
                  duration-300

                  hover:bg-[#FFF8F3]
                "
              >
                {/* Icon */}
                <div className="mb-5">
                  <div
                    className="
                      inline-flex

                      transition-all
                      duration-500

                      hover:scale-110
                      hover:-translate-y-1
                      hover:drop-shadow-[0_8px_20px_rgba(255,111,0,0.35)]
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={70}
                      height={70}
                      className="
                        h-16
                        w-16

                        md:h-20
                        md:w-20

                        object-contain
                      "
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
                    text-[18px]
                    md:text-[20px]

                    font-bold
                    leading-[1.3]

                    text-black
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4

                    text-[14px]
                    md:text-[15px]

                    leading-7
                    text-black/70
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        </div>
    </section>
  );
}
