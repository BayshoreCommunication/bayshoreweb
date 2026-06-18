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
    title: "In-Depth Website & SEO Audit",
    description:
      "We conduct a comprehensive analysis of your law firm website. We uncover technical issues, SEO gaps and growth opportunities. We establish a data-driven foundation for future optimizations.",
  },
  {
    number: "2",
    Icon: ChartNoAxesColumnIncreasing,
    title: "Florida Legal Market & Competitor Research",
    description:
      "We analyze competitors in your specific Florida cities and practice areas to identify what your ideal clients seek and determine optimal ranking opportunities.",
  },
  {
    number: "3",
    Icon: SquareActivity,
    title: "Strategic Keyword Planning",
    description:
      "We develop a targeted keyword strategy focusing on high-intent, practice area-specific searches in Florida cities. We ensure each term attracts ready to hire clients.",
  },
  {
    number: "4",
    Icon: KeyRound,
    title: "On Page SEO Optimization",
    description:
      "We optimize your titles, content, headings and internal linking. This way we transform your law firm website into a valuable ranking asset for search engines and prospective clients.",
  },
  {
    number: "5",
    Icon: FileText,
    title: "Technical SEO",
    description:
      "We resolve speed issues, enhance mobile usability and correct indexing errors, eliminating all technical obstacles that hinder your law firm's website from achieving top Google rankings.",
  },
  {
    number: "6",
    Icon: Settings,
    title: "Local SEO & Google Business Profile",
    description:
      "We thoroughly enhance your Google Business Profile and establish robust local signals to elevate your firm's visibility in Florida's map pack and local search results.",
  },
  {
    number: "7",
    Icon: MapPin,
    title: "Content Creation",
    description:
      "We develop SEO-optimized practice-area pages, city landing pages, blog posts and FAQs that effectively rank for Florida legal searches and drive consultation requests from visitors.",
  },
  {
    number: "8",
    Icon: SquarePen,
    title: "Link Building",
    description:
      "We acquire high-quality backlinks from legal directories, reputable Florida publications and authoritative local sources to enhance your domain authority and boost your firm's credibility with search engines.",
  },
  {
    number: "9",
    Icon: SearchCheck,
    title: "AI & AEO Optimization",
    description:
      "We optimize your content and technology for AI search, ensuring your law firm is easily found, cited and recommended in response to Florida legal inquiries.",
  },
  {
    number: "10",
    Icon: ChartNoAxesColumnIncreasing,
    title: "Monthly Reporting and Modification",
    description:
      "We track rankings, traffic and consultation metrics through detailed monthly reports. We adjust strategy based on performance insights, algorithm changes and competitor activities.",
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
              Local SEO Process for
              <br />
              <span className="text-[#FF6F00]">
                Florida Law
                <br />
                Firms
              </span>
            </h2>

            <div className="mt-7 h-[2px] w-14 bg-[#FF6F00]" />

            <div className="mt-7 max-w-[380px] space-y-6 text-[16px] leading-8 text-[#081B4B]/75">
              <p>
                Process discipline is what separates an SEO campaign that
                generates revenue from one that only generates reports. Bayshore
                Communication runs every Florida law firm engagement through a
                ten-step framework.
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
