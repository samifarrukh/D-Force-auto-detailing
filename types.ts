export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  headlineTitle: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  altText: string;
  included: string[];
  benefits: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedServiceSlugs: string[];
}

export interface LocationItem {
  id: string;
  slug: string;
  cityName: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  localContext: string;
  features: string[];
  popularServices: string[];
  faqs: { question: string; answer: string }[];
  nearbySlugs: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ceramic Coating' | 'Paint Correction' | 'Exterior' | 'Interior' | 'Full Detail';
  image: string;
  caption: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  vehicleMakeModel: string;
  vehicleYear?: string;
  service: string;
  location: string;
  preferredDate?: string;
  preferredTime?: string;
  message: string;
}
