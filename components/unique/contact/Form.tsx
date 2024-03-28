"use client";

import { send } from "emailjs-com";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";

const Form = () => {
  //set initial state for all the field
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    contact: "",
    website: "",
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
          });
        });
      });
  };

  return (
    <form onSubmit={SendMail} className="flex flex-col items-center mt-8 gap-8">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1 space-y-5">
          {/* <TextField
            id="outlined-basic"
            label="Enter your name"
            variant="outlined"
            fullWidth
            InputProps={{
              style: { color: "#FE631A", background: "#FE631A" }, // Here you set the custom color
            }}
          /> */}
          <input
            className="appearance-none border border-[#FE631A] rounded-full w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D] "
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
            className="appearance-none border border-[#FE631A] rounded-full w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
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
            className="appearance-none border border-[#FE631A] rounded-full w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
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
            className="appearance-none border border-[#FE631A] rounded-full w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]"
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
        </div>
        {/* <input
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
       */}
        {/* <textarea
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
        ></textarea> */}
        <div className="flex-1">
          <textarea
            id="message"
            rows={11}
            className="block p-2.5 w-full text-sm text-gray-900 border-[#FE631A] rounded-3xl border"
            placeholder="Write your thoughts here..."
          ></textarea>

          <button
            className="bg-[#FE631A] py-4 px-6 mt-3.5 rounded-3xl text-base !text-black"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
