import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title:
      "Among 3.5 million Florida small businesses, yours remains invisible online",
    description:
      "SEO strategy assists in highlighting your business in google search results through implementing target keywords.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Your business lacks local intent",
    description:
      "Without SEO, your business is missing out on nearby driven search queries (“near me”) to help target clients find your services. giving",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Your mobile site’s providing poor performance due to unoptimization",
    description:
      "Most of the local search happens on smartphones. SEO ensures optimizing your mobile sites’ ranked appearance on google map pack.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Your Google Business Profile is hidden on Google Maps",
    description:
      "Without SEO, your business appears on page 2 or lower for target queries that customers often ignore.",
  },
  {
    number: "05",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Your Google Business Profile has old or incorrect NAP",
    description:
      "Not maintaining search engine optimization might lead to wrong or missing information on Google Maps.",
  },
  {
    number: "06",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Your business has fewer than 50 reviews",
    description:
      "Weak or no SEO strategies prevent your business from generating reviews and lose valuable leads from search volume.",
  },
  {
    number: "07",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title:
      "You are not employing generative AI tools as they are relatively new",
    description:
      "Most consumers use GPT or AI overviews for recommendations. Without strong SEO plan, your business remains invisible on Google and AI search visibility.",
  },
  {
    number: "08",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title:
      "Your business has no connection between dedicated website and active GBP",
    description:
      "Investing only in organic SEO while ignoring SEO optimized websites and active GBP redirects your target client to competitors.",
  },
  {
    number: "09",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title:
      "Most startups decline investing in SEO as assuming it would be expensive",
    description:
      "Without SEO, your small business cannot reach your target clients or rank in online visibility or be findable.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Florida Small Businesses
            <br />
            Businesses Are Losing Customers
            <br />
            <span className="text-[#FF6F00]">Without SEO</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/70 md:text-[18px]">
            Big cities like Miami, Tampa, Orlando, Jacksonville, and Naples draw
            massive foot traffic each year. If your business is located in these
            competitive local search markets of Florida, you require SEO
            strategies to surpass other competitors. Yet many businesses fail to
            capture target clients because they don’t appear in Google search
            results.
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
