import Image from "next/image";

const seoSteps = [
  {
    number: "01",
    image: "/seo-company-wesley-chapel/seo-step-1.png",
    title: "High-Intent Keyword Targeting",
    description:
      "High-intent keyword targeting that captures patients who are ready to book right away. Your practice appears at the top of local results with strong reviews and clear information.",
  },
  {
    number: "02",
    image: "/seo-company-wesley-chapel/seo-step-2.png",
    title: "Local Map Pack Optimization",
    description:
      "Local map pack optimization that places your practice above competitors for nearby searches. A patient in Hyde Park types 'dentist near me' and your practice is the first result they see.",
  },
  {
    number: "03",
    image: "/seo-company-wesley-chapel/seo-step-3.png",
    title: "Patient-Focused Content",
    description:
      "Questions patients ask shape the words on each page. These answers guide visitors closer to making appointments. Pages work quietly but directly, offering clarity instead of pressure. Booking becomes a natural choice when confusion fades.",
  },
  {
    number: "04",
    image: "/seo-company-wesley-chapel/seo-step-4.png",
    title: "Mobile-First Performance",
    description:
      "Pages built for mobile devices load quickly, cutting down on visitor drop-offs while boosting phone inquiries. A streamlined experience keeps attention, steering behavior toward calling instead of leaving.",
  },
];

export default function SeoCustomerJourney() {
  return (
    <section className="bg-[#FFFFFF] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#081B4B] md:text-[48px]">
            How SEO Turns <span className="text-[#FF6F00]">Tampa</span>
            {" "}Dental Searches Into{" "}
            <span className="text-[#FF6F00]">Booked Appointments</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[900px] text-[15px] leading-7 text-black/70 md:text-[18px] md:leading-8">
            A patient in Hyde Park types &quot;dentist near me&quot; into the Google search bar right now.
            Your practice appears at the top of local results with strong reviews and clear information.
            They click, read, trust and call your front desk to make an appointment directly.
            Strategic SEO is just what transforms normal searches into actual booked appointments.
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
