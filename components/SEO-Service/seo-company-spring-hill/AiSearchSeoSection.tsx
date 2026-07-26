import {
  AudioLines,
  Cpu,
  FileCheck2,
  MessageSquareText,
  Trophy,
} from "lucide-react";

const aiSearchCards = [
  {
    Icon: Trophy,
    title: "Authority Over Keyword Density",
    description:
      "Google and AI platforms now evaluate the genuine credibility and depth of content. So, Spring Hill, Florida businesses that demonstrate topical authority through well-structured, expert-level content hold rankings that keyword-optimized pages alone cannot achieve.",
  },
  {
    Icon: Cpu,
    title: "AI Answer Boxes Precede Every Traditional Result",
    description:
      "AI-generated summaries now appear above standard search listings. Appearing in those summaries requires structured, authoritative content built around the specific questions. Spring Hill, Florida, consumers ask most frequently.",
  },
  {
    Icon: AudioLines,
    title: "Spoken Searches Require Conversational Content",
    description:
      "Voice and AI queries reflect how people actually speak, not how they type. Content structured around natural local questions earns discoverability in a format that continues to grow among Spring Hill, Florida, consumers.",
  },
  {
    Icon: FileCheck2,
    title: "Reputation Data Feeds the Algorithm",
    description:
      "Modern search systems integrate review quality, citation accuracy, and brand consistency as active ranking inputs. A verified, well-maintained local reputation is now inseparable from search performance.",
  },
  {
    Icon: MessageSquareText,
    title: "First Movers in Spring Hill Gain Compounding Advantages",
    description:
      "Businesses that align with AI search standards in 2026 establish authority positions that become progressively harder for slower-moving competitors in Hernando County to challenge or displace.",
  },
];

export default function AiSearchSeoSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-[900px] text-left md:text-center">
          <h2 className="text-[32px] font-bold leading-[1.15] text-[#081B4B] md:text-[42px]">
            Why AI Search Is Changing SEO for{" "}
            <span className="text-[#FF6F00]">Spring Hill Florida</span> Businesses in 2026
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-10 grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aiSearchCards.map((card, index) => {
            const Icon = card.Icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-[12px]
                  bg-white
                  p-8
                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                  min-h-[350px]
                  w-full
                  flex
                  flex-col
                "
              >
                <div className="flex justify-center">
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

                <h3 className="mt-6 text-[22px] font-bold leading-[1.35] text-[#081B4B] text-center">
                  {card.title}
                </h3>

                <div className="mt-5 h-[3px] w-12 bg-[#FF6F00] mx-auto" />

                <p className="mt-6 text-[15px] leading-8 text-black/70 text-center flex-grow">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
