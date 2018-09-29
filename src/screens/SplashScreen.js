import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  NativeModules,
  Platform
} from "react-native";

const FontLoader = NativeModules.FontLoader;

class SplashScreen extends React.Component {
  componentDidMount() {
	  debugger;
    FontLoader &&
      FontLoader.loadFont("Muli", "../src/fonts/Muli-Regular.ttf");
    setTimeout(() => {
      this.props.navigation.push("BeginRun");
    }, 1500);
    console.log(Platform.OS);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../images/logonike.png")} style={styles.logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 500,
    height: 500
  }
});

export default SplashScreen;
