import {
  ChartNoAxesCombined,
  BadgeDollarSign,
  ShieldCheck,
  Users,
  BarChart3,
  Target,
  MapPinned,
} from "lucide-react";

const resultCards = [
  {
    icon: Target,
    title: "First-Page Keyword Rankings",
    description:
      "Clients move from buried positions to page-one visibility for the highest-value local search terms in their industries within measurable timeframes.",
  },
  {
    icon: Users,
    title: "Rising Volume of Qualified Inquiries",
    description:
      "Businesses see a consistent month-over-month increase in phone calls, form submissions, and appointment bookings from Tampa Florida clients who found them through organic search.",
  },
  {
    icon: MapPinned,
    title: "Stronger Local Map Pack Presence",
    description:
      "Google Business Profile optimization produces improved map pack visibility that generates direct calls and direction requests from nearby buyers.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Documented Organic Traffic Growth",
    description:
      "Monthly reporting captures clear, measurable increases in website visitors from the Tampa Florida and Hillsborough County geographic areas.",
  },
  {
    icon: ShieldCheck,
    title: "Sustainable Growth Without Ad Dependency",
    description:
      "SEO-driven results do not vanish when a campaign pauses. Rankings built through ethical optimization continue producing returns month after month.",
  },
  {
    icon: BadgeDollarSign,
    title: "Reduced Cost Per Acquired Customer",
    description:
      "Organic search consistently delivers a lower cost per acquisition than paid channels, improving the overall profitability of customer growth over time.",
  },
];

export default function SeoRoiSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Part 1: Real Results */}
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
              Tampa Florida Businesses
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#FF6F00]" />

          <p className="mx-auto mt-8 max-w-[900px] text-[16px] leading-8 text-black/60 md:text-[20px]">
            Bayshore Communication measures success through verified, documented outcomes that reflect real business growth. Our track record across Tampa Florida shows what disciplined, data-driven SEO produces over time.
          </p>
        </div>

        {/* Results Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resultCards.map((item, index) => {
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

        {/* Stats Banner */}
        <div className="mt-12 text-center max-w-[950px] mx-auto bg-[#FFF4EC] rounded-2xl p-6 border border-[#FF6F00]/10">
          <p className="text-[15px] leading-8 text-black/75 md:text-[16px] font-medium">
            More than 500,000 leads have been generated for us by our clients ever since our inception back in 2016. In addition to that, our team has designed over 220 websites which are both speedy as well as SEO-friendly. All the figures mentioned above have been verified via data.
          </p>
        </div>

        {/* Part 2: ROI of SEO */}
        <div className="mt-20 border-t border-black/10 pt-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,1.2fr)] items-start">
            <div>
              <span className="text-xl font-bold uppercase tracking-wider text-[#FF6F00]">
                THE ROI OF SEO
              </span>
              <h2 className="mt-4 text-[32px] font-bold leading-[1.15] text-[#081B4B] md:text-[42px]">
                The ROI of SEO for Tampa Florida Businesses
              </h2>
              <p className="mt-6 text-[15px] leading-8 text-black/70 md:text-[17px]">
                SEO is one of the strongest return-on-investment channels available to Tampa, Florida businesses of any size. Unlike channels that require continuous spending to maintain results, SEO builds an owned digital asset that appreciates in value the longer it remains active.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl bg-[#FFF8F3] p-8 md:p-10 border border-[#FF6F00]/10">
              {[
                "Superior placement in map results to trigger a surge in direct phone inquiries",
                "Steady streams of qualified visitors without the burden of constant ad fees",
                "Sustainable digital equity that increases in worth as your brand authority climbs",
                "Accelerated lead generation through top tier rankings that outperform traditional media",
                "Enhanced credibility that converts casual browsers into loyal neighborhood clients",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6F00] text-white text-[12px] font-bold">
                    ✓
                  </span>
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-[#081B4B] font-semibold">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
