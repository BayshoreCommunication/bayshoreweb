import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Using common SEO template with no Orlando specific content",
    description:
      "Not mentioning Orange County courts, Florida statutes, or local legal details in content leads to low ranks in Orlando's search results.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Ignoring technical SEO while adding more blog posts",
    description:
      "GoogleBot failing to access website pages, loading failures and broken links cause law firm site to struggle to rank.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "Publishing thin content and lack of E-E-A-T",
    description:
      "Google rejects websites with identical text across multiple practice areas or cities and lacking attorney credentials and case studies.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Targeting broad keywords instead of practice and location combinations",
    description:
      "Firms are losing high conversion searches because of using hyper competitive keywords rather than long tails, localized intent keywords.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "No structured data markup on attorney and legal service pages",
    description:
      "Ranking slowly decreases without schema markup for lawyers, reviews, and local businesses.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Publishing blog content with no search intent behind it",
    description:
      "Articles without targeting Orlando residents' issues or search intention fail to bring traffic or cases.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Viewing Google Business Profile as a ‘Set & Forget’ task",
    description:
      "Inactive GBP listing maintenance with old photos, inconsistent posts, and unresponded reviews drops in local pack rankings.",
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
              <span className="text-[#FF6F00]">Orlando Law Firms</span>{" "}
              Make
            </h2>
          </div>

          <div>
            <p className="text-[15px] leading-7 text-black/70 md:text-[16px]">
              There are several SEO mistakes Orlando law firms make and cost real money in missed client inquiries every month.
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
              Start Fixing Your Orlando Law Firm SEO Today
              <span>→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
