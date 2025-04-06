// "use client";
// import { useEffect, useState } from "react";
// import axios from "axios";

// interface FormValues {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// const Form = () => {
//   const initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
//   const [loading, setLoading] = useState(false);
//   const [contactInfo, setContactInfo] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState<any>({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setContactInfo({ ...contactInfo, [name]: value });
//   };

//   const onTextAreaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setContactInfo({ ...contactInfo, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormErrors(validate(contactInfo));
//     setIsSubmit(true);
//   };

//   const handlePostRequest = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post(
//         "https://backend-bayshore.vercel.app/user/messages",
//         contactInfo
//       );
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       console.log("Response:", response.data);
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       handlePostRequest();
//       setContactInfo(initialValues);
//     }
//   }, [formErrors]);

//   const validate = (values: FormValues) => {
//     const errors: any = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.name) {
//       errors.name = "Name is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.phone) {
//       errors.phone = "Phone number is required!";
//     }
//     if (!values.message) {
//       errors.message = "Question is required!";
//     }
//     return errors;
//   };

//   return (
//     <form onSubmit={handleSubmit} className="">
//       <div className="flex flex-col md:flex-row justify-between gap-8">
//         <div className="flex-1 space-y-10">
//           <input
//             className="appearance-none border border-[#FE631A] rounded-full w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D] "
//             type="text"
//             placeholder="Enter your name"
//             name="name"
//             id="name"
//             value={contactInfo.name}
//             onChange={handleChange}
//           />
//           <span className="text-orange-600">{formErrors.name}</span>
//           <input
//             className="appearance-none border border-[#FE631A] rounded-full w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D] "
//             type="text"
//             placeholder="Enter your email"
//             name="email"
//             id="email"
//             value={contactInfo.email}
//             onChange={handleChange}
//           />
//           <span className="text-orange-600">{formErrors.email}</span>
//           <input
//             className="appearance-none border border-[#FE631A] rounded-full w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D] "
//             type="text"
//             placeholder="Enter your contact no."
//             name="phone"
//             id="phone"
//             value={contactInfo.phone}
//             onChange={handleChange}
//           />
//           <span className="text-orange-600">{formErrors.phone}</span>
//         </div>
//         <div className="flex-1">
//           <textarea
//             name="message"
//             id="message"
//             value={contactInfo.message}
//             onChange={onTextAreaInput}
//             rows={5}
//             className="block p-2.5 w-full text-small text-gray-900 border border-[#FE631A] rounded-2xl"
//             placeholder="Write your thoughts here..."
//           />
//           <span className="text-orange-600">{formErrors.message}</span>
//           <div className="mt-3 w-full">
//             {loading ? (
//               <button
//                 disabled
//                 type="button"
//                 className="bg-[#FE631A] py-4 px-6 mt-3.5 rounded-3xl text-base !text-white w-full !text-center"
//               >
//                 <svg
//                   aria-hidden="true"
//                   role="status"
//                   className="inline w-4 h-4 me-3 text-white animate-spin"
//                   viewBox="0 0 100 101"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                     fill="#E5E7EB"
//                   />
//                   <path
//                     d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//                 Submitting...
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 className="py-4 px-6 mt-3.5 border bg-gray-200 border-[#FE631A] hover:bg-[#FE631A] rounded-3xl text-base w-full !text-center hover:!text-white"
//                 onClick={handleSubmit}
//               >
//                 Send Message
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Form;

"use client";
import axios from "axios";
import emailjs from "emailjs-com";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [contactInfo, setContactInfo] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const onTextAreaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors(validate(contactInfo));
    setIsSubmit(true);
  };

  const handlePostRequest = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://backend-bayshore.vercel.app/user/messages",
        contactInfo
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Response:", response.data);

      if (response) {
        Swal.fire({
          title: "Thank you!",
          text: "Your message has been sent successfully. We will get back to you soon.",
          icon: "success",
          confirmButtonColor: "#FE6F1F",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        text: "We’re experiencing some technical issues. Please try again later or contact us directly.",
        icon: "error",
        confirmButtonColor: "#FE6F1F",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitEmail = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload

    if (!form.current) return;

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_o4z5ryj",
        "template_220uure",
        form.current,
        "EVNtRahViRmUCuu7C"
      );

      console.log("Email sent successfully:", result.text);

      Swal.fire({
        title: "Thank you!",
        text: "Your message has been sent successfully. We will get back to you soon.",
        icon: "success",
        confirmButtonColor: "#FE6F1F",
      });

      setContactInfo(initialValues);
      // form.current.reset(); // optional
    } catch (error) {
      console.error("Email send failed:", error);

      Swal.fire({
        text: "We’re experiencing some technical issues. Please try again later or contact us directly.",
        icon: "error",
        confirmButtonColor: "#FE6F1F",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handlePostRequest();
    }
  }, [formErrors]);

  const validate = (values: FormValues) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.message) {
      errors.message = "Question is required!";
    }
    return errors;
  };

  return (
    <form ref={form} onSubmit={handleSubmitEmail} className="">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1 space-y-10">
          <input
            className="appearance-none border border-[#FE631A] rounded-full w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D] "
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            value={contactInfo.name}
            onChange={handleChange}
          />
          <span className="text-orange-600">{formErrors.name}</span>
          <input
            className="appearance-none border border-[#FE631A] rounded-full w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D] "
            type="text"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={contactInfo.email}
            onChange={handleChange}
          />
          <span className="text-orange-600">{formErrors.email}</span>
          <input
            className="appearance-none border border-[#FE631A] rounded-full w-full py-4 px-4 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D] "
            type="text"
            placeholder="Enter your contact no."
            name="phone"
            id="phone"
            value={contactInfo.phone}
            onChange={handleChange}
          />
          <span className="text-orange-600">{formErrors.phone}</span>
        </div>
        <div className="flex-1">
          <textarea
            name="message"
            id="message"
            value={contactInfo.message}
            onChange={onTextAreaInput}
            rows={5}
            className="block p-2.5 w-full text-small text-gray-900 border border-[#FE631A] rounded-2xl"
            placeholder="Write your thoughts here..."
          />
          <span className="text-orange-600">{formErrors.message}</span>
          <div className="mt-3 w-full">
            {loading ? (
              <button
                disabled
                type="button"
                className="bg-[#FE631A] py-4 px-6 mt-3.5 rounded-3xl text-base !text-white w-full !text-center"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-5 h-5 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Submitting...
              </button>
            ) : (
              <button
                type="submit"
                className="py-4 px-6 mt-3.5 border bg-gray-200 border-[#FE631A] hover:bg-[#FE631A] rounded-3xl text-base w-full !text-center hover:!text-white"
              >
                Send Message
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
