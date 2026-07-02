import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["local-seo-services-for-small-business-naples-florida"];
import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Claiming But Not Fully Optimizing GBP",
    description:
      "Incomplete Google Business Profile is often invisible to local Naples searchers. A partially filled profile gives Google insufficient signals to rank your business in the local 3-Pack.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Using Irrelevant Keywords For Searches",
    description:
      "Naples customers search locally so non-relevant keywords don't reflect real local search behavior, leading to traffic loss and below-top ranking.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Ignoring Online Reviews and Customer Feedback",
    description:
      "Businesses with no response to reviews are 30% more likely to have lower local rank. Negative or no reviews leave a negative impression on Naples Florida customers.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "Publishing Content Without Local Focus",
    description:
      "Content that's not relevant to Naples locations fails to attract high-intent local traffic. Generic service descriptions without geographic signals do not appear in local search results.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "Inconsistent NAP Information Across Directories",
    description:
      "Mismatched business name, address and phone data confuse Google and directly lower your local search authority in Naples Florida.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Having a Slow or Not Mobile-Friendly Website in 2026",
    description:
      "Most mobile visitors leave a page that takes longer than 3 seconds to load. Most of the Naples Florida searches happen on mobile, making speed a critical ranking factor.",
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
              <span className="text-[#FF6F00]">Naples Florida Small</span>{" "}
              Businesses Make
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              Many Naples, Florida, small businesses invest in a website but completely neglect local SEO.
              These mistakes cost you real customers every single day.
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
              Start Fixing Your Naples Florida SEO Today
              <span>→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
