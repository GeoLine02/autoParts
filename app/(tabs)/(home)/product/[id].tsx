import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function ProductDetailsWrapper() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>product {id}</Text>
    </View>
  );
}
