import { ProductDetailsType } from "@/types/products";
import { View, Text } from "react-native";

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
    </View>
  );
}
