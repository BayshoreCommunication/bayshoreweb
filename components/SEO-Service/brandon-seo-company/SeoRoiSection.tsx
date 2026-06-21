import {
  ChartNoAxesCombined,
  BadgeDollarSign,
  ShieldCheck,
  PiggyBank,
  Users,
  BarChart3,
  Target,
} from "lucide-react";

const roiCards = [
  {
    icon: PiggyBank,
    title: "Organic Leads Cost Less Over Time",
    description:
      "Brandon businesses with strong rankings spend less per customer acquisition year over year.",
  },
  {
    icon: Target,
    title: "High Purchase Intent Traffic Converts Better",
    description:
      "Pre decided consumer searching intent with location and industry specific phrases in Google converts at higher rates than cold ad impressions.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "SEO Compounds While Ads Reset Monthly",
    description:
      "Content and rankings built this quarter still produce leads next year. Ad campaigns reset to zero every billing cycle.",
  },
  {
    icon: Users,
    title: "Local Search Drives High Value Service Inquiries",
    description:
      "Single SEO driven case, patient or contract often requires months of campaign investment due to businesses generating high average client value.",
  },
  {
    icon: ShieldCheck,
    title: "Search Visibility Builds Brand Recognition",
    description:
      "Appearing consistently in Brandon search results for industry queries builds familiarity. Repeatedly appearing brands are more likely reliable to searchers.",
  },
  {
    icon: BadgeDollarSign,
    title: "SEO Reduces Dependence on Paid Platforms",
    description:
      "Changes in Meta algorithms or Google Ads costs can disrupt paid traffic businesses. Organic search offers secure and non auction based channel.",
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
              Brandon Florida Businesses
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#FF6F00]" />

          <p className="mx-auto mt-8 max-w-[900px] text-[16px] leading-8 text-black/60 md:text-[20px]">
            Paid ads stop producing the moment budget does. SEO keeps generating leads after making an initial investment.
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
