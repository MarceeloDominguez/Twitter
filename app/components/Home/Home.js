import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { Card, Caption, Title } from "react-native-paper";
import homeItems from "../../utils/HomeItems";
import Fleets from "./Fleets";

export default function Home({ colors, navigation }) {
  return (
    <View>
      <FlatList
        data={homeItems}
        renderItem={(info) => (
          <InfoHome info={info} colors={colors} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Fleets colors={colors} />}
      />
    </View>
  );
}

function InfoHome({ colors, info, navigation }) {
  const [likeBtn, setLikeBtn] = useState(false);

  useEffect(() => {
    setLikeBtn(true);
  }, []);

  const {
    iconAction,
    textAction,
    hour,
    user,
    nameUser,
    avatar,
    tuit,
    image,
    iconBottom,
    iterations,
    retuit,
    like,
  } = info.item;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("details", info.item)}
      activeOpacity={0.8}
    >
      <Card style={{ borderRadius: 0, backgroundColor: colors.background }}>
        <Card.Content style={styles.content}>
          {
            (iconAction,
            textAction && (
              <View style={styles.viewContent}>
                <Icon
                  name={iconAction}
                  type="material-community"
                  iconStyle={{ color: colors.text }}
                />
                <Caption style={{ marginLeft: 10, color: colors.text }}>
                  {textAction}
                </Caption>
              </View>
            ))
          }
          <View style={styles.infoUser}>
            <View style={{ flexDirection: "row" }}>
              <Title style={{ fontSize: 16 }}>{nameUser?.substr(0, 19)}</Title>
              <Caption style={{ top: 7 }}>{user?.substr(0, 11)}</Caption>
              <Caption style={{ top: 7 }}> - {hour}</Caption>
            </View>
            <View>
              <Icon
                name="dots-vertical"
                type="material-community"
                iconStyle={{
                  marginTop: 5,
                  color: colors.text,
                  right: -10,
                }}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Avatar
              source={avatar}
              rounded
              size={60}
              containerStyle={{ marginTop: -25 }}
            />
            <View style={{ width: 265, marginLeft: 5 }}>
              {tuit && (
                <Text style={{ marginBottom: 2, color: colors.text }}>
                  {tuit?.substr(0, 280)}
                </Text>
              )}
              {image && (
                <Card.Cover
                  style={{ borderRadius: 10, marginBottom: 2 }}
                  source={image}
                  resizeMode="cover"
                />
              )}
            </View>
          </View>
          <View style={styles.viewIcon}>
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <Icon
                name={iconBottom[0].iconName}
                type="material-community"
                iconStyle={{ color: colors.text }}
                onPress={() => console.log("chat")}
              />
              <Text style={{ left: 3, color: colors.text }}>{iterations}</Text>
            </View>
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <Icon
                name={iconBottom[1].iconName}
                type="material-community"
                iconStyle={{ color: colors.text }}
                onPress={() => console.log("repeat")}
              />
              <Text style={{ left: 3, color: colors.text }}>{retuit}</Text>
            </View>
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <Icon
                name={likeBtn ? iconBottom[2].iconName : "heart"}
                color={likeBtn ? colors.text : "#f00"}
                type="material-community"
                onPress={() => setLikeBtn(!likeBtn)}
              />
              <Text style={{ left: 3, color: colors.text }}>{like}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name={iconBottom[3].iconName}
                type="material-community"
                iconStyle={{ color: colors.text, marginRight: 10 }}
                onPress={() => console.log("share")}
              />
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    borderTopWidth: 0.2,
    borderTopColor: "grey",
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
  },
  viewContent: {
    flexDirection: "row",
    paddingLeft: 30,
    marginTop: 5,
  },
  infoUser: {
    flexDirection: "row",
    paddingLeft: 65,
    justifyContent: "space-between",
  },
  viewIcon: {
    flexDirection: "row",
    paddingLeft: 60,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "space-between",
  },
});
