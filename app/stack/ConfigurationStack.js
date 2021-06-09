import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();

export default function ConfigurationStack({ navigation }) {
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
        name="configuration"
        component={Configuration}
        options={{
          title: "Configuración y privacidad",
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

function Configuration() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>Configuracion y privacidad</Text>;
}
