import {
  AudioLines,
  Cpu,
  FileCheck2,
  MessageSquareText,
  Trophy,
} from "lucide-react";

const aiSearchCards = [
  {
    Icon: FileCheck2,
    title: "Expertise and Authority",
    description:
      "AI search prioritizes content demonstrating expertise, authority, and verified patient trustworthiness.",
  },
  {
    Icon: Cpu,
    title: "Structured Data Markup",
    description:
      "Structured data markup helps AI systems identify and prominently feature your practice in results.",
  },
  {
    Icon: AudioLines,
    title: "Answer-Formatted Content",
    description:
      "Answer-formatted content increases the likelihood your pages appear in AI-generated search responses.",
  },
  {
    Icon: MessageSquareText,
    title: "Voice Search Growth",
    description:
      "Voice search growth among mobile users makes local dental queries faster and more conversational.",
  },
  {
    Icon: Trophy,
    title: "Thin Content Displacement",
    description:
      "Practices with thin or outdated content are actively being displaced in Tampa area rankings now.",
  },
];

export default function AiSearchSeoSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-[900px] text-left md:text-center">
          <h2 className="text-[32px] font-bold leading-[1.15] text-[#081B4B] md:text-[42px]">
            Why AI Search Is Changing Dental SEO For{" "}
            <span className="text-[#FF6F00]">Tampa</span>
            {" "}Practices In 2026
          </h2>
          <div className="mx-auto mt-6 max-w-[800px] space-y-4 text-[15px] leading-7 text-black/70 md:text-[16px] md:leading-8">
            <p>
              AI-powered search results are fundamentally reshaping the way patients discover dental practices throughout the Tampa Bay area. Google&apos;s AI Overviews now answer patient questions directly within the search results page itself.
            </p>
            <p>
              Practices not optimized for AI search are already falling behind their Tampa competitors steadily. Bayshore Communication&apos;s SEO services for Dentists in Tampa are built and fully optimized for the 2026 search environment.
            </p>
            <p className="font-bold text-[#081B4B] mt-6">
              How AI search is reshaping dental practices in the Tampa Bay area:
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-10 grid max-w-[1120px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {aiSearchCards.map((card, index) => {
            const Icon = card.Icon;
            const isBottomCard = index >= 3;

            return (
              <div
                key={index}
                className={`
                  group
                  rounded-[12px]
                  bg-white
                  p-8
                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                  ${
                    isBottomCard
                      ? `min-h-[265px] w-full md:col-span-1 lg:col-span-5 ${
                          index === 3
                            ? "lg:col-start-2"
                            : "lg:col-start-7"
                        }`
                      : "min-h-[350px] w-full md:col-span-1 lg:col-span-4 md:text-center"
                  }
                `}
              >
                {isBottomCard ? (
                  <>
                    <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left md:gap-6">
                      <div
                        className="
                           flex
                           h-[90px]
                           w-[90px]
                           shrink-0
                           items-center
                           justify-center
                           rounded-full
                           bg-[#FFF4EC]
                           transition-all
                           duration-500
                           group-hover:scale-110
                           group-hover:rotate-3
                         "
                      >
                        <Icon
                          size={48}
                          strokeWidth={1.8}
                          className="text-[#FF6F00]"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-[22px] font-bold leading-[1.35] text-[#081B4B]">
                          {card.title}
                        </h3>
                        <div className="mx-auto mt-4 h-[3px] w-12 bg-[#FF6F00] sm:mx-0" />
                      </div>
                    </div>

                    <p className="mx-auto mt-6 max-w-[320px] text-[15px] leading-8 text-black/70 sm:mx-0 md:ml-[96px]">
                      {card.description}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex md:justify-center">
                      <div
                        className="
                           flex
                           h-[90px]
                           w-[90px]
                           items-center
                           justify-center
                           rounded-full
                           bg-[#FFF4EC]
                           transition-all
                           duration-500
                           group-hover:scale-110
                           group-hover:rotate-3
                         "
                      >
                        <Icon
                          size={48}
                          strokeWidth={1.8}
                          className="text-[#FF6F00]"
                        />
                      </div>
                    </div>

                    <h3 className="mt-6 text-[22px] font-bold leading-[1.35] text-[#081B4B]">
                      {card.title}
                    </h3>

                    <div className="mt-5 h-[3px] w-12 bg-[#FF6F00] md:mx-auto" />

                    <p className="mt-6 max-w-[300px] text-[15px] leading-8 text-black/70 md:mx-auto">
                      {card.description}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Platforms */}
        <div className="mx-auto mt-16 max-w-[1120px] rounded-[16px] border border-black/5 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] text-center">
          <h4 className="text-[18px] font-bold text-[#081B4B]">
            Platforms Bayshore Communication actively optimizes for:
          </h4>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "Google AI Overviews and AI Search",
              "ChatGPT and OpenAI Search",
              "Perplexity AI",
              "Grok by xAI",
              "Microsoft Bing Copilot",
              "Voice Assistants (Siri, Alexa, Google Assistant)"
            ].map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-black/10 bg-[#FFF4EC]/30 px-5 py-2 text-[14px] font-medium text-[#081B4B] transition hover:border-[#FF6F00] hover:text-[#FF6F00]"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
