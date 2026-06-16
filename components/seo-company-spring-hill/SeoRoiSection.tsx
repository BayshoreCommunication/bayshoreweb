import {
  ChartNoAxesCombined,
  BadgeDollarSign,
  ShieldCheck,
  Handshake,
  PiggyBank,
  Users,
  BarChart3,
  Target,
} from "lucide-react";

const roiCards = [
  {
    icon: Target,
    title: "Active Buyer Targeting",
    description:
      "Reach Spring Hill, Florida, buyers at the precise moment they are prepared to make a purchase decision.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Continuous Lead Generation",
    description:
      "Build a search presence that generates customer inquiries continuously rather than only during paid campaign windows.",
  },
  {
    icon: BadgeDollarSign,
    title: "Compounding Efficiency",
    description:
      "Drive down your per-customer acquisition cost as organic authority and rankings accumulate over time.",
  },
  {
    icon: ShieldCheck,
    title: "Appreciating Digital Asset",
    description:
      "Create a digital asset whose value appreciates year after year with consistent investment.",
  },
  {
    icon: Handshake,
    title: "Verified Market Credibility",
    description:
      "Develop the kind of verified market credibility in Spring Hill, Florida, that advertising budgets alone cannot produce.",
  },
  {
    icon: PiggyBank,
    title: "Organic Channel Advantage",
    description:
      "Outperform local competitors who remain entirely dependent on paid channels for every customer they acquire.",
  },
  {
    icon: Users,
    title: "Scalable Pipeline Growth",
    description:
      "Scale your customer pipeline without scaling your marketing spend in proportion.",
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
              Spring Hill, Florida Businesses
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#FF6F00]" />

          <p className="mx-auto mt-8 max-w-[900px] text-[16px] leading-8 text-black/60 md:text-[20px]">
            SEO delivers measurable returns that compound over time and create lasting business value.
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
