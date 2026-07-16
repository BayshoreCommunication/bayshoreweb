import Link from "next/link";
import type { ReactNode } from "react";

const formOptimizationImage =
  "/assets/static-blogs/form-optimization-small-tweaks-more-conversions.webp";

const formOptimizationImageMeta = {
  alt: "Optimized website form design showing fewer fields and improved layout for higher conversion rates and better user experience.",
  title: "Form Optimization Strategies for Higher Website Conversions",
  description:
    "Illustration comparing a lengthy website form with an optimized version that uses fewer fields, top-aligned labels, inline validation, and a clear CTA to improve completion rates and increase conversions.",
  caption:
    "Simple form optimization techniques like reducing fields and improving usability can significantly boost website conversion rates.",
};

export const smallFieldTweaksBlog = {
  slug: "small-field-tweaks-that-reduce-drop-off-instantly",
  title: "Form Optimization: Small Field Tweaks That Reduce Drop-Off Instantly",
  metaTitle: "Form Optimization Tips That Cut Drop-Off Fast",
  metaDescription:
    "Learn which small form field tweaks instantly reduce drop-off and boost conversions for Florida businesses in 2026.",
  excerpt:
    "You do not need a full website rebuild to fix your lead forms. Ordinary changes like reducing field count, fixing label placement, and adding tangible time validation can cut drop off by up to 40%. These changes are quick and cost almost nothing to apply.",
  canonical:
    "https://www.bayshorecommunication.com/blog/small-field-tweaks-that-reduce-drop-off-instantly",
  image: formOptimizationImage,
  imageAlt: formOptimizationImageMeta.alt,
  imageTitle: formOptimizationImageMeta.title,
  imageDescription: formOptimizationImageMeta.description,
  imageCaption: formOptimizationImageMeta.caption,
  imageFit: "contain",
  createdAt: "2026-06-21",
  updatedAt: "2026-06-21",
  category: ["Conversion Rate Optimization", "UI/UX Design"],
  published: true,
  featuredImage: {
    image: {
      url: formOptimizationImage,
      alt: formOptimizationImageMeta.alt,
      title: formOptimizationImageMeta.title,
      description: formOptimizationImageMeta.description,
      caption: formOptimizationImageMeta.caption,
    },
  },
};

const keyPoints = [
  {
    title: "Fewer fields lift completion rates significantly",
    text: "Every field you request is a potential friction point. Lowering input requirements directly drives higher user completions.",
  },
  {
    title: "Top-aligned labels cut form fill time by up to 50%",
    text: "Placing labels directly above inputs allows visitors to scan and complete forms in a single natural vertical eye movement.",
  },
  {
    title: "Inline validation stops user frustration before it starts",
    text: "Providing real-time green/red feedback for user inputs prevents error pile-ups and drop-offs during form submissions.",
  },
  {
    title: "Single-column layouts always outperform multi-column",
    text: "A single linear flow guides the eye down the page naturally, reducing visual confusion and cognitive load.",
  },
  {
    title: "Autofill-ready inputs are non-negotiable on mobile in 2026",
    text: "Supporting browsers' autocomplete features makes form filling on mobile phones fast, seamless, and frictionless.",
  },
];

const stats = [
  {
    value: "67%",
    label: "Users abandon forms that feel too long",
  },
  {
    value: "21.5%",
    label: "Avg. form completion rate across industries",
  },
  {
    value: "23.5",
    label: "Avg. unnecessary fields in checkout forms",
  },
];

const fieldsTableColumns = ["Number of Form Fields", "Average Conversion Rate"];
const fieldsTableRows = [
  ["1 - 2 fields", "28% - 32%"],
  ["3 - 4 fields", "20% - 25%"],
  ["5 - 6 fields", "12% - 15%"],
  ["7 or more fields", "Below 10%"],
];

const faqs = [
  {
    question: "What is the best color for a submit button to get higher conversions?",
    answer:
      "High contrast colors like orange or green typically outperform gray or white buttons. The color should stand out clearly from your page background",
  },
  {
    question: "Should I use CAPTCHA on my Florida business contact form?",
    answer:
      "Common CAPTCHAs hurt conversions noticeably. Instead, you can try Google reCAPTCHA v3. User flow remains uninterrupted due to its silent background presence.",
  },
  {
    question: "Does adding a phone number field reduce form completions?",
    answer:
      "Yes. Asking for a phone number upfront can reduce completions by up to 37%. Move it to a follow up step or make it optional at the start.",
  },
  {
    question: "How do I know if my form is hurting my SEO?",
    answer:
      "A high bounce rate on form pages combined with low “time on page” signals poor UX. Google factors these behavioral signals into your rankings.",
  },
  {
    question: "What tools help track form drop-off at the field level?",
    answer:
      "Microsoft Clarity, Hotjar, and FullStory all offer “field level drop off” heatmaps. They show just where users stop filling out your form.",
  },
  {
    question: "Is a standalone landing page better for forms than an embedded page?",
    answer:
      "Standalone landing pages with no navigation typically convert 30% higher than forms embedded in pages with rival calls to action.",
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
          "name": "Small Field Tweaks That Reduce Drop-Off Instantly",
          "item": "https://www.bayshorecommunication.com/blog/small-field-tweaks-that-reduce-drop-off-instantly"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.bayshorecommunication.com/blog/small-field-tweaks-that-reduce-drop-off-instantly"
      },
      "headline": "Form Optimization: Small Field Tweaks That Reduce Drop-Off Instantly",
      "name": "Form Optimization Tips That Cut Drop-Off Fast",
      "description": "Learn which small form field tweaks instantly reduce drop-off and boost conversions for Florida businesses in 2026.",
      "url": "https://www.bayshorecommunication.com/blog/small-field-tweaks-that-reduce-drop-off-instantly",
      "image": "https://www.bayshorecommunication.com/assets/static-blogs/form-optimization-small-tweaks-more-conversions.webp",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.bayshorecommunication.com/blog"
      },
      "about": {
        "@type": "Thing",
        "name": "Form Optimization",
        "description": "An overview of website form optimization techniques that improve user experience, reduce form abandonment, and increase lead generation through better form design."
      },
      "keywords": [
        "form optimization",
        "reduce form abandonment",
        "form conversion optimization",
        "website form optimization",
        "lead generation forms",
        "contact form optimization",
        "form UX",
        "improve form conversions",
        "inline form validation",
        "form field optimization",
        "conversion rate optimization"
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
      "datePublished": "2026-06-21",
      "dateModified": "2026-06-21"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best color for a submit button to get higher conversions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "High contrast colors like orange or green typically outperform gray or white buttons. The color should stand out clearly from your page background"
          }
        },
        {
          "@type": "Question",
          "name": "Should I use CAPTCHA on my Florida business contact form?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common CAPTCHAs hurt conversions noticeably. Instead, you can try Google reCAPTCHA v3. User flow remains uninterrupted due to its silent background presence."
          }
        },
        {
          "@type": "Question",
          "name": "Does adding a phone number field reduce form completions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Asking for a phone number upfront can reduce completions by up to 37%. Move it to a follow up step or make it optional at the start."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if my form is hurting my SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A high bounce rate on form pages combined with low “time on page” signals poor UX. Google factors these behavioral signals into your rankings."
          }
        },
        {
          "@type": "Question",
          "name": "What tools help track form drop-off at the field level?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Microsoft Clarity, Hotjar, and FullStory all offer “field level drop off” heatmaps. They show just where users stop filling out your form."
          }
        },
        {
          "@type": "Question",
          "name": "Is a standalone landing page better for forms than an embedded page?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standalone landing pages with no navigation typically convert 30% higher than forms embedded in pages with rival calls to action."
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

export const FormOptimizationBlog = () => {
  return (
    <article className="bg-[#f7f8fb] text-[#162033]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />
      <section className="rounded-[8px] bg-[#101d34] p-6 text-white md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8ed8ff]">
          Conversion Rate Optimization | UI/UX Design
        </p>
        <p className="mt-4 max-w-3xl !text-lg !leading-8 !text-[#d9e7f7]">
          You do not need a full website rebuild to fix your lead forms. Ordinary
          changes like reducing field count, fixing label placement, and adding
          tangible time validation can cut drop off by up to 40%. These changes are
          quick and cost almost nothing to apply.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 !text-sm !text-[#d9e7f7]">
          <span className="rounded-full border border-white/20 px-4 py-2">
            Updated 2026
          </span>
          <span className="rounded-full border border-white/20 px-4 py-2">
            Form Optimization Tips
          </span>
        </div>
      </section>

      <div className="mt-8">
        <div className="space-y-8">
          <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
            <p className="text-lg leading-8">
              Forms are the final handshake between your business and a potential lead. Most Florida businesses treat them like an afterthought. That mindset is bleeding conversions.
              Our surveys show that 67% of users abandon a form the moment it feels too long or confusing. That&apos;s a lot of leads walking out the door before you even know they arrived.
            </p>
          </section>

          <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">KEY POINTS</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {keyPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-[8px] border border-[#dce6f2] bg-[#f7fbff] p-4"
                >
                  <h3 className="text-xl font-bold">{point.title}</h3>
                  <p className="mt-2 text-base leading-7">{point.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <StatBlock
                  key={stat.value}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </section>

          <ContentSection title="Why Do Web Forms Lose Visitors Before the Submit Button?">
            <p>
              Forms are the final handshake between your business and a potential lead. Most Florida businesses treat them like an afterthought. That mindset is bleeding conversions.
              Our surveys show that 67% of users abandon a form the moment it feels too long or confusing. That&apos;s a lot of leads walking out the door before you even know they arrived.
            </p>
            <p>
              The <ExternalLink href="https://baymard.com/blog/checkout-flow-average-form-fields">Baymard Institute</ExternalLink> reports that checkout forms alone average 23.5 unnecessary fields. For generic lead capture forms across Florida service businesses, the number is even worse.
            </p>
            <p>
              The fix is a rethink. Every field you ask for is friction. Every friction point is a lost lead. The data is not gray on this.
            </p>
          </ContentSection>

          <ContentSection title="How Many Form Fields Actually Kill Your Conversion Rate?">
            <p>
              Here is the hard truth. Less is more, every time. No exceptions.
            </p>
            <p>
              Research from <ExternalLink href="https://blog.hubspot.com/marketing/reduce-form-fields-increase-conversions">HubSpot</ExternalLink> shows forms with 3 fields convert at 25%. Forms with 6 or more fields drop below 15%. That gap is your competition&apos;s advantage if you are not paying attention.
            </p>
            <p>
              Ask yourself this. Do you really need the company name, phone number, job title, and zip code all at once? For most Florida businesses, a name, email, and one qualifying question are plenty to start a conversation.
            </p>
            <p>
              Progressive disclosure is your best friend here. Ask for the basics first. Collect more details after the user commits. This technique alone can lift completions by 22% on a well-designed form.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-bold">Number of Form Fields & Conversion Rate</h3>
              <DataTable columns={fieldsTableColumns} rows={fieldsTableRows} />
            </div>
          </ContentSection>

          <ContentSection title="Does Field Label Placement Really Affect Form Completion?">
            <p>
              Yes. Dramatically. This is one of the most overlooked form design decisions out there.
            </p>
            <p>
              The <ExternalLink href="https://www.nngroup.com/articles/form-design-placeholders/">Nielsen Norman Group</ExternalLink> found that top-aligned labels are the fastest to process. Users scan them in one eye movement. Right-aligned labels force visual zigzagging, which slows the user down and drives abandonment.
            </p>
            <blockquote>
              “Label placement is one of the most underrated form UX decisions. Top-aligned labels can reduce form completion time by up to 50% compared to side-aligned labels.”
              <br />
              <span className="mt-2 block text-base font-semibold text-[#4f5f74]">
                — Luke Wroblewski (Rosenfeld Media), Author of <ExternalLink href="https://www.rosenfeldmedia.com/books/web-form-design/">Web Form Design</ExternalLink>
              </span>
            </blockquote>
            <p>
              Placeholder text in the field is an even worse primary label. Once a user starts typing, the hint disappears. Now they have to remember what the field wanted. That confusion costs you conversions every single time.
            </p>
            <p>
              Fix it today. Place labels above each field. Use placeholder text only as a secondary hint. This one change improves completion rates on mobile by a noticeable margin.
            </p>
          </ContentSection>

          <section className="rounded-[8px] bg-[#101d34] p-6 text-white md:p-8">
            <h2 className="text-3xl font-bold">Losing Leads at Your Contact Form?</h2>
            <p className="mt-4 max-w-3xl !text-lg !leading-8 !text-[#d9e7f7]">
              Bayshore Communication builds high-converting web forms backed by real UX data. Florida businesses trust us to plug their conversion leaks.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[#FE6F1F] px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Get Your Free Form Audit
            </Link>
          </section>

          <ContentSection title="What Are the Fastest Form Optimization Fixes You Can Do Today?">
            <p>
              Form optimization does not have to be a long project. These quick wins deliver immediate results with almost zero development time.
            </p>
            <p>
              1) Remove every optional field that is not essential to follow up. If you can close the lead without it, cut it. No negotiation there.
            </p>
            <p>
              2) Add inline validation. Show users in real time if their email format is off or their phone number is missing a digit. Do not wait until they hit Submit to drop five red error messages on them. Google&apos;s UX research confirms inline validation reduces form errors by 22%.
            </p>
          </ContentSection>

          <section className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[8px] bg-white p-6 shadow-sm border border-red-100">
              <h2 className="text-2xl font-bold text-red-600">BEFORE</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "8-field form, multi-column layout",
                  "No inline field validation",
                  "Generic error messages on Submit",
                  "Vague submit button reading Submit",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[8px] bg-white p-6 shadow-sm border border-green-100">
              <h2 className="text-2xl font-bold text-green-600">
                AFTER BAYSHORE
              </h2>
              <ul className="mt-5 space-y-3">
                {[
                  "3-field form, single-column layout",
                  "Real-time validation per field",
                  "Specific micro-copy per error",
                  "Button reads Get My Free Quote",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FE6F1F]">
              A/B Test Outcome
            </p>
            <blockquote className="mt-4 border-l-4 border-green-500 bg-[#f4faf6] p-5 text-xl font-bold text-[#1e4620]">
              Result  =  Completion rate increased from 14% to 38% over a 2-week A/B test.
            </blockquote>
            <div className="mt-8 space-y-5 text-lg leading-8">
              <p>
                3) Use a single column layout. Google&apos;s mobile UX guidelines confirm single column forms are 47% faster to complete than multi column ones.
              </p>
              <p>
                4) Make your submit button specific. “Get My Free Quote” outperforms Submit every single time. It tells the user what they are getting, not what they are doing.
              </p>
              <p>
                5) Add trust signals near the form. A short line like &quot;We do not share your info or a security badge&quot; reduces hesitation right at the moment of commitment.
              </p>
            </div>
          </section>

          <ContentSection title="How Does Mobile UX Change Your Form Drop-Off Numbers?">
            <p>
              In Florida, mobile internet usage is above the national average. Tampa, Miami, and Orlando users are searching on their phones. A form not built for thumbs is a form that does not convert.
            </p>
            <h3 className="text-xl font-bold uppercase tracking-wider text-[#FE6F1F]">
              MOBILE FORM ABANDONMENT STAT
            </h3>
            <p>
              Forms with poor touch targets or non responsive layouts see 60% higher abandonment on mobile than on desktop. In Florida, that number hits harder than most states.
            </p>
            <blockquote>
              “We see it constantly with Florida clients. A gorgeous desktop form becomes a nightmare on a phone screen. Fixing mobile form UX is always our first recommendation because it delivers the fastest, most visible lift in conversion.”
              <br />
              <span className="mt-2 block text-base font-semibold text-[#4f5f74]">
                — Salman H Saikote, Managing Partner, Bayshore Communication
              </span>
            </blockquote>
            <p>
              Tap targets should be 48x48 pixels at a minimum. Input fields need to trigger the correct keyboard. Use numeric for phone fields. Use the email keyboard for email fields. Autofill support is non-negotiable in 2026.
            </p>
            <p>
              Bayshore Communication’s UI/UX design team has rebuilt dozens of Florida business forms with exactly these mobile-first principles. The results are not subtle.
            </p>
          </ContentSection>

          <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FE6F1F]">
              Bayshore Survey Finding
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Are Florida Businesses Leaving Leads on the Table With Poor Form Design?
            </h2>
            <div className="mt-5 space-y-5 text-lg leading-8">
              <p>
                The straight answer is &quot;Yes.&quot; And a lot of them do not even know it’s happening.
              </p>
              <p>
                Our surveys show that 72% of Florida small-to-mid-size businesses have never run a single A/B test on their contact or lead forms. They built it once and forgot it. That&apos;s not a design problem. That&apos;s a strategy problem.
              </p>
              <p>
                Form optimization is an ongoing process. You test. You measure. You adjust. <ExternalLink href="https://www.smashingmagazine.com/2018/08/best-practices-for-web-form-design/">Smashing Magazine’s</ExternalLink> form UX research backs this up. Businesses that run continuous form tests consistently outperform set-and-forget competitors.
              </p>
              <p>
                Florida’s competitive markets leave zero room for leaky lead funnels. Whether you run a law firm in Tampa, a dental practice in Orlando, or an e-commerce store in Miami, every incomplete form submission is a real dollar lost.
              </p>
              <p>
                Bayshore Communication’s conversion optimization approach is rooted in real behavioral data and deep Florida market insight. From website design to full marketing automation, every touchpoint is built to convert. Not just look good.
              </p>
              <p>
                Pair your conversion improvements with{" "}
                <InlineLink href="/our-services/seo">
                  Bayshore Communication SEO services
                </InlineLink>{" "}
                for full campaign impact.
              </p>
            </div>
          </section>

          <section className="rounded-[8px] bg-[#101d34] p-6 text-white md:p-8">
            <h2 className="text-3xl font-bold">
              Stop Losing Leads at Your Contact Form
            </h2>
            <p className="mt-4 max-w-3xl !text-lg !leading-8 !text-[#d9e7f7]">
              Bayshore Communication turns form problems into conversion wins for Florida businesses.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[#FE6F1F] px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Book Your Free Strategy Session
            </Link>
          </section>

          <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0077B3]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Questions People Usually Asks Us
            </h2>
            <div className="mt-6 space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border-b border-[#dce6f2] pb-5"
                >
                  <h3 className="text-xl font-bold">{faq.question}</h3>
                  <p className="mt-2 text-base leading-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold">Final Thoughts</h2>
            <p className="mt-4 text-lg leading-8">
              A high conversion rate is built on subtle, customer-first design decisions. By reducing
              field counts, aligning labels on top, adding validation indicators, and testing layout
              types continuously, you will capture more of the traffic already hitting your site.
            </p>
            <p className="mt-4 text-lg leading-8">
              Ready to plug your lead generation leaks? Explore the{" "}
              <InlineLink href="/growth-plan">
                Bayshore Communication Growth Plan
              </InlineLink>{" "}
              or{" "}
              <InlineLink href="/contact">
                contact our UX experts
              </InlineLink>{" "}
              today.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
};

const ContentSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="rounded-[8px] bg-white p-6 shadow-sm md:p-8">
    <h2 className="text-3xl font-bold leading-tight">{title}</h2>
    <div className="mt-5 space-y-5 text-lg leading-8 [&>blockquote]:border-l-4 [&>blockquote]:border-[#FE6F1F] [&>blockquote]:bg-[#fff7f1] [&>blockquote]:p-5 [&>blockquote]:text-xl">
      {children}
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
}) => {
  const gridClass = columns.length === 2 ? "grid-cols-2" : "grid-cols-3";
  return (
    <div className="mt-6 overflow-x-auto rounded-[8px] border border-[#dce6f2]">
      <div className="min-w-[720px]">
        <div className={`grid ${gridClass} bg-[#101d34] text-base font-semibold !text-white`}>
          {columns.map((column) => (
            <div key={column} className="p-4">
              {column}
            </div>
          ))}
        </div>
        {rows.map((row) => (
          <div
            key={row.join("-")}
            className={`grid ${gridClass} border-t border-[#dce6f2] text-base`}
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
};

export default FormOptimizationBlog;
