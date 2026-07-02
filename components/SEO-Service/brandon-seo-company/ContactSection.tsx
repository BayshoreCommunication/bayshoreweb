"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  TrendingUp,
  Users,
  ShieldCheck,
  Star,
  User,
  Mail,
  Phone,
  BriefcaseBusiness,
  Tag,
  Megaphone,
  MessageSquare,
  Send,
} from "lucide-react";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY",
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FBFBFB] py-8 md:py-8">
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[72%]
          w-full
          bg-[url('/seo-company-wesley-chapel/why-choose-bg.png')]
          bg-cover
          bg-left-bottom
          opacity-[0.08]
          md:w-[58%]
        "
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/85" />

      <div className="relative mx-auto max-w-[1420px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[480px_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          {/* Left Side */}
          <div className="pt-2 md:pt-12">
            <div className="mb-8 flex items-center gap-4 text-[#FF6F00]">
              <div className="h-px w-12 bg-[#FF6F00]" />

              <MapPin size={18} />

              <span className="font-bold uppercase text-[#FF6F00]">
                Let&apos;s Grow Together
              </span>

              <div className="h-px w-12 bg-[#FF6F00]" />
            </div>

            <h2 className="text-[38px] font-bold leading-[1.08] text-black md:text-[52px]">
              Let&apos;s Put Your
              <br />
              Brandon Florida
              <br />
              Business
              <br />
              <span className="text-[#FF6F00]">
                on the Map —
                <br />
                Contact Us Today
              </span>
            </h2>

            <p className="mt-8 max-w-[440px] text-[15px] leading-[1.7] text-black/70 md:text-[16px]">
              Every week without search visibility is a week competitors collect leads your business should have. Bayshore Communications builds SEO campaigns for Brandon businesses ready to own their market, earn consistent organic traffic, and turn search results into real revenue. Reach out today to schedule a free audit and find out exactly where your site stands.
            </p>

            <div className="mt-12 space-y-5">
              {[
                {
                  icon: TrendingUp,
                  text: "Local SEO Strategies That Drive Results",
                },
                {
                  icon: MapPin,
                  text: "More Visibility. More Traffic. More Customers.",
                },
                {
                  icon: Users,
                  text: "A Local Team That Understands Brandon",
                },
                {
                  icon: ShieldCheck,
                  text: "Transparent Reporting and Honest Guidance",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                      <Icon size={22} className="text-[#FF6F00]" />
                    </div>

                    <span className="text-[15px] font-semibold leading-6 text-black/80 md:text-[16px]">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="self-start">
            <div
              className="
                rounded-t-[20px]
                border
                border-black/5
                bg-white
                p-5
                shadow-[0_15px_45px_rgba(0,0,0,0.08)]
                md:p-10
              "
            >
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    icon={<User size={17} />}
                    label="First Name"
                    name="first_name"
                  />

                  <Field
                    icon={<User size={17} />}
                    label="Last Name"
                    name="last_name"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    icon={<Mail size={17} />}
                    label="Email Address"
                    type="email"
                    name="email"
                  />

                  <Field
                    icon={<Phone size={17} />}
                    label="Phone Number"
                    name="phone"
                  />
                </div>

                <Field
                  icon={<BriefcaseBusiness size={17} />}
                  label="Business Website"
                  name="business"
                  placeholder="Enter Your Business Website"
                />

                <div>
                  <Label
                    icon={<Tag size={17} />}
                    text="Your Industry or Service Category"
                  />

                  <select name="industry" className={inputStyle} required>
                    <option value="">Select your industry or service</option>

                    <option>Home Services</option>
                    <option>Healthcare</option>
                    <option>Legal Services</option>
                    <option>Real Estate</option>
                    <option>Retail Business</option>
                    <option>Fitness & Wellness</option>
                    <option>Restaurant</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <Label
                    icon={<Megaphone size={17} />}
                    text="How Did You Hear About Bayshore Communication"
                  />

                  <select name="source" className={inputStyle} required>
                    <option value="">Select an option</option>

                    <option>Google Search</option>
                    <option>Facebook</option>
                    <option>LinkedIn</option>
                    <option>Referral</option>
                    <option>YouTube</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <Label
                    icon={<MessageSquare size={17} />}
                    text="Tell Us About Your Business and Growth Goals"
                  />

                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="
                      min-h-[92px]
                      w-full
                      rounded-[8px]
                      border
                      border-black/15
                      bg-white
                      px-4
                      py-4
                      text-[15px]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-black/35
                      focus:border-[#FF6F00]
                      focus:ring-2
                      focus:ring-[#FF6F00]/15
                    "
                    placeholder="Share a little about your business and what you want to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    relative
                    h-[58px]
                    w-full
                    overflow-hidden
                    rounded-[8px]
                    bg-[#FF5B00]
                    text-[17px]
                    font-bold
                    text-white
                    shadow-[0_14px_26px_rgba(255,91,0,0.25)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_18px_34px_rgba(255,91,0,0.32)]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full" />

                  <span className="relative flex items-center justify-center gap-3">
                    <Send size={19} />

                    {loading ? "Sending..." : "Send My SEO Proposal Request"}
                  </span>
                </button>

                {success && (
                  <p className="text-center font-medium text-green-600">
                    Message sent successfully.
                  </p>
                )}
              </form>
            </div>

            {/* Trust Bar */}
            <div className="grid gap-5 rounded-b-[16px] border border-t-0 border-black/5 bg-white px-6 py-5 shadow-[0_18px_35px_rgba(0,0,0,0.07)] md:grid-cols-3 md:px-8">
              <TrustItem
                icon={<ShieldCheck size={22} />}
                text="Trusted by Local Businesses Across Tampa Bay"
              />

              <TrustItem
                icon={<Star size={22} />}
                text="Proven Strategies. Real Results."
              />

              <TrustItem
                icon={<MapPin size={22} />}
                text="Focused on Brandon and Surrounding Areas"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle = `
h-[52px]
w-full
rounded-[8px]
border
border-black/15
bg-white
px-4
text-[15px]
outline-none
transition-all
duration-300
placeholder:text-black/35
focus:border-[#FF6F00]
focus:ring-2
focus:ring-[#FF6F00]/15
`;

function Label({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <label className="mb-2 flex items-center gap-2 text-[14px] font-bold text-black/85">
      <span className="text-[#FF6F00]">{icon}</span>
      {text}
    </label>
  );
}

function Field({
  icon,
  label,
  name,
  type = "text",
  placeholder,
}: {
  icon: React.ReactNode;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label icon={icon} text={label} />

      <input
        type={type}
        name={name}
        required
        className={inputStyle}
        placeholder={placeholder ?? `Enter your ${label.toLowerCase()}`}
      />
    </div>
  );
}

function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 md:border-r md:border-black/10 md:last:border-r-0 md:pr-5">
      <div className="shrink-0 text-[#FF6F00]">{icon}</div>

      <span className="text-[14px] font-semibold leading-5 text-black/80">
        {text}
      </span>
    </div>
  );
}
