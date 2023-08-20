"use client";
import Service, { services } from "@/components/unique/services/Service";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import SectionLayout from "./SectionLayout";
import ProposalBtn from "./ProposalBtn";

interface heroInfo {
  heading: string;
  description: string;
}

export const HeroForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    // Perform localStorage action
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const inputValue: string | null = localStorage.getItem("email");
    if (inputValue) {
      setItem(inputValue);
    }
  }, []);
  // localStorage.setItem("email", inputValue);

  return (
    <form className="cus-form flex items-center justify-center md:justify-start gap-4 sm:gap-8 mt-[1.5rem] lg:mt-[2.5rem] flex-col sm:flex-row">
      <input
        className="placeholder-center rounded-[10px] outline-none text-small py-4 px-4 md:py-6 md:px-8"
        type="text"
        placeholder="Enter your email"
        onChange={handleInputChange}
        value={inputValue}
      />
      <ProposalBtn />
    </form>
  );
};

const HeroLeft: React.FC<heroInfo> = ({ heading, description }) => {
  return (
    <div className="">
      <h1 className="heading-primary">{heading}</h1>
      <p className="text-base">{description}</p>
      <HeroForm />
    </div>
  );
};

export default HeroLeft;
function setItem(inputValue: string) {
  throw new Error("Function not implemented.");
}
