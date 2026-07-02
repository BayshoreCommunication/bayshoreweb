import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["seo-services-for-small-businesses-in-florida"];
import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Considering Florida as one market",
    description:
      "Generic strategies overlook location pages' city names in H1, title tags, and meta descriptions. This dilutes ranking in search markets for nearby high-demand areas and cities.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Inconsistent NAP data across directories",
    description:
      "Incorrect location names confuse search algorithms. For instance, “St Pete travel agency\" instead of “St. Petersburg travel agency.\" Google considers it ambiguous information and reduces its search visibility.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Targeting wrong keywords for your area",
    description:
      "Informational keywords such as “accounting tips for entrepreneurs” pull national traffic yet generate zero revenue. Transactional and local keywords such as “tax advisor tampa” attract paying customers.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "Ignoring seasonal search behavior",
    description:
      "Having no content with target keywords leaves poor impressions on search ranks because SEO takes weeks to index and rank new pages. This leads to failing to capture customers' attention in peak demand seasons.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "Leaving Google Business Profile incomplete or inactive",
    description:
      "Google considers incomplete or incorrectly categorized business profiles to be poorly managed. Search algorithms suppress that profile and prevent it from appearing in key searches.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Not working on a review strategy",
    description:
      "Passive approach to collecting reviews creates inconsistent patterns for Google’s analysis. Because Google treats review rate and relevance as strong ranking signals.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Ignoring bilingual search market",
    description:
      "Effective Florida SEO requires specific knowledge of dual language search behavior and seasonal trends. Without it your content remains invisible to key sectors such as finance, healthcare, tourism and real estate.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Seeing SEO as a one time project",
    description:
      "SEO requires time and regular maintenance. Stopping creates gap in Google and AI search visibility and prevents reaching potential buyers.",
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
              <span className="text-[#FF6F00]">Florida Small Businesses</span>{" "}
              Make
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              Many Florida small businesses invest in SEO services yet receive
              little return on investment. This happens because local search
              market undervalue businesses that rely on generic strategies. In
              the end, this costs you rankings, traffic, and customers in a
              competitive market.
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
