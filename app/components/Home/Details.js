import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Card, Caption } from "react-native-paper";
import { Avatar, Icon } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

export default function Details({ route }) {
  const { colors } = useTheme();
  const info = route.params;

  const {
    image,
    avatar,
    nameUser,
    tuit,
    iconAction,
    textAction,
    user,
    tuitCited,
    retuit,
    like,
    iconBottom,
    hourMinute,
    date,
    device,
  } = info;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Card style={{ borderRadius: 0, backgroundColor: colors.background }}>
          <Card.Content style={styles.content}>
            {
              (iconAction,
              textAction && (
                <Card.Title
                  subtitle={textAction}
                  left={() => (
                    <Icon
                      name={iconAction}
                      type="material-community"
                      iconStyle={{ marginLeft: 15, color: colors.text }}
                    />
                  )}
                  subtitleStyle={{ fontSize: 14 }}
                />
              ))
            }

            <Card.Title
              title={nameUser}
              subtitle={user}
              titleStyle={{ fontSize: 16, bottom: 5 }}
              subtitleStyle={{ bottom: 5 }}
              style={{ bottom: 15 }}
              left={() => (
                <Avatar
                  source={avatar}
                  rounded
                  size={60}
                  containerStyle={{ right: 14 }}
                />
              )}
              right={() => (
                <Icon
                  name="dots-vertical"
                  type="material-community"
                  iconStyle={{ bottom: 5, color: colors.text }}
                />
              )}
            />
            {tuit && (
              <Text style={{ bottom: 8, color: colors.text }}>{tuit}</Text>
            )}
            {image && (
              <Card.Cover source={image} style={{ borderRadius: 10 }} />
            )}

            <View style={styles.viewInfoTuit}>
              <Text style={{ color: colors.text }}>{hourMinute} - </Text>
              <Text style={{ color: colors.text }}>{date} - </Text>
              <Text style={{ color: colors.text }}>{device}</Text>
            </View>
            <View style={styles.interactions}>
              <Text style={{ color: colors.text }}>
                {retuit} <Caption>Retweets</Caption>{" "}
              </Text>
              <Text style={{ color: colors.text }}>
                {tuitCited} <Caption>Tweets citados</Caption>{" "}
              </Text>
              <Text style={{ color: colors.text }}>
                {like} <Caption>Me gusta</Caption>{" "}
              </Text>
            </View>
            <View style={styles.viewIcon}>
              <Icon
                name={iconBottom[0].iconName}
                type="material-community"
                iconStyle={{ color: colors.text }}
              />
              <Icon
                name={iconBottom[1].iconName}
                type="material-community"
                iconStyle={{ color: colors.text }}
              />
              <Icon
                name={iconBottom[2].iconName}
                type="material-community"
                iconStyle={{ color: colors.text }}
              />
              <Icon
                name={iconBottom[3].iconName}
                type="material-community"
                iconStyle={{ color: colors.text }}
              />
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
      <StickyFooter colors={colors} />
    </View>
  );
}

function StickyFooter({ colors }) {
  return (
    <View style={styles.viewFooter}>
      <View style={styles.footer}>
        <Text style={{ color: colors.text }}>Twittea tu respuesta</Text>
        <Icon name="camera-outline" type="material-community" color="#00acee" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewInfoTuit: {
    flexDirection: "row",
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
    marginTop: 5,
    paddingBottom: 5,
  },
  interactions: {
    flexDirection: "row",
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
    marginTop: 5,
    paddingBottom: 5,
  },
  viewIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingBottom: 5,
  },
  content: {
    borderTopWidth: 0.2,
    borderTopColor: "grey",
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
  },
  viewFooter: {
    borderTopWidth: 0.2,
    borderTopColor: "grey",
    paddingBottom: 10,
    paddingTop: 10,
  },
});
