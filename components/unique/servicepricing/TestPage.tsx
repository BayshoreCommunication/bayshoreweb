// import React from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { InitialPricingList } from './initialPricingList';

// interface ServicesName {
//   name: string | null;
// }

// interface ServiceDetail {
//   services: string | null;
// }

// interface Price {
//   price: number | null;
// }

// interface Quantity {
//   quantitys: number | null;
// }

// interface TotalPrice {
//   totalPrice: number | null;
// }

// interface Service {
//   servicesName: ServicesName[];
//   serviceDetails: ServiceDetail[];
//   unitPrice: Price[];
//   quantity: Quantity[];
//   estimatedTotalPrice: TotalPrice[];
// }

// interface PackageData {
//   packageName: string;
//   services: Service[];
//   totalAmount: number;
// }

// const packageData: PackageData = {
//   packageName: 'Best Package',
//   services: [
//     {
//       servicesName: [
//         { name: null },
//         { name: 'Website Maintains' },
//         { name: null },
//       ],
//       serviceDetails: [
//         { services: 'Maintains, Cybersecurity, Hosting, SSL' },
//         { services: 'Technical Support' },
//         { services: 'Technical SEO' },
//       ],
//       unitPrice: [{ price: null }, { price: 100 }, { price: null }],
//       quantity: [{ quantitys: null }, { quantitys: 100 }, { quantitys: null }],
//       estimatedTotalPrice: [
//         { totalPrice: null },
//         { totalPrice: 100 },
//         { totalPrice: null },
//       ],
//     },
//     {
//       servicesName: [
//         { name: null },
//         { name: 'Search Engine Optimization' },
//         { name: null },
//       ],
//       serviceDetails: [
//         { services: 'Keywords Analysis' },
//         { services: 'On Page SEO' },
//         { services: 'Off Page SEO, SEO Tools' },
//       ],
//       unitPrice: [{ price: null }, { price: 550 }, { price: null }],
//       quantity: [{ quantitys: null }, { quantitys: 2 }, { quantitys: null }],
//       estimatedTotalPrice: [
//         { totalPrice: null },
//         { totalPrice: 1100 },
//         { totalPrice: null },
//       ],
//     },
//   ],
//   totalAmount: 950,
// };

// const TestPage: React.FC = () => {
//   const generatePDF = () => {
//     const doc = new jsPDF('portrait', 'mm', 'a4');
//     const pageWidth = doc.internal.pageSize.getWidth();

//     // Add Logo (centered at the top)
//     const logoUrl = '/bayshore-logo.png'; // Replace with your logo URL
//     const logoWidth = 40;
//     const logoHeight = 12;
//     const logoX = (pageWidth - logoWidth) / 2;
//     doc.addImage(logoUrl, 'PNG', logoX, 10, logoWidth, logoHeight);

//     // Add Company Information
//     doc.setFontSize(8);
//     // Left Part
//     doc.text('Business Name: Salman Inc', 20, 35);
//     doc.text('Partner Name: Salman H Saikote', 20, 40);
//     doc.text('Email: test@gmail.com', 20, 45);
//     // Right Part
//     doc.text('Phone: 01792843207', pageWidth - 80, 35);
//     doc.text('Website: www.salman.info', pageWidth - 80, 40);
//     doc.text('Address: Dhaka, Bangladesh', pageWidth - 80, 45);

//     // Prepare the table rows with alternating row colors
//     const rows: string[][] = [];
//     InitialPricingList?.forEach((service: any) => {
//       service.serviceDetails.forEach((detail: any, index: any) => {
//         rows.push([
//           service.servicesName[index]?.name || '',
//           detail.services || '',
//           service.unitPrice[index]?.price?.toFixed(2) || '',
//           service.quantity[index]?.quantitys?.toString() || '',
//           service.estimatedTotalPrice[index]?.totalPrice?.toFixed(2) || '',
//         ]);
//       });
//     });

//     // Add headers and rows to table with custom colors
//     doc.autoTable({
//       startY: 50, // Adjust the starting Y position based on the content above
//       head: [
//         [
//           'Service Name',
//           'Details',
//           'Unit Price',
//           'Quantity',
//           'Estimated Total',
//         ],
//       ],
//       body: rows,
//       theme: 'plain', // Use 'plain' to remove grid lines
//       styles: {
//         fontSize: 6,
//       },
//       headStyles: {
//         fillColor: '#FE641A',
//         textColor: '#FFFFFF',
//       },

//       // rowStyles: rowIndex
//       // rowStyles: { fillColor: '#EEEEEE', textColor: '#2F2441' },

//       columnStyles: {
//         0: { cellWidth: 40, valign: 'middle' },
//         1: { cellWidth: 70, valign: 'middle' },
//         2: { cellWidth: 20, halign: 'center', valign: 'middle' },
//         3: { cellWidth: 20, halign: 'center', valign: 'middle' },
//         4: { cellWidth: 30, halign: 'center', valign: 'middle' },
//       },
//     });

//     // Total amount (centered below the table)
//     doc.setFontSize(6);
//     doc.text(
//       `Total Amount: $${packageData.totalAmount.toFixed(2)}`,
//       pageWidth / 2,
//       (doc as any).autoTable.previous.finalY + 10,
//       { align: 'center' },
//     );

//     // Save the PDF
//     doc.save('Best_Package.pdf');
//   };

//   return (
//     <div>
//       <button onClick={generatePDF}>Download Best Package</button>
//     </div>
//   );
// };

// export default TestPage;
