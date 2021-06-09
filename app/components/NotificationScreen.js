import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export default function NotificationScreen() {
  const { colors } = useTheme();
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="todas"
      tabBarOptions={{
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
        name="allNotifications"
        component={AllNotifications}
        options={{ title: "Todas" }}
      />
      <Tab.Screen
        name="allMentions"
        component={AllMentions}
        options={{ title: "Menciones" }}
      />
    </Tab.Navigator>
  );
}

function AllNotifications() {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={{ color: colors.text }}>Todas las notificaciones</Text>
    </View>
  );
}

function AllMentions() {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={{ color: colors.text }}>Todas las menciones</Text>
    </View>
  );
}
