import React from 'react';
import { InitialPricingListMain } from './initialPricingListMain';
import Link from 'next/link';
import Image from 'next/image';
import ServicesPriceCard from './ServicesPriceCard';

const dataInfo = {
  bussinesName: '',
  partnerName: '',
  emailAddress: '',
  phoneNumber: '',
  website: '',
  address: '',
};

interface ServiceDetail {
  name: number | string | null;
  price: number | string | null;
  quantitys: number | string | null;
  totalPrice: number | string | null;
  services: string;
}

interface Service {
  servicesName: ServiceDetail[];
  serviceDetails: ServiceDetail[];
  unitPrice: ServiceDetail[];
  quantity: ServiceDetail[];
  estimatedTotalPrice: ServiceDetail[];
}

const ServicePricingPlan: React.FC = () => {
  return (
    <div className='px-0 pt-4 md:px-36 mb-[-24px]'>
      <div className='md:hidden'>
        <ServicesPriceCard />
      </div>
      <div className='relative hidden p-10 overflow-x-auto overflow-y-auto shadow-md bg-gray-50 md:rounded-lg md:block'>
        <table className='w-full text-left text-black border rounded-md rtl:text-right'>
          <thead className='text-2xl uppercase !bg-primary'>
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
            {InitialPricingListMain?.map((service: any, serviceIndex: any) => (
              <tr
                key={serviceIndex}
                className='text-2xl text-black border-b odd:bg-white even:bg-gray-200'
              >
                <th
                  scope='row'
                  className='px-6 py-8 font-bold text-gray-900 whitespace-nowrap'
                >
                  <ul className='max-w-xl space-y-4 list-none list-inside'>
                    {service.servicesName.map(
                      (serviceName: any, detailIndex: any) => (
                        <li
                          key={detailIndex}
                          className={`${
                            serviceName.name !== null
                              ? 'text-black'
                              : serviceIndex % 2 !== 0
                              ? 'text-gray-200'
                              : 'text-white'
                          }`}
                        >
                          {serviceName.name}
                        </li>
                      ),
                    )}
                  </ul>
                </th>
                <td className='px-6 py-8'>
                  <div>
                    <ul className={`max-w-xl space-y-6 list-outside list-disc`}>
                      {service.serviceDetails.map((items: any, i: any) => (
                        <div key={i}>
                          <li>{items.services}</li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </td>
                <td className='px-6 py-8'>
                  <div>
                    <ul className='max-w-xl space-y-6 list-none list-inside '>
                      {service.unitPrice.map(
                        (priceItem: any, detailIndex: any) => (
                          <div key={detailIndex}>
                            <li
                              className={` text-center ${
                                priceItem?.price !== null
                                  ? 'text-black'
                                  : serviceIndex % 2 !== 0
                                  ? 'text-gray-200'
                                  : 'text-white'
                              }`}
                            >
                              {priceItem?.price}
                            </li>
                          </div>
                        ),
                      )}
                    </ul>
                  </div>
                </td>

                <td className='px-6 py-8'>
                  <div>
                    <ul className='max-w-xl space-y-6 list-none list-inside '>
                      {service.quantity.map(
                        (quantityItem: any, detailIndex: any) => (
                          <div key={detailIndex}>
                            <li
                              className={` text-center ${
                                quantityItem?.quantitys !== null
                                  ? 'text-black'
                                  : serviceIndex % 2 !== 0
                                  ? 'text-gray-200'
                                  : 'text-white'
                              }`}
                            >
                              {quantityItem?.quantitys}
                            </li>
                          </div>
                        ),
                      )}
                    </ul>
                  </div>
                </td>

                <td className='px-6 py-8'>
                  <div>
                    <ul className='max-w-xl space-y-6 list-none list-inside'>
                      {service.estimatedTotalPrice.map(
                        (totalPriceItem: any, detailIndex: any) => (
                          <div key={detailIndex}>
                            <li
                              className={`text-center ${
                                totalPriceItem?.totalPrice !== null
                                  ? 'text-black'
                                  : serviceIndex % 2 !== 0
                                  ? 'text-gray-200'
                                  : 'text-white'
                              }`}
                            >
                              {totalPriceItem?.totalPrice}
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
          <thead className='text-2xl uppercase gray-700 !bg-orange-50'>
            <tr>
              <th scope='col' className='px-6 py-6'></th>
              <th scope='col' className='px-8 py-6'></th>
              <th scope='col' className='px-6 py-6'>
                Total
              </th>
              <th scope='col' className='px-6 py-6'></th>
              <th scope='col' className='px-0 py-6'>
                $1260
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className='flex justify-center pt-20'>
        <Link
          href={`/customize-plan`}
          className='!py-4 md:!py-4 flex items-center gap-2 sm:gap-4 md:gap-8 px-[3rem] justify-center md:justify-start border-2 bg-primary border-primary rounded-full hover:rounded-full text-white hover:bg-transparent hover:text-primary a-button'
        >
          Customize My Plan
        </Link>
      </div>
    </div>
  );
};

export default ServicePricingPlan;
