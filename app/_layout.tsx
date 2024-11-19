import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="sheet"
        options={{ presentation: "formSheet", headerShown: false }}
      />
    </Stack>
  );
}
