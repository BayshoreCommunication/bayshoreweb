import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["seo-services-for-small-businesses-in-florida"];
import Image from "next/image";

const seoSteps = [
  {
    number: "01",
    image: images.seoCustomerJourneySection.technicalAuditStepImage.src,
    title: "SEO ranks your business in Google 3-pack",
    description:
      "Your business appears in 3 pack above organic results whenever customers search for local services. Listed businesses in 3 pack generate more traffic and customer actions.",
  },
  {
    number: "02",
    image: images.seoCustomerJourneySection.onPageOptimizationStepImage.src,
    title:
      "SEO helps optimize your business category and keyword relevance",
    description:
      "When first-time searchers query “injury lawyer near me,\" optimized and active Business Profiles become visible as service recommendations.",
  },
  {
    number: "03",
    image: images.seoCustomerJourneySection.offPageStrategyStepImage.src,
    title:
      "SEO ensures complete & accurate Google Business Profile and drives revenue",
    description:
      "Complete & correct informations and clear photos on GBP build trust. Encourages customers to click, visit locations, and buy (or book consultations).",
  },
  {
    number: "04",
    image: images.seoCustomerJourneySection.analyticsReportingStepImage.src,
    title:
      "Search-engine-optimized keywords match buyer intent and increase traffic",
    description:
      "Locally targeted keywords, for instance “tax advisor tampa” or “weight loss center west tampa,” build authority around specific cities and areas.",
  },
  {
    number: "05",
    image: images.seoCustomerJourneySection.technicalAuditStepImage.src,
    title: "Automated review collection systems produce more conversions",
    description:
      "Earning 50+ reviews generates more sales from search traffic. With SEO strategies, you collect Google reviews and respond professionally to build more trust among customers.",
  },
  {
    number: "06",
    image: images.seoCustomerJourneySection.onPageOptimizationStepImage.src,
    title:
      "Optimized websites with fast speed mobile performance converts clicks into sales",
    description:
      "Google ranks your business earn through local SEO and can drive 2x more vsists when sites load quickly on mobile.",
  },
  {
    number: "07",
    image: images.seoCustomerJourneySection.offPageStrategyStepImage.src,
    title:
      "SEO strategies help your business appear in AI-generated answers for targeted queries",
    description:
      "AI recommendation algorithms pull data from optimized websites, Business Profiles, authoritative content, and directories.",
  },
];

export default function SeoCustomerJourney() {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#081B4B] md:text-[48px]">
            How SEO Turns{" "}
            <span className="text-[#FF6F00]">Florida Searches</span> Into{" "}
            <span className="text-[#FF6F00]">
              Paying Customers for Small Businesses
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-7 text-black/70 md:text-[18px] md:leading-8">
            Every day millions of consumers search your niche in Google and AI
            tools such as Gemini, Grok, ChatGPT and 12-16% of them turn into
            paying customers. This happens because of investing in SEO services
            for small businesses in Florida. Simple yet effective SEO process
            connects high intent searches directly to phone calls, in-person
            visits or checkout pages.
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
