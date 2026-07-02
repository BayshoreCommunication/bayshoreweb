import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Competitors are claiming Google map pack",
    description:
      "Plant City medical clinic or law office with no local SEO optimization loses patient calls and client inquiries.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Your service pages target broad terms",
    description:
      "Tax advisor ranking for \"accounting services\" misses every person typing \"small business tax prep Plant City FL\" into search bar.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Slow poorly formatted sites lose mobile visitors",
    description:
      "Retail customers and clinic visitors searching from their phones exit slowly loaded sites.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "No local backlinks lower rankings in Google",
    description:
      "Real estate agencies and law firms not earning mentions from Hillsborough County media and regional directories signal incredibility.",
  },
  {
    number: "05",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Wellness clinics disappear behind national chains",
    description:
      "Local clinics with no organic search presence lose prospective clients to national brands.",
  },
  {
    number: "06",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Travel and hospitality businesses miss high value seasonal queries",
    description:
      "Visitors planning trips around Plant City events and local experiences book with top ranking options for those searches.",
  },
  {
    number: "07",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Financial advisors and IT firms lose trust",
    description:
      "Fiduciary or managed services provider with no search visibility gets passed over.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Plant City Florida
            <br />
            Businesses Are Losing Customers
            <br />
            <span className="text-[#FF6F00]">Without SEO</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/70 md:text-[18px]">
            Plant City&apos;s local economy keeps growing across healthcare, legal services, retail and financial sectors. Businesses without investing in a Plant City SEO company are facing hardship to captivate target customers.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.number}
              className="
                group
                rounded-[24px]
                bg-white
                p-6
                md:p-8

                shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                transition-all
                duration-500

                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <span className="text-[48px] font-bold leading-none text-[#FF6F00]">
                  {card.number}
                </span>

                <div
                  className="
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={60}
                    height={60}
                    className="h-[60px] w-[60px] object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-8 text-[24px] font-bold leading-[1.25] text-black">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-6 text-[16px] leading-8 text-black/70">
                {card.description}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
