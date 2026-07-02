import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["plant-city-seo-company"];
import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Targeting broad state level keywords",
    description:
      "Specific industry sites targeting broad terms face competition from large systems with substantial advertising budgets.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Copying service descriptions across multiple pages",
    description:
      "Multi location businesses with identical page copy confuse search engines and rankings suffer across every page.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "Skipping technical audits",
    description:
      "Broken internal links, missing XML sitemaps and unresolved 404 errors on sites because of missing initial technical review.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Building citations on low authority directory sites",
    description:
      "Any firm with fifty listings on spam directories earns no credible ranking signal from Google.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "Publishing blog content with no internal linking",
    description:
      "Service providing business articles failing to engage users on sites and wasting ranking potential of every post published.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Writing content without fulfilling search intent",
    description:
      "Producing keyword heavy destination articles earns poor engagement, lower rankings and no appearance in AI overviews.",
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
              <span className="text-[#FF6F00]">Plant City Florida</span>{" "}
              Businesses Make
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              Most SEO ranking problems come from fixable mistakes made early and left sitting on websites for months.
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
