import SectionHeader from "@/components/universal/SectionHeader";
import SectionLayout from "@/components/universal/SectionLayout";
import Image from "next/image";
import Head from "next/head";

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
      <h1 className="heading-primary !text-center  py-8 !mb-0 bg-[#F4F4F4]">
        Refer client
      </h1>

      <SectionLayout bg="">
        <SectionHeader
          heading="Refer a paying client, earn $500."
          text="If the referral closes for a $2,000+ package, you earn a $500 payment. No questions asked. It’s that simple. You can do this as many times as you’d like. We appreciate your support of Bayshore Communication"
        />
        <div className="center">
          <button className="btn text-small">Submit My Referral</button>
        </div>
        <div className="mt-8">
          <Image
            src="/assets/refer.svg"
            alt="marketing"
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
          <h2 className="heading-secondary !text-center mt-12">
            Submit your referal
          </h2>
        </div>
        <div className="max-w-[600px] mx-auto">
          <form className="flex flex-col items-center mt-8 gap-8">
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

            <button className="btn mt-4 text-small px[137px] " type="button">
              Submit
            </button>
          </form>
        </div>
      </SectionLayout>
    </>
  );
};

export default page;
