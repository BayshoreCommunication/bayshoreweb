import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useRouter } from 'next/navigation';

interface ServicesName {
  name: string | null;
}

interface ServiceDetail {
  services: string | null;
}

interface Price {
  price: number | null;
}

interface Quantity {
  quantitys: number | null;
}

interface TotalPrice {
  totalPrice: number | null;
}

interface Service {
  servicesName: ServicesName[];
  serviceDetails: ServiceDetail[];
  unitPrice: Price[];
  quantity: Quantity[];
  estimatedTotalPrice: TotalPrice[];
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
  estimatedTotalPrice: any;
  clientInfo: FormValue;
  customizedPricingList: Array<Service>;
}

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

const DownloadPdf: React.FC<Props> = ({
  estimatedTotalPrice,
  clientInfo,
  customizedPricingList,
}) => {
  const router = useRouter();

  const generatePDF = () => {
    const doc = new jsPDF('portrait', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();

    // Add Logo (centered at the top)
    const logoUrl = '/bayshore-logo.png'; // Replace with your logo URL
    const logoWidth = 40;
    const logoHeight = 12;
    const logoX = (pageWidth - logoWidth) / 2;
    doc.addImage(logoUrl, 'PNG', logoX, 10, logoWidth, logoHeight);

    // Add Company Information
    doc.setFontSize(7);
    // Left Part
    doc.text(`Business Name: ${clientInfo?.businessName}`, 20, 30);
    doc.text(`Partner Name: ${clientInfo?.partnerName}`, 20, 35);
    doc.text(`Email: ${clientInfo?.email}`, 20, 40);
    // Right Part
    doc.text(`Phone: ${clientInfo?.phone}`, pageWidth - 80, 30);
    doc.text(`Website: ${clientInfo?.website}`, pageWidth - 80, 35);
    doc.text(`Address: ${clientInfo?.address}`, pageWidth - 80, 40);

    // Prepare the table rows with alternating row colors
    const rows: string[][] = [];
    customizedPricingList?.forEach((service) => {
      service.serviceDetails.forEach((detail: any, index: any) => {
        rows.push([
          service.servicesName[index]?.name || '',
          detail.services || '',
          service.unitPrice[index]?.price?.toFixed(2) || '',
          service.quantity[index]?.quantitys?.toString() || '',
          service.estimatedTotalPrice[index]?.totalPrice?.toFixed(2) || '',
        ]);
      });
    });

    // Add headers and rows to table with custom colors
    doc.autoTable({
      startY: 45, // Adjust the starting Y position based on the content above
      head: [
        [
          'Service Name',
          'Details',
          'Unit Price',
          'Quantity',
          'Estimated Total',
        ],
      ],
      body: rows,
      theme: 'plain', // Use 'plain' to remove grid lines
      styles: {
        fontSize: 5,
      },
      headStyles: {
        fillColor: '#FE641A',
        textColor: '#FFFFFF',
      },
      columnStyles: {
        0: { cellWidth: 40, valign: 'middle' },
        1: { cellWidth: 70, valign: 'middle' },
        2: { cellWidth: 20, halign: 'center', valign: 'middle' },
        3: { cellWidth: 20, halign: 'center', valign: 'middle' },
        4: { cellWidth: 30, halign: 'center', valign: 'middle' },
      },
    });

    // Total amount (centered below the table)
    doc.setFontSize(5);
    doc.text(
      `Total Amount: $${estimatedTotalPrice}`,
      pageWidth / 2,
      (doc as any).autoTable.previous.finalY + 10,
      { align: 'center' },
    );

    // Save the PDF
    doc.save('Bayshore Growth Plan.pdf');
    router.push('/growth-plan');
  };

  return (
    <div>
      <button
        onClick={generatePDF}
        className='btn text-base !py-6 !px-8 r-button border-2 border-primary hover:text-primary w-[180px] !text-center'
      >
        Download Plan
      </button>
    </div>
  );
};

export default DownloadPdf;
