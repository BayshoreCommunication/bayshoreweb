'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ServiceDetail {
  services: string;
}

// Define the Service interface
interface Service {
  servicesName: string;
  serviceDetails: ServiceDetail[];
  unitPrice: { price: number | null }[];
  quantity: { quantitys: number | null }[];
  estimatedTotalPrice: { totalPrice: number | null }[];
}

interface Form {
  businessName: string;
  partnerName: string;
  email: string;
  phone: string;
  website: string;
  address: string;
}

interface Props {
  pricingList: any;
  setPricingList: React.Dispatch<React.SetStateAction<any>>;
  totalPrice: any | null;
  setTotalPrice: React.Dispatch<React.SetStateAction<string>>;
  formValues: Form;
  setFormValues: React.Dispatch<React.SetStateAction<Form>>;
}

const CalculateServicePricingCalculate: React.FC<Props> = ({
  pricingList,
  setPricingList,
  totalPrice,
  setTotalPrice,
  formValues,
  setFormValues,
}) => {
  const handleQuantityChange = (
    serviceIndex: number,
    detailIndex: number,
    newQuantity: string,
  ) => {
    const updatedPricingList = pricingList.map((service: any, sIndex: any) => {
      if (sIndex === serviceIndex) {
        const updatedQuantity = service.quantity.map(
          (quantityItem: any, qIndex: any) => {
            if (qIndex === detailIndex) {
              return { ...quantityItem, quantitys: newQuantity };
            }
            return quantityItem;
          },
        );

        const updatedTotalPrice = service.estimatedTotalPrice.map(
          (totalPriceItem: any, tIndex: any) => {
            if (tIndex === detailIndex) {
              const unitPrice = service.unitPrice[detailIndex].price;
              const quantity = parseFloat(newQuantity) || 0;
              const totalPrice =
                unitPrice && !isNaN(Number(unitPrice))
                  ? (Number(unitPrice) * quantity).toFixed(2)
                  : null;
              return { ...totalPriceItem, totalPrice };
            }
            return totalPriceItem;
          },
        );

        return {
          ...service,
          quantity: updatedQuantity,
          estimatedTotalPrice: updatedTotalPrice,
        };
      }
      return service;
    });

    setPricingList(updatedPricingList);
  };

  // Calculate the total price
  const calculateTotalPrice = () => {
    const total = pricingList.reduce((acc: any, service: any) => {
      return (
        acc +
        service.estimatedTotalPrice.reduce((subAcc: any, priceDetail: any) => {
          const price = parseFloat(priceDetail.totalPrice as any) || 0;
          return subAcc + price;
        }, 0)
      );
    }, 0);

    setTotalPrice(total.toFixed(2));
  };

  // Update the total price whenever the pricingList changes
  useEffect(() => {
    calculateTotalPrice();
  }, [pricingList]);

  // Handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handler for form submission
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(formValues); // Process form values
  // };

  return (
    <div className='relative p-10 overflow-x-auto overflow-y-auto shadow-md bg-gray-50 md:rounded-lg'>
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
        <form className='mx-auto'>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                name='businessName'
                id='businessName'
                className='block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
                placeholder=' '
                required
                value={formValues?.businessName}
                onChange={handleInputChange}
              />
              <label
                htmlFor='businessName'
                className='peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Business Name
              </label>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                name='partnerName'
                id='partnerName'
                className='block py-2.5 px-0 w-full text-[15px]  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-primary peer'
                placeholder=' '
                required
                value={formValues?.partnerName}
                onChange={handleInputChange}
              />
              <label
                htmlFor='partnerName'
                className='peer-focus:font-medium absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Partner Name
              </label>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='email'
                name='email'
                id='email'
                className='block py-2.5 px-0 w-full text-[15px]  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-primary peer'
                placeholder=' '
                required
                value={formValues?.email}
                onChange={handleInputChange}
              />
              <label
                htmlFor='email'
                className='peer-focus:font-medium absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Email
              </label>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='phone'
                name='phone'
                id='phone'
                className='block py-2.5 px-0 w-full text-[15px]  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-primary peer'
                placeholder=' '
                required
                value={formValues?.phone}
                onChange={handleInputChange}
              />
              <label
                htmlFor='phone'
                className='peer-focus:font-medium absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Phone
              </label>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                name='website'
                id='website'
                className='block py-2.5 px-0 w-full text-[15px]  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer'
                placeholder=' '
                required
                value={formValues?.website}
                onChange={handleInputChange}
              />
              <label
                htmlFor='floating_company'
                className='peer-focus:font-medium absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Website
              </label>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='text'
                name='address'
                id='address'
                className='block py-2.5 px-0 w-full text-[15px]  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-primary peer'
                placeholder=' '
                required
                value={formValues?.address}
                onChange={handleInputChange}
              />
              <label
                htmlFor='address'
                className='peer-focus:font-medium absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Address
              </label>
            </div>
          </div>
        </form>
      </div>
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
          {pricingList.map((service: any, serviceIndex: any) => (
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
                  <ul className='max-w-xl space-y-6 list-disc list-outside'>
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

              <td className='px-6 py-8 text-center '>
                <div>
                  <ul className='max-w-md space-y-4 list-none list-inside '>
                    {service.quantity.map(
                      (quantityItem: any, detailIndex: any) => (
                        <div key={detailIndex}>
                          {quantityItem?.quantitys !== null ? (
                            <input
                              type='number'
                              value={quantityItem?.quantitys || 0}
                              onChange={(e) =>
                                handleQuantityChange(
                                  serviceIndex,
                                  detailIndex,
                                  e.target.value,
                                )
                              }
                              className='w-20 p-1 text-center border border-gray-300 rounded-md'
                            />
                          ) : (
                            <p
                              className={`${
                                serviceIndex % 2 !== 0
                                  ? 'text-gray-200'
                                  : 'text-white'
                              }`}
                            >
                              $
                            </p>
                          )}
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
              ${totalPrice}
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CalculateServicePricingCalculate;
