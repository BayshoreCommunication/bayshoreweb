import {
  Target,
  TrendingUp,
  MapPinned,
  BadgeDollarSign,
  Users,
  BarChart3,
} from "lucide-react";

const results = [
  {
    icon: Target,
    title: "Sustained Page-One Rankings in Competitive Wesley Chapel Categories",
    description:
      "Clients in competitive Wesley Chapel categories have moved from unranked positions to consistent page-one placements.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Month-Over-Month Inquiry Growth",
    description:
      "Businesses in our Wesley Chapel, Florida client portfolio see inbound inquiry volume increase on a steady upward trajectory. Not in isolated spikes, but in the compounding pattern that characterizes a properly built local SEO campaign.",
  },
  {
    icon: MapPinned,
    title: "Google Business Profile Engagement Gains",
    description:
      "After profile optimization, clients see measurable increases in direction requests, calls, and website visits from Google Maps. These are customers who found the business through local search and acted immediately.",
  },
  {
    icon: BadgeDollarSign,
    title: "Legal Client Revenue Growth Exceeding 200%",
    description:
      "One legal client grew total revenue by over 200% following a Bayshore Communication SEO campaign. Growth was directly attributable to improved organic visibility and sustained local search prominence.",
  },
  {
    icon: Users,
    title: "500,000 Total Leads Generated Since 2016",
    description:
      "Since 2016, Bayshore Communication has generated over half a million leads for our clients. This cumulative figure reflects consistent campaign performance across more than 70 client relationships over 9 years of operation.",
  },
];

export default function RealResults() {
  return (
    <section className="bg-white py-16 md:py-32">
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

            <span className="font-bold text-[#081B4B]">VERIFIED PERFORMANCE</span>
          </div>

          <h2 className="mx-auto mt-8 max-w-[1100px] text-[38px] font-bold leading-[1.1] text-[#081B4B] md:text-[52px]">
            Real Results for Real
            <br />
            <span className="text-[#FF6F00]">
              Wesley Chapel Florida Businesses
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#FF6F00]" />

          <p className="mx-auto mt-8 max-w-[900px] text-[16px] leading-8 text-black/60 md:text-[20px]">
            Performance claims carry no weight without documented outcomes behind them. Bayshore Communication has a verified growth track record across industries in Wesley Chapel.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.map((item, index) => {
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
                    <h3 className="text-[20px] font-bold leading-[1.3] text-[#081B4B]">
                      {item.title}
                    </h3>

                    <div className="mt-4 h-[3px] w-12 bg-[#FF6F00]" />

                    <p className="mt-5 text-[15px] leading-7 text-black/65">
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
