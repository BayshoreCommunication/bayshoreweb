import Image from "next/image";

const seoSteps = [
  {
    number: "01",
    image: "/seo-company-wesley-chapel/seo-step-1.png",
    title: "Google Map Pack Dominance",
    description:
      "Significantly increases clicks and calls from potential clients when firms appear in Google Maps' top 3 positions.",
  },
  {
    number: "02",
    image: "/seo-company-wesley-chapel/seo-step-2.png",
    title: "High-Intent \"Near Me\" Searches",
    description:
      "As maximum clients in Florida prefer local attorneys, optimizing \"near me\" queries increases visibility in AI search.",
  },
  {
    number: "03",
    image: "/seo-company-wesley-chapel/seo-step-3.png",
    title: "Optimized Google Business Profile (GBP)",
    description:
      "Optimized and verified GBP builds trust, google visibility and continuous incoming leads for law firms in Florida.",
  },
  {
    number: "04",
    image: "/seo-company-wesley-chapel/seo-step-4.png",
    title: "Consistent Local Citations & Directories",
    description:
      "NAP or consistent name, address and phone number across platforms like Yelp, BBB establish credibility of law firms in google and AI search engines.",
  },
  {
    number: "05",
    image: "/seo-company-wesley-chapel/seo-step-1.png",
    title: "Localized Content & Keywords",
    description:
      "Search relevance for Florida's local demographics enhances through publishing city specific content.",
  },
  {
    number: "06",
    image: "/seo-company-wesley-chapel/seo-step-2.png",
    title: "Reputation Management",
    description:
      "Collecting positive reviews and having high ratings in google impact potential clients to choose specific law firms.",
  },
];

export default function SeoCustomerJourney() {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#081B4B] md:text-[48px]">
            How Local SEO Turns{" "}
            <span className="text-[#FF6F00]">Florida Legal</span> Searches Into{" "}
            <span className="text-[#FF6F00]">Paying Clients</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-7 text-black/70 md:text-[18px] md:leading-8">
            Florida&apos;s competitive legal industry creates a challenging
            acquaintance stage for qualified attorneys to differentiate
            themselves. Local SEO for law firms effectively transforms searches
            into paying clients through excelling in location-specific queries.
            With local SEO for lawyers Florida ensures high-intent clients
            discover the firm within Google&apos;s &quot;Map Pack.&quot;
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

        {/* Footer note */}
        <p className="mx-auto mt-10 max-w-[900px] text-center text-[15px] leading-8 text-black/60 md:text-[17px]">
          For Florida Legal SEO, seasonal demand varies and influences search
          volume. Moreover, regional differences necessitate personalized
          strategies in spite of high competition for legal services.
        </p>
      </div>
    </section>
  );
}
