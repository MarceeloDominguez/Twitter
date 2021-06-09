import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Card, Button, Title, Paragraph, Caption } from "react-native-paper";
import { Avatar, Icon } from "react-native-elements";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
}

function Profile({ navigation }) {
  const { colors } = useTheme();
  return (
    <Card style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ marginBottom: 60 }}>
        <Card.Cover source={require("../../assets/img/fondo.jpg")} />
      </View>

      <View style={{ position: "absolute" }}>
        <Avatar
          source={require("../../assets/img/react.png")}
          rounded
          size={100}
          containerStyle={{
            top: 150,
            left: 10,
            borderWidth: 3,
            borderColor: colors.background,
          }}
        />
      </View>
      <View style={{ top: 40, left: 10, position: "absolute" }}>
        <Icon
          name="arrow-left"
          type="material-community"
          onPress={() => navigation.goBack()}
          containerStyle={{
            height: 50,
            width: 50,
            borderRadius: 50,
            paddingTop: 12,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          color="#fff"
        />
      </View>
      <View style={{ top: 40, right: 10, position: "absolute" }}>
        <Icon
          name="dots-vertical"
          type="material-community"
          containerStyle={{
            height: 50,
            width: 50,
            borderRadius: 50,
            paddingTop: 12,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          color="#fff"
        />
      </View>
      <View style={{ top: 200, right: 10, position: "absolute" }}>
        <Button
          contentStyle={{
            backgroundColor: colors.background,
            borderRadius: 50,
            borderColor: "#00acee",
            borderWidth: 2,
          }}
          uppercase={false}
          labelStyle={{ fontSize: 16, color: "#00acee", fontWeight: "bold" }}
        >
          Editar perfil
        </Button>
      </View>
      <View style={{ marginLeft: 10 }}>
        <Title>Marcelo Dominguez</Title>
        <Caption>@MarceeDominguez</Caption>
        <Text style={{ color: colors.text, marginBottom: 5 }}>
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 10 }}>
        <Icon
          type="material-community"
          name="map-marker-outline"
          iconStyle={{
            marginRight: 3,
            color: colors.text,
            fontSize: 17,
            top: 4,
          }}
        />
        <Caption style={{ marginRight: 10 }}>Buenos Aires</Caption>
        <Icon
          type="material-community"
          name="calendar-month"
          iconStyle={{
            marginRight: 3,
            color: colors.text,
            fontSize: 17,
            top: 4,
          }}
        />
        <Caption>Se unió en julio de 2010</Caption>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 10 }}>
        <Paragraph style={{ marginRight: 3, fontWeight: "bold" }}>
          250
        </Paragraph>
        <Caption style={{ marginRight: 10 }}>Siguiendo</Caption>
        <Paragraph style={{ marginRight: 3, fontWeight: "bold" }}>
          350
        </Paragraph>
        <Caption>Seguidores</Caption>
      </View>
      <SearchProfile />
    </Card>
  );
}

function SearchProfile() {
  const { colors } = useTheme();
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="tweets"
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
          fontSize: 12,
          fontWeight: "bold",
          textTransform: "none",
        },
      }}
    >
      <Tab.Screen
        name="tweets"
        component={Tweets}
        options={{ title: "Tweets" }}
      />
      <Tab.Screen
        name="tweetsResponse"
        component={TweetsResponse}
        options={{ title: "Tweets y respuestas" }}
      />
      <Tab.Screen
        name="multimedia"
        component={Multimedia}
        options={{ title: "Multimedia" }}
      />
      <Tab.Screen
        name="like"
        component={Like}
        options={{ title: "Me gusta" }}
      />
    </Tab.Navigator>
  );
}

function Tweets() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>Tweets</Text>;
}

function TweetsResponse() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>Tweets y respuestas</Text>;
}

function Multimedia() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>Multimedia</Text>;
}

function Like() {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text }}>Me gusta</Text>;
}
