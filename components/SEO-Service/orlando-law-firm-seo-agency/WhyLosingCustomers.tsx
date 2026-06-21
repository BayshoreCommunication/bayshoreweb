import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    number: "01",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Your competitors are buying visibility you are giving away for free",
    description:
      "SEO invested law firms capture exact searches your ideal clients are doing every day in Orlando.",
  },
  {
    number: "02",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Less legal calls due to invisibility in Google's local pack",
    description:
      "3 map results above organic listings are SEO driven and without SEO you generate nearly zero calls.",
  },
  {
    number: "03",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "Practice area pages with no local targeting lead to low rank",
    description:
      "Without Orlando specific content, schema and citations lowers your position in Google compare to location optimized law firm pages.",
  },
  {
    number: "04",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "Over reliance on referrals or traditional ads",
    description:
      "Depending completely on referrals caps revenue and loss on new and high value cases.",
  },
  {
    number: "05",
    icon: "/seo-company-wesley-chapel/card-icon-2.png",
    title: "Law firms fail to answer client questions",
    description:
      "Not showing previous case results and not publishing locally relevant search answers through content and videos weaken credibility.",
  },
  {
    number: "06",
    icon: "/seo-company-wesley-chapel/card-icon-3.png",
    title: "No Google Business Profile optimization",
    description:
      "Unclaimed or underdeveloped GBP listings are invisible in Orlando's local legal search or map results.",
  },
  {
    number: "07",
    icon: "/seo-company-wesley-chapel/card-icon-1.png",
    title: "No automated response system",
    description:
      "Failure to respond immediately results in poor conversion and slowly losing traffic.",
  },
];

export default function WhyLosingCustomers() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="max-w-[820px]">
          <h2 className="text-[38px] font-bold leading-[1.05] text-black sm:text-[48px]">
            Why Orlando Law Firms
            <br />
            Are Losing Clients
            <br />
            <span className="text-[#FF6F00]">Without SEO</span>
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-black/70 md:text-[18px]">
            Most Orlando law firms lose potential clients to better ranked websites rather than to better lawyers. From not appearing on 1st page to map list, there are few reasons behind losing clients without SEO.
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
