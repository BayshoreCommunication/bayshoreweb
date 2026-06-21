import Image from "next/image";

const benefits = [
  {
    image: "/seo-company-wesley-chapel/analysis-icon.png",
    title: "In-Depth Analysis",
    description:
      "Get a comprehensive review of your website SEO performance and key ranking factors specific to Plant City.",
  },
  {
    image: "/seo-company-wesley-chapel/opportunities-icon.png",
    title: "Identify Opportunities",
    description:
      "Discover what's helping your rankings, what's holding you back, and where to focus for maximum growth.",
  },
  {
    image: "/seo-company-wesley-chapel/insights-icon.png",
    title: "Actionable Insights",
    description:
      "Receive a clear, prioritized roadmap with actionable SEO recommendations to improve your Plant City rankings.",
  },
];

export default function SeoAuditBenefits() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                items-center
                text-center

                lg:items-start
                lg:text-left
              "
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center lg:justify-start">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-2xl
                    transition-all
                    duration-500

                    hover:scale-110
                    hover:-translate-y-2
                    hover:-rotate-3

                    hover:drop-shadow-[0_10px_30px_rgba(255,111,0,0.35)]
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="
                      h-[90px]
                      w-[90px]
                      object-contain

                      md:h-[110px]
                      md:w-[110px]

                      transition-all
                      duration-500
                    "
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className="
                  text-[20px]
                  font-bold
                  leading-tight
                  text-black

                  md:text-[25px]
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-[360px]

                  text-[14px]
                  leading-7
                  text-black/75

                  md:text-[16px]
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
