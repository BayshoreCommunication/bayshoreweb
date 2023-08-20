"use client";

import { useEffect, useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Perform localStorage action
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const emailValue: string | null = localStorage.getItem("email");
    if (emailValue) {
      setEmail(emailValue);
    }
  }, []);

  return (
    <form className="flex flex-col items-center mt-8 gap-8">
      <input
        className="appearance-none border border-[#CED4DA] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="name"
        type="text"
        placeholder="Enter your name"
      />
      <input
        className="appearance-none border rounded w-full py-4 px-4 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="email"
        type="email"
        placeholder="Enter your email"
        value={email}
      />
      <input
        className="appearance-none border rounded w-full py-4 px-4 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="contact"
        type="tel"
        placeholder="Enter your contact no."
      />
      <input
        className="appearance-none border rounded w-full py-4 px-4 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="website"
        type="url"
        placeholder="Enter your website"
      />
      <input
        className="appearance-none border border-[#CED4DA] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="subject"
        type="text"
        placeholder="Enter the subject"
      />
      <textarea
        className="appearance-none border border-[#CED4DA] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-44 resize-none text-small !text-[#6C757D]"
        id="description"
        placeholder="Enter your description"
      ></textarea>
      <button className="btn mt-4 text-small" type="button">
        Send Message
      </button>
    </form>
  );
};

export default Form;
