import { productsData } from "@/data/Prodcuts";
import { View, Text, FlatList } from "react-native";
import ProductCard from "../shared/ProductCard";

export default function Products() {
  return (
    <View className="container gap-[18px]">
      <Text className="text-2xl font-bold">Best sellings</Text>
      <FlatList
        data={productsData}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{ rowGap: 12 }}
        columnWrapperStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <ProductCard
            id={item.id}
            productImage={item.productImage}
            productName={item.productName}
            productPrice={item.productPrice}
            productRating={item.productRating}
            sellerName={item.sellerName}
            totalOrders={item.totalOrders}
          />
        )}
      />
    </View>
  );
}
