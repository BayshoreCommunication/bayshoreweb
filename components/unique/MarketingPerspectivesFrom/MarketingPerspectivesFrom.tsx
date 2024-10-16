import React from "react";
import { Checkbox } from "@material-tailwind/react";
import SectionLayout from "@/components/universal/SectionLayout";
import Link from "next/link";
import DaynamicTableAddValue from "./DaynamicTableAddValue";

const MarketingPerspectivesFrom = () => {
  return (
    <SectionLayout bg={""}>
      <div className="px-0 pt-4 md:px-36 mb-[-24px]">
        {/* Business Information */}
        <div className="py-2">
          <h2 className="font-semibold text-4xl mb-5">
            1. Business Information
          </h2>

          <div className="flex  items-center gap-x-6 w-full justify-between mb-8">
            <div className=" w-full">
              <label
                htmlFor="businessName"
                className="block text-2xl font-semibold text-gray-900 mb-2"
              >
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                placeholder="Type..."
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="businessWebsite"
                className="block text-2xl  font-semibold text-gray-900 mb-2"
              >
                Business Website
              </label>
              <input
                type="text"
                id="businessWebsite"
                name="businessWebsite"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                placeholder="Type..."
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="industry"
                className="block text-2xl  font-semibold text-gray-900 mb-2"
              >
                Industry
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                placeholder="Type..."
                required
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-2xl  font-semibold text-gray-900 mb-2"
            >
              Describe Your Business
            </label>
            <p className="font-light text-blue-gray-600 italic text-2xl mb-4">
              {`(What products or services do you offer? Legal representation for
              homeowners and business owners who have suffered physical damage
              to their property and who have been denied or underpaid by their
              insurance carriers.)`}
            </p>
            <textarea
              rows={3}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 "
              placeholder="Type..."
              required
            />
          </div>

          <h2 className="font-medium text-3xl mb-5 underline mt-3">
            Target Audience:
          </h2>

          <div className="flex  items-center gap-x-6 w-full justify-between mb-8">
            <div className="w-full">
              <label
                htmlFor="businessName"
                className="block text-2xl  font-semibold text-gray-900 mb-2"
              >
                Age Range
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                placeholder="Type..."
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="businessWebsite"
                className="block text-2xl font-semibold text-gray-900 mb-2"
              >
                Gender
              </label>
              <input
                type="text"
                id="businessWebsite"
                name="businessWebsite"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                placeholder="Type..."
                required
              />
            </div>
            <div className=" w-full">
              <label
                htmlFor="industry"
                className="block text-2xl  font-semibold text-gray-900 mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                placeholder="Type..."
                required
              />
            </div>
          </div>
          <div className="mb-5 w-full">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900 mb-2"
            >
              Key Competitors (List)
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
              placeholder="Type..."
              required
            />
          </div>
          {/* Current Digital Marketing Status */}
          <h2 className="font-semibold text-4xl mb-5 mt-10">
            2. Current Digital Marketing Status
          </h2>

          {/* Check item */}
          <div className="flex items-center gap-x-5 mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Do you currently have a digital marketing strategy in place?
            </label>
            <div className="flex items-start gap-x-4">
              <div className="flex items-center me-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex  items-center gap-x-6 w-full justify-between  mt-8 mb-8">
            <div className="w-[50%]">
              <label
                htmlFor="businessName"
                className="block text-2xl font-semibold text-gray-900 mb-2"
              >
                What marketing tools are you currently using?
              </label>
              <p className="font-light text-blue-gray-600 italic text-2xl mb-4">
                {`(e.g., Google Analytics, social media schedulers, CRM software)`}
              </p>
              <input
                type="text"
                id="businessName"
                name="businessName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                placeholder="Type..."
                required
              />
            </div>

            <div className="w-[60%]">
              <label
                htmlFor="industry"
                className="block text-2xl  font-semibold text-gray-900 mb-2"
              >
                Current Website Performance:
              </label>
              <p className="font-light text-blue-gray-600 italic text-2xl mb-4">
                {`(*How often do you update your website? NOT OFTEN, ${" "}*Are you satisfied with its design and functionality? NO)`}
              </p>
              <input
                type="text"
                id="industry"
                name="industry"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
                placeholder="Type..."
                required
              />
            </div>
          </div>
          {/* Current Digital Marketing Status */}
          <h2 className="font-semibold text-4xl mb-5 mt-10">
            3. Social Media Needs
          </h2>
          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              What are your primary goals for digital marketing?
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Brand Awareness
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Lead Generation
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Engagement
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Sales
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Community Building
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other:
                </label>
              </div>
            </div>
          </div>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Which social media platforms are you currently using? (Check all
              that apply)
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Facebook
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Instagram
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Twitter/X
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  LinkedIn
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Pinterest
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  TikTok
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  YouTube
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className="mb-5 mt-6">
            <label
              htmlFor="email"
              className="block text-2xl  font-semibold text-gray-900 mb-2"
            >
              What are your main challenges with social media right now?
            </label>
            <p className="font-light text-blue-gray-600 italic text-2xl mb-4">
              {`(e.g., low engagement, lack of content, platform knowledge)
`}
            </p>
            <textarea
              rows={3}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 "
              placeholder="Type..."
              required
            />
          </div>

          {/* 4 Social Media Channels Your Want ot Operate In */}
          <h2 className="font-semibold text-4xl mb-5 mt-10">
            4. Social Media Channels You Want to Operate In
          </h2>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Which social media platforms are you currently using? (Check all
              that apply)
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Facebook
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Instagram
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Twitter/X
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  LinkedIn
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Pinterest
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  TikTok
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  YouTube
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other
                </label>
              </div>
            </div>
          </div>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              What type of content do you want to create on these platforms?
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Images (Infographics, product photos)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Videos (Live videos, product demos, tutorials)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Articles/Blog Posts
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Stories/Reels (Short-form content)
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Polls/Surveys
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other:
                </label>
              </div>
            </div>
          </div>

          {/* 5. Digital Advertising Needs */}

          <h2 className="font-semibold text-4xl mb-5 mt-10">
            5. Digital Advertising Needs
          </h2>

          {/* Check item */}
          <div className="flex items-center gap-x-5 mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Are you currently running digital ads?
            </label>
            <div className="flex items-start gap-x-4">
              <div className="flex items-center me-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="businessName"
              className="text-2xl font-semibold text-gray-900 mb-2 block"
            >
              On which platforms
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-[50%] p-3 "
              placeholder="Type..."
              required
            />
          </div>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              What are your main advertising goals?
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Increase Website Traffic
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Generate Leads
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Increase Sales
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Build Brand Awareness
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-x-1  mb-4 ">
              <label
                htmlFor="businessName"
                className="text-2xl font-semibold text-gray-900"
              >
                Budget for Digital Advertising:
              </label>
              <p className="font-light text-blue-gray-600 italic text-2xl">
                {`(Monthly Budget:)`}
              </p>
            </div>
            <input
              type="text"
              id="businessName"
              name="businessName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-[50%] p-3 "
              placeholder="Type..."
              required
            />
          </div>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Preferred Platforms for Digital Advertising:
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Google Ads (Search, Display, YouTube)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Videos (Live videos, product demos, tutorials)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Facebook/Instagram Ads
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  LinkedIn Ads
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Pinterest Ads
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Twitter/X Ads
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other
                </label>
              </div>
            </div>
          </div>

          {/* 5. Digital Advertising Needs */}

          <h2 className="font-semibold text-4xl mb-5 mt-10">
            5. Digital Advertising Needs
          </h2>

          {/* Check item */}
          <div className="flex items-center gap-x-5 mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Are you currently running digital ads?
            </label>
            <div className="flex items-start gap-x-4">
              <div className="flex items-center me-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="businessName"
              className="text-2xl font-semibold text-gray-900 mb-2 block"
            >
              On which platforms
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-[50%] p-3 "
              placeholder="Type..."
              required
            />
          </div>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              What are your main advertising goals?
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Increase Website Traffic
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Generate Leads
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Increase Sales
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Build Brand Awareness
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-x-1  mb-4 ">
              <label
                htmlFor="businessName"
                className="text-2xl font-semibold text-gray-900"
              >
                Budget for Digital Advertising:
              </label>
              <p className="font-light text-blue-gray-600 italic text-2xl">
                {`(Monthly Budget:)`}
              </p>
            </div>
            <input
              type="text"
              id="businessName"
              name="businessName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-[50%] p-3 "
              placeholder="Type..."
              required
            />
          </div>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Preferred Platforms for Digital Advertising:
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Google Ads (Search, Display, YouTube)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Videos (Live videos, product demos, tutorials)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Facebook/Instagram Ads
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  LinkedIn Ads
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Pinterest Ads
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Twitter/X Ads
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other
                </label>
              </div>
            </div>
          </div>

          {/* 6. SEO Keywords and Topics: HOMEOWNERS INSURANCE; PROPERTY DAMAGE
            ATTORNEY*/}

          <h2 className="font-semibold text-4xl mb-5 mt-10">
            6. SEO Keywords and Topics: HOMEOWNERS INSURANCE; PROPERTY DAMAGE
            ATTORNEY
          </h2>

          {/* Check item */}
          <div className="flex items-center gap-x-5 mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Are you currently doing SEO for your website?
            </label>
            <div className="flex items-start gap-x-4">
              <div className="flex items-center me-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="businessName"
              className="text-2xl font-semibold text-gray-900 mb-3 block"
            >
              What tools or platforms are you using? (e.g., Google Search
              Console, Ahrefs, SEMrush)
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-[50%] p-3 "
              placeholder="Type..."
              required
            />
          </div>

          {/* Dynamic Table */}
          <DaynamicTableAddValue />

          <div className="mt-5">
            <label
              htmlFor="businessName"
              className="text-2xl font-semibold text-gray-900 mb-3 block"
            >
              What are the top keywords you want to rank for?
            </label>
          </div>

          <div className="mb-5 mt-6">
            <label
              htmlFor="email"
              className="block text-2xl  font-semibold text-gray-900 mb-2"
            >
              What specific topics or themes would you like to target with your
              SEO strategy?
            </label>
            <p className="font-light text-blue-gray-600 italic text-2xl mb-4">
              {`(e.g., blog topics, service-related content, local SEO)`}
            </p>
            <textarea
              rows={3}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 "
              placeholder="Type..."
              required
            />
          </div>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              What are your primary goals for SEO?
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Google Ads (Search, Display, YouTube)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Increase Organic Traffic
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Improve Search Engine Rankings
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Boost Local Search Presence
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Optimize for Mobile Search
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other
                </label>
              </div>
            </div>
          </div>

          {/* 7. Other Marketing Needs*/}

          <h2 className="font-semibold text-4xl mb-5 mt-10">
            7. Other Marketing Needs
          </h2>

          {/* Check item */}
          <div className="mt-8">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900"
            >
              Are you interested in any of the following services? (Check all
              that apply)
            </label>
            <div className="">
              <div className="flex items-center me-4 mb-4 mt-6 ">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Search Engine Optimization (SEO)
                </label>
              </div>
              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Email Marketing
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Content Marketing (Blogs, eBooks)
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Reputation Management (Reviews, testimonials)
                </label>
              </div>

              <div className="flex items-center me-4 mb-4">
                <input
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-8 h-8 !rounded-full appearance-none border-2 border-gray-500 checked:bg-orange-500 focus:outline-orange-700 focus:ring-red-500 relative checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:top-[2px] checked:after:left-1 checked:after:text-xl p-1 checked:border-orange-700 cursor-pointer"
                />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-2 text-2xl font-medium text-gray-900"
                >
                  Other
                </label>
              </div>
            </div>
          </div>

          {/*8. Additional Information*/}

          <h2 className="font-semibold text-4xl mb-5 mt-10">
            8. Additional Information
          </h2>

          <div className="mb-5 mt-6">
            <label
              htmlFor="email"
              className="block text-2xl  font-semibold text-gray-900 mb-4"
            >
              What is your timeline for seeing results? WITHIN THE NEXT 30-60
              DAYS
            </label>
            <textarea
              rows={3}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 "
              placeholder="Type..."
              required
            />
          </div>
          <div className="mb-5 mt-6">
            <label
              htmlFor="email"
              className="block text-2xl  font-semibold text-gray-900 mb-2"
            >
              Any other information or specific requests?
            </label>
            <p className="font-light text-blue-gray-600 italic text-2xl mb-4">
              {`(e.g., branding guidelines, campaign preferences)`}
            </p>
            <textarea
              rows={3}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 "
              placeholder="Type..."
              required
            />
          </div>
        </div>
        {/*9. Contact Information
         */}

        <h2 className="font-semibold text-4xl mb-5 mt-10">
          9. Contact Information
        </h2>

        <div className="flex  items-center gap-x-6 w-full justify-between mb-8">
          <div className=" w-full">
            <label
              htmlFor="businessName"
              className="block text-2xl font-semibold text-gray-900 mb-2"
            >
              Primary Contact Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
              placeholder="Type..."
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="businessWebsite"
              className="block text-2xl  font-semibold text-gray-900 mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="businessWebsite"
              name="businessWebsite"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
              placeholder="Type..."
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="industry"
              className="block text-2xl  font-semibold text-gray-900 mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-orange-500 focus:border-orange-500 w-full p-3"
              placeholder="Type..."
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <Link
          href={`/`}
          className="!py-4 md:!py-4 flex items-center gap-2 sm:gap-4 md:gap-8 px-[3rem] justify-center md:justify-start border-2 bg-primary border-primary rounded-full hover:rounded-full text-white hover:bg-transparent hover:text-primary a-button"
        >
          Save Proposal
        </Link>
      </div>
    </SectionLayout>
  );
};

export default MarketingPerspectivesFrom;
