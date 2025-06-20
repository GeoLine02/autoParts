import { SellerType } from "./seller";

export interface ProductCardType {
  id: number;
  productImage: string;
  productName: string;
  productPrice: number;
  productRating: number;
  totalOrders: number;
  sellerName: string;
}

export interface ProductDetailsType {
  id: number;
  productImages: string[];
  productDescription: string;
  productName: string;
  productPrice: number;
  seller: Omit<SellerType, "products">;
}
