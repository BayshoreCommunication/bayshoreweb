import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["seo-company-wesley-chapel"];
import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Targeting Geography-Free Keywords",
    description:
      "Competing for broad national terms produces no local revenue. Effective local SEO requires keywords that reflect how Wesley Chapel customers actually search. Terms without geographic and intent specificity rarely connect your business with the customers who can actually become clients.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "A Google Business Profile Left Unmanaged",
    description:
      "Most local mobile searches result in a map pack click rather than an organic listing click. A profile with missing photos, hours, and descriptions forfeits map pack positions to competitors daily.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Site Speed and Mobile Performance Ignored",
    description:
      "Google's ranking algorithm evaluates page experience signals directly. Slow loading rates of a Wesley Chapel business website will lose customers and the ranking at the same time. More than 60% of local searches are made on a mobile device, which means mobile performance is a must-have ranking factor.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "Service Pages Without Location or Intent Context",
    description:
      "Generic service descriptions without geographic signals do not appear in local search results. Wesley Chapel customers search with specific intent. Pages that miss their location and need will never rank.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "Internal Site Architecture That Misleads Search Engines",
    description:
      "When Google cannot determine which pages are most important, none earn the rankings they deserve. A logical internal linking structure directs authority toward the pages Wesley Chapel customers need.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Backlink Quantity Mistaken for Backlink Quality",
    description:
      "The volume of links is not a substitute for relevance and authority. A few relevant, trusted local links carry more ranking weight than dozens of low-quality links from unrelated websites.",
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
              <span className="text-[#FF6F00]">Wesley Chapel Florida</span>{" "}
              Businesses Make
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              Most Wesley Chapel business owners are not failing at SEO through
              lack of effort. No one warned them about six persistent mistakes
              that quietly destroy local ranking potential.
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
