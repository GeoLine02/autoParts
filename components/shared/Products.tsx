import { View, FlatList } from "react-native";
import ProductCard from "../shared/ProductCard";
import { ProductCardType } from "@/types/products";

interface ProductsProps {
  products: ProductCardType[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <View className="container gap-[18px]">
      <FlatList
        data={products}
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
