import { Stack } from "expo-router";
import React from "react";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="screen-one" />
      <Stack.Screen name="screen-two" />
    </Stack>
  );
}
