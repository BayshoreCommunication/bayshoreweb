import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "No Neighborhood Level Keyword Targeting",
    description:
      "Broad city pages won't capture buyers searching specifically for homes in Windermere, Nocatee, or Coral Gables.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Poor Performance from Core Web Vitals",
    description:
      "Slow mobile loads fail the technical bar google use to measure page speed and user centric metrics for direct rankings.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Underoptimized Google Business Profile",
    description:
      "Partially complete GBP listing keeps you out of the local map pack, where the majority of first clicks actually go.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Lack of Authorized External Link",
    description:
      "Without editorial links from trusted local publications and real estate directories, your site doesn't carry enough authority for Google to rank highly.",
  },
  {
    number: "05",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Thin or Duplicate Listing Content",
    description:
      "Pages featuring duplicated MLS content tend to disappear from high ranking outcomes because Google applies strict evaluation methods.",
  },
  {
    number: "06",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "No Structured Data or Schema",
    description:
      "When structured data is absent, Google search engines lack the cues needed to present a business in high rank results, featured snippets or local packs",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Florida Real Estate
            <br />
            Businesses Are Losing Leads
            <br />
            <span className="text-[#FF6F00]">Without SEO</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/70 md:text-[18px]">
            Most Florida real estate websites get traffic. What they don&apos;t
            get is the right traffic — buyers and sellers who are ready to act.
            Without real estate SEO services in Florida, your site is invisible
            precisely to potential active clients.
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
