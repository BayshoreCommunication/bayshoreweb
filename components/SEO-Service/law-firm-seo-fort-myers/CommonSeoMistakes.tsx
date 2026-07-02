import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["law-firm-seo-fort-myers"];
import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "No Local Keyword Targeting",
    description:
      "Optimizing without geographic modifiers does not attract Fort Myers clients. Location-specific language is required to surface for searches that convert.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Incomplete Google Business Profile",
    description:
      "Missing categories and contact details prevent map pack visibility. Absent practice area descriptions further suppress local search performance.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Thin Practice Area Pages",
    description:
      "Short, generic pages signal low expertise to Google. For Fort Myers, standing out means creating meaningful pages tied to the area. Pages built around local context help gain ground in search results here.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "Unresolved Technical Errors",
    description:
      "Slow loading times or broken links hurt a page's standing with search engines, regardless of how good the material might be. Mobile performance issues and missing schema markup compound the problem.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "No Link-Building Program",
    description:
      "Domain authority is a primary ranking factor for legal websites. Left behind often are companies missing a clear plan for links, while others move ahead with purpose.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Inconsistent Effort",
    description:
      "SEO demands ongoing work, not isolated attempts. Over time, visibility fades when updates pause. New material must appear at predictable intervals. Routine maintenance keeps rankings stable.",
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
              <span className="text-[#FF6F00]">Fort Myers</span>{" "}
              Law Firms Make
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              Most Fort Myers law firms are not failing at SEO through
              lack of effort. Six persistent mistakes quietly destroy
              local ranking potential.
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

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            className="
              group
              relative
              overflow-hidden

              h-[52px]

              rounded-md

              bg-[#FF6F00]

              px-8
              md:px-12

              text-[14px]

              font-semibold
              text-white
            "
          >
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full " />

            <span className="relative flex items-center gap-2 text-[14px]">
              Start Fixing Your Fort Myers Law Firm SEO Today
              <span>→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
