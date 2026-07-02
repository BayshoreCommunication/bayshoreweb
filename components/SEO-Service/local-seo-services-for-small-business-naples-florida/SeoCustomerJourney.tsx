import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["local-seo-services-for-small-business-naples-florida"];
import Image from "next/image";

const seoSteps = [
  {
    number: "01",
    image: images.seoCustomerJourneySection.technicalAuditStepImage.src,
    title: "GBP Optimization Places You in the Top Local Search",
    description:
      "Actively SEO optimized Google Business Profile ranks in top 3 local results on Google search and Maps. Your Naples Florida business gets seen first by customers ready to buy.",
  },
  {
    number: "02",
    image: images.seoCustomerJourneySection.onPageOptimizationStepImage.src,
    title: "Targeted Local Keywords Attract Buyer Customers",
    description:
      "Specific local keywords like 'property damage attorney near me' connect high-intent queries directly to your Naples Florida business, driving calls and inquiries.",
  },
  {
    number: "03",
    image: images.seoCustomerJourneySection.offPageStrategyStepImage.src,
    title: "Consistent NAP Citations Build Google's Trust",
    description:
      "Accurate business information across directories such as websites, Yelp and others strengthens your local search authority and positions you above Naples competitors.",
  },
  {
    number: "04",
    image: images.seoCustomerJourneySection.analyticsReportingStepImage.src,
    title: "Localized Content Aligns Pages to Search Intent",
    description:
      "Dedicated service pages for Naples neighborhoods capture more traffic from geo-targeted customers. Every page is built to convert Naples Florida visitors into paying customers.",
  },
];

export default function SeoCustomerJourney() {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#081B4B] md:text-[48px]">
            How Local SEO Turns <span className="text-[#FF6F00]">Naples Florida</span>,
            Searches Into{" "}
            <span className="text-[#FF6F00]">Paying Customers</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-7 text-black/70 md:text-[18px] md:leading-8">
            Local SEO connects your small business in Naples, Florida, directly with ready-to-buy
            customers. These are people actively searching for exactly what you offer in Naples.
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
                {(() => {
                  const imgData = Object.values(images.seoCustomerJourneySection).find(
                    (item) => item.src === step.image
                  );
                  if (!imgData) return null;
                  return (
                    <Image
                      src={imgData.src}
                      alt={imgData.alt}
                      title={imgData.title}
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
                  );
                })()}
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
                {(() => {
                  const imgData = Object.values(images.seoCustomerJourneySection).find(
                    (item) => item.src === step.image
                  );
                  if (!imgData) return null;
                  return (
                    <div style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }}>
                      {imgData.caption && <p>{imgData.caption}</p>}
                      {imgData.description && <p>{imgData.description}</p>}
                    </div>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
