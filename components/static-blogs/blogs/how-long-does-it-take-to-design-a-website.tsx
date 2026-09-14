import Link from "next/link";
import type { ReactNode } from "react";

const websiteDesignTimelineImage =
  "/assets/static-blogs/how-long-does-it-take-to-design-a-website.webp";

const websiteDesignTimelineImageMeta = {
  alt: "Laptop showing a website design for BayShore Communication with strategy, design, and development icons.",
  title: "How Long Does It Take to Design a Website",
  description:
    "Wondering how long it takes to design a website? Explore the core stages including discovery, planning, design, development, testing, and launch with BayShore Communication to better plan your digital project timeline.",
  caption:
    "Learn about the complete web design timeline and process, from initial discovery and planning to final launch.",
};

export const howLongDoesItTakeToDesignAWebsiteBlog = {
  slug: "how-long-does-it-take-to-design-a-website",
  title: "How Long Does It Take to Design a Website",
  metaTitle: "Proven Website Design Timeline Facts 2026",
  metaDescription:
    "Learn how long website design typically takes, from planning and content to development, testing, and launch, with factors that can affect the timeline.",
  description:
    "Wondering how long it takes to design a website? Explore the core stages including discovery, planning, design, development, testing, and launch with BayShore Communication to better plan your digital project timeline.",
  excerpt:
    "Wondering how long it takes to design a website? Explore the core stages including discovery, planning, design, development, testing, and launch with BayShore Communication to better plan your digital project timeline.",
  canonical:
    "https://www.bayshorecommunication.com/blog/how-long-does-it-take-to-design-a-website",
  image: websiteDesignTimelineImage,
  imageAlt: websiteDesignTimelineImageMeta.alt,
  imageTitle: websiteDesignTimelineImageMeta.title,
  imageDescription: websiteDesignTimelineImageMeta.description,
  imageCaption: websiteDesignTimelineImageMeta.caption,
  imageFit: "contain",
  createdAt: "2026-09-14",
  updatedAt: "2026-09-14",
  category: ["Website Design", "Web Development"],
  published: true,
  featuredImage: {
    image: {
      url: websiteDesignTimelineImage,
      alt: websiteDesignTimelineImageMeta.alt,
      title: websiteDesignTimelineImageMeta.title,
      description: websiteDesignTimelineImageMeta.description,
      caption: websiteDesignTimelineImageMeta.caption,
    },
  },
};

const takeaways = [
  "Expect 4–8 weeks for most business sites.",
  "Content readiness can cut 1–3 weeks.",
  "Feedback speed controls the final date.",
  "Integrations add 1–4 weeks.",
  "Ecommerce adds 2–8 weeks.",
];

const websiteScopeRows = [
  ["One-Page Landing", "1", "Form, CTA, Basic SEO", "5–10 Business Days"],
  ["Starter Business Website", "5–8", "Blog, Contact, Analytics", "2–4 Weeks"],
  ["Custom Small Business Website", "8–20", "Custom UI, CMS, Lead Flows", "4–8 Weeks"],
  ["Service Website With Integrations", "15–40", "CRM, Booking, Automations", "6–12 Weeks"],
  ["Ecommerce Store", "10–50+", "Products, Checkout, Shipping, Tax", "8–16+ Weeks"],
  ["Enterprise Or Web App", "Varies", "Roles, Dashboards, APIs, SSO", "12–24+ Weeks"],
];

const delayCauseRows = [
  ["Content Not Ready", "17 of 28", "9 Business Days"],
  ["Slow Feedback Cycles", "14 of 28", "6 Business Days"],
  ["Scope Changes Mid-Project", "9 of 28", "11 Business Days"],
  ["Third-Party Integrations Issues", "8 of 28", "7 Business Days"],
  ["Legal Or Compliance Reviews", "5 of 28", "8 Business Days"],
];

const phaseTimelineRows = [
  ["Discovery And Planning", "Goals, pages, users, sitemap", "2–5 Days"],
  ["Content And SEO Inputs", "Copy, photos, keywords, structure", "3–10 Days"],
  ["Wireframes", "Layout and page flow", "2–6 Days"],
  ["Visual Design", "Fonts, colors, components, UI", "5–12 Days"],
  ["Development", "Build pages, CMS, templates", "7–20 Days"],
  ["Testing And Fixes", "Speed, mobile, forms, errors", "3–7 Days"],
  ["Launch And Handover", "Go-live, tracking, training", "1–3 Days"],
];

const smallBusinessTimelineRows = [
  ["Week 1", "Plan And Structure", "Sitemap, Goals, Page List"],
  ["Week 2", "Wireframes And Content", "Layouts, Draft Copy"],
  ["Week 3", "Visual Design", "Design System, Page Designs"],
  ["Week 4–5", "Build And CMS", "Working Site, Templates"],
  ["Week 6", "QA And Launch Prep", "Fixes, Speed, Tracking"],
  ["Week 7–8", "Buffer And Launch", "Go-Live, Handover"],
];

const faqs = [
  {
    question: "How Long Does It Take To Design A Simple Website?",
    answer:
      "Simple websites require two to four weeks. This timeline includes complete site creation. Prepared assets accelerate delivery. Ready approvals save time.",
  },
  {
    question: "What Usually Delays A Website Project The Most?",
    answer:
      "Content delays lead most projects. Missing copy, photos, and approvals add days fast. Slow feedback also hurts momentum. One clear decision-maker helps you launch on time.",
  },
  {
    question: "Can I Get A Website Designed In One Week?",
    answer:
      "Yes, but only for a small scope. Think one-page or a very light five-page site. You must provide content and branding on day one. Expect limited revisions.",
  },
  {
    question: "How Many Revision Rounds Should I Plan For?",
    answer:
      "Teams schedule two revision rounds. Extra revisions indicate unclear goals. Clear feedback preserves output quality. Fast approvals shorten delivery schedules. Solid project management streamlines web design. Efficient strategies prevent costly delays.",
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
          "item": "https://www.bayshorecommunication.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.bayshorecommunication.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "How Long Does It Take to Design a Website",
          "item": "https://www.bayshorecommunication.com/blog/how-long-does-it-take-to-design-a-website"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.bayshorecommunication.com/blog/how-long-does-it-take-to-design-a-website"
      },
      "headline": "How Long Does It Take to Design a Website",
      "name": "Proven Website Design Timeline Facts 2026",
      "description":
        "Learn how long website design typically takes, from planning and content to development, testing, and launch, with factors that can affect the timeline.",
      "url": "https://www.bayshorecommunication.com/blog/how-long-does-it-take-to-design-a-website",
      "image":
        "https://www.bayshorecommunication.com/assets/static-blogs/how-long-does-it-take-to-design-a-website.webp",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.bayshorecommunication.com/blog"
      },
      "about": {
        "@type": "Thing",
        "name": "Website Design Timeline",
        "description":
          "Detailed breakdown of website design and development timelines, project phases, scope considerations, and strategies to prevent project delays."
      },
      "keywords": [
        "how long to design a website",
        "website design timeline",
        "web design process",
        "website development timeline",
        "web design phases",
        "website launch timeline",
        "website redesign timeline",
        "small business website timeline"
      ],
      "author": {
        "@type": "Organization",
        "name": "Bayshore Communication"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bayshore Communication",
        "url": "https://www.bayshorecommunication.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.bayshorecommunication.com/assets/bayshore-logo.svg"
        }
      },
      "datePublished": "2026-09-14",
      "dateModified": "2026-09-14"
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
    }
  ]
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

export const HowLongDoesItTakeToDesignAWebsiteBlog = () => {
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
          Website Design | Timeline & Process Guide
        </p>
        <p className="mt-4 max-w-3xl !text-lg !leading-8 !text-[#d9e7f7]">
          It typically takes 6 to 12 weeks to design and launch a professional website from start to finish. If you are building a simple website yourself with modern drag-and-drop tools, it can take only 1 to 3 days.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 !text-sm !text-[#d9e7f7]">
          <span className="rounded-full border border-white/20 px-4 py-2">
            Published: September 14, 2026
          </span>
          <span className="rounded-full border border-white/20 px-4 py-2">
            Updated: September 14, 2026
          </span>
          <span className="rounded-full border border-white/20 px-4 py-2">
            Web Design Timeline
          </span>
        </div>
      </section>

      <div className="mt-8 space-y-8">
        {/* Key Takeaways Section */}
        <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#FE6F1F]">
            Key Takeaways
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {takeaways.map((item) => (
              <div
                key={item}
                className="rounded-[8px] border border-[#dce6f2] bg-[#f7fbff] p-4"
              >
                <p className="text-base leading-7">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Answer By Website Type And Scope */}
        <NumberedSection
          number="1."
          title="Quick Answer By Website Type And Scope"
        >
          <p>
            A simple site can launch in 2 to 4 weeks. A custom business site often needs 4 to 8 weeks. Ecommerce and complex builds can take 8 to 16+ weeks.
          </p>
          <p>Here is a clear comparison:</p>
          <DataTable
            columns={[
              "Website Type",
              "Typical Pages",
              "Common Features",
              "Typical Timeline",
            ]}
            rows={websiteScopeRows}
          />
        </NumberedSection>

        {/* Our Original Data On Website Timelines From Real Projects */}
        <NumberedSection
          number="2."
          title="Our Original Data On Website Timelines From Real Projects"
        >
          <p>
            Most timelines slip for one reason: clients wait on content. We tracked 28 business website projects including redesigns and new builds completed over the past year to measure what slowed delivery down.
          </p>
          <DataTable
            columns={["Delay Cause", "Projects Affected", "Average Time Added"]}
            rows={delayCauseRows}
          />
          <p className="mt-4">
            This shows a pattern. Your website timeline is often a content timeline. Is your content ready today?
          </p>
        </NumberedSection>

        {/* Mid-Content CTA */}
        <PdfCta
          title="Ready to Launch Your Website Without Delays?"
          text="At Bayshore Communication, we keep your project on schedule with clear timelines and streamlined execution."
          button="Get Started Today"
          href="/contact"
        />

        {/* How Long Each Phase Takes In A Normal Website Project */}
        <NumberedSection
          number="3."
          title="How Long Each Phase Takes In A Normal Website Project"
        >
          <p>
            A standard project has phases. Each phase has a time range. These ranges assume clear scope and normal approvals.
          </p>
          <DataTable
            columns={["Phase", "What Happens", "Typical Time"]}
            rows={phaseTimelineRows}
          />
          <p className="mt-4">
            Yes, phases can overlap. That cuts time. It also raises risk. Do you want speed or certainty?
          </p>
        </NumberedSection>

        {/* What Makes A Website Take Longer Than Expected? */}
        <NumberedSection
          number="4."
          title="What Makes A Website Take Longer Than Expected?"
        >
          <p>
            Websites take longer when decisions stay open. They also slow down with unclear scope. Another common cause is missing assets—think logos, photos, product data, and policies.
          </p>
          <p>Here are the biggest time drivers:</p>
          <ul>
            <li>Page count growth during the build.</li>
            <li>New features added midstream.</li>
            <li>Multiple stakeholders giving mixed feedback.</li>
            <li>Waiting on domain and hosting access.</li>
            <li>Integrations needing API support.</li>
          </ul>
          <p>If you want a fast timeline, lock scope early. Then protect it.</p>
        </NumberedSection>

        {/* How Content Readiness Changes Your Timeline */}
        <NumberedSection
          number="5."
          title="How Content Readiness Changes Your Timeline"
        >
          <p>
            If your content is ready, you move fast. If not, you stall. Most teams underestimate content time. Writing, approvals, and image sourcing take longer than expected.
          </p>
          <p>
            You can speed this up with three moves: provide a rough copy early, accept placeholder content temporarily, and approve pages in batches.
          </p>
          <p>
            Ask yourself this now: Do you have a final copy for each page? If not, plan extra time.
          </p>
        </NumberedSection>

        {/* How Approval Speed Controls Your Launch Date */}
        <NumberedSection
          number="6."
          title="How Approval Speed Controls Your Launch Date"
        >
          <p>
            Your feedback loop is the schedule. One-day feedback keeps momentum. One-week feedback kills momentum. Each round resets context, which adds errors too.
          </p>
          <p>
            A simple rule works well: Keep feedback in one place, assign one decision-maker, and set review deadlines.
          </p>
          <p>Want a clean process? Use this cadence:</p>
          <ul>
            <li>24–48 hours for page reviews.</li>
            <li>One combined feedback document.</li>
            <li>One weekly decision call.</li>
          </ul>
        </NumberedSection>

        {/* Beginner Level: What To Expect For Your First Website */}
        <NumberedSection
          number="7."
          title="Beginner Level: What To Expect For Your First Website"
        >
          <p>
            Your first site should be simple. A five-page site often works best: Home, About, Services, Contact, and Privacy. Add a blog later if needed.
          </p>
          <p>
            Expect 2 to 6 weeks for a first site. Your biggest risk is indecision. Your second risk is content delay.
          </p>
          <p>
            You can keep it simple: Pick one design direction, use one brand color set, and focus on clear calls to action.
          </p>
        </NumberedSection>

        {/* Intermediate Level: What To Expect For A Redesign Or Growth Website */}
        <NumberedSection
          number="8."
          title="Intermediate Level: What To Expect For A Redesign Or Growth Website"
        >
          <p>
            Redesigns beat new websites in speed when original layouts are maintained. Altered navigation creates a new build. Altered text creates a new build.
          </p>
          <p>
            Website redesigns require four to ten weeks. Data migrations determine this timeline. It also depends on SEO care.
          </p>
          <p>You should plan for these tasks:</p>
          <ul>
            <li>Redirect mapping for old URLs.</li>
            <li>Content pruning and consolidation.</li>
            <li>Speed improvements and image compression.</li>
            <li>Analytics and conversion tracking updates.</li>
          </ul>
          <p>Are you keeping your old pages? If yes, plan a content audit.</p>
        </NumberedSection>

        {/* Expert Level: What To Expect For Custom Features And High Stakes Sites */}
        <NumberedSection
          number="9."
          title="Expert Level: What To Expect For Custom Features And High Stakes Sites"
        >
          <p>
            Custom features extend project timelines. These features require additional testing. User accounts demand careful quality assurance. User roles demand careful quality assurance. Payment systems demand careful quality assurance.
          </p>
          <p>
            Complex projects require 12 to 24 weeks. That includes discovery and validation, as well as security and performance work.
          </p>
          <p>The biggest expert-level drivers are:</p>
          <ul>
            <li>Technical architecture decisions.</li>
            <li>Integration constraints and rate limits.</li>
            <li>Compliance requirements and audits.</li>
            <li>Load testing and performance budgets.</li>
          </ul>
          <p>
            Do you need a web app? If yes, avoid guessing. Create a prototype. Prototypes validate features first.
          </p>
        </NumberedSection>

        {/* How To Shorten Your Website Timeline Without Quality Loss */}
        <NumberedSection
          number="10."
          title="How To Shorten Your Website Timeline Without Quality Loss"
        >
          <p>
            You can shorten time by removing waiting. You can also reduce rework. The goal is fewer loops and clearer inputs.
          </p>
          <p>Here are the best ways to move faster:</p>
          <ul>
            <li>Approve sitemaps within two days.</li>
            <li>Supply brand assets on day one.</li>
            <li>Use content templates.</li>
            <li>Inspect pages in batches.</li>
            <li>Limit revision rounds to two.</li>
          </ul>
          <p>Fast projects are not rushed. They are decided.</p>
        </NumberedSection>

        {/* What A Realistic Timeline Looks Like For A Small Business Website */}
        <NumberedSection
          number="11."
          title="What A Realistic Timeline Looks Like For A Small Business Website"
        >
          <p>
            Small businesses require lead-generating websites. These sites contain 8 to 15 pages including service pages and contact systems.
          </p>
          <p>
            The project takes 4 to 8 weeks assuming weekly reviews and unblocked content. If you want a launch date, plan a buffer week.
          </p>
          <p>Here is a simple timeline view:</p>
          <DataTable
            columns={["Week", "Main Focus", "Deliverable"]}
            rows={smallBusinessTimelineRows}
          />
        </NumberedSection>

        {/* Conclusion Section */}
        <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-bold leading-tight">Conclusion</h2>
          <div className="mt-5 space-y-5 text-lg leading-8">
            <p>
              A typical website takes 2 to 12 weeks. Most business websites take 4 to 8 weeks. Content causes major project delays. Approvals cause major project delays. Clients control both factors. Rushed writing creates extra revisions later. Designers clarify site pages first. Designers define project goals. Teams produce content early. Timely content protects project schedules.
            </p>
            <p>
              If you want a clear timeline and a clean launch, we can help. At <InlineLink href="/">Bayshore Communication</InlineLink>, we keep scope tight and decisions simple. Reach out today, and we will map your fastest path to a site that converts.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <PdfCta
          title="Map Your Fastest Path to a Converting Website"
          text="Partner with Bayshore Communication to execute your web project on time, on budget, and built for results."
          button="Contact Bayshore Communication"
          href="/contact"
        />

        {/* FAQs Section */}
        <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FE6F1F]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-[#dce6f2] pb-5 last:border-b-0 last:pb-0"
              >
                <h3 className="text-xl font-bold">Q&nbsp; {faq.question}</h3>
                <p className="mt-2 text-lg leading-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold leading-tight text-gray-700">
            Disclaimer
          </h2>
          <p className="mt-3 text-base text-gray-600 leading-7">
            This blog is for informational purposes only. If you want to know anything in details, please <InlineLink href="/contact">contact Bayshore Communication</InlineLink>.
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
        <div className="mt-5 space-y-5 text-lg leading-8 [&>blockquote]:border-l-4 [&>blockquote]:border-[#FE6F1F] [&>blockquote]:bg-[#fff7f1] [&>blockquote]:p-5 [&>blockquote]:text-xl [&>h3]:pt-3 [&>h3]:text-2xl [&>h3]:font-bold [&>ul]:space-y-3 [&>ul]:pl-5 [&>ul]:text-base [&>ul]:leading-7 [&>ul]:list-disc">
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
    <div className="min-w-[640px]">
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
  title,
  text,
  button,
  href = "/contact",
}: {
  title: string;
  text: string;
  button: string;
  href?: string;
}) => (
  <section className="rounded-[8px] bg-[#101d34] p-6 text-white md:p-8">
    <h2 className="text-3xl font-bold leading-tight">{title}</h2>
    <p className="mt-4 max-w-3xl !text-lg !leading-8 !text-[#d9e7f7]">
      {text}
    </p>
    <Link
      href={href}
      className="mt-6 inline-flex rounded-full bg-[#FE6F1F] px-6 py-4 text-base font-semibold text-white hover:bg-[#e05e14] transition-colors"
    >
      {button}
    </Link>
  </section>
);

export default HowLongDoesItTakeToDesignAWebsiteBlog;
