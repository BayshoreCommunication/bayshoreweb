'use client';

import React, { useState } from 'react';
import CalculateServicePricingCalculate from './CalculateServicePricingCalculate';
import { InitialPricingList } from './initialPricingList';
import ServicePriicngSaveData from './ServicePriicngSaveData';
import ServicesPriceCard from './ServicesPriceCard';

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

const ServicePricingPlanCustomized: React.FC = () => {
  const [pricingList, setPricingList] = useState(InitialPricingList);
  const [totalPrice, setTotalPrice] = useState<string>('0');
  const [openPreview, setOpenPreview] = useState<boolean>(false);

  const handleOpenPreview = () => {
    setOpenPreview(!openPreview);
  };

  const [formValues, setFormValues] = useState({
    businessName: '',
    partnerName: '',
    email: '',
    phone: '',
    website: '',
    address: '',
  });

  console.log('check form value', formValues);

  return (
    <>
      <div className='px-0 pt-16 pb-16 md:px-36'>
        {openPreview ? (
          <ServicePriicngSaveData
            customizedPricingList={pricingList}
            estimatedTotalPrice={totalPrice}
            clientInfo={formValues}
            handleOpenPreview={handleOpenPreview}
          />
        ) : (
          <>
            <CalculateServicePricingCalculate
              pricingList={pricingList}
              setPricingList={setPricingList}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              formValues={formValues}
              setFormValues={setFormValues}
            />
            <div className='flex justify-center pt-20'>
              <button
                onClick={handleOpenPreview}
                className='!py-4 md:!py-4 flex items-center gap-2 sm:gap-4 md:gap-8 px-[3rem] justify-center md:justify-start border-2 bg-primary border-primary rounded-full hover:rounded-full text-white hover:bg-transparent hover:text-primary a-button'
              >
                Save Plan
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ServicePricingPlanCustomized;
