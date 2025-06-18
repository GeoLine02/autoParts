import AboutProduct from "@/components/product/AboutProduct";
import OfferYourPriceWrapper from "@/components/product/OfferYourPriceWrapper";
import ProductDetailsFooterWrapper from "@/components/product/ProductDetailsFooterWrapper";
import ProductImages from "@/components/product/ProductImages";
import { productDetailsData } from "@/data/Prodcuts";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();

  const { height: screenHeight } = Dimensions.get("window");

  const styles = StyleSheet.create({
    screen: {
      height: screenHeight,
    },
  });

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
        onPress={() => navigate.push("/(tabs)/(home)")}
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
        <OfferYourPriceWrapper />
      </View>
      <ProductDetailsFooterWrapper />
    </SafeAreaView>
  );
}
