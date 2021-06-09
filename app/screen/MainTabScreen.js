import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { View } from "react-native";
import { Icon, SearchBar, Input } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useTheme,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import HomeScreen from "../components/HomeScreen";
import SearchScreen from "../components/SearchScreen";
import NotificationScreen from "../components/NotificationScreen";
import MessegeScreen from "../components/MessegeScreen";
import { FAB, Portal } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const MessegeStack = createStackNavigator();

export default function MainTabScreen({ route }) {
  const { colors } = useTheme();
  const routeName = getFocusedRouteNameFromRoute(route);
  const isFocused = useIsFocused();

  let icon = "";

  switch (routeName) {
    case "messege":
      icon = "email-plus-outline";
      break;
    default:
      icon = "feather";
      break;
  }

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="home"
        tabBarOptions={{
          style: {
            backgroundColor: colors.background,
            elevation: 0,
            borderTopWidth: 0.2,
            borderTopColor: "grey",
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeStackScreen}
          options={{
            title: "",
            tabBarIcon: () => (
              <Icon
                type="material-community"
                name="home-outline"
                color="#00acee"
              />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchStackScreen}
          options={{
            title: "",
            tabBarIcon: () => (
              <Icon type="material-community" name="magnify" color="#00acee" />
            ),
          }}
        />
        <Tab.Screen
          name="notification"
          component={NotificationStackScreen}
          options={{
            title: "",
            tabBarIcon: () => (
              <Icon
                type="material-community"
                name="bell-outline"
                color="#00acee"
              />
            ),
          }}
        />
        <Tab.Screen
          name="messege"
          component={MessegeStackScreen}
          options={{
            title: "",
            tabBarIcon: () => (
              <Icon
                type="material-community"
                name="email-outline"
                color="#00acee"
              />
            ),
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon={icon}
          style={{
            position: "absolute",
            bottom: 60,
            right: 20,
            backgroundColor: "#00acee",
          }}
          color="white"
        />
      </Portal>
    </React.Fragment>
  );
}

function HomeStackScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0.2,
          borderBottomColor: "grey",
          backgroundColor: colors.background,
        },
      }}
    >
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "",
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Icon
                type="material-community"
                name="menu"
                color="#00acee"
                size={30}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <Icon
                type="material-community"
                name="star-four-points"
                color="#00acee"
                size={30}
              />
            </View>
          ),
          headerTitle: () => (
            <View>
              <Icon type="material-community" name="twitter" color="#00acee" />
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

function SearchStackScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <SearchStack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0.2,
          borderBottomColor: "grey",
          backgroundColor: colors.background,
        },
      }}
    >
      <SearchStack.Screen
        name="search"
        component={SearchScreen}
        options={{
          title: "",
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Icon
                type="material-community"
                name="menu"
                color="#00acee"
                size={30}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <Icon
                type="material-community"
                name="star-four-points"
                color="#00acee"
                size={30}
              />
            </View>
          ),
          headerTitle: () => (
            <KeyboardAwareScrollView>
              <Input
                placeholder="Buscar en Twitter"
                containerStyle={{
                  height: 50,
                  width: 230,
                }}
                inputContainerStyle={{
                  borderRadius: 50,
                  width: 215,
                  right: 10,
                  top: 5,
                  borderWidth: 0.5,
                  borderColor: "grey",
                }}
                inputStyle={{
                  marginLeft: 10,
                }}
                placeholderTextColor={colors.text}
              />
            </KeyboardAwareScrollView>
          ),
        }}
      />
    </SearchStack.Navigator>
  );
}

function NotificationStackScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <NotificationStack.Navigator
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
      <NotificationStack.Screen
        name="notification"
        component={NotificationScreen}
        options={{
          title: "Notificaciones",
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Icon
                type="material-community"
                name="menu"
                color="#00acee"
                size={30}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <Icon
                type="material-community"
                name="cog-outline"
                color="#00acee"
                size={30}
              />
            </View>
          ),
        }}
      />
    </NotificationStack.Navigator>
  );
}

function MessegeStackScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <MessegeStack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0.2,
          borderBottomColor: "grey",
          backgroundColor: colors.background,
        },
      }}
    >
      <MessegeStack.Screen
        name="messege"
        component={MessegeScreen}
        options={{
          title: "",
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Icon
                type="material-community"
                name="menu"
                color="#00acee"
                size={30}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <Icon
                type="material-community"
                name="cog-outline"
                color="#00acee"
                size={30}
              />
            </View>
          ),
          headerTitle: () => (
            <KeyboardAwareScrollView>
              <Input
                placeholder="Buscar personas y grupos"
                containerStyle={{
                  height: 50,
                  width: 230,
                }}
                inputContainerStyle={{
                  borderRadius: 50,
                  width: 215,
                  right: 10,
                  top: 5,
                  borderWidth: 0.5,
                  borderColor: "grey",
                }}
                inputStyle={{
                  marginLeft: 6,
                }}
                placeholderTextColor={colors.text}
              />
            </KeyboardAwareScrollView>
          ),
        }}
      />
    </MessegeStack.Navigator>
  );
}
