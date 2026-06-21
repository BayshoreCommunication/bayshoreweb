import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Competitors are capturing your searches",
    description:
      "Unoptimized search engines cause your Brandon business to be invisible on Google’s page one and cost you your target client.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Local pack visibility is winner take most",
    description:
      "If your practice, agency, or retail location is not in Google's map 3 results, in most cases searchers will not scroll to find you.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Medical patients research before they book consultations",
    description:
      "Without local SEO strategy, Brandon urgent care or specialty clinics are excluded from search results and lose patient appointments.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Tax and financial clients start with Google",
    description:
      "Firms without search presence do not make shortlist when residents search for local CPAs and advisors in tax season.",
  },
  {
    number: "05",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Travel and hospitality bookings always begin online",
    description:
      "No online visibility causes zero bookings when visitors search for nearest or top hotel to book around Brandon and greater Tampa Bay area.",
  },
  {
    number: "06",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Real Estate buyers and sellers rely on top recommendations",
    description:
      "Agents and brokers without SEO lose inquiries to competitors who rank for neighborhood specific searches.",
  },
  {
    number: "07",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "IT and managed services contracts go to ranked businesses",
    description:
      "MSPs not appearing in search results for small and mid sized businesses' IT support lose long term contracts.",
  },
  {
    number: "08",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Retail foot traffic starts with a search",
    description:
      "Brandon retail businesses without local SEO like \"Near me\" searches are skipped before customer even leaves the house.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Brandon Florida
            <br />
            Businesses Are Losing Customers
            <br />
            <span className="text-[#FF6F00]">Without SEO</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/70 md:text-[18px]">
            Without SEO, a Florida business doesn&apos;t have a search presence on Google&apos;s page one or in Gemini&apos;s AI summaries.
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

              {/* Link */}
              <Link
                href="#"
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-2

                  font-semibold
                  text-[#FF6F00]

                  transition-all
                  duration-300

                  hover:gap-3
                "
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
