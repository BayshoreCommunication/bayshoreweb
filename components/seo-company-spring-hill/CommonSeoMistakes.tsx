import Image from "next/image";

const mistakes = [
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Using Non-Local Keyword Targets",
    description:
      "Targeting wide, generic terms without geographic intent fails to reach Spring Hill Florida consumers who are actively searching for local providers.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "Incomplete Google Business Profile",
    description:
      "Missing categories, absent business descriptions, and unverified listings remove your business from the local map pack entirely.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-4.png",
    title: "Poor Performance on Mobile Devices",
    description:
      "Most people use their phones to search for things. If a website is slow or hard to use on a phone people will leave the site before they even look at what the business has to offer. Devices, like phones, are what people use to do more than 60% of local searches. A bad mobile experience is when a website is slow or confusing on a phone. This makes people leave before they engage with the business.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-5.png",
    title: "Content That Does Not Reflect Local Intent",
    description:
      "Generic service descriptions that do not reflect the actual questions Spring Hill, Florida, consumers typing into Google will not rank or produce inquiries.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-3.png",
    title: "Fragmented Site Structure",
    description:
      "When service pages lack clear internal connections and logical organization, search engines cannot determine their relevance, and those pages fail to rank.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-6.png",
    title: "Duplicate Content Across Multiple Pages",
    description:
      "Having the content on multiple pages of your website can really confuse search engines. They do not know which page of your website to rank. This can also weaken the authority of every page of your website that has this repeated content. Your website has repeated content. This is not good for search engines. Search engines get confused when they see the content on multiple pages of your website. This is why repeated content across your website is a problem.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-1.png",
    title: "Mismatched Business Data Across Directories",
    description:
      "Inconsistent business name, address, and phone information across the web undermines your local credibility signals and reduces your map pack eligibility.",
  },
  {
    image: "/seo-company-wesley-chapel/mistake-2.png",
    title: "No Ongoing Link Authority Strategy",
    description:
      "Businesses that do not build quality backlinks over time fall further behind competitors who are actively growing their domain authority each month.",
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
              A significant number of Spring Hill Florida businesses spend money on website design and digital presence without seeing any meaningful growth in search rankings. The problem is rarely the business itself. It is the presence of avoidable SEO errors that quietly prevent any page from performing.
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
              Start Fixing Your Spring Hill Business SEO Today
              <span>→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
