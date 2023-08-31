import SectionLayout from "@/components/universal/SectionLayout";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import SimpleMap from "@/components/unique/contact/Map";
import Form from "@/components/unique/contact/Form";

export const metadata: Metadata = {
  title: "Contact-Bayshore Communication",
  description:
    "Are you concerned about your business growth? Bayshore's here to help. Contact us today and get a free consultation. Let us show you how we can make a difference for your business.",
};

let address: {
  title: string;
  phone: string;
  address: string;
  email: string;
  // icon: string;
}[];

address = [
  {
    title: "Tampa",
    phone: "+1 (321) 765-9177",
    address: "1301 34th ST South, St. Petersburg FL 33711",
    email: "info@bayshorecommunication.com",
  },
  {
    title: "Dhaka",
    phone: "+8801685035449",
    address:
      "Flat : 2nd , House : 21, Road : 1, Block : A, Aftabnogor, Dhaka - 1212",
    email: "info@bayshorecommunication.com",
  },
];

const Page = () => {
  return (
    <>
      <Image
        src="/assets/contact.png"
        alt="contact-office"
        width={2000}
        height={600}
        className="w-full h-auto object-cover"
      />
      <SectionLayout bg="">
        <div className="flex flex-wrap justify-center md:justify-between gap-20 ">
          <div className="md:flex-1 ">
            <Adress
              title="Tampa"
              address={address[0].address}
              phone={address[0].phone}
              email={address[0].email}
            />
          </div>

          <div className="md:flex-1 ">
            <Adress
              title="Dhaka"
              address={address[1].address}
              phone={address[1].phone}
              email={address[1].email}
            />
          </div>
          <div className="md:flex-[2]">
            <div className=" mx-auto">
              <h4 className="heading-four !text-center">
                Just send us your questions or concerns by starting a new
                message and we will give you the help you need.
              </h4>
              <Form />
            </div>
          </div>
          {/* <Adress title="Dubai" /> */}
        </div>
      </SectionLayout>
      {/* <SectionLayout bg="">
        <div className="max-w-[600px] mx-auto">
          <h4 className="heading-four !text-center">
            Just send us your questions or concerns by starting a new message
            and we will give you the help you need.
          </h4>
          <Form />
        </div>
      </SectionLayout> */}
      <SectionLayout bg="">
        {" "}
        <SimpleMap />{" "}
      </SectionLayout>
    </>
  );
};

export default Page;

const Row = ({ title, icon, address, phone, email }: any) => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="heading-four mb-2 flex items-center gap-4">
        <span>
          <Image
            src={icon}
            alt="contact-office"
            width={600}
            height={80}
            className="w-[2rem] h-auto object-cover"
          />
        </span>
        <span>{title}</span>
      </h4>
      <div className="mb-[1rem]">
        <p className="text-small !text-center">{phone}</p>
        <p className="text-small !text-center">{address}</p>
        <p className="text-small !text-center">{email}</p>
      </div>
    </div>
  );
};

const Adress = ({ address, title, phone, email }: any) => {
  return (
    <div className="flex flex-col justify-around items-center">
      <h3 className="heading-secondary">{title}</h3>
      <div className="flex flex-col gap-3 ">
        <Row title="Phone" icon="/assets/phone.svg" phone={phone} />
        <Row title="Address" icon="/assets/location.svg" address={address} />
        <Row title="Email" icon="/assets/email.svg" email={email} />
      </div>
    </div>
  );
};
