import React from 'react';
import { services } from '../services/Service';

const pricingList = [
  {
    servicesName: 'Website Maintains',
    serviceDetails: [
      { services: 'Maintains, Cybersecurity, Hosting, SSL' },
      { services: 'Technical Support' },
      { services: 'Technical SEO' },
    ],
    unitPrice: [{ price: '' }, { price: '100' }, { price: '' }],
    quantity: [{ quantitys: '' }, { quantitys: '100' }, { quantitys: '' }],
    estimatedTotalPrice: [
      { totalPrice: '' },
      { totalPrice: '100' },
      { totalPrice: '' },
    ],
  },
  {
    servicesName: 'Search Engine Optimization',
    serviceDetails: [
      { services: 'Keywords Analysis' },
      { services: 'On Page SEO' },
      { services: 'Off Page SEO, SEO Tools' },
    ],
    unitPrice: [{ price: '' }, { price: '550' }, { price: '' }],
    quantity: [{ quantitys: '' }, { quantitys: '2' }, { quantitys: '' }],
    estimatedTotalPrice: [
      { totalPrice: '' },
      { totalPrice: '1100' },
      { totalPrice: '' },
    ],
  },
];

const ServicePricingPlan = () => {
  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Service Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Service Details
              </th>
              <th scope='col' className='px-6 py-3'>
                Unit Price
              </th>
              <th scope='col' className='px-6 py-3'>
                Quantity
              </th>
              <th scope='col' className='px-6 py-3'>
                Estimated Total Price
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingList?.map((el: any, index: number) => (
              <tr
                key={index}
                className='border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'
              >
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  {`  Apple MacBook Pro 17"`}
                </th>
                <td className='px-6 py-4'>Silver</td>
                <td className='px-6 py-4'>Laptop</td>
                <td className='px-6 py-4'>{`$2999`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicePricingPlan;
