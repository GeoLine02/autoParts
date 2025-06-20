import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text } from "react-native";

interface RouteTileProps {
  label: string;
  iconName: any;
  iconText: string;
}

export default function RouteTile({
  label,
  iconName,
  iconText,
}: RouteTileProps) {
  return (
    <View className="items-center justify-center w-[140px] h-[140px] rounded-lg gap-2 bg-blue-600">
      <Text className="text-white font-bold">{label}</Text>
      <View className="flex-row gap-2 justify-center items-center">
        <Ionicons name={iconName} size={35} color="white" />
        <Text className="text-white font-bold">{iconText}</Text>
      </View>
    </View>
  );
}
