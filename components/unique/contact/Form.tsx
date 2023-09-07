"use client";

import { send } from "emailjs-com";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  //set initial state for all the field
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    contact: "",
    website: "",
    subject: "",
    description: "",
  });

  const SendMail = (e: any) => {
    e.preventDefault();
    const res = send(
      "service_ktnnn3r",
      "template_49jb97c",
      emailForm,
      "GmHPw5sambWaKFRLk"
    )
      .then((response) => {
        Swal.fire({
          icon: "success",
          text: `Thanks for reaching to us. We've received your message & we'll get back you soon.`,
        }).then(() => {
          setEmailForm({
            name: "",
            email: "",
            contact: "",
            website: "",
            subject: "",
            description: "",
          });
        });
      })
      .catch((err) => {
        console.log("err", err);
        Swal.fire({
          icon: "error",
          text: "Something went wrong!",
        }).then(() => {
          setEmailForm({
            name: "",
            email: "",
            contact: "",
            website: "",
            subject: "",
            description: "",
          });
        });
      });
  };

  console.log("testttt", emailForm);

  return (
    <form onSubmit={SendMail} className="flex flex-col items-center mt-8 gap-8">
      <input
        className="appearance-none border border-[#CED4DA] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="name"
        type="text"
        placeholder="Enter your name"
        value={emailForm.name}
        onChange={(event) => {
          setEmailForm({
            ...emailForm,
            name: event.target.value,
          });
        }}
      />
      <input
        className="appearance-none border rounded w-full py-4 px-4 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="email"
        type="email"
        placeholder="Enter your email"
        value={emailForm.email}
        onChange={(event) => {
          setEmailForm({
            ...emailForm,
            email: event.target.value,
          });
        }}
      />
      <input
        className="appearance-none border rounded w-full py-4 px-4 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="contact"
        type="tel"
        placeholder="Enter your contact no."
        value={emailForm.contact}
        onChange={(event) => {
          setEmailForm({
            ...emailForm,
            contact: event.target.value,
          });
        }}
      />
      <input
        className="appearance-none border rounded w-full py-4 px-4 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="website"
        type="url"
        placeholder="Enter your website"
        value={emailForm.website}
        onChange={(event) => {
          setEmailForm({
            ...emailForm,
            website: event.target.value,
          });
        }}
      />
      <input
        className="appearance-none border border-[#CED4DA] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
        id="subject"
        type="text"
        placeholder="Enter the subject"
        value={emailForm.subject}
        onChange={(event) => {
          setEmailForm({
            ...emailForm,
            subject: event.target.value,
          });
        }}
      />
      <textarea
        className="appearance-none border border-[#CED4DA] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-44 resize-none text-small !text-[#6C757D]"
        id="description"
        placeholder="Enter your description"
        value={emailForm.description}
        onChange={(event) => {
          setEmailForm({
            ...emailForm,
            description: event.target.value,
          });
        }}
      ></textarea>
      <button className="btn mt-4 text-small" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default Form;
