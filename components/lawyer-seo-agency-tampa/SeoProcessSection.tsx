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
    title: "Law Firm SEO Audit",
    description:
      "We begin by analyzing your website's technical health, current keyword rankings, on-page structure, local presence, and competitive positioning. This gives us a clear baseline and identifies the highest-priority improvements before any optimization work begins.",
  },
  {
    number: "2",
    Icon: ChartNoAxesColumnIncreasing,
    title: "Tampa Legal Market and Competitor Research",
    description:
      "We study your top Tampa competitors in detail. We assess their rankings, authority sources, and content strategies. We identify gaps your firm can strategically exploit. We  also map exactly how Tampa residents search for legal help in your practice areas.",
  },
  {
    number: "3",
    Icon: SquareActivity,
    title: "Legal Keyword Strategy",
    description:
      "We build a comprehensive keyword map around high-intent, practice-area-specific Tampa search terms. Every keyword is selected because it connects your firm with clients who are ready to hire.",
  },
  {
    number: "4",
    Icon: KeyRound,
    title: "On-Page Optimization",
    description:
      "Each practice area page, service page and landing page is designed with search engine optimization and human visitors who are considering calling your firm in mind. Titles, headings, content, internal links and schema markup are all streamlined and optimized to their maximum capabilities.",
  },
  {
    number: "5",
    Icon: FileText,
    title: "Technical SEO",
    description:
      "We resolve site speed problems, mobile usability issues, crawl errors, duplicate content, broken links, and structural weaknesses that are preventing your law firm's website from reaching its full ranking potential in Tampa search results.",
  },
  {
    number: "6",
    Icon: Settings,
    title: "Local SEO and Google Business Profile",
    description:
      "We build and optimize your firm's complete local presence, including Google Business Profile, legal directory citations, local backlinks, and map pack positioning. This ensures you capture clients searching for attorneys in your specific area of Tampa.",
  },
  {
    number: "7",
    Icon: MapPin,
    title: "Legal Content Creation",
    description:
      "We produce authoritative, in-depth content that answers the real legal questions Tampa residents ask before hiring an attorney. Practice area pages, FAQ content, and blog articles are all written to rank in search and position your firm as the clear authority in your field.",
  },
  {
    number: "8",
    Icon: SquarePen,
    title: "Link Building and Legal Directory Strategy",
    description:
      "We build quality backlinks from respected legal directories, Tampa-area publications, and industry associations. We also use relevant local sources to strengthen authority and improve rankings over time.",
  },
  {
    number: "9",
    Icon: SearchCheck,
    title: " Reporting and Continuous Refinement",
    description:
      "Monthly reports with keyword rankings, organic traffic data, consultation leads, and ROI metrics are paired with ongoing strategy adjustments. We never set a strategy and leave it alone. We refine continuously to keep your results growing month after month.",
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
                Tampa Law Firms
              </span>
            </h2>

            <div className="mt-7 h-[2px] w-14 bg-[#FF6F00]" />

            <div className="mt-7 max-w-[380px] space-y-6 text-[16px] leading-8 text-[#081B4B]/75">
              <p>
                Every successful law firm SEO campaign begins with a clear process. Bayshore Communication follows a structured, nine-step methodology built specifically for the Tampa legal market. This is designed to produce measurable results at every stage.

              </p>

              {/* <p>
                No element is overlooked and every phase builds on the last.
              </p> */}
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
