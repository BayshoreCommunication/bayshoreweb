import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Your Business Is Invisible Where Buyers Are Looking",
    description:
      "Over 90% of all search traffic goes to page one results. A business sitting on page two or below does not earn a second look from Spring Hill, Florida, consumers who are ready to spend.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Your Competitor Gets the Call You Should Have Received",
    description:
      "Search visibility is a zero-sum game at the local level. Every customer who finds a competitor through Google is a customer who bypassed your business entirely without ever knowing you existed.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "A Website Alone Does Not Attract Customers",
    description:
      "A website without search optimization does not generate business on its own. It requires deliberate technical signals, local authority, and aligned content before Google recommends it to any Spring Hill, Florida, consumer.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "The Local Map Pack Is Already Occupied",
    description:
      "The top three listings on Google Maps get most of the clicks. Calls in a local search. To get these spots you need a clear plan for local SEO that is made for Spring Hill, Florida.\n\n* A good plan helps you get clicks and calls.\n\n* It is made for Spring Hill, Florida.\n\nYou need to focus on Google Maps listings. Securing those listings on Google Maps requires a structured local SEO strategy. It should be built for the Spring Hill, Florida, market.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Spring Hill Florida
            <br />
            Businesses Are Losing Customers
            <br />
            <span className="text-[#FF6F00]">Without SEO</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/70 md:text-[18px]">
            New families, new residents, and new spending power arrive in Spring Hill, Florida, every month. When they need a product or a local service, their first move is a Google search. That search creates a moment of decision that happens thousands of times a day in this market. The businesses that appear on page one win that moment. Without an active SEO strategy, your Spring Hill, Florida, business surrenders that moment to a competitor on every single search. The gap does not stay the same. It widens every day. The other business ranks, and you do not.
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
