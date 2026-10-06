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
    title: "Many Local Businesses Say SEO Leads Exceed Paid Ads",
    description:
      "Organic local visibility outperforms paid advertising for lead generation. Naples Florida small businesses consistently report higher quality leads from SEO than from Google Ads.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Local Searches Result in Same-Day Purchases",
    description:
      "Local searchers in Naples are high-intent buyers ready to spend money now. Mobile Naples customers take fast action after finding your business in local search.",
  },
  {
    icon: BadgeDollarSign,
    title: "Google Business Profile Actions Grew Yearly in 2026",
    description:
      "Calls, direction requests and website clicks from GBPs are surging in every local market. A fully optimized Google Business Profile directly increases in-store traffic by up to 70%.",
  },
  {
    icon: ShieldCheck,
    title: "Local Mobile Searches Lead to Purchase Within 24 Hours",
    description:
      "Mobile Naples customers take fast action after finding your business in local search. Every month of local SEO investment builds authority that continues generating results long-term.",
  },
  {
    icon: Handshake,
    title: "Local SEO Builds Over Time, Unlike Expired Paid Ads",
    description:
      "Every month of local SEO investment builds authority and continues generating results long-term, unlike paid ads that stop producing the instant your budget ends.",
  },
  {
    icon: PiggyBank,
    title: "Complete GBPs Boost Store Visits by 70%",
    description:
      "A fully optimized Google Business Profile directly increases in-store traffic for Naples Florida businesses, converting online searches into real-world customers.",
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
            The ROI of Local SEO for
            <br />
            <span className="text-[#FF6F00]">
              Naples Florida Small Businesses
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#FF6F00]" />

          <p className="mx-auto mt-8 max-w-[900px] text-[16px] leading-8 text-black/60 md:text-[20px]">
            SEO delivers measurable returns that compound over time and create
            lasting business value.
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
