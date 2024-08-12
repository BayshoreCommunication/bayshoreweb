import React from 'react';
import { services } from '../services/Service';
import Link from 'next/link';

const dataInfo = {
  bussinesName: '',
  partnerName: '',
  emailAddress: '',
  phoneNumber: '',
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
    unitPrice: [{ price: 'null' }, { price: '$100' }, { price: 'null' }],
    quantity: [
      { quantitys: 'null' },
      { quantitys: '100' },
      { quantitys: 'null' },
    ],
    estimatedTotalPrice: [
      { totalPrice: 'null' },
      { totalPrice: '$100' },
      { totalPrice: 'null' },
    ],
  },
  {
    servicesName: 'Search Engine Optimization',
    serviceDetails: [
      { services: 'Keywords Analysis' },
      { services: 'On Page SEO' },
      { services: 'Off Page SEO, SEO Tools' },
    ],
    unitPrice: [{ price: 'null' }, { price: '$550' }, { price: 'null' }],
    quantity: [
      { quantitys: 'null' },
      { quantitys: '2' },
      { quantitys: 'null' },
    ],
    estimatedTotalPrice: [
      { totalPrice: 'null' },
      { totalPrice: '$1100' },
      { totalPrice: 'null' },
    ],
  },
  {
    servicesName: 'Content Writing',
    serviceDetails: [
      { services: 'Blogs Writing (Avg 1500 Words/Blog)' },
      { services: 'Blog Graphics (Avg 3 Copyright Free Images/Blog)' },
      { services: 'On Page SEO, Social Share' },
    ],
    unitPrice: [{ price: '$50' }, { price: '$5' }, { price: 'null' }],
    quantity: [{ quantitys: '5' }, { quantitys: '24' }, { quantitys: 'null' }],
    estimatedTotalPrice: [
      { totalPrice: '$400' },
      { totalPrice: '$120' },
      { totalPrice: 'null' },
    ],
  },
  {
    servicesName: 'Google My Business',
    serviceDetails: [{ services: 'Management' }, { services: 'SEO ' }],
    unitPrice: [{ price: '$100' }],
    quantity: [{ quantitys: '1' }],
    estimatedTotalPrice: [{ totalPrice: '$100' }],
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
      { price: 'null' },
      { price: 'null' },
      { price: '$350' },
      { price: 'null' },
      { price: '$50' },
      { price: '$20' },
      { price: '$20' },
      { price: 'null' },
    ],
    quantity: [
      { quantitys: 'null' },
      { quantitys: 'null' },
      { quantitys: '0' },
      { quantitys: 'null' },
      { quantitys: '4' },
      { quantitys: '4' },
      { quantitys: '4' },
      { quantitys: 'null' },
    ],
    estimatedTotalPrice: [
      { totalPrice: 'null' },
      { totalPrice: 'null' },
      { totalPrice: '0' },
      { totalPrice: 'null' },
      { totalPrice: '$200' },
      { totalPrice: '$80' },
      { totalPrice: '$80' },
      { totalPrice: 'null' },
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
    unitPrice: [{ price: '$200' }],
    quantity: [{ quantitys: '1' }],
    estimatedTotalPrice: [{ totalPrice: '$200' }],
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
    unitPrice: [{ price: '$200' }],
    quantity: [{ quantitys: '0' }],
    estimatedTotalPrice: [{ totalPrice: '0' }],
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
    unitPrice: [{ price: '$300' }],
    quantity: [{ quantitys: '0' }],
    estimatedTotalPrice: [{ totalPrice: '0' }],
  },
  {
    servicesName: 'Dedicated Marketing Manager',
    serviceDetails: [
      {
        services: '',
      },
    ],
    unitPrice: [{ price: '$650' }],
    quantity: [{ quantitys: '0' }],
    estimatedTotalPrice: [{ totalPrice: '0' }],
  },
  {
    servicesName: 'Offshore Support',
    serviceDetails: [
      {
        services: '',
      },
    ],
    unitPrice: [{ price: '$500' }],
    quantity: [{ quantitys: '0' }],
    estimatedTotalPrice: [{ totalPrice: '0' }],
  },
  {
    servicesName: 'Marketing Automation',
    serviceDetails: [
      {
        services: '',
      },
    ],
    unitPrice: [{ price: 'null' }],
    quantity: [{ quantitys: 'null' }],
    estimatedTotalPrice: [{ totalPrice: 'null' }],
  },
  {
    servicesName: 'Technical Support',
    serviceDetails: [
      {
        services: '',
      },
    ],
    unitPrice: [{ price: 'null' }],
    quantity: [{ quantitys: 'null' }],
    estimatedTotalPrice: [{ totalPrice: 'null' }],
  },

  {
    servicesName: 'Monthly Report',
    serviceDetails: [
      {
        services: 'Work Update & Performance',
      },
    ],
    unitPrice: [{ price: 'null' }],
    quantity: [{ quantitys: 'null' }],
    estimatedTotalPrice: [{ totalPrice: 'null' }],
  },
];

const ServicePricingPlan = () => {
  return (
    <>
      <div className='pt-16 pb-16 px-36'>
        <div className='relative overflow-x-auto shadow-md md:rounded-lg'>
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
              {pricingList?.map((el: any, index: number) => (
                <tr
                  key={index}
                  className='text-2xl text-black border-b odd:bg-white even:bg-gray-200 '
                >
                  <th
                    scope='row'
                    className='px-6 py-8 font-bold text-gray-900 whitespace-nowrap '
                  >
                    {el?.servicesName}
                  </th>
                  <td className='px-6 py-8'>
                    <div>
                      <ul className='max-w-xl space-y-4 list-disc '>
                        {el?.serviceDetails?.map((items: any, i: number) => (
                          <div key={i}>
                            <li>{items?.services}</li>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className='px-6 py-8'>
                    <div>
                      <ul className='max-w-xl space-y-4 list-none list-inside '>
                        {el?.unitPrice?.map((items: any, i: number) => (
                          <div key={i}>
                            <li
                              className={`text-center ${
                                items?.price !== 'null'
                                  ? 'text-black'
                                  : index % 2 !== 0
                                  ? 'text-gray-200'
                                  : 'text-white'
                              }`}
                            >
                              {items?.price}
                            </li>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className='px-6 py-8'>
                    <div>
                      <ul className='max-w-md space-y-4 list-none list-inside '>
                        {el?.quantity?.map((items: any, i: number) => (
                          <div key={i}>
                            <li
                              className={` text-center ${
                                items?.quantitys !== 'null'
                                  ? 'text-black'
                                  : index % 2 !== 0
                                  ? 'text-gray-200'
                                  : 'text-white'
                              }`}
                            >
                              {items?.quantitys}
                            </li>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className='px-6 py-8'>
                    <div>
                      <ul className='max-w-md space-y-4 font-bold list-none list-inside'>
                        {el?.estimatedTotalPrice?.map(
                          (items: any, i: number) => (
                            <div key={i}>
                              <li
                                className={`text-center ${
                                  items?.totalPrice !== 'null'
                                    ? 'text-black'
                                    : index % 2 !== 0
                                    ? 'text-gray-200'
                                    : 'text-white'
                                }`}
                              >
                                {items?.totalPrice}
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
      <div className='flex justify-center pt-20'>
        <Link
          href={`/customize-plan`}
          className='btn text-base !py-6 !px-8 r-button border-2 border-primary hover:text-primary'
        >
          Customize My Plan
        </Link>
      </div>
    </>
  );
};

export default ServicePricingPlan;
