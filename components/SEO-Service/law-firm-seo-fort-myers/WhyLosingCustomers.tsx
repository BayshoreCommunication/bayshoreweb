import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Low Organic Rankings Prevent Client Searches From Finding You",
    description:
      "Low organic rankings prevent your site from surfacing for client searches. Firms not on page one are invisible to most of that audience.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "A Weak Google Business Profile Keeps You Out of the Map Pack",
    description:
      "A weak Google Business Profile keeps you out of the map pack. Most local mobile searches result in a map pack click rather than an organic listing click.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title:
      "Ignoring Fort Myers Location Leads to Poor Local Search Results",
    description:
      "Content without regional specifics fails to connect here. Where relevance drops, visibility follows. Pages built for everywhere often reach no one. Local gaps mean lost opportunities. Unfocused material rarely stands out nearby.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "The Right Strategy Solves Each Problem",
    description:
      "The key is to employ the correct strategy to solve each problem. Those companies that can handle them on a regular basis are consistently ahead of their competitors.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Fort Myers Law Firms
            <br />
            Are Losing Clients
            <br />
            <span className="text-[#FF6F00]">Without SEO</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/70 md:text-[18px]">
            Legal searches in Fort Myers begin on Google. Residents searching
            for an attorney click the top results first. Firms not on page one
            are invisible to most of that audience. Three problems account for
            most of this lost visibility.
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
