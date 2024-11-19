import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="sheet"
        options={{
          presentation:
            "formSheet" /* This works and shows the nested stack if set to "modal" */,
          headerShown: false,
        }}
      />
    </Stack>
  );
}
