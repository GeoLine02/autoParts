import RouteTiles from "@/components/profile/RouteTIles";
import User from "@/components/profile/User";
import { View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 items-center  justify-center gap-11">
      <User />

      <RouteTiles />
    </View>
  );
}
