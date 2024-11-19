import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function ScreenTwo() {
  return (
    <View>
      <Link href="/sheet/screen-one">Go to screen two</Link>
    </View>
  );
}
