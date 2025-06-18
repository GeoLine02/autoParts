import { SellerType } from "@/types/seller";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text } from "react-native";

type SellerCardProps = SellerType;

export default function SellerCard({
  id,
  sellerLocation,
  sellerName,
  sellerRating,
  totalOrders,
}: SellerCardProps) {
  return (
    <View className="flex-row gap-2">
      <View className="w-[60px] aspect-square rounded-[4px] bg-gray-700" />
      <View className="flex-1 flex-row justify-between items-center">
        <View className="gap-1">
          <Text className="font-bold">{sellerName}</Text>
          <Text className="text-[10px]">{sellerRating}</Text>
          <View className="flex-row gap-1">
            <Ionicons size={20} name="location" color="gray" />
            <Text>{sellerLocation}</Text>
          </View>
        </View>
        <Text className="underline text-blue-600 text-sm">View Profile</Text>
      </View>
    </View>
  );
}
