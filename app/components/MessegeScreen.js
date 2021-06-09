import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

export default function MessegeScreen() {
  const { colors } = useTheme();
  return (
    <KeyboardAwareScrollView>
      <Text style={{ color: colors.text }}>Mensajes</Text>
    </KeyboardAwareScrollView>
  );
}
