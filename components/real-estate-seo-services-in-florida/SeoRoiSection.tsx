import {
  ChartNoAxesCombined,
  BadgeDollarSign,
  ShieldCheck,
  Handshake,
  BarChart3,
  Target,
} from "lucide-react";

const roiCards = [
  {
    icon: Target,
    title: "Organic Traffic Replacing Paid Lead Costs",
    description:
      "Florida real estate clients reduce PPC and portal spending by 30 to 50% within the first year of consistent SEO work.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Compounding Returns Without Recurring Ad Spend",
    description:
      "Rankings keep producing leads after the optimization work is complete. Paid ads stop the moment you stop funding them.",
  },
  {
    icon: BadgeDollarSign,
    title: "Higher Lead Quality from Organic Search Intent",
    description:
      "Buyers and sellers who find you through organic search have higher transaction intent than those reached through display or paid social.",
  },
  {
    icon: ShieldCheck,
    title: "Increased Domain Authority That Accelerates Future Rankings",
    description:
      "Every earned link and optimized page raises your site's authority. This makes new target pages rank faster over time.",
  },
  {
    icon: Handshake,
    title: "AI Search Visibility That Costs No Per Click Fee",
    description:
      "Appearing in Google AI Overviews or ChatGPT responses for Florida real estate queries adds brand exposure without additional spend.",
  },
];

export default function SeoRoiSection() {
  return (
    <section className="bg-white py-6 md:py-0 md:mb-16">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Header */}
        <div className="text-center">
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-black/10
              bg-white
              px-5
              py-3
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-[#FF6F00]
              "
            >
              <BarChart3 size={18} className="text-white" />
            </div>

            <span className="font-bold text-[#081B4B]">THE ROI OF SEO</span>
          </div>

          <h2 className="mx-auto mt-8 max-w-[1100px] text-[38px] font-bold leading-[1.1] text-[#081B4B] md:text-[52px]">
            The ROI of SEO for
            <br />
            <span className="text-[#FF6F00]">
              Florida Real Estate Businesses
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#FF6F00]" />

          <p className="mx-auto mt-8 max-w-[900px] text-[16px] leading-8 text-black/60 md:text-[20px]">
            SEO is a measurable investment, and SEO services for Florida real
            estate businesses are tracked against the metrics that tell you
            whether the spend is actually working.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {roiCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-[24px]
                  border
                  border-black/5
                  bg-white
                  p-6
                  md:p-8

                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                "
              >
                <div className="flex gap-5">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-[88px]
                      w-[88px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FFF4EC]

                      transition-all
                      duration-500

                      group-hover:scale-110
                    "
                  >
                    <Icon
                      size={42}
                      className="text-[#FF6F00]"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Divider */}
                  <div className="w-px bg-[#FF6F00]/20" />

                  {/* Content */}
                  <div>
                    <h3 className="text-[22px] font-bold leading-[1.3] text-[#081B4B]">
                      {item.title}
                    </h3>

                    <div className="mt-4 h-[3px] w-12 bg-[#FF6F00]" />

                    <p className="mt-5 text-[15px] leading-8 text-black/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
