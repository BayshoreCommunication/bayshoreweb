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
    title: "Authority Over Keyword Density",
    description:
      "Google and AI platforms now evaluate the genuine credibility and depth of content. So, Tampa, Florida law firms that demonstrate topical authority through well-structured, expert-level content hold rankings that keyword-optimized pages alone cannot achieve.",
  },
  {
    Icon: Cpu,
    title: "AI Answer Boxes Precede Every Traditional Result",
    description:
      "AI-generated summaries now appear above standard search listings. Appearing in those summaries requires structured, authoritative content built around the specific questions. Tampa, Florida, clients ask most frequently.",
  },
  {
    Icon: AudioLines,
    title: "Spoken Searches Require Conversational Content",
    description:
      "Voice and AI queries reflect how people actually speak, not how they type. Content structured around natural local questions earns discoverability in a format that continues to grow among Tampa, Florida, consumers.",
  },
  {
    Icon: MessageSquareText,
    title: "Reputation Data Feeds the Algorithm",
    description:
      "Modern search systems integrate review quality, citation accuracy, and brand consistency as active ranking inputs. A verified, well-maintained local reputation is now inseparable from search performance.",
  },
  {
    Icon: Trophy,
    title: "First Movers in Tampa Gain Compounding Advantages",
    description:
      "Law firms that align with AI search standards in 2026 establish authority positions that become progressively harder for slower-moving competitors in Hillsborough County to challenge or displace.",
  },
];

export default function AiSearchSeoSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-[900px] text-left md:text-center">
          <h2 className="text-[32px] font-bold leading-[1.15] text-[#081B4B] md:text-[42px]">
            Why AI Search Is Changing SEO For{" "}
            <span className="text-[#FF6F00]">Tampa Florida</span> Law Firms In 2026
          </h2>
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
      </div>
    </section>
  );
}
