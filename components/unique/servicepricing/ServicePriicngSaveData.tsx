'use client';
import React from 'react';
import Image from 'next/image';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { redirect } from 'next/navigation';
import DownloadPdf from './DownloadPdf';

interface ServiceDetail {
  services: string;
}

// Define the Service interface
interface Service {
  servicesName: { name: string | null }[];
  serviceDetails: ServiceDetail[];
  unitPrice: { price: number | null }[];
  quantity: { quantitys: number | null }[];
  estimatedTotalPrice: { totalPrice: number | null }[];
}

interface FormValue {
  businessName: string;
  partnerName: string;
  email: string;
  phone: string;
  website: string;
  address: string;
}

interface Props {
  customizedPricingList: Service[];
  estimatedTotalPrice: string;
  clientInfo: FormValue;
  handleOpenPreview?: () => void; // Define this if used, or remove if not needed
}

const ServicePricingSaveData: React.FC<Props> = ({
  customizedPricingList,
  estimatedTotalPrice,
  clientInfo,
  handleOpenPreview,
}) => {
  const generatePDF = async () => {
    const input = document.getElementById(
      'table-container',
    ) as HTMLElement | null;

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
    if (handleOpenPreview) handleOpenPreview();

    // Call this function if defined
  };

  return (
    <>
      <div className='relative p-10 overflow-x-auto overflow-y-auto shadow-md bg-gray-0 md:rounded-lg bg-gray-50'>
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
          <div className='grid items-center grid-cols-2 gap-y-8'>
            <p>
              <strong className='font-bold'>Business Name: </strong>{' '}
              {clientInfo.businessName}
            </p>
            <p>
              <strong className='font-bold'>Partner Name:</strong>{' '}
              {clientInfo.partnerName}
            </p>
            <p>
              <strong className='font-bold'>Email:</strong> {clientInfo.email}
            </p>
            <p>
              <strong className='font-bold'>Phone:</strong> {clientInfo.phone}
            </p>
            <p>
              <strong className='font-bold'>Website:</strong>{' '}
              {clientInfo.website}
            </p>
            <p>
              <strong className='font-bold'>Address: </strong>{' '}
              {clientInfo.address}
            </p>
          </div>
        </div>
        <div>
          <table className='w-full text-left text-black rtl:text-right'>
            <thead className='text-2xl uppercase gray-700 !bg-primary'>
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
              {customizedPricingList.map((service, serviceIndex) => (
                <tr
                  key={serviceIndex}
                  className='text-2xl text-black border-b odd:bg-white even:bg-gray-200'
                >
                  <th
                    scope='row'
                    className='px-6 py-8 font-bold text-gray-900 whitespace-nowrap'
                  >
                    <div>
                      <ul className='max-w-xl space-y-4 list-none list-inside'>
                        {service.servicesName.map(
                          (serviceName, detailIndex) => (
                            <li
                              key={detailIndex}
                              className={` ${
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
                    </div>
                  </th>
                  <td className='px-6 py-8'>
                    <div>
                      <ul className='max-w-xl space-y-4 list-disc list-outside '>
                        {service.serviceDetails.map((items, i) => (
                          <li className='' key={i}>
                            {items.services}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className='px-6 py-8'>
                    <div>
                      <ul className='max-w-xl space-y-4 list-none list-inside'>
                        {service.unitPrice.map((serviceDetail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className={`text-center ${
                              serviceDetail.price !== null
                                ? 'text-black'
                                : serviceIndex % 2 !== 0
                                ? 'text-gray-200'
                                : 'text-white'
                            }`}
                          >
                            {serviceDetail.price}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className='px-6 py-8'>
                    <div>
                      <ul className='max-w-md space-y-4 list-none list-inside'>
                        {service.quantity.map((serviceDetail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className={`text-center ${
                              serviceDetail.quantitys !== null
                                ? 'text-black'
                                : serviceIndex % 2 !== 0
                                ? 'text-gray-200'
                                : 'text-whitetext-gray-200'
                            }`}
                          >
                            {serviceDetail.quantitys}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className='px-6 py-8'>
                    <div>
                      <ul className='max-w-md space-y-4 font-bold list-none list-inside'>
                        {service.estimatedTotalPrice.map(
                          (serviceDetail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className={`text-center ${
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
                  {estimatedTotalPrice}
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className='flex justify-center pt-20'>
        <DownloadPdf
          clientInfo={clientInfo}
          estimatedTotalPrice={estimatedTotalPrice}
          customizedPricingList={customizedPricingList}
        />
      </div>
    </>
  );
};

export default ServicePricingSaveData;
