import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Your Business Is Missing From Google's Local 3-Pack",
    description:
      "Most potential customers ignore page 2 or lower results in Google. A business not in the local 3-Pack exists digitally but is invisible to Naples Florida customers.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Competitors with Optimized Profiles Rank Above You",
    description:
      "Businesses with incomplete Google Business Profiles lose more than half of customer visits. Every day without optimization transfers revenue to your Naples competitors.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Customers Find Wrong or Missing Business Information Online",
    description:
      "62% of consumers avoid businesses with incorrect GBP or GMB information. Inaccurate listings cost Naples Florida small businesses real customers every single day.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "You Are Invisible in 'Near Me' Searches",
    description:
      "Not optimizing high-intent keywords leads to losing business visits for every Naples Florida search. Customers are searching right now and finding your competitors instead.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Naples Florida
            <br />
            Small Businesses Are Losing Customers
            <br />
            <span className="text-[#FF6F00]">Without Local SEO</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/70 md:text-[18px]">
            Naples, Florida, is one of Southwest Florida&apos;s most competitive local markets.
            Your potential customers search Google for services like yours every single day.
            Without local SEO services for small business Naples Florida, they stay invisible
            while competitors capture those customers.
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
