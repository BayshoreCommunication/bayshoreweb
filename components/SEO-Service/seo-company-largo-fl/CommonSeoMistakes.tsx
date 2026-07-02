import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["seo-company-largo-fl"];
import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Using Keywords Without Geographic Intention",
    description:
      "Terms that lack any connection to Largo or Pinellas County attract visitors who cannot become your customers. Local search intent requires keywords that reflect exactly how area residents phrase their real service queries.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Leaving the Google Business Profile Incomplete",
    description:
      "An unverified or partially completed profile does not compete for map pack positions regardless of how good your site is. This kind of omission removes your business from the search real estate that local buyers trust most immediately.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Neglecting Mobile Performance",
    description:
      "Well over half of all service-related searches in the Largo area originate from a phone rather than a desktop. A site that performs poorly on mobile drives away buyers before they have seen a single line of your content.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "Publishing Content That Misses Local Relevance",
    description:
      "Service pages written without reference to the Largo market rank poorly and fail to resonate with area buyers. Generic descriptions carry no geographic authority and give search engines no reason to surface them locally.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "Disorganized Site Architecture",
    description:
      "A website without proper internal linking prevents search engines from identifying which pages carry priority. Critical service pages then compete poorly even when the content quality on those pages is genuinely strong.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Building No Local Link Profile",
    description:
      "Search engines weigh local backlinks and citations heavily when determining geographic relevance and ranking authority. Without them, a business in Largo will consistently rank below competitors who have invested in that foundation.",
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
              <span className="text-[#FF6F00]">Largo Florida</span>{" "}
              Businesses Make
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              A well-designed website with no traffic strategy behind it is one of the most expensive mistakes a business can make.
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
              Start Fixing Your Largo SEO Today
              <span>→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
