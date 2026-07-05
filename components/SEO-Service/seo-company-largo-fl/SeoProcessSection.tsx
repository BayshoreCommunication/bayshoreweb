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
    title: "Discovery and Audit",
    description:
      "We conduct a full-site technical evaluation and document every issue affecting your current search performance. This diagnostic phase establishes an honest starting point before any optimization decisions are finalized.",
  },
  {
    number: "2",
    Icon: ChartNoAxesColumnIncreasing,
    title: "Largo Market Analysis",
    description:
      "We examine your primary competitors in the Largo area to understand their ranking advantages and exploitable weaknesses. This intelligence shapes the direction of your campaign from the very first strategic recommendations onward.",
  },
  {
    number: "3",
    Icon: SquareActivity,
    title: "Keyword Architecture",
    description:
      "We form a layered, multi-layered keyword architecture considering service terms, location modifiers and transactional intent at the same time. Each term has to be included because it relates your business to a buyer at a relevant stage of their decision process.",
  },
  {
    number: "4",
    Icon: KeyRound,
    title: "On-Page and Content Optimization",
    description:
      "Page by Page optimization deals with titles, structure, internal link building, schema, and content optimization for target searches page by page. Every page is polished to cater the needs of search engines and expectations of humans who read it.",
  },
  {
    number: "5",
    Icon: FileText,
    title: "Technical Remediation",
    description:
      "The speed, indexing, mobile rendering and crawl errors are detected and addressed systematically. Technical performance is a ranking factor and we take it seriously as content and keyword strategy.",
  },
  {
    number: "6",
    Icon: Settings,
    title: "Local Presence Development",
    description:
      "Google Business Profile optimization, structured citation building, and map pack targeting are all executed in this phase. The goal is maximum visibility for any search query with a Largo or Pinellas County geographic component to it.",
  },
  {
    number: "7",
    Icon: MapPin,
    title: "Content Production",
    description:
      "We develop written content around the real questions Largo customers ask at each stage of their buying journey. This content serves both search engine ranking goals and the need to convert an informed reader into an inquiry.",
  },
  {
    number: "8",
    Icon: SquarePen,
    title: "Authority and Link Building",
    description:
      "Backlinks are earned from relevant local sources, industry directories, and trusted publications through consistent outreach. Each addition to your link profile raises the domain authority that supports ranking across your entire website.",
  },
  {
    number: "9",
    Icon: SearchCheck,
    title: "All measurement and strategic adjustment activities",
    description:
      "Each month, we report on the status of your keywords, traffic, leads generated and campaign health. Strategy is adjusted each month based on what the data shows is working and where opportunity remains untapped.",
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
                Largo Florida
                <br />
                Businesses
              </span>
            </h2>

            <div className="mt-7 h-[2px] w-14 bg-[#FF6F00]" />

            <div className="mt-7 max-w-[380px] space-y-6 text-[16px] leading-8 text-[#081B4B]/75">
              <p>
                Every campaign Bayshore Communication runs as a seo company largo fl follows a structured sequence built for local market performance.
              </p>

              <p>
                Each phase is designed to produce results that carry forward and compound through every subsequent stage of the work.
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
