import {
  Compass,
  FileCheck2,
  MessageSquareText,
  ShieldCheck,
  Layers,
  Info,
} from "lucide-react";

const aiSearchCards = [
  {
    Icon: Compass,
    title: "Search Discovery Is Expanding Beyond Traditional Results",
    description:
      "Customers now meet their answers directly in AI Overviews, conversational chat tools, and interactive maps. The classic list of ten blue links is now just one path among several. Your business needs a robust, structured presence across all these emerging discovery engines to successfully capture the modern buyer.",
  },
  {
    Icon: FileCheck2,
    title: "AI Answers Depend on Clear and Useful Information",
    description:
      "Google bases its own guidance for AI features directly on helpful, highly crawlable content. Clear, verified facts and logically structured pages make your business vastly easier for machines to understand. Vague, technical marketing copy gives AI systems little to work with, meaning they will easily skip you in favor of a clearer competitor.",
  },
  {
    Icon: MessageSquareText,
    title: "Conversational Queries Create New Content Opportunities",
    description:
      "People now ask full, complex questions, such as which Tampa accountant handles small business taxes for restaurants. Dedicated FAQ content and plain, direct answers perfectly match this conversational search behavior. These structured pages also heavily support voice search through mobile devices and smart speakers.",
  },
  {
    Icon: ShieldCheck,
    title: "Business Reputation Extends Into AI-Powered Discovery",
    description:
      "Customer reviews, third party mentions, and business directory listings heavily shape how AI language models describe you to users. Consistent, highly positive digital signals help these systems recommend you confidently. We constantly monitor and systematically strengthen these off-site reputation signals.",
  },
  {
    Icon: Layers,
    title: "Search Visibility Now Requires Multiple Digital Signals",
    description:
      "Rankings, review velocity, local citations, schema data and deep content all contribute to modern visibility. Weakness in any single area can hold back the performance of the rest. We manage every one of these signals together to build an unbreakable digital foundation.",
  },
];

export default function AiSearchSeoSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-[960px] text-left md:text-center">
          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold leading-[1.15] text-[#081B4B]">
            Why AI Search Is Changing{" "}
            <span className="text-[#FF6F00]">SEO for Florida Businesses</span> in 2026
          </h2>
          <p className="mx-auto mt-6 max-w-[800px] text-[15px] leading-7 text-black/70 md:text-[18px]">
            Artificial intelligence is altering how audiences locate information, requiring brands to optimize for AI engines or risk losing digital search authority.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-12 grid max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {aiSearchCards.map((card, index) => {
            const Icon = card.Icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-[16px]
                  bg-white
                  p-8
                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                  min-h-[280px]
                  w-full
                  flex
                  flex-col
                "
              >
                <div className="flex justify-center">
                  <div
                    className="
                      flex
                      h-[80px]
                      w-[80px]
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
                      size={40}
                      strokeWidth={1.8}
                      className="text-[#FF6F00]"
                    />
                  </div>
                </div>

                <h3 className="mt-6 text-[20px] font-bold leading-[1.3] text-[#081B4B] text-center">
                  {card.title}
                </h3>

                <div className="mt-4 h-[3px] w-12 bg-[#FF6F00] mx-auto" />

                <p className="mt-5 text-[15px] leading-7 text-black/70 text-center flex-grow">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Advisory Note */}
        <div className="mx-auto mt-12 max-w-[1000px] rounded-2xl border border-[#FF6F00]/20 bg-[#FFF8F3] p-6 text-center md:p-8">
          <div className="flex items-center justify-center gap-2 text-[#FF6F00] font-bold text-[16px] mb-2">
            <Info size={20} />
            <span>Important Industry Notice</span>
          </div>
          <p className="text-[14px] leading-relaxed text-[#081B4B]/80 md:text-[15px]">
            Please note that no agency can promise guaranteed placement in ChatGPT, Perplexity, or Google AI Overviews. We build strict foundations that heavily improve your chances of being included. We review and adapt this section regularly as AI platforms rapidly change.
          </p>
        </div>
      </div>
    </section>
  );
}
