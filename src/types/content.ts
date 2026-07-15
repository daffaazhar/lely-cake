export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  images?: string[];
  priceFrom?: number;
  unit?: string;
  minimumOrder?: string;
  shelfLife?: string;
  storage?: string;
  featured?: boolean;
  available: boolean;
};

export type Package = {
  slug: string;
  name: string;
  description: string;
  suitableFor: string[];
  contents: string[];
  priceFrom?: number;
  minimumOrder?: string;
  image: string;
  featured?: boolean;
  available: boolean;
};

export type Testimonial = {
  name: string;
  quote: string;
  context?: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type ServiceArea = {
  slug: string;
  name: string;
  description?: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  whatsapp: {
    displayNumber: string;
    linkNumber: string;
  };
  instagramUrl: string;
  address: string;
  businessHours: string;
  siteUrl: string;
};
