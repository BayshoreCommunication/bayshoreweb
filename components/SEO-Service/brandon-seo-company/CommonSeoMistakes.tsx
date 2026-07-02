import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["brandon-seo-company"];
import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Targeting broad keywords instead of local phrases",
    description:
      "Not using local specific keywords for specific industry is almost impossible to rank in local queries and capture target buyers.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Ignoring Google Business Profile completeness",
    description:
      "Incomplete GBP listings with missing hours, photos or service descriptions consistently rank below fully completed profiles.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "Thin service pages with no specificity",
    description:
      "One generic paragraph page about specific service pages gives Google nothing to rank and gives visitors no reason to call.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Zero backlink strategy",
    description:
      "Without earning links from local directories, industry publications or news sites don't build domain authority for business in Brandon.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Slow sites on mobile networks",
    description:
      "Medical practice or law firm website loads in five seconds on a mobile connection resulting in losing visitors before the page renders.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Similar content across service areas",
    description:
      "Copy pasting same text for Brandon, Tampa and Valrico pages with only city name changed triggers Google penalties instead of rankings.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "No tracking, no optimization",
    description:
      "Businesses running SEO without conversion tracking can not tell which keywords bring leads versus which ones only bring traffic.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Skipping local citation building",
    description:
      "Inconsistent NAP data across Yelp, legal directories, Healthgrades and industry listings confuses Google's local ranking algorithm.",
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
              <span className="text-[#FF6F00]">Brandon Florida</span>{" "}
              Businesses Make
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              Most Brandon businesses lower their rankings, leads and return on investment every month because of unavoidable SEO mistakes.
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
