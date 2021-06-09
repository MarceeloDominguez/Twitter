import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { Caption } from "react-native-paper";

const Stack = createStackNavigator();

export default function SavedItems({ navigation }) {
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
        name="elements"
        component={Elements}
        options={{
          title: "Elementos guardados",
          headerLeft: () => (
            <Icon
              name="arrow-left"
              type="material-community"
              iconStyle={{ marginLeft: 10 }}
              color="#00acee"
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <Icon
              name="dots-vertical"
              type="material-community"
              iconStyle={{ marginRight: 10 }}
              color="#00acee"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Elements() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 22,
          fontWeight: "bold",
          lineHeight: 30,
          color: colors.text,
        }}
      >
        Todavía no has agregado ningún Tweets a tus Elementos guardados
      </Text>
      <Caption>Cuando lo hagas, se mostrarán aquí</Caption>
    </View>
  );
}
