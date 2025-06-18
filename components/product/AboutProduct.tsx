import { ProductDetailsType } from "@/types/products";
import { View, Text } from "react-native";
import SellerCard from "./SellerCard";

type AboutProductProps = ProductDetailsType;

export default function AboutProduct({
  id,
  productName,
  productPrice,
  productDescription,
  seller,
}: AboutProductProps) {
  return (
    <View className="gap-1 mt-3">
      <Text className="text-2xl font-semibold">{productName}</Text>
      <Text className="text-2xl font-medium">${productPrice}</Text>
      <View>
        <Text className="text-xl font-semibold">Description</Text>
        <Text>{productDescription}</Text>
      </View>
      <View className="mt-[30px]">
        <Text className="text-xl font-semibold mb-2">Seller</Text>
        <SellerCard
          id={seller.id}
          sellerLocation={seller.sellerLocation}
          sellerName={seller.sellerName}
          sellerRating={seller.sellerRating}
          totalOrders={seller.totalOrders}
        />
      </View>
    </View>
  );
}
