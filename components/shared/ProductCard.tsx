import { ProductCardType } from "@/types/products";
import { Link } from "expo-router";
import { View, Text, Pressable } from "react-native";

type ProductCardProps = ProductCardType;

export default function ProductCard({
  id,
  productImage,
  productName,
  productPrice,
  productRating,
  sellerName,
}: ProductCardProps) {
  return (
    <Link
      href={{
        pathname: "/product/[id]",
        params: { id: id.toString() },
      }}
      asChild
    >
      <Pressable className="border border-gray-200 rounded-[10px] p-3 w-full max-w-[160px] gap-1">
        {/* TODO: Replace View with Image */}
        <View className="w-full h-[81px] bg-gray-700 rounded-[10px]"></View>
        <Text className="font-bold">{productName}</Text>
        <Text className="text-sm font-semibold">${productPrice}</Text>
        <View>
          <Text className="text-[10px]">{productRating}</Text>
        </View>
        <Text className="text-sm text-blue-600">{sellerName}</Text>
      </Pressable>
    </Link>
  );
}
