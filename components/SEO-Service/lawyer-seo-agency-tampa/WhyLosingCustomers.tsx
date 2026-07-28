import Image from "next/image";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Buried in Search Results",
    description:
      "Your firm sits on page two or beyond, invisible to the clients actively searching for legal help in Tampa right now.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Competitors Capturing Your Clients",
    description:
      "Law firms investing in lawyer SEO consistently appear first, taking the consultations that belong to your practice.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Slow and Unoptimized Website",
    description:
      "Technical weaknesses push your rankings further down and drive potential clients away before they even read a single word about your services.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "No Local Map Presence",
    description:
      "Without a proper Google Business Profile strategy, your firm misses out on the highest-visibility real estate in local legal search.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Tampa Law Firms
            <br />
            Are Losing Clients
            <br />
            <span className="text-[#FF6F00]">Without SEO</span>
          </h2>
          <div className="mt-6 space-y-4 text-[16px] leading-8 text-black/70 md:text-[18px]">
            <p>
              In Florida, Tampa is one of the most competitive legal markets. When someone needs a personal injury attorney, a family law firm, or a criminal defense lawyer, their first move is almost always a Google search. If your firm does not appear on that first page, you simply do not exist to that potential client.
            </p>
            <p>
              With AI-powered search changing how people find legal help in 2026, the gap between visible and invisible law firms is widening.
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
