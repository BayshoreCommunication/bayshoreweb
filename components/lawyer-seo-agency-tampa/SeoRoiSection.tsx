import {
  ChartNoAxesCombined,
  BadgeDollarSign,
  ShieldCheck,
  Handshake,
  PiggyBank,
  Users,
  BarChart3,
} from "lucide-react";

const roiCards = [
  {
    icon: ChartNoAxesCombined,
    title: "Higher Search Rankings",
    description:
      "Consistent movement from page three and beyond to page one for high-intent Tampa legal search terms in your primary practice areas.",
  },
  {
    icon: BadgeDollarSign,
    title: "More Consultations",
    description:
      "Steady increase in consultation requests and contact form submissions from clients actively searching for the specific legal services your firm provides.",
  },
  {
    icon: ShieldCheck,
    title: "More Inbound Calls",
    description:
      "Higher volume of inbound phone calls from ready-to-hire Tampa residents who found your firm through organic search and chose to call before contacting anyone else.",
  },
  {
    icon: Handshake,
    title: "Local Map Pack Wins",
    description:
      "Greater exposure and visibility on Google Maps and local listings within Tampa and neighboring practice-area neighborhoods, all of which will lead clients to your door.",
  },
  {
    icon: PiggyBank,
    title: "Compounding Growth Over Time",
    description:
      "Unlike paying for ads, SEO can continue to generate results over time and build upon itself.They deliver stronger returns the longer the strategy remains active.",
  },
  {
    icon: Users,
    title: "Lower Cost Per Client",
    description:
      "Organic search traffic converts at a higher rate than most paid channels, reducing your firm's long-term client acquisition costs while maintaining a consistent pipeline of new cases.",
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
            Real Results for Real
            <br />
            <span className="text-[#FF6F00]">
              Tampa Law Firms
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#FF6F00]" />

          <p className="mx-auto mt-8 max-w-[900px] text-[16px] leading-8 text-black/60 md:text-[20px]">
            When lawyer SEO is done with precision, the results are measurable and they compound over time. Tampa law firms that invest in a well-executed legal SEO strategy consistently see growth in every metric that actually matters for their practice.
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
