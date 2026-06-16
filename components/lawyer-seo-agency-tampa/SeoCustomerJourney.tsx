import Image from "next/image";

const seoSteps = [
  {
    number: "01",
    image: "/seo-company-wesley-chapel/seo-step-1.png",
    title: "Search Visibility",
    description:
      "Your law firm appears when Tampa residents search for terms like “personal injury lawyer Tampa” or “Tampa family law attorney,” instantly establishing credibility and trust with people who are ready to hire.",
  },
  {
    number: "02",
    image: "/seo-company-wesley-chapel/seo-step-2.png",
    title: "Google Maps Prominence",
    description:
      "When your Google Business Profile is properly optimized, nearby clients find your office, read your reviews, and call directly to book a consultation with your firm. This is where a lawyer SEO agency tampa approach ensures you appear at the top in your neighborhood.",
  },
  {
    number: "03",
    image: "/seo-company-wesley-chapel/seo-step-3.png",
    title: "Right Clients, Not Just Any Traffic",
    description:
      "Legal SEO targets people who are actively looking for the specific type of legal representation your firm provides, not random visitors with no intent to retain an attorney.",
  },
  {
    number: "04",
    image: "/seo-company-wesley-chapel/seo-step-4.png",
    title: "Consultations, Not Just Clicks",
    description:
      "A well-optimized law firm website converts search visibility into booked consultations, inbound phone calls, and contact form submissions from ready-to-hire clients throughout Tampa.",
  },
];

export default function SeoCustomerJourney() {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#081B4B] md:text-[48px]">
            How SEO converts <span className="text-[#FF6F00]">Tampa legal</span>,
             searches into{" "}
            <span className="text-[#FF6F00]">paying clients</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-7 text-black/70 md:text-[18px] md:leading-8">
            When a potential client searches for a Tampa attorney, they are not casually browsing. They have a legal need and they are ready to make a decision. Lawyer SEO agency tampa connects your firm with those high-intent searchers at exactly the right moment in their decision process.
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
