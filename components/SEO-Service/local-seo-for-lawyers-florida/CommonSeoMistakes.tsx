import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["local-seo-for-lawyers-florida"];
import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Inconsistent NAP Data in Directory Sites",
    description:
      "Incorrect or invalid firm name, address or phone number across Avvo, Yelp, websites negatively impact local authority and credibility.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Not Updating Google Business Profile (GBP)",
    description:
      "Old and incomplete GBP, no photos or unchanged old hours weaken firms' AI search visibility and trust.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Generic Category Selection for Practice Areas",
    description:
      "Using generic terms like just \"Attorney\" rather than specifically categorizing as \"Personal Injury Attorney\" limits relevant search results.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "Thin/Duplicate Content for Law Firm",
    description:
      "Using generic legal content rather than developing customized, detailed material for Florida's specific laws discourages client engagement.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "Ignoring Localized Keywords",
    description:
      "Using \"Florida lawyer\" keyword instead of long-tail keywords such as \"top DUI defense attorney in Florida\" lowers search rankings in google.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Poor Mobile Experience",
    description:
      "Site pages or URLs that load slowly on phone or not mobile-optimized affect legal searches.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Ignoring E-E-A-T Signals",
    description:
      "Not presenting attorney profiles, bar admissions, client reviews and case outcomes in an ethical way lowers firms' credibility.",
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
              Common <span className="text-[#FF6F00]">Local SEO</span> Mistakes{" "}
              <span className="text-[#FF6F00]">Florida Law Firms</span> Make
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              Many Florida legal practices struggle because they fail to optimize
              their local search presence. Poorly managed listings often prevent
              qualified leads from contacting your firm for urgent assistance.
            </p>
          </div>
        </div>

        {/* Main Image */}
        <div className="mt-10 overflow-hidden rounded-[24px]">
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
                <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-black">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-black/70">
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
