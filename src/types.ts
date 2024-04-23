export type Company = {
  name: string;
  image: string;
  category: Category;
  description?: string[];
  discount?: number[];
  discountVariant?: string;
  discountDescription?: string;
  tel?: string[];
  socialMedia?: {
    instagram?: string | null;
    facebook?: string | null;
    website?: string | null;
  };
  promoCode?: string;
  website?: string;
  familyDiscount?: string;
  instructions?: string;
  price?: string;
  registrationLink?: string;
  contactPerson?: string;
  contactNumber?: string;
};

export enum Category {
  'All' = 'All',
  'Hotels' = 'Resorts & Hotels',
  'Clinics' = 'Beauty and Clinics',
  'Cafes' = 'Cafes and Restaurants',
  'Stores' = 'Stores',
  'Gym' = 'Gym',
  'Other' = 'Other',
}
