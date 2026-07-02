import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Invisible to Local Searchers",
    description:
      "Law firms that have below average online appearance in local search results make it hard for potential clients to find them.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Poor Mobile Experience",
    description:
      "Mobile visits are 7x more than desktop visits. Having unresponsive mobile sites leads to losing approximately 69% of visitors.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Suboptimal Google Business Profile",
    description:
      "Law firms that lack recent or positive reviews on GBP definitely lose clients' trust and visibility in local search.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Missing Geographic Relevance",
    description:
      "Law firms that lack local content often miss clients in specific cities. It allows competitors to dominate local searches.",
  },
  {
    number: "05",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Not Using Local SEO Fundamentals",
    description:
      "If you fail to implement schema markup and LocalBusiness schemas, search engines won't find your firm's relevance.",
  },
  {
    number: "06",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Slow Website Performance",
    description:
      "Potential clients always get frustrated with slow website performance. This also negatively impacts search engine rankings.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Florida Law Firms Are
            <br />
            Losing Clients
            <br />
            <span className="text-[#FF6F00]">Without Local SEO</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/70 md:text-[18px]">
            Many law firms in Florida are losing clients because they overlook
            local SEO strategies for lawyers in Florida. As a result, there is
            low visibility on Google&apos;s top search results. Without strong
            local SEO presence, firms miss critical &quot;near me&quot; searches
            that attract client searches.
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
