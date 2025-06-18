import { Text, TextInput, View, TextInputProps } from "react-native";
import React from "react";

type InputProps = {
  label?: string;
  error?: string;
} & TextInputProps;

export default function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <View className={`${className}`}>
      {label && (
        <Text className="mb-1 font-medium text-base text-gray-800">
          {label}
        </Text>
      )}

      <TextInput
        className={`border rounded-lg px-4 py-2 text-base text-gray-700 bg-white ${
          error ? "border-red-500" : "border-gray-200"
        }`}
        placeholderTextColor="#7E807F"
        {...props}
      />

      {error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
    </View>
  );
}
