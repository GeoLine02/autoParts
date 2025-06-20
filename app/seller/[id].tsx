import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Products from "@/components/shared/Products";
import { productsData } from "@/data/Prodcuts";

export default function SellerPage() {
  const [test, setTest] = useState(productsData);

  useEffect(() => {
    //   TOOD: fetch seller by ID hear
  }, []);

  return (
    <SafeAreaView className="bg-soft-white flex-1">
      {/* TODO: change View tag to image */}
      <View className="bg-gray-500 h-[200px]"></View>
      <View className="container gap-3 mt-3">
        <Text className="text-2xl font-bold">Seller Name</Text>
        <Products products={test} />
      </View>
    </SafeAreaView>
  );
}
