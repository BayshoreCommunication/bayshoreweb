import React from 'react';
import { InitialPricingList } from './initialPricingList';

const ServicesPriceCard = () => {
  return (
    <div>
      {InitialPricingList.map((service, serviceIndex) => (
        <div className='p-4 mb-3 rounded-lg bg-orange-50' key={serviceIndex}>
          <h2 className='text-xl font-semibold'>Service Name</h2>
          <p className='mt-1 mb-4 text-sm'>
            {service.servicesName.map((serviceName, detailIndex) => (
              <li
                key={detailIndex}
                className={`list-none ${
                  serviceName.name !== null
                    ? 'text-black'
                    : serviceIndex % 2 !== 0
                    ? 'text-gray-200'
                    : 'text-white'
                }`}
              >
                {serviceName.name}
              </li>
            ))}
          </p>
          <div>
            <div className='relative w-full overflow-x-auto'>
              <table className='w-full text-sm text-left text-white'>
                <thead className='text-[6px] uppercase gray-700 !bg-primary'>
                  <tr>
                    <th scope='col' className='px-1 py-3'>
                      Service Details
                    </th>
                    <th scope='col' className='px-2 py-3 '>
                      U.Price
                    </th>
                    <th scope='col' className='px-4 py-3 '>
                      Qt
                    </th>
                    <th scope='col' className='px-2 py-3 '>
                      E.T.P
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b text-[12px] black odd:bg-white even:bg-gray-200'>
                    <td className='px-2 py-2'>
                      <div>
                        <ul className='max-w-xl space-y-2 list-none'>
                          {service.serviceDetails.map((items, i) => (
                            <li className='text-sm text-black' key={i}>
                              {items.services}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </td>
                    <td className='px-2 py-2'>
                      <div>
                        <ul className='max-w-xl space-y-4 list-none list-inside'>
                          {service.unitPrice.map(
                            (serviceDetail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className={`text-center text-sm ${
                                  serviceDetail.price !== null
                                    ? 'text-black'
                                    : serviceIndex % 2 !== 0
                                    ? 'text-gray-200'
                                    : 'text-white'
                                }`}
                              >
                                {serviceDetail.price}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </td>
                    <td className='px-2 py-2'>
                      <div>
                        <ul className='max-w-md space-y-4 list-none'>
                          {service.quantity.map(
                            (serviceDetail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className={`text-center text-sm ${
                                  serviceDetail.quantitys !== null
                                    ? 'text-black'
                                    : serviceIndex % 2 !== 0
                                    ? 'text-gray-200'
                                    : 'text-whitetext-gray-200'
                                }`}
                              >
                                {serviceDetail.quantitys}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </td>
                    <td className='px-2 py-2'>
                      <div>
                        <ul className='max-w-md space-y-4 font-bold list-none'>
                          {service.estimatedTotalPrice.map(
                            (serviceDetail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className={`text-center text-sm ${
                                  serviceDetail.totalPrice !== null
                                    ? 'text-black'
                                    : serviceIndex % 2 !== 0
                                    ? 'text-gray-200'
                                    : 'text-white'
                                }`}
                              >
                                {serviceDetail.totalPrice}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <thead className='text-black text-[12px] uppercase gray-700 !bg-orange-50 !mt-4'>
                  <tr>
                    <th scope='col' className='px-6 '></th>
                    <th scope='col' className='px-8 '></th>
                    <th scope='col' className='px-6 text-sm'>
                      Total
                    </th>
                    <th scope='col' className='px-6 '></th>
                    <th scope='col' className='px-6 text-sm '>
                      $1420
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesPriceCard;
