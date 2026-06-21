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
      "We study your business model, revenue priorities, and Wesley Chapel digital standing before work begins. This shapes every strategic decision that follows.",
  },
  {
    number: "2",
    Icon: ChartNoAxesColumnIncreasing,
    title: "Competitive and Market Intelligence",
    description:
      "We study businesses outranking yours in Wesley Chapel and map their ranking sources and authority profiles. We identify the specific gaps your campaign can exploit from the start.",
  },
  {
    number: "3",
    Icon: SquareActivity,
    title: "Technical Health Audit",
    description:
      "We test every technical variable affecting your site crawlability, indexation speed, mobile performance, and page experience. Issues are catalogued by severity and addressed according to their direct impact on Wesley Chapel search rankings.",
  },
  {
    number: "4",
    Icon: KeyRound,
    title: "Local Keyword Strategy",
    description:
      "We build a keyword map around every search your Wesley Chapel customers perform in their decision-making process. Each keyword receives a dedicated page assignment and a clear ranking target aligned with your business goals.",
  },
  {
    number: "5",
    Icon: FileText,
    title: "On-Page Optimization Execution",
    description:
      "All on-page improvements are implemented across your priority pages. Page titles, meta descriptions, headings, and schema markup are updated to align with Wesley Chapel search intent.",
  },
  {
    number: "6",
    Icon: Settings,
    title: "Technical Remediation",
    description:
      "Every critical technical issue identified in the audit is resolved in documented sequence. Speed improvements, crawl fixes, mobile corrections, and structured data deployments are completed with full change records.",
  },
  {
    number: "7",
    Icon: MapPin,
    title: "Local Presence Build-Out",
    description:
      "We optimize your Google Business Profile and audit every directory relevant to your Wesley Chapel business. Inconsistent citations are corrected, missing listings are created, and map pack positioning is actively managed.",
  },
  {
    number: "8",
    Icon: SquarePen,
    title: "Content Production and Authority Development",
    description:
      "We publish content for real Wesley Chapel search queries and acquire backlinks from local and industry sources. The two parallel things that you are doing are creating topical authority and domain strength at the same time.",
  },
  {
    number: "9",
    Icon: SearchCheck,
    title: "Measurement, Analysis, Ongoing Iteration",
    description:
      "We track rankings, traffic and leads on a monthly basis and identify the next best opportunity in your campaign. Your Wesley Chapel SEO strategy is continually refined using proof of performance.",
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
                Wesley Chapel
                <br />
                Florida Businesses
              </span>
            </h2>

            <div className="mt-7 h-[2px] w-14 bg-[#FF6F00]" />

            <div className="mt-7 max-w-[380px] space-y-6 text-[16px] leading-8 text-[#081B4B]/75">
              <p>
                Process discipline is what separates an SEO campaign that
                generates revenue from one that only generates reports. Bayshore
                Communication runs every Wesley Chapel Florida engagement
                through a nine-step framework.
              </p>

              <p>
                No element is overlooked and every phase builds on the last.
              </p>
            </div>

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
                Start Your Campaign
                <ArrowRight size={18} />
              </span>
            </button>
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
