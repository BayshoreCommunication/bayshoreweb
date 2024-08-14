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

export const InitialPricingList: Service[] = [
  {
    servicesName: [
      { name: null },
      { name: 'Website Maintains' },
      { name: null },
    ],
    serviceDetails: [
      { services: 'Maintains, Cybersecurity, Hosting, SSL' },
      { services: 'Technical Support' },
      { services: 'Technical SEO' },
    ],
    unitPrice: [{ price: null }, { price: 100 }, { price: null }],
    quantity: [{ quantitys: null }, { quantitys: 0 }, { quantitys: null }],
    estimatedTotalPrice: [
      { totalPrice: null },
      { totalPrice: 0 },
      { totalPrice: null },
    ],
  },
  {
    servicesName: [
      { name: null },
      { name: 'Search Engine Optimization' },
      { name: null },
    ],
    serviceDetails: [
      { services: 'Keywords Analysis' },
      { services: 'On Page SEO' },
      { services: 'Off Page SEO, SEO Tools' },
    ],
    unitPrice: [{ price: null }, { price: 550 }, { price: null }],
    quantity: [{ quantitys: null }, { quantitys: 0 }, { quantitys: null }],
    estimatedTotalPrice: [
      { totalPrice: null },
      { totalPrice: 0 },
      { totalPrice: null },
    ],
  },
  {
    servicesName: [{ name: null }, { name: 'Content Writing' }, { name: null }],
    serviceDetails: [
      { services: 'Blogs Writing (Avg 1500 Words/Blog)' },
      { services: 'Blog Graphics (Avg 3 Copyright Free Images/Blog)' },
      { services: 'On Page SEO, Social Share' },
    ],
    unitPrice: [{ price: 50 }, { price: 5 }, { price: null }],
    quantity: [{ quantitys: 0 }, { quantitys: 0 }, { quantitys: null }],
    estimatedTotalPrice: [
      { totalPrice: 0 },
      { totalPrice: 0 },
      { totalPrice: null },
    ],
  },
  {
    servicesName: [{ name: 'Google My Business' }],
    serviceDetails: [{ services: 'Management' }, { services: 'SEO ' }],
    unitPrice: [{ price: 100 }],
    quantity: [{ quantitys: 0 }],
    estimatedTotalPrice: [{ totalPrice: 0 }],
  },
  {
    servicesName: [
      { name: null },
      { name: null },
      { name: null },
      { name: null },
      { name: null },
      { name: 'Video Production' },
      { name: null },
      { name: null },
      { name: null },
      { name: null },
    ],
    serviceDetails: [
      { services: 'Video Production Tranning' },
      { services: 'Studio Setup' },
      { services: 'Video Shoot (1 Day/Month)' },
      { services: 'Topics With Outline' },
      { services: 'Video Editing (4/Month)' },
      { services: 'Reels Editing (4/Month)' },
      { services: 'Publishing with Creative Description & SEO' },
      { services: 'YouTube, TikTok, Facebook, Instagram' },
    ],
    unitPrice: [
      { price: null },
      { price: null },
      { price: 350 },
      { price: null },
      { price: 50 },
      { price: 20 },
      { price: 20 },
      { price: null },
    ],
    quantity: [
      { quantitys: null },
      { quantitys: null },
      { quantitys: 0 },
      { quantitys: null },
      { quantitys: 0 },
      { quantitys: 0 },
      { quantitys: 0 },
      { quantitys: null },
    ],
    estimatedTotalPrice: [
      { totalPrice: null },
      { totalPrice: null },
      { totalPrice: 0 },
      { totalPrice: null },
      { totalPrice: 0 },
      { totalPrice: 0 },
      { totalPrice: 0 },
      { totalPrice: null },
    ],
  },
  {
    servicesName: [
      { name: null },
      { name: null },
      { name: 'Email Marketing' },
      { name: null },
      { name: null },
    ],
    serviceDetails: [
      { services: 'Campaign Plan' },
      { services: 'Email Copy Writing (4/Month)' },
      { services: 'Email Graphic (4/Month)' },
      { services: 'Template Design' },
      { services: 'Campaign Management' },
    ],
    unitPrice: [{ price: 200 }],
    quantity: [{ quantitys: 0 }],
    estimatedTotalPrice: [{ totalPrice: 0 }],
  },
  {
    servicesName: [
      { name: null },
      { name: 'Digital Advertising' },
      { name: null },
      { name: null },
    ],
    serviceDetails: [
      {
        services:
          'Enviorment Setup, CRM Intrigration, Ad Creative, Campaign Management',
      },
      { services: 'Facebook, Instagram, Google, YouTube' },
      { services: 'Email Graphic (4/Month)' },
      { services: 'Lead Ads, Display Ad With 15% Ad Spend' },
    ],
    unitPrice: [{ price: 200 }],
    quantity: [{ quantitys: 0 }],
    estimatedTotalPrice: [{ totalPrice: 0 }],
  },
  {
    servicesName: [
      { name: null },
      { name: 'Community Managment' },
      { name: null },
    ],
    serviceDetails: [
      {
        services: 'Social Media Group Managment',
      },
      { services: 'Cold DM' },
      { services: 'Lead Forwording' },
    ],
    unitPrice: [{ price: 300 }],
    quantity: [{ quantitys: 0 }],
    estimatedTotalPrice: [{ totalPrice: 0 }],
  },
  {
    servicesName: [{ name: 'Dedicated Marketing Manager' }],
    serviceDetails: [
      {
        services: '',
      },
    ],
    unitPrice: [{ price: 650 }],
    quantity: [{ quantitys: 0 }],
    estimatedTotalPrice: [{ totalPrice: 0 }],
  },
  {
    servicesName: [{ name: 'Offshore Support' }],
    serviceDetails: [
      {
        services: '',
      },
    ],
    unitPrice: [{ price: 500 }],
    quantity: [{ quantitys: 0 }],
    estimatedTotalPrice: [{ totalPrice: 0 }],
  },
  {
    servicesName: [{ name: 'Marketing Automation' }],
    serviceDetails: [
      {
        services: '',
      },
    ],
    unitPrice: [{ price: null }],
    quantity: [{ quantitys: null }],
    estimatedTotalPrice: [{ totalPrice: null }],
  },
  {
    servicesName: [{ name: 'Technical Support' }],
    serviceDetails: [
      {
        services: '',
      },
    ],
    unitPrice: [{ price: null }],
    quantity: [{ quantitys: null }],
    estimatedTotalPrice: [{ totalPrice: null }],
  },

  {
    servicesName: [{ name: 'Monthly Report' }],
    serviceDetails: [
      {
        services: 'Work Update & Performance',
      },
    ],
    unitPrice: [{ price: null }],
    quantity: [{ quantitys: null }],
    estimatedTotalPrice: [{ totalPrice: null }],
  },
];
