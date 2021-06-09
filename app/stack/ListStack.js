import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();

export default function ListStack({ navigation }) {
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
        headerTintColor: colors.text,
      }}
    >
      <Stack.Screen
        name="list"
        component={List}
        options={{
          title: "Listas",
          headerLeft: () => (
            <Icon
              name="arrow-left"
              type="material-community"
              color="#00acee"
              iconStyle={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <Icon
                type="material-community"
                name="dots-vertical"
                color="#00acee"
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function List() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>Listas</Text>;
}
