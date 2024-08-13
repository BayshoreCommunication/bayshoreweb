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

export const InitialPricingList: Service[] = [
  {
    servicesName: 'Website Maintains',
    serviceDetails: [
      { services: 'Maintains, Cybersecurity, Hosting, SSL' },
      { services: 'Technical Support' },
      { services: 'Technical SEO' },
    ],
    unitPrice: [{ price: null }, { price: 100 }, { price: null }],
    quantity: [{ quantitys: null }, { quantitys: 100 }, { quantitys: null }],
    estimatedTotalPrice: [
      { totalPrice: null },
      { totalPrice: 100 },
      { totalPrice: null },
    ],
  },
  {
    servicesName: 'Search Engine Optimization',
    serviceDetails: [
      { services: 'Keywords Analysis' },
      { services: 'On Page SEO' },
      { services: 'Off Page SEO, SEO Tools' },
    ],
    unitPrice: [{ price: null }, { price: 550 }, { price: null }],
    quantity: [{ quantitys: null }, { quantitys: 2 }, { quantitys: null }],
    estimatedTotalPrice: [
      { totalPrice: null },
      { totalPrice: 1100 },
      { totalPrice: null },
    ],
  },
  {
    servicesName: 'Content Writing',
    serviceDetails: [
      { services: 'Blogs Writing (Avg 1500 Words/Blog)' },
      { services: 'Blog Graphics (Avg 3 Copyright Free Images/Blog)' },
      { services: 'On Page SEO, Social Share' },
    ],
    unitPrice: [{ price: 50 }, { price: 5 }, { price: null }],
    quantity: [{ quantitys: 5 }, { quantitys: 24 }, { quantitys: null }],
    estimatedTotalPrice: [
      { totalPrice: 400 },
      { totalPrice: 120 },
      { totalPrice: null },
    ],
  },
  {
    servicesName: 'Google My Business',
    serviceDetails: [{ services: 'Management' }, { services: 'SEO ' }],
    unitPrice: [{ price: 100 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 100 }],
  },
  {
    servicesName: 'Video Production',
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
      { quantitys: 1 },
      { quantitys: null },
      { quantitys: 4 },
      { quantitys: 4 },
      { quantitys: 4 },
      { quantitys: null },
    ],
    estimatedTotalPrice: [
      { totalPrice: null },
      { totalPrice: null },
      { totalPrice: 35 },
      { totalPrice: null },
      { totalPrice: 20 },
      { totalPrice: 80 },
      { totalPrice: 80 },
      { totalPrice: null },
    ],
  },
  {
    servicesName: 'Email Marketing',
    serviceDetails: [
      { services: 'Campaign Plan' },
      { services: 'Email Copy Writing (4/Month)' },
      { services: 'Email Graphic (4/Month)' },
      { services: 'Template Design' },
      { services: 'Campaign Management' },
    ],
    unitPrice: [{ price: 200 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 200 }],
  },
  {
    servicesName: 'Digital Advertising',
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
    servicesName: 'Community Managment',
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
    servicesName: 'Dedicated Marketing Manager',
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
    servicesName: 'Offshore Support',
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
    servicesName: 'Marketing Automation',
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
    servicesName: 'Technical Support',
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
    servicesName: 'Monthly Report',
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
