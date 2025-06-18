import { View } from "react-native";
import Button from "../ui/Button";

export default function ProductDetailsFooter() {
  return (
    <View className="flex-row gap-2 container">
      <Button
        label="Add to cart"
        className="border border-gray-200 rounded-lg flex-1 py-2"
      />
      <Button
        labelColor="white"
        label="Buy now"
        className="border border-blue-600 bg-blue-600 rounded-lg flex-1 py-2"
      />
    </View>
  );
}
