import { ProductCardType } from "./products";

export interface SellerType {
  sellerId: number;
  sellerName: string;
  sellerRating: number;
  totalOrders: number;
  sellerLocation: string;
  products: ProductCardType[];
}
