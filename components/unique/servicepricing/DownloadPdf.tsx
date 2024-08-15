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
  estimatedTotalPrice: number | null;
  clientInfo: FormValue;
  customizedPricingList: Service[];
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

  const formatPrice = (value: any): string => {
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? '' : numericValue.toFixed(2);
  };

  const generatePDF = () => {
    const doc = new jsPDF('portrait', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();

    // Add Logo (centered at the top)
    const logoUrl = '/bayshore-logo.png';
    const logoWidth = 40;
    const logoHeight = 12;
    const logoX = (pageWidth - logoWidth) / 2;
    doc.addImage(logoUrl, 'PNG', logoX, 10, logoWidth, logoHeight);

    // Add Company Information
    doc.setFontSize(5);
    // Left Part
    doc.text(`Business Name: ${clientInfo?.businessName || ''}`, 20, 30);
    doc.text(`Partner Name: ${clientInfo?.partnerName || ''}`, 20, 35);
    doc.text(`Email: ${clientInfo?.email || ''}`, 20, 40);
    // Right Part
    doc.text(`Phone: ${clientInfo?.phone || ''}`, pageWidth - 80, 30);
    doc.text(`Website: ${clientInfo?.website || ''}`, pageWidth - 80, 35);
    doc.text(`Address: ${clientInfo?.address || ''}`, pageWidth - 80, 40);

    // Prepare the table rows with alternating row colors
    const rows: string[][] = customizedPricingList?.reduce(
      (acc: string[][], service: Service) => {
        service.serviceDetails.forEach((detail, index) => {
          acc.push([
            service.servicesName[index]?.name || '',
            detail.services || '',
            formatPrice(service.unitPrice[index]?.price),
            service.quantity[index]?.quantitys?.toString() || '',
            formatPrice(service.estimatedTotalPrice[index]?.totalPrice),
          ]);
        });
        return acc;
      },
      [],
    );

    // Add headers and rows to table with custom colors
    doc.autoTable({
      startY: 43,
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
      theme: 'striped',
      styles: {
        fontSize: 4,
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
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    const totalAmount = formatPrice(estimatedTotalPrice);
    doc.text(
      `Total Amount: $${totalAmount}`,
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
        className='!py-4 md:!py-4 flex items-center gap-2 sm:gap-4 md:gap-8 px-[3rem] justify-center md:justify-start border-2 bg-primary border-primary rounded-full hover:rounded-full text-white hover:bg-transparent hover:text-primary a-button'
      >
        Download Plan
      </button>
    </div>
  );
};

export default DownloadPdf;
