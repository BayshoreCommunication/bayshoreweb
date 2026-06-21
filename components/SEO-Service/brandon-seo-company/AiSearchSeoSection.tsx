import {
  AudioLines,
  FileCheck2,
  MessageSquareText,
  Trophy,
  ShieldCheck,
  MapPinned,
} from "lucide-react";

const aiSearchCards = [
  {
    Icon: FileCheck2,
    title: "AI Overviews Pull From Trusted and Well Structured Sources",
    description:
      "Google’s AI overview cites from sites with clear, authoritative content on specific topics instead of thin pages without substance.",
  },
  {
    Icon: Trophy,
    title: "Zero Click Searches Demand Brand Visibility",
    description:
      "Appearing in AI summaries builds recognition among Brandon searchers who later convert through branded searches.",
  },
  {
    Icon: MessageSquareText,
    title: "FAQ and Q&A Content Gets Cited More Often",
    description:
      "Brandon businesses with FAQ rich service pages appear more frequently in AI generated results.",
  },
  {
    Icon: ShieldCheck,
    title: "E-E-A-T Signals Carry More Weight Than Ever",
    description:
      "Google's experience, expertise, authoritativeness and trustworthiness criteria now impact AI content selection. Content with author credentials and original expertise gets high priority from Google.",
  },
  {
    Icon: AudioLines,
    title: "Voice and Conversational Queries Are Growing",
    description:
      "Brandon residents asking Siri or Google Assistant questions get AI generated answers. Conversational keyword optimization captures that traffic.",
  },
  {
    Icon: MapPinned,
    title: "Local Intent Still Drives Map Results Despite AI",
    description:
      "AI Overviews have not replaced local pack. Brandon businesses still need strong local SEO fundamentals to appear for buying intent searches and convert.",
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
            <span className="text-[#FF6F00]">Brandon</span> Florida
            Businesses in 2026
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-[#081B4B]/70 md:text-[18px]">
            Google&apos;s AI Overviews now answer questions directly on results page. Brandon SEO company offers effective strategies to give answers to your target audience for business related queries.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-[1120px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  flex
                  flex-col
                  items-center
                  text-center
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

                <h3 className="mt-6 text-[22px] font-bold leading-[1.35] text-[#081B4B]">
                  {card.title}
                </h3>

                <div className="mt-5 h-[3px] w-12 bg-[#FF6F00] mx-auto" />

                <p className="mt-6 text-[15px] leading-8 text-black/70 max-w-[300px] mx-auto">
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
