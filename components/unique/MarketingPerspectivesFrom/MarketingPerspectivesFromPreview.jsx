"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import SectionLayout from "@/components/universal/SectionLayout";
import DaynamicTableDataShow from "./DaynamicTableDataShow";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import emailjs from "emailjs-com";

const MarketingPerspectivesFromPreview = ({
  marketingPerspectivesFromDataDetails,
}) => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const captureAndSendPDF = async () => {
    const pages = document.querySelectorAll(".page"); // Select the pages you want to capture

    const pdf = new jsPDF("p", "mm", "a4");

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i]);
      const imgData = canvas.toDataURL("image/png");

      // Add each page to the PDF
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate height while maintaining aspect ratio
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      if (i < pages.length - 1) {
        pdf.addPage(); // Add a new page if there are more pages to capture
      }
    }

    // Download the PDF locally
    pdf.save("marketing-perspectives-from.pdf"); // This will prompt the user to download the file locally

    // Convert the PDF blob to base64 (required for EmailJS)
    const pdfBlob = pdf.output("blob");

    const reader = new FileReader();
    reader.readAsDataURL(pdfBlob);
    reader.onloadend = () => {
      const base64data = reader.result?.toString();

      // Send email using EmailJS
      emailjs
        .send(
          "service_o4z5ryj", // Replace with your actual service ID
          "template_220uure", // Replace with your template ID
          {
            to_email: "arsahak.bayshore@gmail.com", // Replace with the recipient's email
            pdf_attachment: base64data, // Attach PDF as base64
          },
          "EVNtRahViRmUCuu7C" // Replace with your user ID
        )
        .then(
          (result) => {
            setShowSuccessPopup(true); // Show success popup
            setTimeout(() => {
              setShowSuccessPopup(false); // Hide success popup after 5 seconds
            }, 5000);
            console.log("PDF sent successfully", result.text);
          },
          (error) => {
            setShowErrorPopup(true); // Show error popup
            setTimeout(() => {
              setShowErrorPopup(false); // Hide error popup after 5 seconds
            }, 5000);
            console.error("Failed to send PDF", error.text);
          }
        );
    };
  };

  return (
    <div>
      <div className="page">
        <SectionLayout bg={""}>
          <div className="px-0 pt-4 md:px-36 mb-[-24px]">
            <div className="py-2">
              {/* Business Information */}

              <div className=" ">
                <h2 className="font-semibold text-4xl mb-5">
                  1. Business Information
                </h2>

                <div className="flex  items-center gap-x-6 w-full justify-between mb-8">
                  <div className="w-full flex items-start  gap-x-2">
                    <label
                      htmlFor="businessName"
                      className="block text-2xl font-semibold text-gray-900 mb-2"
                    >
                      Business Name:
                    </label>
                    <p className="block text-2xl font-medium text-gray-900 mb-2">
                      {
                        marketingPerspectivesFromDataDetails?.businessInfo
                          ?.businessName
                      }
                    </p>
                  </div>
                  <div className="w-full  flex items-start  gap-x-2">
                    <label
                      htmlFor="businessWebsite"
                      className="block text-2xl  font-semibold text-gray-900 mb-2"
                    >
                      Business Website:
                    </label>
                    <p className="block text-2xl font-medium text-gray-900 mb-2">
                      {
                        marketingPerspectivesFromDataDetails?.businessInfo
                          ?.businessWebsite
                      }
                    </p>
                  </div>
                  <div className="w-full  flex items-start  gap-x-2">
                    <label
                      htmlFor="industry"
                      className="block text-2xl  font-semibold text-gray-900 mb-2"
                    >
                      Industry:
                    </label>
                    <p className="block text-2xl font-medium text-gray-900 mb-2">
                      {
                        marketingPerspectivesFromDataDetails?.businessInfo
                          ?.industry
                      }
                    </p>
                  </div>
                </div>

                <div className="mb-5  flex items-start  gap-x-2">
                  <label
                    htmlFor="businessDetails"
                    className="block text-2xl  font-semibold text-gray-900 mb-2"
                  >
                    Describe Your Business:
                  </label>

                  <p className="block text-2xl font-medium text-gray-900 mb-2">
                    {
                      marketingPerspectivesFromDataDetails?.businessInfo
                        ?.businessDetails
                    }
                  </p>
                </div>

                <h2 className="font-medium text-3xl mb-5 underline mt-3">
                  Target Audience:
                </h2>

                <div className="flex  items-center gap-x-6 w-full justify-between mb-8">
                  <div className="w-full  flex items-start  gap-x-2">
                    <label
                      htmlFor="ageRange"
                      className="block text-2xl  font-semibold text-gray-900"
                    >
                      Age Range:
                    </label>
                    <div className="max-w-2xl flex items-center gap-x-3">
                      <p className="block text-2xl font-medium text-gray-900">
                        Minimum:-{" "}
                        {
                          marketingPerspectivesFromDataDetails?.businessInfo
                            ?.ageRange[0]
                        }
                      </p>
                      <p className="block text-2xl font-medium text-gray-900">
                        and
                      </p>
                      <p className="block text-2xl font-medium text-gray-900">
                        Miximum:-{" "}
                        {
                          marketingPerspectivesFromDataDetails?.businessInfo
                            ?.ageRange[1]
                        }
                      </p>
                    </div>
                  </div>
                  <div className="w-full  flex items-start  gap-x-2">
                    <label className="block text-2xl  font-semibold text-gray-900">
                      Gender:
                    </label>
                    <p className="block text-2xl font-medium text-gray-900">
                      {
                        marketingPerspectivesFromDataDetails?.businessInfo
                          ?.gender
                      }
                    </p>
                  </div>

                  <div className=" w-full  flex items-start  gap-x-2">
                    <label
                      htmlFor="location"
                      className="block text-2xl  font-semibold text-gray-900"
                    >
                      Location:
                    </label>
                    <p className="block text-2xl font-medium text-gray-900 mb-2">
                      {
                        marketingPerspectivesFromDataDetails?.businessInfo
                          ?.location
                      }
                    </p>
                  </div>
                </div>
                <div className="mb-5 w-full  flex items-start gap-x-2">
                  <label
                    htmlFor="keyCompetitors"
                    className="block text-2xl  font-semibold text-gray-900"
                  >
                    Key Competitors (List):
                  </label>
                  <div className="flex flex-wrap gap-2 pointer-events-none">
                    {marketingPerspectivesFromDataDetails?.businessInfo?.keyCompetitors?.map(
                      (name) => (
                        <div
                          key={name}
                          className="flex items-center  text-black px-4 py-1 rounded-full text-2xl font-medium pointer-events-auto"
                        >
                          {name}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* 2. Current Digital Marketing Status */}
              <h2 className="font-semibold text-4xl mb-5 mt-10">
                2. Current Digital Marketing Status
              </h2>

              {/* Check item */}
              <div className="flex items-center gap-x-5 mt-8">
                <label
                  htmlFor="marketingStrategy"
                  className="block text-2xl font-semibold text-gray-900"
                >
                  Do you currently have a digital marketing strategy in place?
                </label>
                <div className="flex items-start gap-x-2">
                  <p className="block text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFromDataDetails?.marketingStatus
                        ?.marketingStrategy
                    }
                  </p>
                </div>
              </div>
              {marketingPerspectivesFromDataDetails?.marketingStatus
                ?.marketingStrategy === "yes" && (
                <div className="flex  items-center gap-x-6 w-full justify-between  mt-8 mb-8">
                  <div className="w-full flex items-start gap-x-2">
                    <label
                      htmlFor="marketingTools"
                      className="block text-2xl font-semibold text-gray-900"
                    >
                      What marketing tools are you currently using?
                    </label>
                    <p className="block text-2xl font-medium text-gray-900">
                      {
                        marketingPerspectivesFromDataDetails?.marketingStatus
                          ?.marketingTools
                      }
                    </p>
                  </div>

                  <div className="w-full flex items-start gap-x-2">
                    <label
                      htmlFor="websitePerformance"
                      className="text-2xl  font-semibold text-gray-900"
                    >
                      Current Website Performance:
                    </label>
                    <p className="text-2xl font-medium text-gray-900">
                      {
                        marketingPerspectivesFromDataDetails?.marketingStatus
                          ?.marketingTools
                      }
                    </p>
                  </div>
                </div>
              )}

              {/*3 Current Digital Marketing Status */}
              <h2 className="font-semibold text-4xl mb-5 mt-10">
                3. Social Media Needs
              </h2>
              {/* Check item */}
              <div className="mt-8 flex items-start gap-x-2">
                <label className="block text-2xl  font-semibold text-gray-900">
                  What are your primary goals for digital marketing?
                </label>

                <p className="text-2xl font-medium text-gray-900">
                  {marketingPerspectivesFromDataDetails?.mediaNeeds?.primaryGoals?.join(
                    ", "
                  )}{" "}
                  {marketingPerspectivesFromDataDetails?.mediaNeeds
                    ?.otherPrimaryGoals &&
                    ` , ${marketingPerspectivesFromDataDetails?.mediaNeeds?.otherPrimaryGoals}`}
                </p>
              </div>

              {/* Check item */}
              <div className="mt-8  flex items-start gap-x-2">
                <label className="block text-2xl  font-semibold text-gray-900">
                  Which social media platforms are you currently using? (Check
                  all that apply)
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {marketingPerspectivesFromDataDetails?.mediaNeeds?.mediaPlatforms?.join(
                    ", "
                  )}{" "}
                  {marketingPerspectivesFromDataDetails?.mediaNeeds
                    ?.otherPrimaryGoals &&
                    ` , ${marketingPerspectivesFromDataDetails?.mediaNeeds?.otherMediaPlatforms}`}
                </p>
              </div>
              <div className="mb-5 mt-6  flex items-start gap-x-2">
                <label className="text-2xl  font-semibold text-gray-900 ">
                  What are your main challenges with social media right now?
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {
                    marketingPerspectivesFromDataDetails?.mediaNeeds
                      ?.mainChallenges
                  }
                </p>
              </div>

              {/* 4 Social Media Channels Your Want ot Operate In */}
              <h2 className="font-semibold text-4xl mb-5 mt-10">
                4. Social Media Channels You Want to Operate In
              </h2>

              {/* Check item */}
              <div className="mt-8 flex items-start gap-x-2">
                <label
                  htmlFor="industry"
                  className="text-2xl  font-semibold text-gray-900"
                >
                  Which social media platforms are you currently using? (Check
                  all that apply)
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {marketingPerspectivesFromDataDetails?.mediaChannels?.likeToFocus?.join(
                    ", "
                  )}{" "}
                  {marketingPerspectivesFromDataDetails?.mediaChannels
                    ?.otherLikeToFocus &&
                    ` , ${marketingPerspectivesFromDataDetails?.mediaChannels?.otherLikeToFocus}`}
                </p>
              </div>

              {/* Check item */}
              <div className="mt-8 flex items-start gap-x-2">
                <label
                  htmlFor="industry"
                  className="text-2xl  font-semibold text-gray-900"
                >
                  What type of content do you want to create on these platforms?
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {marketingPerspectivesFromDataDetails?.mediaChannels?.mediaPlatforms?.join(
                    ", "
                  )}{" "}
                  {marketingPerspectivesFromDataDetails?.mediaChannels
                    ?.otherMediaPlatforms &&
                    ` , ${marketingPerspectivesFromDataDetails?.mediaChannels?.otherMediaPlatforms}`}
                </p>
              </div>

              {/* 5. Digital Advertising Needs */}

              <h2 className="font-semibold text-4xl mb-5 mt-10">
                5. Digital Advertising Needs
              </h2>

              {/* Check item */}
              <div className="flex items-start gap-x-5 mt-6">
                <label className="text-2xl  font-semibold text-gray-900">
                  Are you currently running digital ads?
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {
                    marketingPerspectivesFromDataDetails
                      ?.digitalAdvertisingNeeds?.runningAds
                  }
                </p>
              </div>

              {marketingPerspectivesFromDataDetails?.digitalAdvertisingNeeds
                ?.runningAds === "yes" ? (
                <div className="mt-6 flex items-start gap-x-2">
                  <label
                    htmlFor="whichPlatforms"
                    className="text-2xl font-semibold text-gray-900"
                  >
                    On which platforms
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFromDataDetails
                        ?.digitalAdvertisingNeeds?.whichPlatforms
                    }
                  </p>
                </div>
              ) : (
                ""
              )}

              {/* Check item */}
              <div className="mt-6 flex items-start gap-x-2">
                <label className="text-2xl  font-semibold text-gray-900">
                  What are your main advertising goals?
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {marketingPerspectivesFromDataDetails?.digitalAdvertisingNeeds?.advertisingGoals.join(
                    ", "
                  )}{" "}
                  {marketingPerspectivesFromDataDetails?.digitalAdvertisingNeeds
                    ?.otherAdvertisingGoals &&
                    ` , ${marketingPerspectivesFromDataDetails?.digitalAdvertisingNeeds?.otherAdvertisingGoals}`}
                </p>
              </div>

              <div className="mt-6  mb-4 flex items-start gap-x-2">
                <label
                  htmlFor="budgetForDigitalAdvertising"
                  className="text-2xl font-semibold text-gray-900"
                >
                  Budget for Digital Advertising:
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {
                    marketingPerspectivesFromDataDetails
                      ?.digitalAdvertisingNeeds?.budgetForDigitalAdvertising
                  }
                </p>
              </div>

              {/* Check item */}
              <div className="mt-6 flex items-start gap-x-2">
                <label className="text-2xl  font-semibold text-gray-900">
                  Preferred Platforms for Digital Advertising:
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {marketingPerspectivesFromDataDetails?.digitalAdvertisingNeeds?.preferredPlatforms.join(
                    ", "
                  )}{" "}
                  {marketingPerspectivesFromDataDetails?.digitalAdvertisingNeeds
                    ?.otherPreferredPlatforms &&
                    ` , ${marketingPerspectivesFromDataDetails?.digitalAdvertisingNeeds?.otherPreferredPlatforms}`}
                </p>
              </div>

              {/* 6. SEO Keywords and Topics*/}

              <h2 className="font-semibold text-4xl mb-5 mt-10">
                6. SEO Keywords and Topics
              </h2>

              {/* Check item */}
              <div className="flex items-center gap-x-5 mt-8">
                <label className="text-2xl  font-semibold text-gray-900">
                  Are you currently doing SEO for your website?
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {
                    marketingPerspectivesFromDataDetails?.seoKeywordsTopics
                      ?.currentlySeo
                  }
                </p>
              </div>

              {marketingPerspectivesFromDataDetails?.seoKeywordsTopics
                ?.currentlySeo === "yes" ? (
                <div className="flex items-start gap-x-2 mt-5">
                  <label
                    htmlFor="businessName"
                    className="text-2xl font-semibold text-gray-900 mb-3 block"
                  >
                    What tools or platforms are you using? (e.g., Google Search
                    Console, Ahrefs, SEMrush)
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFromDataDetails?.seoKeywordsTopics
                        ?.whatTools
                    }
                  </p>
                </div>
              ) : (
                ""
              )}

              {/* Dynamic Table */}

              <div className="mt-6">
                <label
                  htmlFor="businessName"
                  className="text-2xl font-semibold text-gray-900 mb-3 block"
                >
                  What are the top keywords you want to rank for?
                </label>
                <DaynamicTableDataShow
                  daynamicRowsData={
                    marketingPerspectivesFromDataDetails?.seoKeywordsTopics
                      ?.topKeywords
                  }
                />
              </div>

              <div className="mt-6 flex items-start gap-x-2">
                <label className=" text-2xl  font-semibold text-gray-900 mb-2">
                  What specific topics or themes would you like to target with
                  your SEO strategy?
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {
                    marketingPerspectivesFromDataDetails?.seoKeywordsTopics
                      ?.specificTopics
                  }
                </p>
              </div>

              {/* Check item */}
              <div className="mt-6 flex items-start gap-x-2">
                <label className="text-2xl  font-semibold text-gray-900">
                  What are your primary goals for SEO?
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {marketingPerspectivesFromDataDetails?.seoKeywordsTopics?.primaryGoalsForSeo?.join(
                    ", "
                  )}{" "}
                  {marketingPerspectivesFromDataDetails?.seoKeywordsTopics
                    ?.otherPrimaryGoalsForSeo &&
                    ` , ${marketingPerspectivesFromDataDetails?.seoKeywordsTopics?.otherPrimaryGoalsForSeo}`}
                </p>
              </div>
              {/* 7. Other Marketing Needs*/}

              <h2 className="font-semibold text-4xl mb-5 mt-10">
                7. Other Marketing Needs
              </h2>

              {/* Check item */}
              <div className="mt-8 flex items-start gap-x-2">
                <label
                  htmlFor="industry"
                  className="block text-2xl  font-semibold text-gray-900"
                >
                  Are you interested in any of the following services? (Check
                  all that apply)
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {marketingPerspectivesFromDataDetails?.marketingNeeds?.followingServices?.join(
                    ", "
                  )}{" "}
                  {marketingPerspectivesFromDataDetails?.marketingNeeds
                    ?.otherFollowingServices &&
                    ` , ${marketingPerspectivesFromDataDetails?.marketingNeeds?.otherFollowingServices}`}
                </p>
              </div>

              {/*8. Additional Information*/}

              <h2 className="font-semibold text-4xl mb-5 mt-10">
                8. Additional Information
              </h2>

              <div className="mb-5 mt-6">
                <label className="block text-2xl  font-semibold text-gray-900 mb-4">
                  What is your timeline for seeing results? WITHIN THE NEXT
                  30-60 DAYS
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {
                    marketingPerspectivesFromDataDetails?.additionalInformation
                      ?.timeline
                  }
                </p>
              </div>
              <div className="mb-5 mt-6">
                <label className="block text-2xl  font-semibold text-gray-900 mb-2">
                  Any other information or specific requests?
                </label>
                <p className="text-2xl font-medium text-gray-900">
                  {
                    marketingPerspectivesFromDataDetails?.additionalInformation
                      ?.specificRequests
                  }
                </p>
              </div>
              {/*9. Contact Information
               */}

              <h2 className="font-semibold text-4xl mb-5 mt-10">
                9. Contact Information
              </h2>

              <div className="flex  items-center gap-x-6 w-full justify-between mb-8">
                <div className="w-full flex items-start gap-x-2">
                  <label className="text-2xl font-semibold text-gray-900 mb-2">
                    Primary Contact Name
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFromDataDetails?.contactInformation
                        ?.primaryContactName
                    }
                  </p>
                </div>
                <div className="w-full flex items-start gap-x-2">
                  <label className="text-2xl  font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFromDataDetails?.contactInformation
                        ?.email
                    }
                  </p>
                </div>
                <div className="w-full flex items-start gap-x-2">
                  <label className="text-2xl  font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <p className="text-2xl font-medium text-gray-900">
                    {
                      marketingPerspectivesFromDataDetails?.contactInformation
                        ?.phoneNumber
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionLayout>
      </div>

      <div className="flex justify-center mt-10 mb-20">
        <button
          onClick={captureAndSendPDF}
          className="!py-4 md:!py-4 flex items-center gap-2 sm:gap-4 md:gap-8 px-[3rem] justify-center md:justify-start border-2 bg-primary border-primary rounded-full hover:rounded-full text-white hover:bg-transparent hover:text-primary a-button"
        >
          Submit Form
        </button>
        <Transition.Root show={showSuccessPopup} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setShowSuccessPopup(!showSuccessPopup)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto pt-3">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5">
                      <div className="mx-auto">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-green-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                            />
                          </svg>
                        </div>
                        <div className="!mt-6 text-center">
                          <Dialog.Title
                            as="h3"
                            className="text-3xl font-semibold leading-6 text-gray-900"
                          >
                            Successfully submitted!
                          </Dialog.Title>
                          <div className="mt-5">
                            <p className="text-2xl text-gray-800">
                              We will be in touch with you soon.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 gap-1 flex justify-end items-center"></div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

export default MarketingPerspectivesFromPreview;
