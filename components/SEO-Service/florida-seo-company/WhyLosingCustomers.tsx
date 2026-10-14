import Image from "next/image";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Your Competitors Are Capturing Searches You Never See",
    description:
      "A Tampa roofer or a Miami dentist never even sees the searches they miss. Those prospects simply call someone else who showed up at the top of Google. Every single missed search equals a lost booking or sale. Over the course of a year, this revenue gap becomes severe as competitors build their businesses on traffic that should have been yours. Working with an experienced Florida SEO company helps you stop handing over market share to your rivals.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Strong Services Cannot Generate Leads Without Search Visibility",
    description:
      "Great work does not automatically speak for itself online. If Google cannot find your pages, buyers cannot either. Excellent reviews, decades of experience, and fair pricing stay hidden behind poor rankings. Visibility must come first. Without a robust technical foundation and properly optimized content, your superior service remains an industry secret rather than a reliable driver of new revenue.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Florida Customers Compare Businesses Before Contacting One",
    description:
      "Buyers read reviews, check maps, and open several websites before making a decision. They quickly create a shortlist of two or 3 names based on immediate digital authority. Businesses missing from that shortlist never get a chance to compete. Strong rankings and a fully optimized Google Business Profile place you right inside that critical evaluation phase, ensuring you always remain a top option when a customer is ready to buy.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Paid Visibility Disappears When the Campaign Stops",
    description:
      "Ads only deliver traffic while the budget flows. Pause your spending, and the leads dry up that exact same day. Organic rankings, however, keep working long after the initial investment ends. This makes SEO a much steadier lead source while lowering your overall cost per customer over time. A solid SEO strategy builds digital equity that compounds, freeing you from the endless cycle of rising pay-per-click costs.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[860px]">
          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.08] text-black">
            Why Businesses in Florida
            <br />
            Are Losing Customers
            <br />
            <span className="text-[#FF6F00]">Without SEO</span>
          </h2>
          <div className="mt-6 space-y-4 text-[16px] leading-8 text-black/70 md:text-[18px]">
            <p>
              Weak organic visibility rarely announces itself. Instead, it shows up as quiet phones, empty calendars, and slow revenue months. These hidden losses stem from a few core issues.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                flex
                flex-col
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
              <h3 className="mt-8 text-[22px] font-bold leading-[1.3] text-black">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-6 text-[15px] leading-7 text-black/70 flex-grow">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
