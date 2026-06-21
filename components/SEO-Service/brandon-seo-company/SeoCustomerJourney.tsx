import Image from "next/image";

const seoSteps = [
  {
    number: "01",
    image: "/seo-company-wesley-chapel/seo-step-1.png",
    title: "Keyword intent matching",
    description:
      "Targeting searches like \"Brandon FL DUI attorney\" or \"weight loss clinic Brandon\" captures people mid decision with browsing.",
  },
  {
    number: "02",
    image: "/seo-company-wesley-chapel/seo-step-2.png",
    title: "Google Business Profile optimization",
    description:
      "Properly optimized GBP puts Brandon businesses in front of mobile searchers and local map results before organic listings.",
  },
  {
    number: "03",
    image: "/seo-company-wesley-chapel/seo-step-3.png",
    title: "Service page optimization",
    description:
      "Each service your business offers needs optimized pages targeting specific Brandon area queries rather than single generic homepage.",
  },
  {
    number: "04",
    image: "/seo-company-wesley-chapel/seo-step-4.png",
    title: "Review signals and reputation rate",
    description:
      "Consistent new reviews from Brandon customers lift map pack position because Google factors review frequency and quality into local rankings.",
  },
  {
    number: "05",
    image: "/seo-company-wesley-chapel/seo-step-1.png",
    title: "Content with exact answers to buyer questions",
    description:
      "Blog posts and FAQ content targeting Brandon specific concerns build topical authority and capture researchers.",
  },
  {
    number: "06",
    image: "/seo-company-wesley-chapel/seo-step-2.png",
    title: "Mobile search capture",
    description:
      "Sites optimized for mobile speed and UX convert over 60% of local searchers into leads faster.",
  },
  {
    number: "07",
    image: "/seo-company-wesley-chapel/seo-step-3.png",
    title: "Schema markup for rich results",
    description:
      "Structured data tells Google exactly about your business services and improves click through rates on Brandon search results.",
  },
  {
    number: "08",
    image: "/seo-company-wesley-chapel/seo-step-4.png",
    title: "Conversion focused landing pages",
    description:
      "Search engine optimization helps boost rankings with pages designed to convert Brandon visitors into form fills, calls or appointments.",
  },
];

export default function SeoCustomerJourney() {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#081B4B] md:text-[48px]">
            How SEO Turns <span className="text-[#FF6F00]">Brandon Florida Searches</span> Into{" "}
            <span className="text-[#FF6F00]">Paying Customers</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-7 text-black/70 md:text-[18px] md:leading-8">
            SEO matches your business to specific keywords of Brandon residents type to hire, buy or book along with increasing traffic.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 md:mt-24 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {seoSteps.map((step) => (
            <div
              key={step.number}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-[24px]
                border
                border-black/5
                bg-white

                max-w-full

                shadow-[0_8px_30px_rgba(0,0,0,0.05)]

                transition-all
                duration-500

                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]

                md:flex-row
                p-4
                md:p-8
              "
            >
              {/* Image */}
              <div
                className="
                  relative

                  h-[280px]
                  w-full

                  md:h-[250px]
                  md:w-[250px]

                  shrink-0
                  overflow-hidden
                  hover:rounded-[24px]
                "
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                    object-top
                    rounded-[20px]
                    md:rounded-[24px]
                    
                  "
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col pt-5 md:p-8">
                <div className="flex items-start gap-4">
                  <span
                    className="
                      flex
                      h-12
                      w-12

                      md:h-16
                      md:w-16

                      items-center
                      justify-center

                      rounded-md
                      bg-[#FF6F00]

                      text-base
                      md:text-xl

                      font-bold
                      text-white
                    "
                  >
                    {step.number}
                  </span>

                  <h3 className="text-[22px] font-bold leading-tight text-black md:text-[24px]">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-5 text-[15px] leading-7 text-black/70 md:text-[16px] md:leading-8">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
