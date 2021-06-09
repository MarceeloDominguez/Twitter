import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import {
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  useTheme,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Icon, Avatar } from "react-native-elements";
import menuItems from "../utils/DrawerItem";

export default function DrawerContent({ navigation, toggleTheme }) {
  const paperTheme = useTheme();
  const theme = useTheme();
  const colors = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={theme.dark ? "light-content" : "default"} />
      <View style={{ borderBottomWidth: 0.2, borderBottomColor: "grey" }}>
        <View style={styles.drawerContent}>
          <View>
            <Avatar
              source={require("../../assets/img/react.png")}
              size={50}
              rounded
              onPress={() => navigation.navigate("homeStack")}
              activeOpacity={1}
            />
            <View style={{ flexDirection: "row" }}>
              <Title style={{ marginRight: 20 }}>Marcelo Dominguez</Title>
              <Icon
                style={{ marginTop: 5 }}
                color="#00acee"
                type="material-community"
                name="chevron-down"
              />
            </View>
            <Caption>@MarceeDominguez</Caption>
          </View>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={styles.paragraph}>250</Paragraph>
              <Caption style={styles.caption}>Siguiendo</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={styles.paragraph}>350</Paragraph>
              <Caption style={styles.caption}>Seguidores</Caption>
            </View>
          </View>
        </View>
      </View>
      <DrawerContentScrollView showsVerticalScrollIndicator={false}>
        <Drawer.Section style={styles.drawerSection}>
          {menuItems.map((item) => {
            return (
              <DrawerItem
                key={item.id}
                icon={({ color }) => (
                  <Icon
                    type="material-community"
                    name={item.iconName}
                    size={25}
                    color={color}
                  />
                )}
                label={item.label}
                onPress={() => navigation.navigate(item.routeName)}
              />
            );
          })}
          <DrawerItem
            label="Configuración y privacidad"
            onPress={() => navigation.navigate("configuration")}
          />
          <DrawerItem
            label="Centro de Ayuda"
            onPress={() => navigation.navigate("helpCenterStack")}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottonDrawerSection}>
        <TouchableRipple onPress={() => toggleTheme()}>
          <View style={styles.preferences} pointerEvents="none">
            <Switch value={paperTheme.dark} color="#00acee" />
            <Icon
              type="material-community"
              name="view-grid-plus"
              color="#00acee"
            />
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 40,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  section: {
    flexDirection: "row",
    marginRight: 15,
    alignItems: "center",
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 5,
  },
  caption: {
    fontSize: 14,
  },
  drawerSection: {
    marginTop: 15,
    top: -15,
  },
  bottonDrawerSection: {
    marginBottom: 15,
    borderTopColor: "grey",
    borderTopWidth: 0.2,
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
  },
  preferences: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
