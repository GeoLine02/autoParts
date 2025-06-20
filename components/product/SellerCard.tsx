import { SellerType } from "@/types/seller";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { View, Text } from "react-native";

type SellerCardProps = Omit<SellerType, "products">;

export default function SellerCard({
  sellerId,
  sellerLocation,
  sellerName,
  sellerRating,
  totalOrders,
}: SellerCardProps) {
  console.log(sellerId);

  return (
    <View className="flex-row gap-2">
      <View className="w-[60px] aspect-square rounded-[4px] bg-gray-700" />
      <View className="flex-1 flex-row justify-between items-center">
        <View className="gap-1">
          <Text className="font-bold">{sellerName}</Text>
          <View className="flex-row items-center">
            <Ionicons name="star" size={15} color="orange" />
            <Ionicons name="star" size={15} color="orange" />
            <Ionicons name="star" size={15} color="orange" />
            <Ionicons name="star" size={15} color="orange" />
            <Ionicons name="star" size={15} color="orange" />
            <Text className="text-[10px] ml-1">{sellerRating}</Text>
          </View>
          <View className="flex-row items-center gap-1">
            <Ionicons size={20} name="location" color="gray" />
            <Text>{sellerLocation}</Text>
          </View>
        </View>
        <Link
          href={{
            pathname: "/seller/[id]",
            params: { id: sellerId.toString() },
          }}
          className="underline text-blue-600 text-sm"
        >
          View Profile
        </Link>
      </View>
    </View>
  );
}
