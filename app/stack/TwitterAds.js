import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-paper";

const Stack = createStackNavigator();

export default function TwitterAds({ navigation }) {
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
        name="twitterads"
        component={Ads}
        options={{
          title: "",
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
            <View style={{ top: 6, right: 10, position: "absolute" }}>
              <Button
                contentStyle={{
                  backgroundColor: colors.background,
                  borderRadius: 50,
                  borderColor: "#00acee",
                  borderWidth: 2,
                }}
                uppercase={false}
                labelStyle={{
                  fontSize: 16,
                  color: "#00acee",
                  fontWeight: "bold",
                }}
              >
                Listo
              </Button>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Ads() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>Twitter ads</Text>;
}
