import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { Caption } from "react-native-paper";

const Stack = createStackNavigator();

export default function MomentsStack({ navigation }) {
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
        name="moments"
        component={Moments}
        options={{
          title: "Momentos",
          headerLeft: () => (
            <Icon
              name="arrow-left"
              type="material-community"
              iconStyle={{ marginLeft: 10 }}
              color="#00acee"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Moments() {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: colors.text,
          textAlign: "center",
        }}
      >
        No creaste ningún Momento
      </Text>
      <Caption
        style={{
          marginLeft: 20,
          marginRight: 20,
          textAlign: "center",
        }}
      >
        Para crear o editar un Momento, usa twitter.com.
        <Text style={{ color: "#00acee" }}>Más información</Text>{" "}
      </Caption>
    </View>
  );
}
