import AboutProduct from "@/components/product/AboutProduct";
import OfferYourPriceWrapper from "@/components/product/OfferYourPriceWrapper";
import ProductDetailsFooterWrapper from "@/components/product/ProductDetailsFooterWrapper";
import ProductImages from "@/components/product/ProductImages";
import SellerCard from "@/components/product/SellerCard";
import { productDetailsData } from "@/data/Prodcuts";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetails() {
  useEffect(() => {
    // TODO: fetch product by ID data here
  }, []);

  const navigate = useRouter();

  return (
    <SafeAreaView
      edges={["top"]}
      // style={styles.screen}
      className="bg-soft-white flex-1"
    >
      <Pressable
        onPress={() => navigate.push("/(tabs)/(home)/Index")}
        className="flex-row items-center gap-2"
      >
        <Ionicons name="arrow-back" size={35} color="gray" />
        <Text className="text-xl font-semibold">Go Back</Text>
      </Pressable>
      <ProductImages productImages={productDetailsData.productImages} />
      <View className="container">
        <AboutProduct
          id={productDetailsData.id}
          productDescription={productDetailsData.productDescription}
          productImages={productDetailsData.productImages}
          productName={productDetailsData.productName}
          productPrice={productDetailsData.productPrice}
          seller={productDetailsData.seller}
        />
        <View className="mt-[30px]">
          <Text className="text-xl font-semibold mb-2">Seller</Text>
          <SellerCard
            id={productDetailsData.seller.id}
            sellerLocation={productDetailsData.seller.sellerLocation}
            sellerName={productDetailsData.seller.sellerName}
            sellerRating={productDetailsData.seller.sellerRating}
            totalOrders={productDetailsData.seller.totalOrders}
          />
        </View>
        <OfferYourPriceWrapper />
      </View>
      <ProductDetailsFooterWrapper />
    </SafeAreaView>
  );
}
