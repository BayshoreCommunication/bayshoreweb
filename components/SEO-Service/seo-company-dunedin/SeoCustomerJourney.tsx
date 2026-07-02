import seoImages from "@/lib/seo-service-images.json";
const images = seoImages["seo-company-dunedin"];
import Image from "next/image";

const seoSteps = [
  {
    number: "01",
    image: images.seoCustomerJourneySection.technicalAuditStepImage.src,
    title: "Visibility at the Moment of Decision",
    description:
      "When people in Dunedin, Florida search for the services you provide your business shows up. People see your name. This happens when people are already looking to do something so they are more likely to call you or visit your business.",
  },
  {
    number: "02",
    image: images.seoCustomerJourneySection.onPageOptimizationStepImage.src,
    title: "Google Maps Prominence That Generates Calls",
    description:
      "If you have a Google Business Profile that’s complete and up to date, people in your area can see your business address, hours, reviews and phone number without having to go to your website. This helps people in Dunedin, Florida find your business on Google Maps.",
  },
  {
    number: "03",
    image: images.seoCustomerJourneySection.offPageStrategyStepImage.src,
    title: "Traffic With Real Purchasing Intent",
    description:
      "SEO helps your business get noticed by people in Dunedin, Florida who are actually looking for what you sell. This means you do not get a lot of people visiting your website who’re not really interested in buying something from you.",
  },
  {
    number: "04",
    image: images.seoCustomerJourneySection.analyticsReportingStepImage.src,
    title: "Steady Flow of Inbound Inquiries",
    description:
      "If your website is easy to use and has the information, people who visit your website are more likely to call you, ask for an appointment or send you a message. These are people who’re ready to spend money now.",
  },
  {
    number: "05",
    image: images.seoCustomerJourneySection.technicalAuditStepImage.src,
    title: "Authority That Builds Month After Month",
    description:
      "If you keep working on your SEO your website becomes well known and you show up in search results for more keywords. This helps you get customers without having to spend a lot of money on advertising. Over time this helps your business get a stream of new customers in Dunedin, Florida.",
  },
];

export default function SeoCustomerJourney() {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#081B4B] md:text-[48px]">
            How SEO Turns <span className="text-[#FF6F00]">Dunedin Florida</span> Searches Into{" "}
            <span className="text-[#FF6F00]">Paying Customers</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-7 text-black/70 md:text-[18px] md:leading-8">
            Ready to make a purchase, someone in Dunedin, Florida begins looking online. Spotting what they want shifts them into buyer mode fast. A local business becomes visible exactly when that search happens. Timing matters here. With help from an experienced seo company dunedin visibility grows just as decisions are being made.
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
