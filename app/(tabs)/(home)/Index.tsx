import Products from "@/components/shared/Products";
import { productsData } from "@/data/Prodcuts";
import { View } from "react-native";

export default function Home() {
  return (
    <View className="bg-soft-white mb-[160px]">
      <Products products={productsData} />
    </View>
  );
}
