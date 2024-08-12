// import Image from 'next/image';
// import React from 'react';

// const ServicePriicngSaveData = ({ pricingList }) => {
//   return (
//     <div className='relative overflow-scroll shadow-md bg-gray-0 md:rounded-lg'>
//       <div className='flex flex-col items-center justify-center'>
//         <Image
//           src='/assets/bayshore-logo.svg'
//           alt='bayshore-logo'
//           width={300}
//           height={150}
//           className='w-[200px] md:w-[300px] h-auto py-6'
//           priority
//         />
//       </div>
//       <div className='p-12 '>data</div>
//       <table className='w-full text-left text-black rtl:text-right '>
//         <thead className='text-2xl uppercase gray-700 !bg-primary '>
//           <tr>
//             <th scope='col' className='px-6 py-10'>
//               Service Name
//             </th>
//             <th scope='col' className='px-8 py-10'>
//               Service Details
//             </th>
//             <th scope='col' className='px-6 py-10 text-center'>
//               Unit Price
//             </th>
//             <th scope='col' className='px-6 py-10 text-center'>
//               Quantity
//             </th>
//             <th scope='col' className='px-0 py-10 text-center'>
//               Estimated Total Price
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {pricingList?.map((service: any, serviceIndex: number) => (
//             <tr
//               key={serviceIndex}
//               className='text-2xl text-black border-b odd:bg-white even:bg-gray-200 '
//             >
//               <th
//                 scope='row'
//                 className='px-6 py-8 font-bold text-gray-900 whitespace-nowrap '
//               >
//                 {service?.servicesName}
//               </th>
//               <td className='px-6 py-8'>
//                 <div>
//                   <ul className='max-w-xl space-y-4 list-disc list-inside'>
//                     {service?.serviceDetails?.map((items: any, i: number) => (
//                       <div key={i}>
//                         <li>{items?.services} </li>
//                       </div>
//                     ))}
//                   </ul>
//                 </div>
//               </td>
//               <td className='px-6 py-8'>
//                 <div>
//                   <ul className='max-w-xl space-y-4 list-none list-inside '>
//                     {service?.unitPrice?.map(
//                       (serviceDetail: any, detailIndex: number) => (
//                         <div key={detailIndex}>
//                           <li
//                             className={` text-center ${
//                               serviceDetail?.price !== null
//                                 ? 'text-black'
//                                 : serviceIndex % 2 !== 0
//                                 ? 'text-gray-200'
//                                 : 'text-white'
//                             }`}
//                           >
//                             {serviceDetail?.price}
//                           </li>
//                         </div>
//                       ),
//                     )}
//                   </ul>
//                 </div>
//               </td>
//               <td className='px-6 py-8'>
//                 <div>
//                   <ul className='max-w-md space-y-4 list-none list-inside '>
//                     {service?.quantity?.map(
//                       (serviceDetail: any, detailIndex: number) => (
//                         <div key={detailIndex}>
//                           <li
//                             className={` text-center ${
//                               serviceDetail?.quantitys !== null
//                                 ? 'text-black'
//                                 : serviceIndex % 2 !== 0
//                                 ? 'text-gray-200'
//                                 : 'text-white'
//                             }`}
//                           >
//                             {serviceDetail?.quantitys}
//                           </li>
//                         </div>
//                       ),
//                     )}
//                   </ul>
//                 </div>
//               </td>
//               <td className='px-6 py-8'>
//                 <div>
//                   <ul className='max-w-md space-y-4 font-bold list-none list-inside'>
//                     {service?.estimatedTotalPrice?.map(
//                       (serviceDetail: any, detailIndex: number) => (
//                         <div key={detailIndex}>
//                           <li
//                             className={`text-center ${
//                               serviceDetail?.totalPrice !== null
//                                 ? 'text-black'
//                                 : serviceIndex % 2 !== 0
//                                 ? 'text-gray-200'
//                                 : 'text-white'
//                             }`}
//                           >
//                             {serviceDetail?.totalPrice}
//                           </li>
//                         </div>
//                       ),
//                     )}
//                   </ul>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <thead className='text-2xl uppercase gray-700 !bg-orange-50 '>
//           <tr>
//             <th scope='col' className='px-6 py-6'></th>
//             <th scope='col' className='px-8 py-6'></th>
//             <th scope='col' className='px-6 py-6'>
//               Total
//             </th>
//             <th scope='col' className='px-6 py-6'></th>
//             <th scope='col' className='px-0 py-6'>
//               $2730
//             </th>
//           </tr>
//         </thead>
//       </table>
//     </div>
//   );
// };

// export default ServicePriicngSaveData;

// // import React from 'react';

// // const ServicePriicngSaveData = () => {
// //   return <div>ServicePriicngSaveData</div>;
// // };

// // export default ServicePriicngSaveData;
