import { View } from "react-native";

interface ProductImagesProps {
  productImages: string[];
}

export default function ProductImages({ productImages }: ProductImagesProps) {
  return <View className="w-full h-[230px] bg-gray-200"></View>;
}
