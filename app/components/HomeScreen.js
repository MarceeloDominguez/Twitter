import { useTheme } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Home from "./Home/Home";

export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View>
      <Home colors={colors} navigation={navigation} />
    </View>
  );
}
