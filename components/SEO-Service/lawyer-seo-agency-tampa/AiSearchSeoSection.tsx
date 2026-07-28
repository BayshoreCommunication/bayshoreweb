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
    title: "Strict Credibility Standards",
    description:
      "Modern search filters out thin content, highlighting only the most authoritative local law practices.",
  },
  {
    Icon: Cpu,
    title: "Direct Answer Visibility",
    description:
      "Brief answers now appear first, which makes top placement essential for capturing new leads.",
  },
  {
    Icon: MessageSquareText,
    title: "Emphasis on Local Reputation",
    description:
      "Instead of just keywords, emphasis is now on genuine reviews and transparency of site organization.",
  },
  {
    Icon: Trophy,
    title: "Early Adopter Advantage",
    description:
      "In the era of new search behavior, Early Adopter Advantage helps companies gain ground that will be lost by slower players every day.",
  },
  {
    Icon: AudioLines,
    title: "Voice Search Reliability",
    description:
      "Content that matches Siri and Alexa's conversational style helps you be suggested by these virtual assistants.",
  },
];

export default function AiSearchSeoSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-32">
      <div className="mx-auto max-w-[1620px] px-8 md:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-[900px] text-left md:text-center">
          <h2 className="text-[32px] font-bold leading-[1.15] text-[#081B4B] md:text-[42px]">
            Why AI Search Is Changing{" "}
            <span className="text-[#FF6F00]">Lawyer SEO Agency in Tampa</span> in 2026
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-10 grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
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
