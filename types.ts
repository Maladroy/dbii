export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string; // Keep as primary thumbnail
  images: string[]; // Gallery
  category: string;
  isFlashSale?: boolean;
  discountPercentage?: number;
  tag?: string;
  description?: string; // Short description
  details?: string; // Full technical details/instructions
  soldCount?: number; // Fixed number of items sold
  isHidden?: boolean; // For Up Sale items hidden from public view
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface Banner {
  id: string;
  image: string;
  title?: string;
  link?: string;
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export interface FlashSaleEvent {
  endTime: number;
  products: Product[];
}