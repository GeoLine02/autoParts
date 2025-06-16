// app/(tabs)/(home)/_layout.tsx
import { Slot } from "expo-router";
import { View } from "react-native";

export default function HomeLayout() {
  return (
    <View className="bg-gray-100">
      <Slot />
    </View>
  );
}
