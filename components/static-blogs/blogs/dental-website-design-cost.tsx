import Link from "next/link";
import type { ReactNode } from "react";

const blogImage =
  "/assets/static-blogs/dental-website-design-cost.webp";

const blogImageMeta = {
  alt: "Laptop displaying a dental website design for BrightSmile beside a calculator, notepad, and a tooth model.",
  title: "Dental Website Design Cost",
  description:
    "Learn about dental website design cost with BayShore Communication. Understand the factors behind modern, patient-focused designs, essential features, and how to achieve a better ROI for your dental practice.",
  caption:
    "Explore the costs and key features involved in designing an effective website for your dental practice.",
};

export const dentalWebsiteDesignCostBlog = {
  slug: "dental-website-design-cost",
  title: "Dental Website Design Cost",
  metaTitle: "Critical Dental Website Cost Factors 2026",
  metaDescription:
    "Explore dental website costs in 2026, including design, development, features, hosting, and maintenance factors that can affect the overall budget.",
  description:
    "Learn about dental website design cost with BayShore Communication. Understand the factors behind modern, patient-focused designs, essential features, and how to achieve a better ROI for your dental practice.",
  excerpt:
    "Learn about dental website design cost with BayShore Communication. Understand the factors behind modern, patient-focused designs, essential features, and how to achieve a better ROI for your dental practice.",
  canonical:
    "https://www.bayshorecommunication.com/blog/dental-website-design-cost",
  image: blogImage,
  imageAlt: blogImageMeta.alt,
  imageTitle: blogImageMeta.title,
  imageDescription: blogImageMeta.description,
  imageCaption: blogImageMeta.caption,
  imageFit: "contain",
  imageWidth: 1672,
  imageHeight: 941,
  createdAt: "2026-09-22",
  updatedAt: "2026-09-22",
  category: ["Web Design", "Dental Marketing"],
  published: true,
  featuredImage: {
    image: {
      url: blogImage,
      alt: blogImageMeta.alt,
      title: blogImageMeta.title,
      description: blogImageMeta.description,
      caption: blogImageMeta.caption,
    },
  },
};

const keyPoints = [
  "Custom websites cost $2500 to $8000.",
  "Monthly fees cover site security. Recurring payments maintain system uptime.",
  "SEO-ready builds need service pages and local targeting.",
  "Custom copy and UX usually drive the biggest ROI.",
  "Integrations raise cost, but save staff time.",
];

const quickSummaryRows = [
  [
    "Template Starter",
    "$800–$2,500",
    "$50–$250",
    "New clinics, tight budgets",
    "1–2 weeks",
  ],
  [
    "Professional Custom",
    "$2,500–$8,000",
    "$150–$450",
    "Most practices, growth focus",
    "3–6 weeks",
  ],
  [
    "High-Performance SEO Build",
    "$8,000–$15,000+",
    "$300–$600+",
    "Competitive areas, multi-location",
    "6–10 weeks",
  ],
];

const customProjectItems = [
  "Custom homepage layout",
  "Service page templates",
  "Team and about pages",
  "Before-and-after gallery setup",
  "Reviews integration",
];

const highPerformanceItems = [
  "20 to 60 SEO pages",
  "Location pages for multi-city targeting",
  "Schema setup for dental services",
  "Core Web Vitals work",
  "Accessibility improvements",
  "Tracking plans and dashboards",
];

const costDriverRows = [
  [
    "Custom Copywriting",
    "Research, tone, compliance, conversion",
    "$400–$2,000+",
  ],
  [
    "SEO Service Pages",
    "More pages, intent targeting",
    "$150–$500 per page",
  ],
  [
    "Online Booking Integration",
    "Setup, testing, tracking",
    "$200–$1,000",
  ],
  [
    "Custom Photos Or Video",
    "Shoot planning and editing",
    "$800–$4,000+",
  ],
  [
    "Multilingual Setup",
    "Extra layouts and QA",
    "$300–$2,500+",
  ],
  [
    "ADA And Accessibility Work",
    "Audit, fixes, documentation",
    "$300–$3,000+",
  ],
];

const monthlyItems = [
  "Hosting and backups",
  "Plugin and platform updates",
  "Security monitoring",
  "Minor edits and fixes",
  "Uptime monitoring",
];

const beginnerBudgetRows = [
  ["Website Build", "$1,500–$4,000", "Professional look and flow"],
  ["Basic Local SEO Setup", "$300–$900", "Helps visibility and trust"],
  ["Monthly Care", "$150–$300", "Prevents downtime and issues"],
];

const growthPlanItems = [
  "Service pages for high-value treatments",
  "Clear finance and insurance sections",
  "Strong review and trust blocks",
  "Call tracking and form tracking",
  "Fast mobile performance",
];

const expertItems = [
  "CWV scores on mobile, not desktop only",
  "Proper schema for dentists and services",
  "Clean URL and internal link structure",
  "Index control for thin pages",
  "Event tracking for calls and bookings",
];

const benchmarkRows = [
  ["Mobile PageSpeed Performance Score", "58/100", "75+ for lead pages"],
  ["Largest Contentful Paint (Mobile)", "3.1s", "2.5s or less"],
  ["Home Page Word Count", "620 words", "700–1,100 with strong structure"],
  ["Service Pages Present", "9 pages", "12–25 for broad practices"],
];

const questionsToAsk = [
  "Who writes the copy on each page?",
  "What is your page speed target?",
  "How do you track calls and forms?",
  "What happens after launch each month?",
  "Who owns the domain and content?",
  "What is your edit turnaround time?",
];

const lowerCostItems = [
  "Final logo files and brand colors",
  "Office photos, even phone photos",
  "Your services list and pricing ranges",
  "Your FAQs from real patient calls",
  "Your top insurance questions",
];

const faqs = [
  {
    question: "What Is A Reasonable Budget For A Dental Website?",
    answer:
      "A reasonable budget is $2,500–$8,000 upfront. Add $150–$450 monthly. This range usually covers custom design, clear copy, mobile speed basics, and simple lead tracking.",
  },
  {
    question: "Why Do Dental Websites Have Ongoing Monthly Fees?",
    answer:
      "Monthly fees cover hosting services. Regular plans include security updates. Neglect causes technical failures. Hackers target unprotected sites. Routine maintenance beats emergency repair costs.",
  },
  {
    question: "Can I Use A Template And Still Get Patients?",
    answer:
      "Yes, if your market is not crowded. Templates can convert with strong copy and clear calls. But ranking locally is harder. Custom UX and SEO pages usually outperform templates.",
  },
  {
    question: "How Long Does A Dental Website Project Take?",
    answer:
      "Most projects take 3–6 weeks. Templates can take 1–2 weeks. High-performance SEO builds take 6–10 weeks. Delays often come from missing content and approvals.",
  },
  {
    question: "What Adds The Most Cost To A Dental Website?",
    answer:
      "Custom copywriting and SEO service pages raise costs most. Photo and video also add cost. Integrations like booking and call tracking add setup time and testing needs.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.bayshorecommunication.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.bayshorecommunication.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dental Website Design Cost",
          "item":
            "https://www.bayshorecommunication.com/blog/dental-website-design-cost",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id":
          "https://www.bayshorecommunication.com/blog/dental-website-design-cost",
      },
      "headline": "Dental Website Design Cost",
      "name": "Critical Dental Website Cost Factors 2026",
      "description":
        "Explore dental website costs in 2026, including design, development, features, hosting, and maintenance factors that can affect the overall budget.",
      "url":
        "https://www.bayshorecommunication.com/blog/dental-website-design-cost",
      "image":
        "https://www.bayshorecommunication.com/assets/static-blogs/dental-website-design-cost.webp",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.bayshorecommunication.com/blog",
      },
      "about": {
        "@type": "Thing",
        "name": "Dental Website Design Cost",
        "description":
          "An overview of dental website design cost factors, packages, monthly maintenance, SEO features, and ROI for dental practices.",
      },
      "keywords": [
        "dental website design cost",
        "dental website cost",
        "cost of dental website design",
        "dentist website design cost",
        "dental website pricing",
        "dental website development cost",
        "dental clinic website cost",
        "dental practice website cost",
        "dental SEO cost",
        "dental marketing cost",
      ],
      "author": {
        "@type": "Organization",
        "name": "Bayshore Communication",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bayshore Communication",
        "url": "https://www.bayshorecommunication.com",
        "logo": {
          "@type": "ImageObject",
          "url":
            "https://www.bayshorecommunication.com/assets/bayshore-logo.svg",
        },
      },
      "datePublished": "2026-09-22",
      "dateModified": "2026-09-22",
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  ],
};

const InlineLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <Link className="font-semibold text-[#0077B3] underline" href={href}>
    {children}
  </Link>
);

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    className="font-semibold text-[#0077B3] underline"
    href={href}
    rel="nofollow noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export const DentalWebsiteDesignCostBlog = () => {
  return (
    <article className="w-full bg-[#f7f8fb] text-[#162033]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />

      <section className="rounded-[8px] bg-[#101d34] p-6 text-white md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8ed8ff]">
          Dental Web Design | Practice Cost &amp; ROI Guide
        </p>
        <p className="mt-4 max-w-3xl !text-lg !leading-8 !text-[#d9e7f7]">
          The cost of designing a website for a dental practice can range from an
          average of $3,200 to $15,000, depending on the design type, the number of
          pages, the functionality and the level of customization required. Typical
          continuing costs for hosting, security, maintenance, updates and
          technical support are in the range of $50 to $500 per month.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 !text-sm !text-[#d9e7f7]">
          <span className="rounded-full border border-white/20 px-4 py-2">
            Published: September 22, 2026
          </span>
          <span className="rounded-full border border-white/20 px-4 py-2">
            Updated: September 22, 2026
          </span>
          <span className="rounded-full border border-white/20 px-4 py-2">
            Dental Website Design Cost
          </span>
          <span className="rounded-full border border-white/20 px-4 py-2">
            Practice Growth
          </span>
        </div>
      </section>

      <div className="mt-8 space-y-8">
        <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FE6F1F]">
            <h2>Key Takeaways</h2>
          </p>
          <p className="mt-3 text-lg leading-8">
            You will waste money without clarity. Use these points to set your budget fast.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {keyPoints.map((point) => (
              <div
                key={point}
                className="rounded-[8px] border border-[#dce6f2] bg-[#f7fbff] p-4"
              >
                <p className="text-base leading-7">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-bold leading-tight">
            Quick Summary Of Dental Website Design Cost Ranges
          </h2>
          <p className="mt-4 text-lg leading-8">
            Dental clinics choose three budget tiers. Custom design increases the base price. Professional copywriting raises the cost. Advanced integrations inflate total expenses.
          </p>
          <DataTable
            columns={[
              "Package Level",
              "Upfront Cost (USD)",
              "Monthly Cost (USD)",
              "Best For",
              "Typical Timeline",
            ]}
            rows={quickSummaryRows}
          />
          <p className="mt-5 text-lg leading-8">
            These ranges reflect real vendor quotes. We also sampled 27 dental sites. We checked visible stack signals. We checked page speed reports. We mapped typical deliverables to price.
          </p>
        </section>

        <NumberedSection
          number="1."
          title="What You Are Really Buying With Dental Website Design"
        >
          <p>
            You are buying three things. You are buying trust. You are buying visibility. You are buying conversions.
          </p>
          <p>
            A dental website must do key jobs. It must load fast. It must read clearly. It must guide action. Do you want calls? Do you want form fills? Do you want online booking?
          </p>
          <p>
            You pay more when the site does more.
          </p>
        </NumberedSection>

        <NumberedSection
          number="2."
          title="How Much A Basic Dental Website Costs And What You Get"
        >
          <p>
            Basic dental websites cost $800 to $2500. Developers use standard templates. Page builders fulfill simple needs.
          </p>
          <p>
            Packages include 5 to 8 pages. You get a mobile layout. You get contact info. You get a simple form. You may get stock images.
          </p>
          <p>
            You often do not get strong SEO. You often do not get a custom copy. You often do not get conversion testing.
          </p>
          <p>
            This tier fits you if you need a clean presence. It also fits you if ads drive bookings.
          </p>
        </NumberedSection>

        <NumberedSection
          number="3."
          title="How Much A Custom Dental Website Costs And Why It Costs More"
        >
          <p>
            Custom dental sites cost $2500-$8000. This is the common sweet spot. It balances quality and cost. It also supports growth.
          </p>
          <p>
            You pay for strategy and structure. You pay for a unique design. You pay for a better copy. You pay for clearer flows.
          </p>
          <p>Most custom projects include:</p>
          <ul className="mt-3 space-y-2 pl-5 list-disc text-base leading-7">
            {customProjectItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">
            Local competition requires custom designs. Custom builds ensure better results.
          </p>
        </NumberedSection>

        <NumberedSection
          number="4."
          title="How Much A High-Performance Dental Website Costs For Competitive Markets"
        >
          <p>
            Competitive markets need premium dental websites. Usually top websites cost around $8000-$15000. Advanced tools raise overall prices. These builds target top rankings. They also target high conversion rates.
          </p>
          <p>
            This tier often includes deeper research. It includes keyword maps. It includes content planning. It includes technical SEO. It includes CRO patterns.
          </p>
          <p>You often get:</p>
          <ul className="mt-3 space-y-2 pl-5 list-disc text-base leading-7">
            {highPerformanceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">
            If your area is crowded, this tier wins.
          </p>
        </NumberedSection>

        <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-bold leading-tight">
            The Biggest Cost Drivers That Change Your Quote Fast
          </h2>
          <p className="mt-4 text-lg leading-8">
            The biggest cost drivers are predictable. If you add them, the cost rises.
          </p>
          <DataTable
            columns={["Cost Driver", "Why It Raises Cost", "Typical Add-On Price"]}
            rows={costDriverRows}
          />
          <p className="mt-5 text-lg leading-8">
            Do you need all the add-ons now? Or can you phase them?
          </p>
        </section>

        <PdfCta
          eyebrow="Ready To Price Your Dental Website The Right Way?"
          title="Ready To Price Your Dental Website The Right Way?"
          text="If your website is not booking patients, it is leaking money. Get a custom, transparent quote tailored specifically to your practice goals and local competitive density."
          button="REQUEST A CUSTOM QUOTE TODAY"
          href="/contact"
        />

        <NumberedSection
          number="5."
          title="Monthly Costs You Should Expect After Launch"
        >
          <p>
            Monthly dental website costs usually run $150 to $600. Some vendors charge more. Some bundle marketing services.
          </p>
          <p>Monthly fees typically include:</p>
          <ul className="mt-3 space-y-2 pl-5 list-disc text-base leading-7">
            {monthlyItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">
            If you skip monthly care, risk rises. Hacks happen. Broken forms happen. Slow sites happen.
          </p>
        </NumberedSection>

        <NumberedSection
          number="6."
          title="Beginner Level: How To Budget If You Are New Or Rebranding"
        >
          <p>
            Start with your goal and your constraints. Then choose a tier.
          </p>
          <p>
            If you are new, focus on bookings. Focus on speed. Focus on clarity. Do not overbuild.
          </p>
          <p>A practical beginner budget looks like this:</p>
          <DataTable
            columns={["Item", "Budget Target", "Why It Matters"]}
            rows={beginnerBudgetRows}
          />
          <p className="mt-5">
            Ask yourself one question. What is one new patient worth?
          </p>
        </NumberedSection>

        <NumberedSection
          number="7."
          title="Intermediate Level: How To Invest For Growth Without Overspending"
        >
          <p>
            At intermediate level, you want consistent leads. You also want better rankings. You need content depth.
          </p>
          <p>
            You should budget for service pages and local intent. You should also budget for better tracking.
          </p>
          <p>A smart growth plan includes:</p>
          <ul className="mt-3 space-y-2 pl-5 list-disc text-base leading-7">
            {growthPlanItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">
            $4000 to $10000 projects deliver top results.
          </p>
        </NumberedSection>

        <NumberedSection
          number="8."
          title="Expert Level: How To Evaluate Technical SEO And Conversion Systems"
        >
          <p>
            At expert level, small details matter. You should demand proof. You should also demand clean measurement.
          </p>
          <p>Look for:</p>
          <ul className="mt-3 space-y-2 pl-5 list-disc text-base leading-7">
            {expertItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-5">
            Our internal benchmark data can guide you. We reviewed 27 dental sites. We found patterns that affect cost.
          </p>
          <DataTable
            columns={["Metric We Checked", "Our Sample Average", "What Good Looks Like"]}
            rows={benchmarkRows}
          />
          <p className="mt-5">
            Better scores often need better builds. Better builds cost more.
          </p>
        </NumberedSection>

        <NumberedSection
          number="9."
          title="Why Cheap Dental Websites Often Cost More Later"
        >
          <p>
            Cheap websites cut corners. The problems show up later.
          </p>
          <p>
            Common issues include slow load times. Weak copy is also common. Broken tracking is common too.
          </p>
          <p>
            Then you pay again for a rebuild. Or you pay for patches. Rebuilds mostly cost more. They also waste months.
          </p>
          <p>
            Do you want a bargain site? Or a site that performs?
          </p>
        </NumberedSection>

        <NumberedSection
          number="10."
          title="What To Ask A Dental Website Designer Before You Sign"
        >
          <p>
            You should ask direct questions. You should get direct answers. If you get vague answers, walk away.
          </p>
          <p>Here are essential questions:</p>
          <ul className="mt-3 space-y-2 pl-5 list-disc text-base leading-7">
            {questionsToAsk.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
          <p className="mt-4">
            This protects your budget. It also protects your results.
          </p>
        </NumberedSection>

        <NumberedSection
          number="11."
          title="How To Lower Your Dental Website Design Cost Without Hurting Quality"
        >
          <p>
            You can lower the cost with smart prep. You can also phase upgrades.
          </p>
          <p>You can reduce cost by providing:</p>
          <ul className="mt-3 space-y-2 pl-5 list-disc text-base leading-7">
            {lowerCostItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">
            You can also launch with core pages first. Then add SEO pages later.
          </p>
        </NumberedSection>

        <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-bold leading-tight">Conclusion</h2>
          <div className="mt-5 space-y-5 text-lg leading-8">
            <p>
              Pages are not equal. Some need more work. Service pages need structure. They also need compliance care.
            </p>
            <p>
              Single pages cost $150 to $500. Custom pages can reach $800+. This depends on copy, layout, and SEO. High intent pages include implants, Invisalign, and emergency. Those pages deserve more budget.
            </p>
            <p>
              If your website is not booking patients, it is leaking money. We can help you fix that. At Bayshore Communication, we design dental websites that load fast, rank locally, and convert consistently. We provide clear quotes. We build practical plans.
            </p>
          </div>
        </section>

        <PdfCta
          eyebrow="Transform Your Practice Website Into A Patient Booking Engine"
          title="Transform Your Practice Website Into A Patient Booking Engine"
          text="At Bayshore Communication, we design dental websites that load fast, rank locally, and convert consistently. Contact our strategy team today for a free website consultation."
          button="BOOK YOUR FREE CONSULTATION NOW"
          href="/contact"
        />

        <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0077B3]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">
            Questions People Usually Ask Us
          </h2>
          <div className="mt-6 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-[#dce6f2] pb-5 last:border-b-0 last:pb-0"
              >
                <h3 className="text-xl font-bold">Q. {faq.question}</h3>
                <p className="mt-2 text-lg leading-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold leading-tight text-gray-700">Disclaimer</h2>
          <p className="mt-3 text-base leading-7 text-gray-600">
            This blog is for informational purposes only. If you want to know anything in details, please contact Bayshore Communication.
          </p>
        </section>
      </div>
    </article>
  );
};

const NumberedSection = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) => (
  <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
    <div className="grid gap-4 md:grid-cols-[72px_1fr]">
      <div className="text-4xl font-bold leading-none text-[#FE6F1F]">
        {number}
      </div>
      <div>
        <h2 className="text-3xl font-bold leading-tight">{title}</h2>
        <div className="mt-5 space-y-5 text-lg leading-8 [&>blockquote]:border-l-4 [&>blockquote]:border-[#FE6F1F] [&>blockquote]:bg-[#fff7f1] [&>blockquote]:p-5 [&>blockquote]:text-xl">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const DataTable = ({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) => (
  <div className="mt-5 overflow-x-auto rounded-[8px] border border-[#dce6f2]">
    <div className="min-w-[760px]">
      <div
        className="grid bg-[#101d34] text-base font-semibold !text-white"
        style={{
          gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
        }}
      >
        {columns.map((column) => (
          <div key={column} className="p-4">
            {column}
          </div>
        ))}
      </div>
      {rows.map((row) => (
        <div
          key={row.join("-")}
          className="grid border-t border-[#dce6f2] bg-white text-base"
          style={{
            gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
          }}
        >
          {row.map((cell, index) => (
            <div key={`${cell}-${index}`} className="p-4 first:font-semibold">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const PdfCta = ({
  eyebrow,
  title,
  text,
  button,
  href,
}: {
  eyebrow: string;
  title: string;
  text: string;
  button: string;
  href: string;
}) => (
  <section className="rounded-[8px] bg-[#101d34] p-6 text-white md:p-8">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8ed8ff]">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-3xl font-bold leading-tight">{title}</h2>
    <p className="mt-4 max-w-3xl !text-lg !leading-8 !text-[#d9e7f7]">{text}</p>
    <Link
      href={href}
      className="mt-6 inline-flex rounded-full bg-[#FE6F1F] px-6 py-4 text-base font-semibold text-white hover:bg-[#e05e19] transition-colors"
    >
      {button}
    </Link>
  </section>
);

export default DentalWebsiteDesignCostBlog;
