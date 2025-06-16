import { View, Text, Pressable } from "react-native";

interface ButtonProps {
  label: string;
  className?: string;
}

const Button = ({ label, className }: ButtonProps) => {
  return (
    <View>
      <Pressable>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
