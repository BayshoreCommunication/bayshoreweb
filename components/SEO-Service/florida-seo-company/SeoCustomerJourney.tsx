import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["florida-seo-company"];
import Image from "next/image";

const seoSteps = [
  {
    number: "01",
    image: images.seoCustomerJourneySection.immediateIntentStepImage.src,
    title: "Reach Customers With Immediate Buying Intent",
    description:
      "Someone searching for emergency AC repair in Orlando needs help right now. SEO places your business in front of these ready buyers at their exact moment of need. They arrive with a specific problem and a budget to solve it. You receive highly qualified website traffic instead of casual browsers, drastically increasing the chances that a visit turns into a closed sale.",
  },
  {
    number: "02",
    image: images.seoCustomerJourneySection.directActionStepImage.src,
    title: "Turn Local Search Exposure Into Direct Customer Actions",
    description:
      "Local search results prominently display call buttons, directions, and booking links right on the main page. We optimize your local listing so every view invites immediate action. Phone calls, direction requests, and form submissions naturally follow. Local prospects act fast when the path to contacting you is clear and completely frictionless.",
  },
  {
    number: "03",
    image: images.seoCustomerJourneySection.conversionPagesStepImage.src,
    title: "Connect Search Queries With Pages Built to Convert",
    description:
      "Ranking alone will not pay the bills. We match every search to a specific page designed for that exact customer need. Clear headlines, undeniable social proof, and simple contact forms gently guide visitors toward reaching out. Form submissions and appointment inquiries rise because the entire user experience perfectly aligns with what they were searching for.",
  },
  {
    number: "04",
    image: images.seoCustomerJourneySection.compoundingChannelStepImage.src,
    title: "Build an Organic Lead Channel That Compounds Over Time",
    description:
      "Each optimized page continues earning traffic month after month. As your digital authority builds, your search results stack on top of one another. Over time, you rely less on paid acquisition to keep the calendar full. Your marketing budget goes much further because the foundational work continues generating returns indefinitely.",
  },
];

export default function SeoCustomerJourney() {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.1] text-[#081B4B]">
            How SEO Turns <span className="text-[#FF6F00]">Florida Searches</span> Into{" "}
            <span className="text-[#FF6F00]">Paying Customers</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-7 text-black/70 md:text-[18px] md:leading-8">
            Search engine optimization does more than increase traffic. It builds a reliable system for capturing high-intent prospects and guiding them toward a sale.
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

                  <h3 className="text-[20px] font-bold leading-tight text-black md:text-[22px]">
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
