import {
  AudioLines,
  Cpu,
  FileCheck2,
  MessageSquareText,
  Trophy,
  Bot,
} from "lucide-react";

const aiSearchCards = [
  {
    Icon: FileCheck2,
    title: "Rise of \"Zero-Click\" Searches",
    description:
      "AI summaries deliver instant answers. This attracts higher intent traffic that is more likely to convert for FL lawyers.",
  },
  {
    Icon: Cpu,
    title: "AI Overviews (AIO) & Trust Requirements",
    description:
      "AI overviews in Gemini highlight clear, credible content. Florida legal sites need that structured data for authoritative ranking.",
  },
  {
    Icon: AudioLines,
    title: "From Keywords to Conversational Queries",
    description:
      "Clients use natural language queries. Content on your site should directly address these questions clearly.",
  },
  {
    Icon: MessageSquareText,
    title: "Hyper Local Focus",
    description:
      "Google's AI focuses on locality, legal knowledge and optimized authentic profiles for local high intent searches.",
  },
  {
    Icon: Trophy,
    title: "Increased Importance of Authority Signals",
    description:
      "AI algorithms use peer reviews, directory profiles and third-party mentions to establish a law firm's credibility.",
  },
];

const aiPlatforms = [
  { label: "Google AI Search", detail: "Featured answers" },
  { label: "ChatGPT", detail: "Conversational results" },
  { label: "Perplexity", detail: "Research queries" },
  { label: "Grok", detail: "Real-time search" },
  { label: "Bing Copilot", detail: "AI powered results" },
  { label: "Voice Search", detail: "Siri, Alexa, Google" },
];

export default function AiSearchSeoSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-[900px] text-left md:text-center">
          <h2 className="text-[32px] font-bold leading-[1.15] text-[#081B4B] md:text-[42px]">
            Why AI Search Is Changing Local SEO For{" "}
            <span className="text-[#FF6F00]">Legal Practices</span> in Florida
            2026
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-black/70 md:text-[18px] md:leading-8">
            SEO now focuses on AI&apos;s understanding and recommendations for
            Florida law firms. In 2026 and onwards customers will receive direct
            answers from AI results instead of using traditional ways to
            navigate websites.
          </p>
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

        {/* AI Platforms */}
        <div className="mx-auto mt-14 max-w-[1120px]">
          <div className="flex items-center gap-4 mb-6">
            <Bot size={24} className="text-[#FF6F00]" />
            <h3 className="text-[20px] font-bold text-[#081B4B] md:text-[24px]">
              AI search platforms we optimize for
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {aiPlatforms.map((platform, index) => (
              <div
                key={index}
                className="
                  group
                  rounded-[16px]
                  border
                  border-black/8
                  bg-white
                  p-4
                  text-center
                  shadow-[0_4px_16px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#FF6F00]/40
                  hover:shadow-[0_10px_28px_rgba(255,111,0,0.12)]
                "
              >
                <p className="font-bold text-[#081B4B] text-[14px] md:text-[15px]">
                  {platform.label}
                </p>
                <p className="mt-1 text-[12px] text-black/55">{platform.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
