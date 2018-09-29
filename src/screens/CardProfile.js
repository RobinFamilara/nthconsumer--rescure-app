import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";

class CardProfile extends React.Component {
  render() {
    return (
      <Card>
        <View style={styles.cardHeader}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../images/profile-icon.png")}
                style={styles.profileicon}
              />
              <Text
                style={{
                  fontFamily: "BebasNeue",
                  fontSize: 18,
                  color: "#282a2c"
                }}
              >
                PROFILE
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: "BebasNeue",
                  fontSize: 18,
                  color: "#adadad"
                }}
              >
                ON EMERGENCY! 🔥
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContent}>
          <Image
            source={require("../images/profile-picture.jpg")}
            style={styles.profilepicture}
          />
          <Image
            source={require("../images/profile-icon-red.png")}
            style={styles.profileiconred}
          />
        </View>
        <View style={styles.cardContent}>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardText}>
            <Text style={styles.cardTextSmall}>Avatar. Hello. How are you today? 11:00. Avatar. Hey! I'm fine</Text>
            </Text>
          </View>
          </View>
         </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 25,
    paddingBottom: 0
  },
  profileicon: {
    height: 30,
    width: 30
  },
  profileiconred: {
    height: 30,
    width: 30,
    marginTop: 8
  },
  cardContent: {
    flexDirection: "row",
    paddingHorizontal: 25,
    marginVertical: 8,
    justifyContent: "center"
  },
  profilepicture: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop: 5
  },
  cardLabel: {
    fontFamily: "BebasNeue",
    fontSize: 18,
    color: "#adadad"
  },
  cardText: {
    fontFamily: "BebasNeue",
    fontSize: 30
  },
  cardTextSmall: {
    fontFamily: "Arial",
    fontSize: 13
  },
  graphText: {
    textAlign: "center",
    fontFamily: "BebasNeue",
    fontSize: 13,
    color: "#adadad"
  }
});

export default CardProfile;
