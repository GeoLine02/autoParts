import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function User() {
  return (
    <View className="items-center gap-3">
      <View className="items-center justify-center p-4 bg-gray-300 rounded-full w-[100px] h-[100px]">
        <Ionicons name="person" color="white" size={40} />
      </View>
      <Text className="text-2xl font-bold">Nika Wuladze</Text>
    </View>
  );
}
