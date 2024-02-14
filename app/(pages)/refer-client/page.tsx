import SectionHeader from "@/components/universal/SectionHeader";
import SectionLayout from "@/components/universal/SectionLayout";
import Image from "next/image";
import Head from "next/head";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Refer-Bayshore Communication",
  name: "description",
  description:
    "Refer a client to Bayshore Communication and get rewarded. Fill out a form and we will do the rest. Don’t miss this chance. Refer now.",
};

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Refer a client to Bayshore Communication and get rewarded. Fill out a form and we will do the rest. Don’t miss this chance. Refer now."
          key="desc"
        />
      </Head>
      <Reveal>
        <h1 className="heading-primary !text-center  py-8 !mb-0 bg-[#F4F4F4]">
          Refer client
        </h1>
      </Reveal>

      <SectionLayout bg="">
        <Reveal>
          <SectionHeader
            heading="Refer a paying client, earn $500."
            text="If the referral closes for a $1,500+ package, you earn a $500 payment. No questions asked. It’s that simple. You can do this as many times as you’d like. We appreciate your support of Bayshore Communication"
          />
        </Reveal>
        <div className="center">
          {/* <button className="btn text-small ">Submit My Referral</button> */}
          <Reveal>
            <button className="!text-white font-semibold text-small rounded-full p-5 !bg-[#FE6F1F] hover:!bg-[#fe711fd4]">
              Submit My Referral
            </button>
          </Reveal>
        </div>
        <Reveal>
          <h2 className="heading-secondary !text-center mt-12">
            Submit your referal
          </h2>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 gap-5 mt-28 md:grid-cols-2">
            <div className="mb-16">
              <Image
                src="/assets/rafer-image.svg"
                alt="marketing"
                width={1200}
                height={1200}
                className="w-full h-auto"
              />
            </div>
            <div className="max-w-[600px] mx-auto">
              <form className="space-y-8">
                <input
                  className="appearance-none border border-[#CED4DA] w-full py-4 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="appearance-none border w-full py-4 px-10 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
                <input
                  className="appearance-none border border-[#CED4DA] w-full py-4 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                  id="name"
                  type="text"
                  placeholder="Referral Name"
                />
                <input
                  className="appearance-none border w-full py-4 px-10 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                  id="email"
                  type="email"
                  placeholder="Referral Email"
                />
                <input
                  className="appearance-none border border-[#CED4DA] w-full py-4 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                  id="subject"
                  type="text"
                  placeholder="Referral Phone"
                />
                <input
                  className="appearance-none border border-[#CED4DA] w-full py-4 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                  id="subject"
                  type="text"
                  placeholder="Company Name"
                />
                <input
                  className="appearance-none border border-[#CED4DA] w-full py-4 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D] rounded-[25px]"
                  id="subject"
                  type="text"
                  placeholder="Referral's Needs"
                />
                <button className="!text-white !text-center  font-semibold text-small rounded-full w-full  p-5 !bg-[#FE6F1F] hover:!bg-[#fe711fd4]">
                  Submit
                </button>
                {/* <button className="btn " type="button">
                Submit
              </button> */}
              </form>
            </div>
          </div>
        </Reveal>
      </SectionLayout>
    </>
  );
};

export default page;
