import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function ScreenOne() {
  return (
    <View>
      <Link href="/sheet/screen-two">Go to screen two</Link>
    </View>
  );
}
