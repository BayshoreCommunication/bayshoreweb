import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  FileText,
  KeyRound,
  MapPin,
  SearchCheck,
  Settings,
  SquareActivity,
  SquarePen,
  Target,
} from "lucide-react";

const processSteps = [
  {
    number: "1",
    Icon: Target,
    title: "Business Discovery and Objective Setting",
    description:
      "Spending hours learning how your company makes money helps shape our approach. Before changing a single webpage element, we look closely at who buys from you. What others in your field do matters just as much. Your main objectives guide every decision made. Only after grasping these pieces does any work begin.",
  },
  {
    number: "2",
    Icon: ChartNoAxesColumnIncreasing,
    title: "Full SEO Audit and Gap Analysis",
    description:
      "Starting with your site’s performance, we check how well it operates under today’s standards. Keyword positions are reviewed to see where gains can be made. Content gets assessed not just for clarity but also usefulness. Local visibility is examined through location-based signals. The strength of incoming links shapes part of the insight. From these findings emerges a customized set of upgrades aimed at maximum impact.",
  },
  {
    number: "3",
    Icon: KeyRound,
    title: "Spring Hill Florida Market Research",
    description:
      "We map how your ideal customers search, which competitors currently own the rankings you want, and where the most accessible opportunities exist for your business right now.",
  },
  {
    number: "4",
    Icon: FileText,
    title: "Custom SEO Strategy Development",
    description:
      "A customized SEO strategy takes shape around your unique services, local market conditions in Spring Hill, Florida, along with defined checkpoints and projected results. While goals are set early, adjustments follow real-world feedback instead of rigid timelines.",
  },
  {
    number: "5",
    Icon: Settings,
    title: "On-Page and Technical Implementation",
    description:
      "Optimizations that gain approval go live site-wide, reshaping content where needed. Structural issues get resolved through targeted adjustments. Technical flaws are corrected systematically. Local information receives timely revisions. Each change integrates smoothly into existing frameworks.",
  },
  {
    number: "6",
    Icon: SquarePen,
    title: "Content Production and Authority Building",
    description:
      "Month by month, our focused content builds visibility while a steady outreach effort strengthens domain authority. A deliberate approach to backlinks widens the range of keywords you rank for over time.",
  },
  {
    number: "7",
    Icon: SearchCheck,
    title: "Reporting, Analysis, and Ongoing Refinement",
    description:
      "We review performance data monthly, communicate findings clearly, and adjust the strategy to reflect new algorithm signals, competitor movements, and evolving search behavior in Spring Hill Florida.",
  },
];

export default function SeoProcessSection() {
  return (
    <section className="relative bg-[#FBFBFB] py-16 md:py-32">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] md:h-[600px] md:w-[600px]">
        <Image
          src="/seo-company-wesley-chapel/process-pattern.png"
          alt=""
          fill
          className="object-contain object-left-bottom opacity-60"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1620px] px-8 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[460px_minmax(0,1fr)] xl:grid-cols-[500px_minmax(0,1fr)] lg:gap-12">
          {/* Left Content */}
          <div className="h-fit lg:sticky lg:top-24">
            <span className="text-xl font-bold uppercase tracking-wider text-[#FF6F00]">
              Our Process
            </span>

            <h2 className="mt-4 text-[38px] font-bold leading-[1.08] text-[#081B4B] md:text-[48px]">
              Our Proven
              <br />
              SEO Process for
              <br />
              <span className="text-[#FF6F00]">
                Spring Hill Florida
                <br />
                Businesses
              </span>
            </h2>

            <div className="mt-7 h-[2px] w-14 bg-[#FF6F00]" />

            <div className="mt-7 max-w-[380px] space-y-6 text-[16px] leading-8 text-[#081B4B]/75">
              <p>
                Bayshore Communication starts with a thorough look at your needs and gets right into a seven-step SEO process that fits Spring Hill, Florida’s unique landscape. Every stage pushes things forward, and you actually see progress as each piece falls into place. The approach gets smarter with every round because they fine-tune it based on what works in real life. Early wins guide the next moves, so there’s always something learned. That pace picks up since they’re always tweaking things along the way. The whole system runs on proof, nothing changes without real results backing it up.
              </p>
            </div>

            <Link href="#contact">
            <button
              className="
                group
                relative
                mt-10
                flex
                h-[52px]
                items-center
                justify-center
                overflow-hidden
                rounded-md
                bg-[#FF6F00]
                px-8
                font-semibold
                text-white
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-3">
                Start Your SEO Campaign
                <ArrowRight size={18} />
              </span>
            </button>
            </Link>
          </div>

          {/* Right Timeline */}
          <div className="relative">
            <div className="relative">
              {/* Desktop Line */}
              <div className="absolute left-5 top-0 hidden h-full w-[2px] bg-[#FF6F00]/20 lg:block" />

              <div className="space-y-4">
                {processSteps.map((step) => {
                  const Icon = step.Icon;

                  return (
                    <div
                      key={step.number}
                      className="relative flex gap-4 lg:gap-5"
                    >
                      {/* Number */}
                      <div className="relative z-10 flex shrink-0 flex-col items-center">
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-[#FF6F00]
                            
                            font-bold
                            text-white
                            shadow-[0_4px_12px_rgba(255,111,0,0.28)]
                          "
                        >
                          {step.number}
                        </div>
                      </div>

                      {/* Card */}
                      <div
                        className="
                          group
                          flex-1
                          rounded-[10px]
                          border
                          border-black/5
                          bg-white
                          p-6
                          shadow-[0_4px_18px_rgba(0,0,0,0.05)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                          md:px-10
                          md:py-8
                        "
                      >
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
                          <div
                            className="
                              flex
                              h-[64px]
                              w-[64px]
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#FFF4EC]
                            "
                          >
                            <Icon
                              size={36}
                              strokeWidth={1.8}
                              className="
                                text-[#FF6F00]
                                transition-all
                                duration-500
                                group-hover:scale-110
                                group-hover:rotate-3
                              "
                            />
                          </div>

                          <div>
                            <h3 className="text-[18px] font-bold leading-tight text-[#081B4B] md:text-[20px]">
                              {step.title}
                            </h3>

                            <p className="mt-2 text-[14px] leading-6 text-[#081B4B]/70 md:text-[15px]">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
