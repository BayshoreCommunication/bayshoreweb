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
    title: "Content Credibility Is Now Non-Negotiable",
    description:
      "Today, trust in what is written matters more than ever. With algorithms deciding visibility, material shown to people in Tampa, Florida, must demonstrate real knowledge. Accuracy shapes outcomes behind the scenes. What appears online first has already passed silent checks. Only content grounded in fact earns space on results pages. Authority now quietly determines reach.",
  },
  {
    Icon: Cpu,
    title: "Structured Answers Win Featured Placements",
    description:
      "When answers follow a clear structure, visibility in AI-powered highlights increases noticeably. Those who organize responses around distinct questions tend to occupy prominent spots within automated previews. Clarity shapes placement, especially when information aligns directly with user queries. Positioning improves not through volume but through precision and form. What appears at the top often reflects careful formatting rather than general content depth.",
  },
  {
    Icon: AudioLines,
    title: "Review Quality Influences AI Rankings",
    description:
      "Weight given to page experience grows. Speed at load time matters more now within the ranking framework used for Tampa firms. Visual steadiness during user interaction counts under the new evaluation logic. Mobile access ease factors into results through algorithmic assessment methods. How smoothly a site performs shapes visibility outcomes across local listings.",
  },
  {
    Icon: MessageSquareText,
    title: "Page Experience Metrics Carry More Weight",
    description:
      "What a business offers becomes clear to artificial intelligence through schema markup. Because of structured information, location details are interpreted more accurately by automated search platforms. Eligibility shifts when machines grasp context without ambiguity.",
  },
  {
    Icon: Trophy,
    title: "Schema Markup for AI Comprehension",
    description:
      "Structured data helps AI-powered search engines comprehend your law firm, its physical address, and its customers, which improves your chances of getting rich result rankings.",
  },
  {
    Icon: Cpu,
    title: "First-Mover Advantage Is Still Available",
    description:
      "Tampa, Florida businesses that align their SEO strategy with AI search requirements now will capture organic territory that becomes significantly harder to claim over time.",
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
            <span className="text-[#FF6F00]">Tampa Florida</span> Businesses in 2026
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
