import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Geographic Keyword Mismatch",
    description:
      "Broad, non-local keyword targeting produces rankings that mean nothing to Spring Hill Florida buyers. High-intent local searches require content and page structure that speaks directly to the community and its surrounding Hernando County areas.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Disorganized Business Listing Data",
    description:
      "Conflicting directory listings with mismatched names, addresses, or phone numbers diminish local search rankings. Google uses citation consistency as an important signal. If your Spring Hill business shows up differently online, it’s less likely to get good placement.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Overlooked Page Speed",
    description:
      "Users leave slow-loading pages in seconds. Search engines record that behavior. Both the ranking penalty and the lost customer are real, measurable costs for Spring Hill businesses that allow speed issues to persist without correction.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "Content With No Local Relevance",
    description:
      "Web pages that contain no geographic context, no local keywords, and no community-specific information cannot match the intent behind Spring Hill, Florida, search queries. Ranking requires content that speaks the language of local consumer searches.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "Weak Technical Website Foundation",
    description:
      "Errors in crawl pathways, missing canonical tags, duplicate page content, and absent schema markup prevent Google from fully evaluating your website. These silent structural problems cap your ranking potential regardless of content quality.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Stopping After an Initial SEO Setup",
    description:
      "Competitors who invest in ongoing SEO gain authority and ranking momentum every month. A business that stops optimization after an initial effort falls behind those who treat search visibility as a continuous growth investment.",
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
              <span className="text-[#FF6F00]">Spring Hill Florida</span>{" "}
              Businesses Make
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              Many businesses in Spring Hill, Florida, invest in digital presence. They see little return because of foundational errors that go unnoticed for months or years. These mistakes quietly block rankings and customer acquisition.
            </p>
          </div>
        </div>

        {/* Main Image */}
        <div className="mt-10 overflow-hidden rounded-[24px] ">
          <Image
            src="/seo-company-wesley-chapel/common-seo-mistakes-banner.png"
            alt="Common SEO Mistakes"
            width={800}
            height={800}
            className="h-auto w-full object-cover"
          />
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
              Start Fixing Your Spring Hill SEO Today
              <span>→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
