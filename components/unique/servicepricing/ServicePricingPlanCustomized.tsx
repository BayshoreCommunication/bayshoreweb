'use client';
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Image from 'next/image';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import type { DialogFooterProps } from '@material-tailwind/react';

interface ServiceDetail {
  services: string;
}

interface PricingItem {
  servicesName: string;
  serviceDetails: ServiceDetail[];
  unitPrice: { price: number | null }[];
  quantity: { quantitys: number | null }[];
  estimatedTotalPrice: { totalPrice: number | null }[];
}

const dataInfo = {
  businessName: '',
  partnerName: '',
  email: '',
  phone: '',
  website: '',
  address: '',
};

const pricingList = [
  {
    servicesName: 'Website Maintains',
    serviceDetails: [
      { services: 'Maintains, Cybersecurity, Hosting, SSL' },
      { services: 'Technical Support' },
      { services: 'Technical SEO' },
    ],
    unitPrice: [{ price: null }, { price: 100 }, { price: null }],
    quantity: [{ quantitys: null }, { quantitys: 100 }, { quantitys: null }],
    estimatedTotalPrice: [
      { totalPrice: null },
      { totalPrice: 100 },
      { totalPrice: null },
    ],
  },
  {
    servicesName: 'Search Engine Optimization',
    serviceDetails: [
      { services: 'Keywords Analysis' },
      { services: 'On Page SEO' },
      { services: 'Off Page SEO, SEO Tools' },
    ],
    unitPrice: [{ price: null }, { price: '$550' }, { price: null }],
    quantity: [{ quantitys: null }, { quantitys: '2' }, { quantitys: null }],
    estimatedTotalPrice: [
      { totalPrice: null },
      { totalPrice: '$1100' },
      { totalPrice: null },
    ],
  },
  {
    servicesName: 'Content Writing',
    serviceDetails: [
      { services: 'Blogs Writing (Avg 1500 Words/Blog)' },
      { services: 'Blog Graphics (Avg 3 Copyright Free Images/Blog)' },
      { services: 'On Page SEO, Social Share' },
    ],
    unitPrice: [{ price: 50 }, { price: 5 }, { price: null }],
    quantity: [{ quantitys: 5 }, { quantitys: 24 }, { quantitys: null }],
    estimatedTotalPrice: [
      { totalPrice: 400 },
      { totalPrice: 120 },
      { totalPrice: null },
    ],
  },
  {
    servicesName: 'Google My Business',
    serviceDetails: [{ services: 'Management' }, { services: 'SEO ' }],
    unitPrice: [{ price: 100 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 100 }],
  },
  {
    servicesName: 'Video Production',
    serviceDetails: [
      { services: 'Video Production Tranning' },
      { services: 'Studio Setup' },
      { services: 'Video Shoot (1 Day/Month)' },
      { services: 'Topics With Outline' },
      { services: 'Video Editing (4/Month)' },
      { services: 'Reels Editing (4/Month)' },
      { services: 'Publishing with Creative Description & SEO' },
      { services: 'YouTube, TikTok, Facebook, Instagram' },
    ],
    unitPrice: [
      { price: null },
      { price: null },
      { price: 350 },
      { price: null },
      { price: 50 },
      { price: 20 },
      { price: 20 },
      { price: null },
    ],
    quantity: [
      { quantitys: null },
      { quantitys: null },
      { quantitys: 0 },
      { quantitys: null },
      { quantitys: 4 },
      { quantitys: 4 },
      { quantitys: 4 },
      { quantitys: null },
    ],
    estimatedTotalPrice: [
      { totalPrice: null },
      { totalPrice: null },
      { totalPrice: 0 },
      { totalPrice: null },
      { totalPrice: 200 },
      { totalPrice: 80 },
      { totalPrice: 80 },
      { totalPrice: null },
    ],
  },
  {
    servicesName: 'Email Marketing',
    serviceDetails: [
      { services: 'Campaign Plan' },
      { services: 'Email Copy Writing (4/Month)' },
      { services: 'Email Graphic (4/Month)' },
      { services: 'Template Design' },
      { services: 'Campaign Management' },
    ],
    unitPrice: [{ price: 200 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 200 }],
  },
  {
    servicesName: 'Digital Advertising',
    serviceDetails: [
      {
        services:
          'Enviorment Setup, CRM Intrigration, Ad Creative, Campaign Management',
      },
      { services: 'Facebook, Instagram, Google, YouTube' },
      { services: 'Email Graphic (4/Month)' },
      { services: 'Lead Ads, Display Ad With 15% Ad Spend' },
    ],
    unitPrice: [{ price: 200 }],
    quantity: [{ quantitys: 0 }],
    estimatedTotalPrice: [{ totalPrice: 0 }],
  },
  {
    servicesName: 'Community Managment',
    serviceDetails: [
      {
        services: 'Social Media Group Managment',
      },
      { services: 'Cold DM' },
      { services: 'Lead Forwording' },
    ],
    unitPrice: [{ price: 300 }],
    quantity: [{ quantitys: 0 }],
    estimatedTotalPrice: [{ totalPrice: 0 }],
  },
  {
    servicesName: 'Dedicated Marketing Manager',
    serviceDetails: [
      {
        services: '',
      },
    ],
    unitPrice: [{ price: 650 }],
    quantity: [{ quantitys: 0 }],
    estimatedTotalPrice: [{ totalPrice: 0 }],
  },
  {
    servicesName: 'Offshore Support',
    serviceDetails: [
      {
        services: '',
      },
    ],
    unitPrice: [{ price: 500 }],
    quantity: [{ quantitys: 0 }],
    estimatedTotalPrice: [{ totalPrice: 0 }],
  },
  {
    servicesName: 'Marketing Automation',
    serviceDetails: [
      {
        services: '',
      },
    ],
    unitPrice: [{ price: null }],
    quantity: [{ quantitys: null }],
    estimatedTotalPrice: [{ totalPrice: null }],
  },
  {
    servicesName: 'Technical Support',
    serviceDetails: [
      {
        services: '',
      },
    ],
    unitPrice: [{ price: null }],
    quantity: [{ quantitys: null }],
    estimatedTotalPrice: [{ totalPrice: null }],
  },

  {
    servicesName: 'Monthly Report',
    serviceDetails: [
      {
        services: 'Work Update & Performance',
      },
    ],
    unitPrice: [{ price: null }],
    quantity: [{ quantitys: null }],
    estimatedTotalPrice: [{ totalPrice: null }],
  },
];

const ServicePricingPlanCustomized = () => {
  const [openPreview, setOpenPreview] = React.useState(false);

  const handleOpenPreview = () => setOpenPreview(!openPreview);

  const generatePDF = async () => {
    const input = document.getElementById('table-container') as HTMLElement;

    if (input) {
      // Increase the scale for better quality
      const canvas = await html2canvas(input, {
        scale: 2,
        backgroundColor: '#ffffff',
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth - 20; // Adjust for padding
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 10;

      // Render the first page
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Render additional pages if content exceeds one page
      while (heightLeft > 0) {
        pdf.addPage();
        position = heightLeft - imgHeight + 10;
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('our-customized-plan.pdf');
    }
  };

  // const calculatePricing = (pricingList: PricingItem[]) => {
  //   let totalPriceSum = 0;

  //   pricingList.forEach((service) => {
  //     service.serviceDetails.forEach((_, index) => {
  //       if (!service.estimatedTotalPrice[index]) {
  //         service.estimatedTotalPrice[index] = { totalPrice: null };
  //       }

  //       const unitPrice = parseFloat(service?.unitPrice[index]?.price ?? '0');
  //       const quantity = parseFloat(service?.quantity[index]?.quantitys ?? '0');

  //       if (unitPrice > 0 && quantity > 0) {
  //         const estimatedTotal = unitPrice * quantity;
  //         service.estimatedTotalPrice[index].totalPrice = estimatedTotal;
  //         totalPriceSum += estimatedTotal;
  //       } else {
  //         service.estimatedTotalPrice[index].totalPrice = null;
  //       }
  //     });
  //   });

  //   return { pricingList, totalPriceSum };
  // };

  // const [pricingList, setPricingList] =
  //   useState<PricingItem[]>(initialPricingList);
  // const [totalPriceSum, setTotalPriceSum] = useState<number>(0);

  // const handleInputChange = (
  //   serviceIndex: number,
  //   detailIndex: number,
  //   field: 'price' | 'quantitys',
  //   value: string,
  // ) => {
  //   const updatedPricingList = [...pricingList];
  //   const parsedValue = parseFloat(value) || null;

  //   if (field === 'price') {
  //     updatedPricingList[serviceIndex].unitPrice[detailIndex].price =
  //       parsedValue;
  //   } else {
  //     updatedPricingList[serviceIndex].quantity[detailIndex].quantitys =
  //       parsedValue;
  //   }

  //   const { pricingList: newPricingList, totalPriceSum: newTotalPriceSum } =
  //     calculatePricing(updatedPricingList);
  //   setPricingList(newPricingList);
  //   setTotalPriceSum(newTotalPriceSum);
  // };

  return (
    <>
      <div className='pt-16 pb-16 px-36'>
        {/* <Dialog
          className='!w-2xl'
          open={openPreview}
          handler={handleOpenPreview}
        >
          <div id='table-container' className='w-2xl'>
            <ServicePriicngSaveData pricingList={pricingList} />
          </div>

          <DialogFooter>
            <Button
              variant='text'
              color='red'
              onClick={handleOpenPreview}
              className='mr-1'
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant='gradient'
              color='green'
              onClick={handleOpenPreview}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog> */}

        <div
          id='table-container'
          className='relative overflow-auto bg-gray-200 shadow-md md:rounded-lg'
        >
          <div className='flex flex-col items-center justify-center'>
            <Image
              src='/assets/bayshore-logo.svg'
              alt='bayshore-logo'
              width={300}
              height={150}
              className='w-[200px] md:w-[300px] h-auto py-6'
              priority
            />
          </div>
          <div className='p-12 '>
            <form className='mx-auto '>
              <div className='flex items-center mb-8 gap-x-8'>
                <div className='flex-1'>
                  <label className='block mb-2 text-base text-gray-900 font-base'>
                    Business Name
                  </label>
                  <input
                    type='text'
                    id='businessName'
                    className='block w-full py-5 pl-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 placeholder:!text-lg text-lg'
                    placeholder='Enter your business name ...'
                    required
                  />
                </div>
                <div className='flex-1'>
                  <label className='block mb-2 text-gray-900 font-base text-md'>
                    Partner Name
                  </label>
                  <input
                    type='text'
                    id='partnerName'
                    className='block w-full py-5 pl-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 placeholder:!text-lg text-lg'
                    placeholder='Enter your partner name ...'
                    required
                  />
                </div>
                <div className='flex-1'>
                  <label className='block mb-2 text-gray-900 font-base text-md'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='block w-full py-5 pl-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 placeholder:!text-lg text-lg'
                    placeholder='Enter your email ...'
                    required
                  />
                </div>
              </div>
              <div className='flex items-center gap-x-8'>
                <div className='flex-1'>
                  <label className='block mb-2 text-gray-900 font-base text-md'>
                    Business Name
                  </label>
                  <input
                    type='text'
                    id='businessName'
                    className='block w-full py-5 pl-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 placeholder:!text-lg text-lg'
                    placeholder='Enter your business name ...'
                    required
                  />
                </div>
                <div className='flex-1'>
                  <label className='block mb-2 text-gray-900 font-base text-md'>
                    Partner Name
                  </label>
                  <input
                    type='text'
                    id='partnerName'
                    className='block w-full py-5 pl-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 placeholder:!text-lg text-lg'
                    placeholder='Enter your partner name ...'
                    required
                  />
                </div>
                <div className='flex-1'>
                  <label className='block mb-2 text-gray-900 font-base text-md'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='block w-full py-5 pl-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 placeholder:!text-lg text-lg'
                    placeholder='Enter your email ...'
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          <table className='w-full text-left text-black rtl:text-right '>
            <thead className='text-2xl uppercase gray-700 !bg-primary '>
              <tr>
                <th scope='col' className='px-6 py-10'>
                  Service Name
                </th>
                <th scope='col' className='px-8 py-10'>
                  Service Details
                </th>
                <th scope='col' className='px-6 py-10 text-center'>
                  Unit Price
                </th>
                <th scope='col' className='px-6 py-10 text-center'>
                  Quantity
                </th>
                <th scope='col' className='px-0 py-10 text-center'>
                  Estimated Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingList?.map((service: any, serviceIndex: number) => (
                <tr
                  key={serviceIndex}
                  className='text-2xl text-black border-b odd:bg-white even:bg-gray-200 '
                >
                  <th
                    scope='row'
                    className='px-6 py-8 font-bold text-gray-900 whitespace-nowrap '
                  >
                    {service?.servicesName}
                  </th>
                  <td className='px-6 py-8'>
                    <div>
                      <ul className='max-w-xl space-y-4 list-disc list-inside'>
                        {service?.serviceDetails?.map(
                          (items: any, i: number) => (
                            <div key={i}>
                              <li>{items?.services} </li>
                            </div>
                          ),
                        )}
                      </ul>
                    </div>
                  </td>
                  <td className='px-6 py-8'>
                    <div>
                      <ul className='max-w-xl space-y-4 list-none list-inside '>
                        {service?.unitPrice?.map(
                          (serviceDetail: any, detailIndex: number) => (
                            <div key={detailIndex}>
                              <li
                                className={` text-center ${
                                  serviceDetail?.price !== null
                                    ? 'text-black'
                                    : serviceIndex % 2 !== 0
                                    ? 'text-gray-200'
                                    : 'text-white'
                                }`}
                              >
                                {serviceDetail?.price}
                              </li>
                            </div>
                          ),
                        )}
                      </ul>
                    </div>
                  </td>
                  <td className='px-6 py-8'>
                    <div>
                      <ul className='max-w-md space-y-4 list-none list-inside '>
                        {service?.quantity?.map(
                          (serviceDetail: any, detailIndex: number) => (
                            <div key={detailIndex}>
                              <li
                                className={` text-center ${
                                  serviceDetail?.quantitys !== null
                                    ? 'text-black'
                                    : serviceIndex % 2 !== 0
                                    ? 'text-gray-200'
                                    : 'text-white'
                                }`}
                              >
                                {serviceDetail?.quantitys}
                              </li>
                            </div>
                          ),
                        )}
                      </ul>
                    </div>
                  </td>
                  <td className='px-6 py-8'>
                    <div>
                      <ul className='max-w-md space-y-4 font-bold list-none list-inside'>
                        {service?.estimatedTotalPrice?.map(
                          (serviceDetail: any, detailIndex: number) => (
                            <div key={detailIndex}>
                              <li
                                className={`text-center ${
                                  serviceDetail?.totalPrice !== null
                                    ? 'text-black'
                                    : serviceIndex % 2 !== 0
                                    ? 'text-gray-200'
                                    : 'text-white'
                                }`}
                              >
                                {serviceDetail?.totalPrice}
                              </li>
                            </div>
                          ),
                        )}
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <thead className='text-2xl uppercase gray-700 !bg-orange-50 '>
              <tr>
                <th scope='col' className='px-6 py-6'></th>
                <th scope='col' className='px-8 py-6'></th>
                <th scope='col' className='px-6 py-6'>
                  Total
                </th>
                <th scope='col' className='px-6 py-6'></th>
                <th scope='col' className='px-0 py-6'>
                  $2730
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className='flex justify-center py-20 gap-x-8'>
        <button
          onClick={handleOpenPreview}
          className='btn text-base !py-6 !px-8 r-button border-2 border-primary hover:text-primary w-[180px] !text-center'
        >
          Save Plan
        </button>
      </div>
    </>
  );
};

export default ServicePricingPlanCustomized;
