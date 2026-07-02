import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "No Page-One Presence",
    description:
      "When your website is not on the page of Google most people searching in Dunedin, Florida will never even know that your business exists.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Competitor Dominance in Local Results",
    description:
      "Your competitors get all the phone calls, visits to their website and people walking into their store that could have been yours if you were ranked higher.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Unresolved Website Performance Issues",
    description:
      "If your website is slow or has a lot of errors Google thinks your website is not good and your ranking gets worse every week.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Missing From the Google Local Map Pack",
    description:
      "If you do not have a Google Business Profile your business will not be on the Google map, which is where people look the most when they search for something.",
  },
  {
    number: "05",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Fading Organic Reach Each Month",
    description:
      "Every month your website will be seen by people if you do not keep working on it while your competitors who keep doing search engine optimization get stronger and stronger.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Dunedin Florida
            <br />
            Businesses Are Losing Customers
            <br />
            <span className="text-[#FF6F00]">Without SEO</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/70 md:text-[18px]">
            In Dunedin, people usually type their queries directly into the search bar first. They almost uniformly ignore everything beyond the first page of results, a blink-and-you-miss-it reality where visibility instantly morphs into viability. Not being there means immediate abandonment to the next option; after all, one wonders why they would dig deeper when everything else demands their attention. Studies, and again more studies, consistently point to the same unyielding statistic over seventy-five percent of all journeys end right there, never to continue. That absence from Google’s curated top tier is a quiet hemorrhage of potential revenue, a persistent trickle draining your bottom line every single day without a sound.
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
