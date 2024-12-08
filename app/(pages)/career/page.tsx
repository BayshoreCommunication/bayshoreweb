import AccorDion from "@/components/universal/AccorDion";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";
import parser from "html-react-parser";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { Example } from "@/components/unique/faq/FaqAcc";
import GetAllBlogData from "@/lib/GetAllBlogData";

export const metadata: Metadata = {
  title: "Career-Bayshore Communication",
  description:
    "Looking for an opportunity to show your skills, talent, and work with professionals who share your vision and values? Check out our career page. Apply now and become part of our family. ",
  openGraph: {
    title: "Career-Bayshore Communication",
    description:
      "Looking for an opportunity to show your skills, talent, and work with professionals who share your vision and values? Check out our career page. Apply now and become part of our family. ",
  },
};

let jobs: {
  heading: string;
  description: string;
}[];

jobs = [
  // {
  //   heading: `Junior Immigration Paralegal`,
  //   description: `<div>
  //   <p>We are hiring an Immigration Case Manager to serve as the main point of contact for clients, providing regular updates, addressing inquiries, and offering guidance throughout the immigration process. Collaboration with our team and basic knowledge of immigration law are preferred. Strong English communication skills and availability from 8:00 am to 5:00 pm EST are required. Join us in providing exceptional service and support to our clients' immigration journey</p>
  //   <h3>Responsibilities:</h3>
  //   <ul>
  //   <li><strong>Client Communication:</strong>&nbsp;Act as the main point of contact for clients, maintaining regular communication and providing updates on their immigration cases. Answer client inquiries, address concerns, and provide guidance throughout the immigration process.</li>
  //   <li><strong>Case Assessment:</strong>&nbsp;Evaluate client eligibility for various immigration programs, visas, or permits based on their specific circumstances, goals, and qualifications. Conduct thorough reviews of client documents and information to determine the best course of action.</li>
  //   <li><strong>Documentation and Form Preparation:</strong>&nbsp;Assist clients in completing necessary immigration forms accurately and in a timely manner. Ensure all required supporting documents are gathered, organized, and submitted as per the immigration requirements.</li>
  //   <li><strong>Case Management:</strong>&nbsp;Oversee the overall progress of immigration cases, managing multiple cases simultaneously. Monitor deadlines, follow-up with clients and relevant authorities, and coordinate with internal teams or external agencies to gather information or resolve any issues.</li>
  //   <li><strong>Case Documentation and Record-Keeping:</strong>&nbsp;Maintain accurate and organized case files and records, including client information, correspondence, forms, and supporting documents. Ensure compliance with data protection and confidentiality regulations.</li>
  //   <li><strong>Deadline Management:</strong>&nbsp;Track important deadlines, such as application submission dates, document expiry dates, or response deadlines, to ensure timely and complaint handling of clients' cases.</li>
  //   <li><strong>Collaboration and Teamwork:</strong>&nbsp;Collaborate with colleagues, including immigration attorneys, paralegals, or other professionals within the firm, to ensure efficient and effective case management. Seek guidance or support when needed and contribute to a positive and collaborative work environment.</li>
  //   <li><strong>Time zone:</strong>&nbsp;Candidates must be available to work from 8.00 am to 5 pm in EST time zone that is late night in Bangladesh.</li>
  //   </ul>
  //   <h3>Requirements:</h3>
  //   <ul>
  //   <li><strong>Knowledge of Immigration Law and Procedures (Preferred):</strong>&nbsp;An understanding of immigration laws, regulations, policies, and procedures is crucial. Case Managers should be familiar with various visa categories, immigration programs, and the specific requirements for each. They should keep up to date with changes in immigration law and policy.</li>
  //   <li><strong>English Language Skills (Required):</strong>&nbsp;Proficiency in English in both reading and writing is very important for this role.</li>
  //   <li><strong>Attention to Detail:</strong>&nbsp;Case Managers must demonstrate a high level of attention to detail to ensure accurate completion of forms, documentation, and adherence to immigration requirements. Small errors or omissions can have significant consequences for clients' cases.</li>
  //   <li><strong>Technology Proficiency:</strong>&nbsp;Proficiency in using MS Word and MS Excel.</li>
  //   <li><strong>Ethics and Professionalism:</strong>&nbsp;Immigration Case Managers handle sensitive and confidential client information. Upholding ethical standards, maintaining client confidentiality, and displaying professionalism in all interactions are crucial qualities.</li>
  //   </ul>
  //   <h3>Compensation &amp; Other Benefits:</h3>
  //   <ul>
  //   <li>Full Subsidize Lunch Facilities, Yearly 2 Festival Bonus, Yearly Increments (On Performance)</li>
  //   </ul>
  //   <h3>Job Location: Aftabnagar, Dhaka</h3>
  //   <h3>Work Hours: Monday - Friday (Night Shift)</h3>
  //   <h3>Salary: TK. 20,000 - 30,000 (Monthly)</h3>
  //   <p>If you have a strong background in immigration law and are passionate about supporting clients through the immigration process, we encourage you to apply for our Immigration Paralegal position at&nbsp;jobs@bayshorecommunication.com. Please include the position you are applying for in the email subject line. Join our team and utilize your expertise to assist our clients in navigating the complexities of immigration law.</p>
  //   <div><a href="mailto:jobs@bayshorecommunication.com" target="_blank" rel="noopener noreferrer">Apply Now</a></div>
  //   </div>`,
  // },
  {
    heading: `Admin & HR Executive`,
    description: `

    <h1 className="text-2xl font-bold">Vacancy: 01<h1>
    <br/>

    <h1 className="text-2xl font-bold">Job Context:<h1>

    <br/>

    <p className="text-base"> We are seeking a dynamic and highly skilled Admin & HR Executive to join our team at Bayshore Communication.</p>

    <br/>

    <p className="text-base">As an Admin & HR Executive, you will be responsible for undertaking a variety of HR and Administration duties and providing strategic guidance to support the organization's human resources initiatives. This position offers an excellent opportunity for personal growth and professional development in a fast-paced and challenging environment.</p>
    
    <br/>

    <p className="text-2xl font-bold">Responsibilities:</p>

    <br/>

    <ul className="list-disc pl-5 space-y-2 ml-14">

    <li>Collaborate with the management team to develop and implement HR strategies aligned with the company's overall objectives.</li>

    <li>Coordinate and manage the full recruitment life cycle, including job posting, screening resumes, conducting interviews, and making job offers. </li>

    <li>Develop effective sourcing strategies to attract qualified candidates.</li>

    <li>Collaborate with hiring managers to define job requirements and candidate profiles. </li>

    <li>Provide guidance and support to employees on HR policies, procedures, and programs. </li>

    <li>Handle employee inquiries and concerns, ensuring timely and appropriate resolutions. </li>

    <li>Mediate and resolve employee conflicts, promoting a positive and harmonious work environment. </li>
    
    <li>Assist in the development and implementation of performance management processes.</li>

    <li>Maintain accurate and up-to-date employee records, including personnel files, contracts, and other HR-related documentation.</li>

    </ul>

    <br/>

    <p className="text-2xl font-bold">Qualifications:</p>

    <br/>

    <ul className="list-disc pl-5 space-y-2 ml-14">

    <li>Strong understanding of HR principles, practices, and current trends.</li>

    <li>1-2 years of relevant experience in HR functions or related areas.</li>

    <li>Excellent communication and interpersonal skills.</li>

    <li>Ability to handle confidential information with discretion.</li>

    <li>Proficient in MS Office applications and HRIS systems.</li>

    <li>Proactive approach with a problem-solving mindset. </li>

    <li>Ability to work independently and collaboratively in a team environment.</li>
    
    <li>Strong organizational skills with the ability to manage multiple tasks simultaneously</li>

    </ul>

    <br/>

    <p className="text-2xl font-bold">Educational Requirements: </p>

    <br/>

    <p className="text-base">Bachelor's degree in Business Administration, preferably with a specialization in Human Resources.</p>
    `,
  },
  {
    heading: `Junior Immigration Paralegal`,
    description: ``,
  },
];

const page = async () => {
  const jobData = await GetAllBlogData();
  return (
    <>
      <div className="bg-[#F4F4F4]">
        <h1 className="heading-secondary !text-center  py-4 !mb-0 max-w-[800px] mx-auto">
          Empower Your Career: Discover Growth Opportunities at Bayshore
          Communication
        </h1>
      </div>
      <SectionLayout bg="">
        <div className="border-[0.5px] border-[#AAAAAA] rounded-[10px]">
          {/* {jobs.map((elem, index) => (
            <div key={index}>
              <AccorDion title={`${elem.heading}`} body={<Content />} />
            </div>
          ))} */}
          {/* {jobData?.data
            ?.filter(
              (blog: any) =>
                blog?.published === true && blog?.category.includes('Job Post'),
            )
            ?.map((el: any, index: number) => (
              <Example arr={[el]} key={el.id || index} />
            ))} */}

          <Example arr={jobData?.data} />
        </div>
      </SectionLayout>
    </>
  );
};

export default page;
