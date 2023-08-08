import AccorDion from "@/components/universal/AccorDion";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "Career-Bayshore Communication",
  description:
    "Looking for an opportunity to show your skills, talent, and work with professionals who share your vision and values? Check out our career page. Apply now and become part of our family. ",
};

const page = () => {
  return (
    <>
      <div className="bg-[#F4F4F4]">
        <h2 className="heading-secondary !text-center  py-4 !mb-0 max-w-[800px] mx-auto">
          Empower Your Career: Discover Growth Opportunities at Bayshore
          Communication
        </h2>
      </div>
      <SectionLayout bg="">
        <div className="border-[0.5px] border-[#AAAAAA] rounded-[10px]">
          <AccorDion title="Content Writing Intern" body={<Content1 />} />

          <AccorDion title="Full Stack Web Developer" body={<Content1 />} />

          <AccorDion title="Full Stack Web Developer" body={<Content1 />} />
        </div>
      </SectionLayout>
    </>
  );
};

export default page;

const Content1 = () => {
  return (
    <div className="flex items-center justify-between">
      <div><p>Content Writing Intern<br />We are looking for a passionate and motivated intern to join our content writing team. As an intern, you will learn and work closely with our experienced content writers to create high-quality content optimized for search engines. You will also learn about on-page SEO and how to implement it in content to improve its ranking and visibility.<br />Responsibilities:<br />Conducting research and creating high-quality content for websites, blogs, and social media<br />Optimizing content for search engines using on-page SEO techniques<br />Editing and proofreading content for accuracy, grammar, and spelling<br />Staying up-to-date with industry trends and best practices in content writing and SEO<br />Requirements:<br />Good basic English skills<br />Basic understanding of SEO and its importance in content creation<br />Excellent writing, editing, and proofreading skills<br />Ability to work in a team and collaborate effectively<br />Attention to detail and ability to multitask in a fast-paced environment<br />Good communication skills and willingness to learn<br />A portfolio of writing samples or relevant coursework is a plus<br />Compensation &amp; Other Benefits:<br />Full Subsidize Lunch Facilities, Yearly 2 Festival Bonus, Yearly Increments (On Performance)<br />Job Location: Hybrid<br />Work Hours: Saturday - Thursday (10 AM - 6 PM)<br />Salary: TK. 10,000 - 15,000 (Monthly)<br />This is a paid internship that offers valuable hands-on experience in content writing and on-page SEO. If you&apos;re passionate about writing and eager to learn from experienced professionals, we encourage you to apply. Please include your resume and a cover letter detailing your interest and qualifications for the position to jobs@bayshorecommunication.com. Please include the position you are applying for in the email subject.</p></div>
    </div>
  );
};
