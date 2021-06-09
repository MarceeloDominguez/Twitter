import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();

export default function HelpCenterStack({ navigation }) {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0.2,
          borderBottomColor: "grey",
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen
        name="center"
        component={Center}
        options={{
          title: "Twitter",
          headerLeft: () => (
            <Icon
              name="arrow-left"
              type="material-community"
              color="#00acee"
              iconStyle={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Center() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>Twitter</Text>;
}
