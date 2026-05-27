export interface Product {
  id: string;
  name: string;
  category: string;
  // originalPrice: base price shown as struck-through when discounted
  originalPrice: number;
  // discountedPrice: effective sale price (may equal originalPrice)
  discountedPrice: number;
  image: string;
  description: string;
  inStock: boolean;
  stockQuantity?: number;
  isClearance?: boolean;
  isNewArrival?: boolean;
  rating?: number; // average rating 0-5
  reviews?: Array<{ id: string; user: string; rating: number; comment: string }>;
}
