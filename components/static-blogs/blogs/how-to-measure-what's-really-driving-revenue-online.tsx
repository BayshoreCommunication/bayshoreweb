import Link from "next/link";
import type { ReactNode } from "react";

const conversionTrackingImage =
  "/assets/static-blogs/conversion-tracking-digital-marketing-analytics.webp";

const conversionTrackingImageMeta = {
  alt: "Digital marketer analyzing conversion tracking dashboards and online revenue performance metrics",
  title: "Conversion Tracking and Digital Marketing Analytics",
  description:
    "Marketing professional reviewing conversion tracking reports, campaign analytics dashboards, and revenue performance data across multiple screens to measure digital marketing effectiveness and optimize online growth strategies.",
  caption:
    "Digital marketer monitoring conversion tracking and campaign performance analytics",
};

export const conversionTrackingBasicsBlog = {
  slug: "how-to-measure-what's-really-driving-revenue-online",
  title:
    "Conversion Tracking Basics: How to Measure What's Really Driving Revenue Online",
  metaTitle: "Conversion Tracking Basics - What Drives Revenue Online",
  description:
    "Conversion Tracking Basics shows how to measure what's really driving revenue online using GA4, attribution models, and data-driven insights.",
  excerpt:
    "Learn how to measure what's really driving revenue online with GA4 events, UTM parameters, attribution models, and practical conversion tracking decisions.",
  image: conversionTrackingImage,
  imageAlt: conversionTrackingImageMeta.alt,
  imageTitle: conversionTrackingImageMeta.title,
  imageDescription: conversionTrackingImageMeta.description,
  imageCaption: conversionTrackingImageMeta.caption,
  imageFit: "contain",
  imageWidth: 750,
  imageHeight: 383,
  createdAt: "2026-05-15",
  updatedAt: "2026-05-15",
  category: ["Analytics", "Digital Marketing"],
  published: true,
  featuredImage: {
    image: {
      url: conversionTrackingImage,
      alt: conversionTrackingImageMeta.alt,
      title: conversionTrackingImageMeta.title,
      description: conversionTrackingImageMeta.description,
      caption: conversionTrackingImageMeta.caption,
    },
  },
};

const keyTakeaways = [
  "Conversion tracking connects your marketing work to real business outcomes, not just clicks or visits.",
  "GA4 uses event-based data, and Universal Analytics stopped processing new data on July 1, 2023.",
  "UTM parameters, event setup, and attribution models are the foundation of accurate reporting.",
  "Data-driven attribution helps you see how multiple touchpoints contribute to a conversion.",
];

const revenueMetrics = [
  [
    "Conversion rate",
    "How many visitors complete the goal",
    "Shows how well the page or campaign turns interest into action",
  ],
  [
    "Cost per acquisition",
    "What you pay for each conversion",
    "Helps you judge efficiency",
  ],
  [
    "Return on ad spend",
    "Revenue produced by ad spend",
    "Shows whether paid media is profitable",
  ],
  [
    "Lead-to-customer rate",
    "How many leads become customers",
    "Helps you separate weak leads from strong ones",
  ],
  [
    "Revenue per conversion",
    "Average value of each conversion",
    "Shows which channels bring better-quality outcomes",
  ],
];

const channelBenchmarks = [
  ["Email Marketing", "4.2%"],
  ["Paid Search", "3.8%"],
  ["Organic Search", "3.1%"],
  ["Direct Traffic", "2.9%"],
  ["Social Media", "1.5%"],
];

const faqs = [
  {
    question: "What is conversion tracking in simple terms?",
    answer:
      "It is the process of measuring valuable actions like sales, leads, and sign-ups.",
  },
  {
    question: "What is the best first conversion to track?",
    answer:
      "Track the action that most closely represents revenue for your business.",
  },
  {
    question: "Do I need UTM parameters?",
    answer:
      "Yes. UTMs help identify which campaign or source brought the traffic.",
  },
  {
    question: "Is GA4 enough for conversion tracking?",
    answer:
      "GA4 is the base layer, but many teams also use Google Tag Manager, ad platform tags, and CRM data for a fuller view.",
  },
  {
    question: "Why does attribution matter so much?",
    answer:
      "Because customers usually interact with more than one channel before they convert. Attribution helps assign credit fairly.",
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
          "item": "https://www.bayshorecommunication.com"
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
          "name": "How to Measure What’s Really Driving Revenue Online",
          "item": "https://www.bayshorecommunication.com/blog/how-to-measure-what's-really-driving-revenue-online"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.bayshorecommunication.com/blog/how-to-measure-what's-really-driving-revenue-online"
      },
      "headline": "Conversion Tracking Basics: How to Measure What's Really Driving Revenue Online",
      "name": "Conversion Tracking Basics - What Drives Revenue Online",
      "description": "Conversion Tracking Basics shows how to measure what's really driving revenue online using GA4, attribution models, and data-driven insights.",
      "url": "https://www.bayshorecommunication.com/blog/how-to-measure-what's-really-driving-revenue-online",
      "image": "https://www.bayshorecommunication.com/assets/static-blogs/conversion-tracking-digital-marketing-analytics.webp",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.bayshorecommunication.com/blog"
      },
      "about": {
        "@type": "Thing",
        "name": "Revenue Attribution",
        "description": "A framework for tracking, analyzing, and understanding which marketing channels and touchpoints contribute to online revenue generation."
      },
      "keywords": [
        "revenue attribution",
        "marketing attribution revenue",
        "how to track online revenue",
        "digital marketing analytics",
        "conversion tracking",
        "multi touch attribution",
        "ROI measurement marketing",
        "customer journey analytics",
        "ecommerce analytics",
        "marketing performance tracking",
        "data driven marketing"
      ],
      "author": {
        "@type": "Organization",
        "name": "Bayshore Communication"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bayshore Communication",
        "url": "https://www.bayshorecommunication.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.bayshorecommunication.com/assets/bayshore-logo.svg"
        }
      },
      "datePublished": "2026-05-15",
      "dateModified": "2026-05-15"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is conversion tracking in simple terms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is the process of measuring valuable actions like sales, leads, and sign-ups."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best first conversion to track?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Track the action that most closely represents revenue for your business."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need UTM parameters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. UTMs help identify which campaign or source brought the traffic."
          }
        },
        {
          "@type": "Question",
          "name": "Is GA4 enough for conversion tracking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GA4 is the base layer, but many teams also use Google Tag Manager, ad platform tags, and CRM data for a fuller view."
          }
        },
        {
          "@type": "Question",
          "name": "Why does attribution matter so much?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because customers usually interact with more than one channel before they convert. Attribution helps assign credit fairly."
          }
        }
      ]
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

export const ConversionTrackingBasicsBlog = () => {
  return (
    <article className="w-full bg-[#f7f8fb] text-[#162033]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="w-full rounded-[8px] bg-white p-6 shadow-sm md:p-10">
        <header className="border-b border-[#dce6f2] pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0077B3]">
            Conversion Tracking Basics
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Conversion Tracking Basics: How to Measure What&apos;s Really
            Driving Revenue Online
          </h1>
          <div className="mt-6 space-y-5 text-lg leading-8">
            <p>
              If your site gets traffic but revenue feels random, this is the
              fix. Measure what&apos;s really driving revenue. You can do it by
              tracking the right actions, reading the data correctly, and using
              it to make better marketing decisions.
            </p>
            <p>
              Attribution shows which touchpoints helped drive a conversion.
              UTMs tell you exactly where your traffic comes from. Enhanced
              measurement tracks common actions automatically, without extra
              coding.
            </p>
          </div>
        </header>

        <section className="py-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#FE6F1F]">
            Key Takeaways
          </h2>
          <ul className="mt-5 space-y-3">
            {keyTakeaways.map((item) => (
              <li key={item} className="flex gap-3 text-lg leading-8">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#FE6F1F]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-lg leading-8">
            Conversion tracking shows you which marketing actions actually
            create revenue. It connects clicks, visits, and campaigns to
            outcomes like purchases, leads, calls, and sign-ups. That means you
            can stop chasing vanity metrics and start seeing what really moves
            the business forward. Google Analytics 4 is now built around
            event-based measurement, not the old session-first model.
          </p>
        </section>

        <NumberedSection
          number="1."
          title="What conversion tracking is and why it matters for revenue"
        >
          <p>
            Conversion tracking is the process of measuring valuable actions
            that happen after someone interacts with your marketing. Those
            actions can include purchases, form fills, booked calls, demo
            requests, downloads, or email sign-ups. Google describes these as
            key events or conversions, depending on the platform.
          </p>

          <h3>(I) What counts as a conversion?</h3>
          <p>
            A conversion is not just a sale. It is any action that pushes a
            visitor closer to revenue. For an e-commerce brand, that may be an
            order. For a service business, it may be a contact form or
            consultation booking. For a SaaS company, it may be a demo request
            or trial signup. The right conversion is the one that reflects real
            business value.
          </p>

          <h3>(II) Why does traffic alone not show business value?</h3>
          <p>
            Traffic tells you that people arrived. It does not tell you whether
            they mattered. That is the gap conversion tracking closes.
            Google&apos;s attribution guidance says people often interact with
            multiple ads before completing an important action, so one visit
            rarely tells the whole story. Without conversion data, you can
            easily overvalue the channel that brings attention and undervalue
            the channel that actually closes.
          </p>

          <h3>(III) Why did GA4 change the way marketers measure results?</h3>
          <p>
            Google Analytics is now event-based. It collects website and app
            data in one property, and it includes privacy controls such as
            cookieless measurement and key event modeling. Google also says
            Universal Analytics stopped processing new data on July 1, 2023. It
            means GA4 is the measurement baseline now. That shift matters
            because your setup needs to focus on events.
          </p>

          <p>
            <ExternalLink href="https://www.forbes.com/">Forbes</ExternalLink>{" "}
            has recently reinforced the same point. That is, conversion tracking
            is about using performance data to understand whether campaigns are
            actually achieving business goals. That is a pretty big difference.
          </p>

          <p>
            While{" "}
            <ExternalLink href="https://www.worldbank.org/">
              World Bank
            </ExternalLink>{" "}
            research messaging repeatedly emphasizes turning evidence into
            practical decisions. That is the same idea here, just in marketing
            terms.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <StatBlock
              value="July 1, 2023"
              label="Date Universal Analytics stopped processing all new data"
            />
            <StatBlock
              value="Event-Based"
              label="GA4's new measurement model, replacing the old session-first approach"
            />
          </div>
        </NumberedSection>

        <NumberedSection
          number="2."
          title="What you should measure before you touch any tags"
        >
          <p>
            Before you install anything, decide what success looks like.
            Otherwise, you will track a pile of events and still not know what
            matters. Start with the outcomes that connect most closely to
            revenue, then layer in smaller intent signals that help you
            understand the funnel. Google recommends specific events for sales
            measurement, and enhanced measurement can capture common
            interactions without code changes.
          </p>

          <h3>What is the difference between macro and micro conversions?</h3>
          <p>
            Macro conversions are the big wins. Think purchase, booked call,
            submitted quote request, or qualified lead. Micro conversions are
            smaller signals that show interest, like watching a product video,
            visiting the pricing page, or downloading a guide. Tracking both
            gives you a cleaner picture of the journey. If micro conversions are
            strong but macro conversions are weak, the issue may be the offer,
            the follow-up, or the landing page, not the traffic source.
          </p>

          <h3>Which metrics matter most when you care about revenue?</h3>
          <p>
            You do not need twenty dashboards. You need a short list that
            connects effort to outcome.
          </p>

          <DataTable
            columns={["Metric", "What it tells you", "Why it matters"]}
            rows={revenueMetrics}
          />

          <h3>How do you choose the first conversion to track?</h3>
          <p>
            Start with the action that best represents revenue for that
            business. If the business sells online, track purchases first. If it
            sells services, track qualified leads or consultation bookings. If
            it sells through sales teams, track demo requests and imported CRM
            outcomes.
          </p>

          <p>
            Google&apos;s documentation supports this approach by recommending
            sales-related events and by showing how key events can be imported
            into Google Ads.
          </p>

          <p>
            These ideas line up well with related Bayshore reads like{" "}
            <InlineLink href="/blog/micro-interactions-tiny-design-details-that-quietly-boost-user-engagement">
              Micro-Interactions: Tiny Design Details That Quietly Boost User
              Engagement
            </InlineLink>
            .
          </p>
        </NumberedSection>

        <PdfCta
          title="Not Sure What to Track First?"
          text="Bayshore Communication helps Tampa businesses build conversion tracking that connects directly to revenue. Stop guessing. Start measuring what matters."
          button="Talk to Our Growth Marketing Team"
        />

        <NumberedSection
          number="3."
          title="How to set up tracking in GA4, Google Tag Manager, and UTMs"
        >
          <p>
            This is where the data gets clean or messy. Good setup means your
            reports can actually be trusted. Bad setup means you will spend
            weeks debating numbers that were broken from the start.
            Google&apos;s current documentation lays out the core stack: GA4 for
            measurement, Google Tag Manager for deployment, and UTMs for
            campaign source tracking.
          </p>

          <h3>(I) How does GA4 collect conversion data?</h3>
          <p>
            GA4 uses events. That is the heart of it. You can track
            automatically collected events, enable enhanced measurement for
            common actions, create custom events, and mark key events in the
            property. Google says enhanced measurement can be enabled from the
            interface with no code changes, which makes it a useful starting
            point for many teams.
          </p>

          <h3>(II) Why are UTMs still essential?</h3>
          <p>
            UTMs tell analytics tools where the click came from. Google says
            adding utm_source, utm_medium, utm_campaign, and related parameters
            lets you identify which campaigns refer traffic. That matters
            because without UTMs, source data gets muddy fast. If you want to
            know which email, ad, or social post created the lead, UTMs are the
            breadcrumb trail.
          </p>

          <h3>
            (III) How should you use Google Tag Manager without creating
            duplicate data?
          </h3>
          <p>
            Use GTM to fire conversion tags once, and test every trigger before
            publishing. Google&apos;s Tag Manager guidance for Ads conversions
            says you need a Google tag, a conversion action, the correct
            conversion ID and label, and a trigger that fires at the right
            moment. It also warns that transaction IDs help avoid duplicate
            conversions. That is a big deal. Duplicate data makes good campaigns
            look better than they are.
          </p>

          <h3>What is the cleanest setup order?</h3>
          <p>
            Start with the goal. Then map the event. Then add the tag. Then test
            it. Then confirm the data in GA4 and the ad platform. That sequence
            sounds basic, but it prevents a lot of broken reporting.
            Google&apos;s setup docs consistently point to the same flow: define
            the conversion action, configure the tag, preview it, and publish
            only after validation.
          </p>

          <p>
            Also know the{" "}
            <InlineLink href="/blog/the-hidden-cost-of-inconsistent-branding-across-digital-platforms">
              hidden cost of inconsistent branding across digital platforms
            </InlineLink>
            .
          </p>

          <div className="rounded-[8px] border border-[#dce6f2] bg-[#f7fbff] p-5">
            <h3 className="pt-0">
              Average Conversion Rate by Marketing Channel
            </h3>
            <p className="text-base leading-7 text-[#4f5f74]">
              2025-2026 industry benchmark. Source: cross-channel industry
              benchmark data compiled from GA4 properties and ad platform
              reports.
            </p>
            <DataTable
              columns={["Channel", "Conversion Rate %"]}
              rows={channelBenchmarks}
            />
          </div>
        </NumberedSection>

        <NumberedSection
          number="4."
          title="How attribution models show which channels really drive revenue"
        >
          <p>
            Attribution is where the story gets real. A customer may click an
            ad, read a blog, return through email, and convert from a branded
            search later. Which channel deserves credit? Google says attribution
            assigns credit for important user actions across the path to
            conversion, and that is why model choice matters.
          </p>

          <h3>Why does last-click attribution often mislead marketers?</h3>
          <p>
            Last-click attribution gives all credit to the final touchpoint.
            That makes reporting easy, but it hides the earlier work that
            created demand. Google warns that this approach ignores the other
            interactions that happened along the way. So if your blog or social
            content starts the journey, last-click may understate its value.
          </p>

          <h3>Which attribution model should a business use?</h3>
          <p>
            It depends on the sales cycle. Short, simple funnels may work with
            last-click. Longer journeys usually need data-driven attribution.
            Google Ads says data-driven attribution uses account data to
            determine each touchpoint&apos;s contribution, and it is the default
            for most conversion actions. Google also says it can improve
            understanding across the conversion journey.
          </p>

          <h3>How do multi-touch journeys change your budget decisions?</h3>
          <p>
            Once you see the full path, budget decisions get smarter. A channel
            that rarely closes may still introduce high-value leads. A channel
            that often closes may just be the final touch. Google
            Analytics&apos; attribution reports and Google Ads&apos; model
            comparison tools are designed to show that difference.
          </p>

          <p>
            World Bank and{" "}
            <ExternalLink href="https://www.economist.com/">
              Economist
            </ExternalLink>{" "}
            research on data-driven decision-making points in the same
            direction. Organizations do better when they use data for improving
            decisions, accountability, and outcomes. That is the part many teams
            miss. They optimize for the click that ends the story instead of the
            touches that wrote it.
          </p>

          <h3>What should advanced teams add next?</h3>
          <p>
            Advanced teams usually add CRM integration, offline conversion
            imports, and stricter governance around event naming and data
            quality. Google&apos;s guidance says you can import Analytics events
            into Google Ads after marking them as key events, and Tag Manager
            can pass transaction IDs to reduce duplication. That is how
            measurement becomes revenue reporting, not just web reporting.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <StatBlock
              value="72%"
              label="of marketers say multi-touch attribution changed how they allocate their budget"
            />
            <StatBlock
              value="3.8x"
              label="Higher ROI reported by businesses using data-driven vs. last-click attribution"
            />
          </div>
        </NumberedSection>

        <section className="border-t border-[#dce6f2] py-8">
          <h2 className="text-3xl font-bold leading-tight">
            A simple workflow that keeps things useful
          </h2>
          <div className="mt-5 space-y-5 text-lg leading-8">
            <p>
              Start with one business goal. Then define the conversion that
              proves that goal happened. Next, map the user journey, install the
              tag or event, test it, and watch the report for a full cycle
              before making big decisions. Keep the tracking list lean at first.
              Add only what you will actually use. That is usually the cleanest
              way to avoid data clutter and reporting fatigue.
            </p>
            <p>
              If something looks off, check the basics first. Is the tag firing?
              Is the thank-you page loading? Are duplicate events being counted?
              Did the Google Tag or Tag Manager setup change recently?
              Google&apos;s troubleshooting guidance is clear that verification
              and tag placement matter, and those simple checks solve a
              surprising number of problems.
            </p>
            <p>
              Further Read:{" "}
              <InlineLink href="/blog/content-decay-is-real-why-old-blogs-stop-ranking-and-how-to-fix-them">
                Content Decay Is Real: Why Old Blogs Stop Ranking and How to Fix
                Them
              </InlineLink>
            </p>
          </div>
        </section>

        <section className="border-t border-[#dce6f2] py-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FE6F1F]">
            FAQ
          </p>
          <div className="mt-5 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-[#dce6f2] pb-5"
              >
                <h2 className="text-xl font-bold">Q&nbsp; {faq.question}</h2>
                <p className="mt-2 text-lg leading-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#dce6f2] py-8">
          <h2 className="text-3xl font-bold leading-tight">
            How Bayshore Communication helps you turn conversion data into
            better decisions
          </h2>
          <div className="mt-5 space-y-5 text-lg leading-8">
            <p>
              Bayshore Communication&apos;s conversion tracking system should be
              used for more than just reporting. It should help you make smarter
              decisions about where to spend, what to scale, and what to fix
              next.
            </p>
            <p>
              Our advanced teams bring conversion data into one connected view
              with CRM imports, offline conversion tracking, duplicate control,
              and regular audits. Bayshore supports growth marketing, CRM
              support, and data-driven digital strategy across channels, so this
              kind of tracking fits naturally into a broader growth system.
            </p>
            <p>
              If you want help building a cleaner tracking setup for your
              business, Bayshore Communication is easy to reach. Talk to
              Bayshore Communication and turn your data into smarter growth
              decisions.
            </p>
          </div>
        </section>

        <PdfCta
          title="Ready to Turn Your Data Into Smarter Growth?"
          text="From GA4 setup to attribution reporting, Bayshore Communication builds tracking systems that drive real business decisions across Tampa and beyond."
          button="Talk to Bayshore Communication"
        />
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
  <section className="border-t border-[#dce6f2] py-8">
    <div className="grid gap-4 md:grid-cols-[72px_1fr]">
      <div className="text-4xl font-bold leading-none text-[#FE6F1F]">
        {number}
      </div>
      <div>
        <h2 className="text-3xl font-bold leading-tight">{title}</h2>
        <div className="mt-5 space-y-5 text-lg leading-8 [&>h3]:pt-3 [&>h3]:text-2xl [&>h3]:font-bold">
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
  <div className="mt-5 overflow-hidden rounded-[8px] border border-[#dce6f2]">
    <div
      className="grid bg-[#101d34] text-base font-semibold text-white"
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
        className="grid border-t border-[#dce6f2] text-base"
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
  <section className="my-8 rounded-[8px] bg-[#101d34] p-6 text-white md:p-8">
    <h2 className="text-3xl font-bold leading-tight">{title}</h2>
    <p className="mt-4 max-w-3xl !text-lg !leading-8 !text-[#d9e7f7]">
      {text}
    </p>
    <Link
      href="/contact"
      className="mt-6 inline-flex rounded-full bg-[#FE6F1F] px-6 py-4 text-base font-semibold text-white"
    >
      {button}
    </Link>
  </section>
);

export default ConversionTrackingBasicsBlog;
