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
    title: "Page One Rankings on Your Most Valuable Search Terms",
    description:
      "Law firms that once ranked on page three or further back move to prominent page one positions for the high-intent Tampa, Florida, search terms that bring in their most profitable clients.",
  },
  {
    icon: BadgeDollarSign,
    title: "A Steady, Qualifying Pipeline of Inquiries",
    description:
      "Organic search delivers a growing and consistent flow of client contacts each month. That pipeline does not pause between budget cycles and does not stop when a campaign ends.",
  },
  {
    icon: ShieldCheck,
    title: "Phone Volume That Grows Month Over Month",
    description:
      "Inbound calls from Tampa, Florida, residents who found your law firm through organic search arrive with context and intent. These conversations close at higher rates than cold or interruption-based contacts.",
  },
  {
    icon: Handshake,
    title: "Secured Map Pack Presence",
    description:
      "Local SEO investment earns consistent visibility in the Google three-pack, where the majority of local search clicks originate for Tampa, Florida law firm and practice area categories.",
  },
  {
    icon: PiggyBank,
    title: "Established Community Authority",
    description:
      "Consistent search visibility builds real brand recognition across Tampa, Florida, and Hillsborough County. Clients who see your law firm repeatedly in results develop trust before they ever arrive on your website.",
  },
  {
    icon: Users,
    title: "Improving Returns on a Sustained Investment",
    description:
      "The cost of acquiring each new client through organic SEO decreases as domain authority builds. No other digital channel available to Tampa, Florida law firms delivers this kind of compounding efficiency over time.",
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
            Verified, measurable outcomes are the standard Bayshore Communication holds itself to. Tampa, Florida, law firms that invest in a consistently executed SEO program see sustained improvement across every performance measure that connects directly to revenue growth.
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
