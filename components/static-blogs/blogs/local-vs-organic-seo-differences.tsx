import Link from "next/link";
import type { ReactNode } from "react";

const localVsOrganicImage =
  "/assets/static-blogs/local-vs-organic-seo-differences.webp";

const localVsOrganicImageMeta = {
  alt: "Comparison of local SEO and organic SEO showing Google Maps business listings, local search results, and organic website rankings.",
  title: "What Is the Difference Between Local and Organic SEO?",
  description:
    "Professional SEO marketing graphic illustrating the differences between local SEO and organic SEO. The image features Google Maps business listings, local search visibility, organic search results, and website rankings, highlighting how local SEO helps businesses attract nearby customers while organic SEO improves website visibility for broader search queries and long-term online growth.",
  caption:
    "Learn the difference between local SEO and organic SEO, and discover how each strategy helps improve search visibility, attract qualified traffic, and grow your business online.",
};

export const localVsOrganicSeoDifferencesBlog = {
  slug: "local-vs-organic-seo-differences",
  title: "What Is the Difference Between Local and Organic SEO?",
  metaTitle: "The Hidden Facts Of Local vs Organic SEO Plans",
  metaDescription:
    "Local SEO drives map-pack leads. Organic SEO builds lasting authority. Florida businesses need both. See which fits your growth stage.",
  description:
    "Local SEO drives map-pack leads. Organic SEO builds lasting authority. Florida businesses need both. See which fits your growth stage.",
  excerpt:
    "Learn the core differences between local SEO and organic SEO, how Google ranks them differently, and why Florida businesses need an integrated dual search strategy.",
  canonical:
    "https://www.bayshorecommunication.com/blog/local-vs-organic-seo-differences",
  image: localVsOrganicImage,
  imageAlt: localVsOrganicImageMeta.alt,
  imageTitle: localVsOrganicImageMeta.title,
  imageDescription: localVsOrganicImageMeta.description,
  imageCaption: localVsOrganicImageMeta.caption,
  imageFit: "contain",
  createdAt: "2026-07-28",
  updatedAt: "2026-07-28",
  category: ["SEO", "Digital Marketing", "Local SEO"],
  published: true,
  featuredImage: {
    image: {
      url: localVsOrganicImage,
      alt: localVsOrganicImageMeta.alt,
      title: localVsOrganicImageMeta.title,
      description: localVsOrganicImageMeta.description,
      caption: localVsOrganicImageMeta.caption,
    },
  },
};

const takeaways = [
  "Local SEO = proximity-based visibility in map listings and local packs",
  "Organic SEO = content and backlink authority driving SERP rankings",
  "Local converts faster. Organic compounds longer.",
  "Florida businesses need a dual strategy to dominate search.",
  "Google ranks them differently. You should treat them differently.",
];

const performanceStats = [
  {
    value: "46%",
    label: "of Google searches have local intent (2025)",
  },
  {
    value: "76%",
    label: "of local mobile searches visit a biz within 24hrs",
  },
  {
    value: "53%",
    label: "of web traffic still comes from organic search",
  },
  {
    value: "3.5x",
    label: "higher close rate for local SEO vs outbound",
  },
];

const surveyResults = [
  {
    label: "Local search engine optimization (pack for Google Maps)",
    percentage: "83%",
    width: "83%",
  },
  {
    label: "Organic SEO's SERP rankings",
    percentage: "68%",
    width: "68%",
  },
  {
    label: "Both combined",
    percentage: "94%",
    width: "94%",
  },
  {
    label: "Neither / no SEO",
    percentage: "22%",
    width: "22%",
  },
];

const comparisonColumns = ["Factor", "Local SEO", "Organic SEO"];

const comparisonRows = [
  ["Traffic Type", "Map Pack, 3-pack listings", "Blue link SERP rankings"],
  ["Timeline", "4-12 weeks", "3-9 months"],
  ["Geographic Reach", "5-25 mile radius", "City, state, national"],
  ["Primary Signal", "Google Business Profile", "Backlinks + content authority"],
  ["Best For", "Walk-ins, local calls", "Research-driven buyers"],
  ["Florida Example", '"HVAC repair Tampa"', '"best HVAC brand Florida"'],
];

const faqs = [
  {
    question: "Do reviews affect organic SEO ranking?",
    answer:
      "Not directly. Reviews do not influence organic SEO ranking; instead, they are used as part of local SEO. However, many reviews will lead to more search for your business brand and higher click-through rate, hence leading to improved organic SEO ranking.",
  },
  {
    question: "How much is the cost of local vs. organic SEO campaigns?",
    answer:
      "The cost of running a local SEO campaign is relatively lower. A successful local SEO campaign normally costs about $500 - $1,500 per month. On the other hand, a successful organic SEO campaign will cost you about $1,500-$3,000 per month.",
  },
  {
    question:
      "Is there any connection between social media and organic/local SEO?",
    answer:
      "There is no direct relation between social media and either local or organic SEO since social media metrics have not been confirmed as ranking factors. However, social media helps to generate natural backlinks and branded searches.",
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
          "name": "What Is the Difference Between Local and Organic SEO?",
          "item":
            "https://www.bayshorecommunication.com/blog/local-vs-organic-seo-differences",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id":
          "https://www.bayshorecommunication.com/blog/local-vs-organic-seo-differences",
      },
      "headline": "What Is the Difference Between Local and Organic SEO?",
      "name": "The Hidden Facts Of Local vs Organic SEO Plans",
      "description":
        "Local SEO drives map-pack leads. Organic SEO builds lasting authority. Florida businesses need both. See which fits your growth stage.",
      "url":
        "https://www.bayshorecommunication.com/blog/local-vs-organic-seo-differences",
      "image":
        "https://www.bayshorecommunication.com/assets/static-blogs/local-vs-organic-seo-differences.webp",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.bayshorecommunication.com/blog",
      },
      "about": {
        "@type": "Thing",
        "name": "Local vs Organic SEO",
        "description":
          "Detailed comparison of local SEO and organic SEO strategies for businesses looking to build visibility and leads in search results.",
      },
      "keywords": [
        "local seo vs organic seo",
        "difference between local and organic seo",
        "local seo strategy",
        "organic seo strategy",
        "google map pack seo",
        "florida local seo",
        "local search engine optimization",
        "bayshore communication seo",
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
      "datePublished": "2026-07-28",
      "dateModified": "2026-07-28",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do reviews affect organic SEO ranking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Not directly. Reviews do not influence organic SEO ranking; instead, they are used as part of local SEO. However, many reviews will lead to more search for your business brand and higher click-through rate, hence leading to improved organic SEO ranking.",
          },
        },
        {
          "@type": "Question",
          "name": "How much is the cost of local vs. organic SEO campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The cost of running a local SEO campaign is relatively lower. A successful local SEO campaign normally costs about $500 - $1,500 per month. On the other hand, a successful organic SEO campaign will cost you about $1,500-$3,000 per month.",
          },
        },
        {
          "@type": "Question",
          "name":
            "Is there any connection between social media and organic/local SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "There is no direct relation between social media and either local or organic SEO since social media metrics have not been confirmed as ranking factors. However, social media helps to generate natural backlinks and branded searches.",
          },
        },
      ],
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

export const LocalVsOrganicSeoDifferencesBlog = () => {
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
          Bayshore Communication | Florida Digital Marketing Experts
        </p>
        <p className="mt-4 max-w-3xl !text-lg !leading-8 !text-[#d9e7f7]">
          Your company is listed on the Google Map Pack for local searches
          thanks to local SEO. Organic SEO earns you ranked blue-link results
          across broader queries. Local targets geography. Organic targets
          authority. Both matter. Neither replaces the other.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 !text-sm !text-[#d9e7f7]">
          <span className="rounded-full border border-white/20 px-4 py-2">
            Updated July 28, 2026
          </span>
          <span className="rounded-full border border-white/20 px-4 py-2">
            Local SEO
          </span>
          <span className="rounded-full border border-white/20 px-4 py-2">
            Organic SEO
          </span>
        </div>
      </section>

      <div className="mt-8 space-y-8">
        <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#FE6F1F]">
            Main Takeaways
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
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {performanceStats.map((stat) => (
              <StatBlock
                key={stat.value}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </section>

        <NumberedSection
          number="1."
          title="Organic SEO is for Authority, While Local SEO is for Proximity"
        >
          <p>
            Both disciplines share a platform but have different gurus. Local
            SEO tells Google where you are. Organic SEO tells Google how much you
            know. Miss that distinction and your strategy falls apart before it
            starts.
          </p>
          <p>
            Local SEO exists within the Map Pack. That trio of companies that
            Google displays above the blue links. And it relies on your Google
            My Business listing, reviews pace, proximity to the searcher, and
            NAP consistency. Google puts that Tampa roofing company there
            because it thinks that they can be trusted and nearby. Not because
            their blog post was great.
          </p>
          <p>
            Organic SEO lives in the ranked blue links. It rewards topical
            authority, backlink profiles, technical site health, and content
            depth . They were ranking for “personal injury attorney Florida” and
            they earned that position with consistent content investment +
            domain authority. Google believes in expertise, not the zip code.
          </p>
          <p>
            Our surveys clearly show this. Single-channel companies are leaving a
            lot of money on the table. The most competitive Florida brands do
            both at once.
          </p>
          <blockquote>
            &quot;Google is two different referees in the same game. Local SEO is
            the referee watching where you stand. Organic SEO is the referee
            watching how well you play.&quot;
            <br />
            <span className="mt-2 block text-base font-normal not-italic text-[#4f5f74]">
              —{" "}
              <ExternalLink href="https://neilpatel.com/">
                Neil Patel
              </ExternalLink>
              , Digital Marketing Expert
            </span>
          </blockquote>

          <div className="mt-8 rounded-[8px] border border-[#dce6f2] bg-[#f7fbff] p-6">
            <h3 className="!pt-0 text-xl font-bold text-[#101d34]">
              Companies Using SEO Type to Report Increased Leads (2025 Survey)
            </h3>
            <div className="mt-5 space-y-4">
              {surveyResults.map((res) => (
                <div key={res.label} className="space-y-1">
                  <div className="flex justify-between text-sm font-semibold text-[#162033]">
                    <span>{res.label}</span>
                    <span>{res.percentage}</span>
                  </div>
                  <div className="h-4 w-full overflow-hidden rounded-full bg-[#e2eafd]">
                    <div
                      className="h-full rounded-full bg-[#0077B3] transition-all duration-500"
                      style={{ width: res.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#5a6b82]">
              Source: Internal client survey, Bayshore Communication, 2025. 214
              Florida-based companies in various service sectors were polled.
            </p>
          </div>
        </NumberedSection>

        <NumberedSection
          number="2."
          title="How Does Google Actually Rank Local vs Organic Results Differently?"
        >
          <p>
            Google employs different algorithms in each case. The local ranking
            takes into account three pillars. The first pillar is relevance (how
            relevant is your category to the user’s search). The second pillar
            is distance (how close are you to the user). The third pillar is
            prominence (how rated are you).
          </p>
          <p>
            Organic rankings belong to an entirely different league. The
            official{" "}
            <ExternalLink href="https://developers.google.com/search/docs/fundamentals/how-search-works">
              Google guide
            </ExternalLink>{" "}
            lists a number of factors that affect organic ranking, including
            crawling, indexing, relevancy, E-E-A-T and domain authority. If you
            have a site with 4000 pages and not much content on them, you will
            generally rank lower than a site with 400 good quality links.
          </p>
          <p>
            In Florida, the competitive gap matters. Markets like Miami,
            Orlando, and Tampa see brutal local pack competition. A business
            without both local citations and organic domain authority gets
            buried. You need to compete on both fronts. Choosing one is not a
            strategy. It is a surrender.
          </p>
          <div className="mt-6">
            <DataTable columns={comparisonColumns} rows={comparisonRows} />
          </div>
        </NumberedSection>

        <NumberedSection
          number="3."
          title="Florida Businesses Can’t Afford to Pick Just One"
        >
          <p>
            Florida is not a monolith. Pinellas County search behavior differs
            from Broward. A Naples-based dental practice competes differently
            than a Jacksonville e-commerce brand. The state is 67 counties and
            roughly 22 million people with wildly varying search patterns.
            Cookie-cutter SEO dies here.
          </p>
          <p>
            Local SEO wins you the intent-ready buyers. The person searching
            &quot;AC repair near me&quot; at 2 PM in August in Orlando is not
            doing research. They are ready to call. Local pack visibility
            captures that. Organic SEO wins you the research-stage buyers who
            searched &quot;how long should an AC unit last in Florida&quot; three
            weeks earlier. Both signals are valuable. Both create revenue at
            different stages of the funnel.
          </p>
          <p>
            Our surveys show that Florida service businesses running integrated
            local and organic strategies generate 2.3x more monthly leads than
            those running a single-channel approach. That is not a marginal
            gain. That is the difference between a slow quarter and a record one.
          </p>
          <p>
            This is the practical solution for any Florida-based business owner.
            If your primary methods of earning revenue include walk-ins,
            telephone, and same day appointments, you will have to start with
            local SEO. To create the kind of brand equity that endures
            algorithm changes, incorporate organic SEO. Check out how Bayshore
            approaches this dual strategy under our{" "}
            <InlineLink href="/our-services/seo-service">
              SEO services
            </InlineLink>
            .
          </p>
        </NumberedSection>

        <PdfCta
          title="Not Sure Which SEO Strategy Fits Your Florida Business?"
          text="Get a free audit. We will tell you exactly where you stand and what to prioritize."
          button="Book Your Free Strategy Call"
        />

        <NumberedSection
          number="4."
          title="The Keyword Intent Divide Is Where Most Businesses Get It Wrong"
        >
          <p>
            Intent is everything. &quot;Best seafood restaurant Clearwater&quot; is
            a local intent query. The person wants a list, a map, reviews, and a
            phone number. &quot;How to pair wine with grouper&quot; is an
            informational query. Organic content wins there. Conflating the two
            wastes budget and burns time.
          </p>
          <p>
            Keyword targeting for local SEO means anchoring your GBP categories,
            website landing pages, and citations to geo-modified terms.
            &quot;Plumber in St. Pete&quot;. &quot;Orlando HVAC company&quot;.
            &quot;Miami personal injury lawyer&quot;. These are purchase-intent
            queries. They have conversion value baked in.
          </p>
          <p>
            Organic keyword targeting is a wider net. You chase topical
            clusters. A Florida real estate law firm might publish on
            &quot;Florida homestead exemption rules&quot;, &quot;what is title
            insurance&quot;, and &quot;closing costs in Sarasota&quot;. None of
            those rank in the Map Pack. All of them build the authority that
            eventually powers their local search engine optimization performance,
            too.
          </p>
          <p>
            LSI keywords matter in both channels but differently. Terms like
            &quot;near me&quot;, city names, neighborhood qualifiers, and
            service-area phrases are important in local SEO. In organic SEO,
            related topic terms, long-tail variations, and entity-based language
            feed your topical authority map.
          </p>
          <blockquote>
            &quot;We ran a client&apos;s Florida roofing business from zero to
            400 monthly leads in under a year. The local GBP strategy brought
            60% of that. The organic blog strategy brought the rest. Neither
            worked in isolation.&quot;
            <br />
            <span className="mt-2 block text-base font-normal not-italic text-[#4f5f74]">
              — Growth Marketing Team, Bayshore Communication
            </span>
          </blockquote>
        </NumberedSection>

        <NumberedSection
          number="5."
          title="How Would a Successful Dual SEO Strategy Appear in 2026?"
        >
          <p>
            The playbook has tightened. Google&apos;s Helpful Content System has
            killed thin, generic content. AI Overviews now absorb clicks for
            informational queries. The local pack is becoming increasingly
            competitive. The solution for 2026 is specificity, authority, and
            consistency.
          </p>
          <p>
            Fully optimizing your Google Business Profile including current
            pictures, weekly postings, and answering customer reviews is a must
            for local SEO supremacy. NAP data that is consistent across 50+
            directories. Local landing pages for each service area. Schema markup
            telling Google exactly what you offer and where.
          </p>
          <p>
            For organic SEO, you need a content architecture that builds topical
            depth. Not one-off blog posts. Interlinked content network that makes
            your site THE resource for your niche. And a backlink strategy against
            Florida-based publishers chambers of commerce and industry directories.
          </p>
          <p>
            The smartest Florida businesses we work with treat these as two
            budget lines. Not two competing priorities. Look at our{" "}
            <InlineLink href="/growth-plan">growth plans</InlineLink> and you’ll
            see how we’re structuring that investment.
          </p>
        </NumberedSection>

        <NumberedSection
          number="6."
          title="Does Local SEO Outweigh Organic SEO for Florida Small Businesses?"
        >
          <p>
            Short answer. Probably yes, initially. But the long game demands
            both. Small Florida businesses with limited budgets should prioritize
            local SEO first. The ROI timeline is shorter. The leads are warmer.
            The conversion path is cleaner.
          </p>
          <p>
            A Tampa-based pressure washing company does not need a 50-page content
            library to win business. They need to rank in the local pack for
            &quot;pressure washing Tampa&quot; with a dialed GBP, strong reviews,
            and consistent citations. That produces leads in weeks, not months.
          </p>
          <p>
            But at month six, those same businesses hit a ceiling. Local SEO
            plateaus once you dominate the Map Pack. Organic SEO then becomes the
            growth lever. It extends your reach beyond the 10-mile radius. It
            builds brand searches. It compounds quarterly. Our{" "}
            <InlineLink href="/case-studies">case studies</InlineLink> show this
            pattern across a dozen Florida industries.
          </p>
          <p className="font-semibold text-[#101d34]">
            The verdict. Local SEO is the sprint. Organic SEO is the marathon.
            Florida businesses that understand this run both races and win both.
            Those that pick one eventually get lapped.
          </p>
        </NumberedSection>

        <PdfCta
          title="Ready to Dominate Florida Search Results?"
          text="Bayshore Communication runs both local and organic SEO campaigns for Florida businesses ready to scale."
          button="Get Your Free SEO Audit"
        />

        <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FE6F1F]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">
            People Also Ask About Local vs Organic SEO
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

const StatBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-[8px] bg-[#101d34] p-5 text-white">
    <p className="!text-4xl !font-bold !text-[#8ed8ff]">{value}</p>
    <p className="mt-3 !text-lg !leading-7 !text-[#d9e7f7]">{label}</p>
  </div>
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
  title,
  text,
  button,
}: {
  title: string;
  text: string;
  button: string;
}) => (
  <section className="rounded-[8px] bg-[#101d34] p-6 text-white md:p-8">
    <h2 className="text-3xl font-bold leading-tight">{title}</h2>
    <p className="mt-4 max-w-3xl !text-lg !leading-8 !text-[#d9e7f7]">
      {text}
    </p>
    <Link
      href="/contact"
      className="mt-6 inline-flex rounded-full bg-[#FE6F1F] px-6 py-4 text-base font-semibold text-white hover:bg-[#e05e14] transition-colors"
    >
      {button}
    </Link>
  </section>
);

export default LocalVsOrganicSeoDifferencesBlog;
