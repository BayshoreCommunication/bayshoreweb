import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["florida-seo-company"];
import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Building Content Around Keywords Nobody Uses",
    description:
      "Many businesses chase industry terminology or phrases that sound professional to them but draw zero searches from actual consumers. The result is perfectly written content that never brings in any traffic. We always validate demand with search data first. Then, we build pages around the exact terms and questions your customers actually type into Google.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Treating Every Florida Market the Same",
    description:
      "Search behavior in Miami differs heavily from the Panhandle. Competition levels, seasonal demands, and customer habits change by region. Relying on one generic page intended to capture the whole state heavily underperforms everywhere. We adapt your keywords, content localization and directory listings to perfectly match the unique nuances of each specific Florida market.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "Letting Valuable Service Pages Compete Against Each Other",
    description:
      "Having similar pages on one site confuses Google crawlers. When search engines cannot determine which page is the most relevant, your rankings split and both pages weaken. We assign one clear, distinct keyword target to every page. Content consolidation and strategic internal linking then funnel authority to strengthen your most important, revenue-generating pages.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Leaving Business Information Inconsistent Across the Web",
    description:
      "Conflicting phone numbers, old addresses, or varying business names across directories destroy search engine trust. If Google feels confused, it will hesitate to show your local listing. Customers might even call dead numbers and simply give up. We systematically standardize your name, address and phone details everywhere your business is mentioned online.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "Ignoring Technical Issues That Restrict Search Visibility",
    description:
      "Slow-loading pages, broken internal links, and crawl errors quietly restrict your visibility. The best content in the world goes completely unseen if a search engine cannot access it. We rigorously review your site structure and Core Web Vitals using Google Search Console. Fixing these backend barriers allows your pages to compete fairly on their actual merits.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Measuring Rankings Without Measuring Business Results",
    description:
      "A top ranking means very little if the phone stays quiet. Reports that stop at keyword positions hide the real truth about your return on investment. We track actual leads, phone calls, and conversions through Google Analytics. Partnering with a specialized Florida SEO company means every optimization decision ties directly back to actual business growth rather than empty vanity metrics.",
  },
];

export default function CommonSeoMistakes() {
  return (
    <section className="bg-[#F9FAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] max-w-[780px] font-bold leading-[1.05] text-black">
              Common <span className="text-[#FF6F00]">SEO Mistakes</span>{" "}
              Florida Businesses{" "}
              <span className="text-[#FF6F00]">Make</span>
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              Many local companies struggle to rank because of foundational errors in their digital strategy. We help you avoid these common complexities so your website performs at its absolute full potential.
            </p>
          </div>
        </div>

        {/* Main Image */}
        <div className="mt-10 overflow-hidden rounded-[24px]">
          <Image
            src={images.commonSeoMistakesSection.commonSeoMistakesBanner.src}
            alt={images.commonSeoMistakesSection.commonSeoMistakesBanner.alt}
            title={images.commonSeoMistakesSection.commonSeoMistakesBanner.title}
            width={1200}
            height={600}
            className="h-auto w-full object-cover max-h-[500px]"
          />

          <div style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }}>
            {images.commonSeoMistakesSection.commonSeoMistakesBanner.caption && (
              <p>{images.commonSeoMistakesSection.commonSeoMistakesBanner.caption}</p>
            )}
            {images.commonSeoMistakesSection.commonSeoMistakesBanner.description && (
              <p>{images.commonSeoMistakesSection.commonSeoMistakesBanner.description}</p>
            )}
          </div>
        </div>

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
