import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Card, Button, Caption } from "react-native-paper";

const Stack = createStackNavigator();

export default function TopicsStack({ navigation }) {
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
        name="topics"
        component={Topics}
        options={{
          title: "Temas",
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

function Topics() {
  return (
    <View style={{ flex: 1 }}>
      <TopicsTabTop />
    </View>
  );
}

function TopicsTabTop() {
  const Tab = createMaterialTopTabNavigator();
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="following"
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
        name="following"
        component={Following}
        options={{ title: "Siguiendo" }}
      />
      <Tab.Screen
        name="noInterested"
        component={NoInterested}
        options={{ title: "No me interesa" }}
      />
    </Tab.Navigator>
  );
}

function Following() {
  const { colors } = useTheme();

  return (
    <Card
      style={{
        backgroundColor: colors.background,
        borderRadius: 0,
      }}
    >
      <Card.Content>
        <Caption>
          Los temas que sigues sirven para personalizar los Tweets, eventos y
          anuncios que ves, y se muestran públicamente en tu perfil
        </Caption>
      </Card.Content>

      <Card.Title
        title="Programación"
        titleStyle={{ fontSize: 14 }}
        subtitle="Tecnología"
        left={() => (
          <Icon
            name="chat-processing"
            type="material-community"
            iconStyle={{
              color: "#fff",
              backgroundColor: "#00acee",
              borderRadius: 50,
              padding: 5,
            }}
          />
        )}
        right={() => (
          <View style={{ position: "absolute", top: -10, right: 20 }}>
            <Button
              labelStyle={{
                fontSize: 12,
                textTransform: "none",
                color: "#fff",
              }}
              contentStyle={{
                backgroundColor: "#00acee",
                borderRadius: 50,
              }}
            >
              Siguiendo
            </Button>
          </View>
        )}
      />

      <Card.Title
        title="React Native"
        titleStyle={{ fontSize: 14 }}
        subtitle="Tecnología"
        left={() => (
          <Icon
            name="chat-processing"
            type="material-community"
            iconStyle={{
              color: "#fff",
              backgroundColor: "#00acee",
              borderRadius: 50,
              padding: 5,
            }}
          />
        )}
        right={() => (
          <View style={{ position: "absolute", top: -10, right: 20 }}>
            <Button
              labelStyle={{
                fontSize: 12,
                textTransform: "none",
                color: "#fff",
              }}
              contentStyle={{
                backgroundColor: "#00acee",
                borderRadius: 50,
              }}
            >
              Siguiendo
            </Button>
          </View>
        )}
      />
      <Card.Content>
        <Caption>
          Los temas que sigues se muestran aquí. Para ver todas las cosas que
          Twitter considera que te pueden interesar, consulta{" "}
          <Caption style={{ color: "#00acee" }}>Tus datos de Twitter.</Caption>
          También puedes{" "}
          <Caption style={{ color: "#00acee" }}>
            obtener más información
          </Caption>
          sobre seguir temas.
        </Caption>
      </Card.Content>
    </Card>
  );
}

function NoInterested() {
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
          textAlign: "center",
          fontSize: 22,
          fontWeight: "bold",
          color: colors.text,
        }}
      >
        No nos indicaste ningún Tema que quieras que dejemos de recomendarte
      </Text>
      <Caption style={{ textAlign: "center", marginRight: 20, marginLeft: 20 }}>
        Cuando indiques que no te interesa un Tema determinado, este se mostrará
        aquí y no te recomendaremos que sigas ese Tema en tu cronograma de
        inicio
      </Caption>
    </View>
  );
}
