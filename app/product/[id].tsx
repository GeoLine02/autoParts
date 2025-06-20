import AboutProduct from "@/components/product/AboutProduct";
import OfferYourPriceWrapper from "@/components/product/OfferYourPriceWrapper";
import ProductDetailsFooterWrapper from "@/components/product/ProductDetailsFooterWrapper";
import ProductImages from "@/components/product/ProductImages";
import SellerCard from "@/components/product/SellerCard";
import { productDetailsData } from "@/data/Prodcuts";
import { ProductDetailsType } from "@/types/products";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetails() {
  const [product, setProduct] = useState<null | ProductDetailsType>(null);

  useEffect(() => {
    // TODO: fetch product by ID data here

    setProduct(productDetailsData);
  }, []);

  const navigate = useRouter();

  if (!product) return <Text>Loading...</Text>;

  return (
    <SafeAreaView edges={["top"]} className="bg-soft-white flex-1">
      <Pressable
        onPress={() => navigate.push("/(tabs)/(home)/Index")}
        className="flex-row items-center gap-2"
      >
        <Ionicons name="arrow-back" size={35} color="gray" />
        <Text className="text-xl font-semibold">Go Back</Text>
      </Pressable>
      <ProductImages productImages={product.productImages} />
      <View className="container">
        <AboutProduct
          id={product.id}
          productDescription={product.productDescription}
          productImages={product.productImages}
          productName={product.productName}
          productPrice={product.productPrice}
          seller={product.seller}
        />
        <View className="mt-[30px]">
          <Text className="text-xl font-semibold mb-2">Seller</Text>
          <SellerCard
            sellerId={product.seller.sellerId}
            sellerLocation={product.seller.sellerLocation}
            sellerName={product.seller.sellerName}
            sellerRating={product.seller.sellerRating}
            totalOrders={product.seller.totalOrders}
          />
        </View>
        <OfferYourPriceWrapper />
      </View>
      <ProductDetailsFooterWrapper />
    </SafeAreaView>
  );
}
