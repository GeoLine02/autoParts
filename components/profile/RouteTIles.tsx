import { View, Text } from "react-native";
import RouteTile from "./RouteTile";

const userRoutes = [
  {
    label: "My Store",
    iconName: "home",
    iconText: "",
  },
  {
    label: "Settings",
    iconName: "settings",
    iconText: "",
  },
  {
    label: "Language",
    iconName: "globe",
    iconText: "EN",
  },
  {
    label: "Policies",
    iconName: "shield",
    iconText: "",
  },
  {
    label: "Help",
    iconName: "help-circle",
    iconText: "",
  },
  {
    label: "Log Out",
    iconName: "log-out",
    iconText: "",
  },
];

export default function RouteTiles() {
  return (
    <View className="flex-row gap-6 flex-wrap justify-center items-center">
      {userRoutes.map((route) => (
        <RouteTile
          key={route.label}
          iconName={route.iconName}
          iconText={route.iconText}
          label={route.label as string}
        />
      ))}
    </View>
  );
}
