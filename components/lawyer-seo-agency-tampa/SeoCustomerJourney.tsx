import Image from "next/image";

const seoSteps = [
  {
    number: "01",
    image: "/seo-company-wesley-chapel/seo-step-1.png",
    title: "From Search Entry to Your Website",
    description:
      "Optimization helps your law firm to get a good position among the first results a Tampa, Florida, searcher finds. That position gets the click and brings a visitor who has a need related to your legal services.",
  },
  {
    number: "02",
    image: "/seo-company-wesley-chapel/seo-step-2.png",
    title: "From Your Website to Verified Trust",
    description:
      "When people see your law firm on the page of search results, it tells them that you are legitimate. They think you are a reputable firm before they even read what you have to say. If you have a local presence, people are saying good things about you, and it is easy to understand what practice areas you cover, then people are more likely to want to retain your services. This is because a good first-page ranking and a solid local presence with reviews and clear information about your services make people trust you and want to engage with your firm. The local presence and the reviews and service information are key to turning that trust into a decision to engage with your firm.",
  },
  {
    number: "03",
    image: "/seo-company-wesley-chapel/seo-step-3.png",
    title: "From Interest to a Direct Inquiry",
    description:
      "A properly structured website removes every obstacle between interest and action, and strategic calls to action guide visitors to the next step. Mobile-enhanced pages keep things smooth on any device. They worked well everywhere. Load times keep visitors in Tampa, Florida, engaged.",
  },
  {
    number: "04",
    image: "/seo-company-wesley-chapel/seo-step-4.png",
    title: "From a Single Sale to an Ongoing Relationship",
    description:
      "Clients who come through organic search are aware and deliberate. They convert at higher rates, spend more per transaction, and are more likely to return and recommend your Tampa, Florida, law firm to others in the community.",
  },
];

export default function SeoCustomerJourney() {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#081B4B] md:text-[48px]">
            How SEO Turns <span className="text-[#FF6F00]">Tampa Florida</span> Legal Searches Into{" "}
            <span className="text-[#FF6F00]">Paying Clients</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-7 text-black/70 md:text-[18px] md:leading-8">
            Search intent is the most powerful client acquisition signal available to law firms. When a Tampa, Florida resident types a query into Google, that action represents a conscious need, not passive curiosity. A dedicated Lawyer SEO Agency Tampa builds the direct pathway from that intent signal to your front door.
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
