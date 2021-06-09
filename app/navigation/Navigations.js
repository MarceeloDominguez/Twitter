import React, { useState } from "react";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "../screen/MainTabScreen";
import DrawerContent from "../screen/DrawerContent";
import HomeStack from "../stack/HomeStack";
import ListStack from "../stack/ListStack";
import TopicsStack from "../stack/TopicsStack";
import SavedItems from "../stack/SavedItems";
import MomentsStack from "../stack/MomentsStack";
import TwitterAds from "../stack/TwitterAds";
import ConfigurationStack from "../stack/ConfigurationStack";
import HelpCenterStack from "../stack/HelpCenterStack";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../components/Home/Details";

const Drawer = createDrawerNavigator();

export default function Navigations() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const Stack = createStackNavigator();

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              elevation: 0,
              borderBottomColor: "grey",
              backgroundColor: theme,
            },
          }}
        >
          <Stack.Screen
            name="DrawerStack"
            children={() => <DrawerStack toggleTheme={toggleTheme} />}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="details"
            component={Details}
            options={{
              title: "Tweet",
              headerTintColor: "#00acee",
              headerTitleStyle: {
                color: "#00acee",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

function DrawerStack({ toggleTheme }) {
  return (
    <Drawer.Navigator
      drawerContent={(navigation) => (
        <DrawerContent {...navigation} toggleTheme={toggleTheme} />
      )}
    >
      <Drawer.Screen name="homedrawer" component={MainTabScreen} />
      <Drawer.Screen name="homeStack" component={HomeStack} />
      <Drawer.Screen name="listStack" component={ListStack} />
      <Drawer.Screen name="topicsStack" component={TopicsStack} />
      <Drawer.Screen name="savedItemsStack" component={SavedItems} />
      <Drawer.Screen name="momentsStack" component={MomentsStack} />
      <Drawer.Screen name="twitterAds" component={TwitterAds} />
      <Drawer.Screen name="configuration" component={ConfigurationStack} />
      <Drawer.Screen name="helpCenterStack" component={HelpCenterStack} />
    </Drawer.Navigator>
  );
}
