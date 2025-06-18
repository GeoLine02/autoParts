import { View, StyleSheet } from "react-native";
import ProductDetailsFooter from "./ProductDetailsFooter";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProductDetailsFooterWrapper() {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    footerWrapper: {
      position: "absolute",
      bottom: insets.bottom, // <-- push above system navigation
      left: 0,
      right: 0,
      backgroundColor: "white",
      paddingTop: 20,
      paddingBottom: 20,
    },
  });

  return (
    <View style={styles.footerWrapper}>
      <ProductDetailsFooter />
    </View>
  );
}
