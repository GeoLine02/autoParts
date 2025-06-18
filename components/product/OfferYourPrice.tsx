import { View, Text } from "react-native";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function OfferYourPrice() {
  return (
    <View className="gap-2 mt-10">
      <Text className="font-semibold">Offer your Price</Text>
      <View className="flex-row gap-2">
        <Input className="flex-1" />
        <Button
          labelColor="white"
          label="Offer"
          className="bg-blue-600 rounded-lg text-white px-[30px] "
        />
      </View>
    </View>
  );
}
