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
    title: "Evaluate the Depth and Demonstrated Authority",
    description:
      "A Wesley Chapel business with thorough, well-structured service pages outranks a competitor with keyword-stuffed, thin pages regardless of link volume.",
  },
  {
    Icon: Cpu,
    title: "AI Answer Summaries Are Replacing Traditional Rankings",
    description:
      "A growing share of local searches resolve within AI-generated summaries. Appearing in those summaries requires structured content that most Wesley Chapel businesses have not yet built.",
  },
  {
    Icon: AudioLines,
    title: "Voice Search Is Now a Primary Discovery Method",
    description:
      "Conversational queries about local services are common on smartphones and smart speakers. FAQ content is the best route to capturing those voice searches.",
  },
  {
    Icon: MessageSquareText,
    title: "Review Quality Influences AI Ranking Signals",
    description:
      "AI ranking systems weight review volume and sentiment more heavily than before. Wesley Chapel businesses with managed review profiles hold a clear advantage.",
  },
  {
    Icon: Trophy,
    title: "Early Alignment Creates Durable Competitive Advantages",
    description:
      "Wesley Chapel businesses that adapt today build advantages that slower competitors cannot replicate quickly.",
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
            <span className="text-[#FF6F00]">Wesley Chapel</span> Florida
            Businesses In 2026
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
