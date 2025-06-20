import Header from "@/components/shared/Header";
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="Index" options={{ header: () => <Header /> }} />
    </Stack>
  );
}
