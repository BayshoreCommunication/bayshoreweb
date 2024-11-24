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
    servicesName: [{ name: "Website Maintains" }],
    serviceDetails: [
      { services: "Website Maintains, Cybersecurity, Hosting, SSL" },
      { services: "Technical Support" },
      { services: "Technical SEO" },
    ],
    unitPrice: [{ price: 100 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 100 }],
  },
  {
    servicesName: [{ name: "Search Engine Optimization" }],
    serviceDetails: [
      { services: "Keywords Analysis" },
      { services: "On-Page SEO" },
      { services: "Off-Page SEO, Including All SEO Tools" },
    ],
    unitPrice: [{ price: 550 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 550 }],
  },
  {
    servicesName: [{ name: "Content Writing" }],
    serviceDetails: [
      { services: "Copyright Free Human Written Blogs (Avg 1500 Words/Blog)" },
      {
        services: "On-Page SEO",
      },
    ],
    unitPrice: [{ price: 50 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 50 }],
  },
  {
    servicesName: [{ name: "Creative Content (Graphic Design)" }],
    serviceDetails: [
      {
        services: "Blog Graphics",
      },
      {
        services:
          "Thumniels & Image SEO Optimization (Avg 4 Copyright Free Images/Blog)",
      },
    ],
    unitPrice: [{ price: 5 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 5 }],
  },
  {
    servicesName: [{ name: "Local SEO - Google My Business" }],
    serviceDetails: [
      {
        services: "Management & SEO",
      },
    ],
    unitPrice: [{ price: 200 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 200 }],
  },
  {
    servicesName: [{ name: "Social Media Management & Content Creation" }],
    serviceDetails: [
      { services: "Content Idea Genaration" },
      {
        services: "Content Design",
      },
      { services: "Social Media Calender Management (4/Month)" },
      { services: "Event Calender Management (16/Year" },
      { services: "Publishing with Creative Caption & HashTag" },
      {
        services:
          "Social Share on Facebook, Instagram, Threads, Twitter, LinkedIn",
      },
    ],
    unitPrice: [{ price: 250 }],
    quantity: [{ quantitys: 1 }, { quantitys: null }],
    estimatedTotalPrice: [{ totalPrice: 250 }],
  },
  {
    servicesName: [{ name: "Video Production" }],
    serviceDetails: [
      { services: "Video Production Training" },
      {
        services: "Studio Setup",
      },
      {
        services: "Video Shoot (1 Day/Month",
      },
    ],
    unitPrice: [{ price: 350 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 350 }],
  },

  {
    servicesName: [
      { name: null },
      { name: null },
      { name: null },
      { name: "Video Editing (Long & Short)" },
      { name: null },
      { name: null },
      { name: null },
      { name: null },
    ],

    serviceDetails: [
      { services: "Topics Research With Outline" },
      { services: "Video Editing" },
      { services: "Short Video Editing" },
      {
        services:
          "Publishing with Creative Description & SEO on YouTube, TikTok, Facebook, and Instagram",
      },
    ],
    unitPrice: [{ price: 100 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 100 }],
  },
  {
    servicesName: [
      { name: null },
      { name: "Email Marketing" },
      { name: null },
      { name: null },
    ],

    serviceDetails: [
      {
        services: "Campaign Plan",
      },
      {
        services: "Lead Generation",
      },
      { services: "Email Copy Writing (4/Month)" },
      { services: "Email Graphic (4/Month)" },
      { services: "Template Design" },
      { services: "Campaign Management" },
      { services: "Direct Sales Campaign" },
    ],
    unitPrice: [{ price: 200 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 200 }],
  },
  {
    servicesName: [
      { name: null },
      { name: "Digital Advertising" },
      { name: null },
      { name: null },
    ],
    serviceDetails: [
      {
        services:
          "Environment  Setup, CRM Intrigration, Ad Creative, Campaign Management",
      },
      { services: "Facebook, Instagram, Google, YouTube" },
      { services: "Email Graphic (4/Month)" },
      { services: "Lead Ads, Display Ad With 15% Ad Spend" },
    ],
    unitPrice: [{ price: 200 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 200 }],
  },

  {
    servicesName: [{ name: "Dedicated Marketing Manager" }],
    serviceDetails: [
      {
        services:
          "Accounts Management, Crisis Management, Lead Nurturing & Forwording, Growth Monitoring, Performance Tracking & Reporting",
      },
    ],
    unitPrice: [{ price: 650 }],
    quantity: [{ quantitys: 1 }],
    estimatedTotalPrice: [{ totalPrice: 650 }],
  },
];
