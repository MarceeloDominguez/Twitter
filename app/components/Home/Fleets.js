import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import fleetsItems from "../../utils/FleetsItems";

export default function Fleets({ colors }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ borderBottomWidth: 0.2, borderBottomColor: "grey" }}
    >
      <View style={styles.viewAvatar}>
        <View style={styles.avatar}>
          <Avatar
            source={require("../../../assets/img/react.png")}
            rounded
            size={60}
          />
        </View>
        <View
          style={{
            position: "absolute",
            borderWidth: 2,
            borderRadius: 50,
            left: 50,
            top: 42,
            borderColor: colors.background,
          }}
        >
          <Icon
            name="plus"
            type="material-community"
            iconStyle={{
              color: "#fff",
              backgroundColor: "#00acee",
              borderRadius: 50,
            }}
            size={16}
          />
        </View>
        <Text
          style={{ marginLeft: -55, marginBottom: -68, color: colors.text }}
        >
          Agregar
        </Text>
      </View>
      {fleetsItems.map((item) => (
        <View style={styles.viewAvatar} key={item.id}>
          <View style={styles.avatarFleet}>
            <Avatar source={item.avatar} rounded size={60} />
          </View>
          <Text
            style={{
              marginLeft: -60,
              marginBottom: -68,
              color: colors.text,
            }}
          >
            {item.name?.substr(0, 10)}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewAvatar: {
    height: 90,
    width: 80,
    alignItems: "center",
    paddingHorizontal: 8,
    flexDirection: "row",
    margin: 2,
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  avatarFleet: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#00acee",
  },
});
