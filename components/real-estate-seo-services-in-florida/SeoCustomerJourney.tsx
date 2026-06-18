import Image from "next/image";

const seoSteps = [
  {
    number: "01",
    image: "/seo-company-wesley-chapel/seo-step-1.png",
    title: "High Intent Buyer and Seller Traffic",
    description:
      'SEO work on target searches like "waterfront homes in Sarasota" or "sell my house fast in Tampa" from people who are ready to move.',
  },
  {
    number: "02",
    image: "/seo-company-wesley-chapel/seo-step-2.png",
    title: "Neighborhood & Community Landing Pages",
    description:
      "Community specific landing pages in Florida will rank faster and produce better leads than generic state wide pages.",
  },
  {
    number: "03",
    image: "/seo-company-wesley-chapel/seo-step-3.png",
    title: "IDX Page Optimization",
    description:
      "Optimized property search pages convert anonymous visitors into registered leads your agents can follow up with.",
  },
  {
    number: "04",
    image: "/seo-company-wesley-chapel/seo-step-4.png",
    title: "Pre Purchase Content for Early Stage Buyers",
    description:
      "Content covering Florida flood zones, HOA rules, and school districts reaches buyers months before they contact anyone.",
  },
  {
    number: "05",
    image: "/seo-company-wesley-chapel/seo-step-1.png",
    title: "Google Local Map Pack Rankings",
    description:
      "Placing in the top three local results drives direct calls and form submissions at zero per click cost.",
  },
  {
    number: "06",
    image: "/seo-company-wesley-chapel/seo-step-2.png",
    title: "Lead Volume That Grows Month Over Month",
    description:
      "Every month of SEO work compounds the last, building a lead channel that keeps performing without ad spend behind it.",
  },
];

export default function SeoCustomerJourney() {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#081B4B] md:text-[48px]">
            How SEO Helps <span className="text-[#FF6F00]">Florida</span>{" "}
            Property Searches Find{" "}
            <span className="text-[#FF6F00]">Real Estate Clients</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-7 text-black/70 md:text-[18px] md:leading-8">
            SEO services for real estate businesses in Florida work because
            they put your business in front of buyers and sellers the moment
            they decide to act. Every search is a raised hand.
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
