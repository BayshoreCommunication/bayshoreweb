import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Lost Website Traffic",
    description:
      "Potential customers arrive at a competitor's website because that page ranked and yours was nowhere near it.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Search Engine Penalties",
    description:
      "Google penalizes slow and poorly structured sites by pushing them further from the searches that matter most.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Map Pack Invisibility",
    description:
      "Businesses missing from the local map pack are invisible to the highest-intent buyers searching near Largo.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Inconsistent Citations",
    description:
      "Inconsistent or absent business citations signal unreliability to search engines evaluating local credibility.",
  },
  {
    number: "05",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Missing Local Content",
    description:
      "Pages without location-aware content fail to surface when nearby residents conduct service-related searches.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Largo, Florida
            <br />
            Businesses Are Losing Customers
            <br />
            <span className="text-[#FF6F00]">Without SEO</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/70 md:text-[18px]">
            Most Largo residents do not scroll past the first few results when searching for a product or service nearby. If a competing business holds those spots and yours does not, the revenue those searches generate belongs to them. This is not a rare event happening once in a while. It happens throughout the day across hundreds of searches. A business without a strong search presence is essentially operating with no sign on the front door at all. Weak technical foundations, absent local signals, and an ignored Google Business Profile all add to this problem. Larger competitors who have hired a seo company largo fl are widening that gap with every passing week. Waiting to address this is mainly an active contribution to a competitor&apos;s monthly growth.
          </p>
          <p className="mt-6 text-[16px] font-bold leading-8 text-black md:text-[18px]">
            What poor search visibility is doing to Largo businesses week after week:
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
