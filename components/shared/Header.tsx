import { View, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView className="bg-gray-100">
      <View className="container mt-6">
        <View className="w-full border-2 flex-row  items-center border-gray-200 rounded-full px-[13px]">
          <TextInput
            placeholder="Seach for parts"
            className="text-gray-700 flex-1"
          />
          <Ionicons size={24} name="search" color="gray" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
