import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "@/components/shared/Header";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          header: () => <Header />,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? "#2868D5" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="cart"
              size={24}
              color={focused ? "#2868D5" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Product"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
