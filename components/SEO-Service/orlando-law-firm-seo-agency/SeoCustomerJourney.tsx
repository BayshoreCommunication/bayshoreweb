import Image from "next/image";

const seoSteps = [
  {
    number: "01",
    image: "/seo-company-wesley-chapel/seo-step-1.png",
    title: "Ranking for high intent Orlando legal keywords",
    description:
      "Searchers use local area specific, high intent phrases. Optimizing keywords for these searches secures law firm in Google's top organic ranking and map listing.",
  },
  {
    number: "02",
    image: "/seo-company-wesley-chapel/seo-step-2.png",
    title: "Local legal content builds trust before first contact",
    description:
      "Explaining in content about any law or rule's effect on cases performs better than generic practice area descriptions and pre sells your expertise.",
  },
  {
    number: "03",
    image: "/seo-company-wesley-chapel/seo-step-3.png",
    title: "Google's AI Overviews pull from websites with clear, structured content",
    description:
      "AI generated search summaries cite directly from law firm pages’ content if answer to specific legal questions in a well structured way. It drives referral traffic without requiring clicks.",
  },
  {
    number: "04",
    image: "/seo-company-wesley-chapel/seo-step-4.png",
    title: "Regular NAP citations in Florida legal directories build local authority",
    description:
      "Accurate listings on FindLaw, Florida Bar directories, Justia and Avvo indicate geographic relevance to Google for Orlando searches.",
  },
  {
    number: "05",
    image: "/seo-company-wesley-chapel/seo-step-1.png",
    title: "Practice area page authority drives case volume for specific legal niches",
    description:
      "Separate page optimized for specific niche outperforms a general criminal defense page every time.",
  },
  {
    number: "06",
    image: "/seo-company-wesley-chapel/seo-step-2.png",
    title: "Review acquisition strategy to convert clicks to consultation",
    description:
      "With SEO structured approach for collecting Google reviews from satisfied clients convert more searchers into consultations.",
  },
];

export default function SeoCustomerJourney() {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#081B4B] md:text-[48px]">
            How SEO Turns <span className="text-[#FF6F00]">Orlando Legal Searches</span> Into{" "}
            <span className="text-[#FF6F00]">Paying Clients</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-7 text-black/70 md:text-[18px] md:leading-8">
            After every accident, victims always grab their phones and search for a reliable law firm from top rank list. Proper strategy from Orlando law firm SEO agency puts your firm directly in front of that query.
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
