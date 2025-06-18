import { Text, Pressable, StyleSheet } from "react-native";
interface ButtonProps {
  label: string;
  className?: string;
  labelColor?: "white" | "black";
}

const Button = ({ label, className, labelColor = "black" }: ButtonProps) => {
  const buttonStyles = StyleSheet.create({
    textColor: {
      color: labelColor === "white" ? "#fff" : "#000",
    },
  });

  return (
    <Pressable
      className={`w-fit ${className} flex-row items-center justify-center`}
    >
      <Text style={buttonStyles.textColor} className={`${labelColor}`}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
