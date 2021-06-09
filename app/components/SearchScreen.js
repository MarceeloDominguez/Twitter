import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function SearchScreen() {
  const { colors } = useTheme();
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="foryou"
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: "#00acee",
        inactiveTintColor: colors.text,
        indicatorStyle: { backgroundColor: "#00acee" },
        style: {
          elevation: 0,
          borderBottomWidth: 0.2,
          borderBottomColor: "grey",
          backgroundColor: colors.background,
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "none",
        },
      }}
    >
      <Tab.Screen
        name="foryou"
        children={() => <ForYou colors={colors} />}
        options={{ title: "Para ti" }}
      />
      <Tab.Screen
        name="covid"
        component={Covid}
        options={{ title: "COVID-19" }}
      />
      <Tab.Screen
        name="trends"
        component={Trends}
        options={{ title: "Tendencias" }}
      />
      <Tab.Screen
        name="news"
        component={News}
        options={{ title: "Noticias" }}
      />
      <Tab.Screen
        name="sports"
        component={Sports}
        options={{ title: "Deportes" }}
      />
      <Tab.Screen
        name="entertainment"
        component={Entertainment}
        options={{ title: "Entretenimiento" }}
      />
    </Tab.Navigator>
  );
}

function ForYou({ colors }) {
  return <Text style={{ color: colors.text }}>Para ti</Text>;
}

function Covid() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>COVID-19</Text>;
}

function Trends() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>Tendencias</Text>;
}

function News() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>Noticias</Text>;
}

function Sports() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>Deportes</Text>;
}

function Entertainment() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>Entretenimiento</Text>;
}
