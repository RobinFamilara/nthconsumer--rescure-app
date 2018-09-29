import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Platform
} from "react-native";
// import { LinearGradient } from "expo";
if (Platform.OS != "dom") {
  var LinearGradient = require("react-native-linear-gradient").default;
} else {
  var LinearGradient = require("../components/LinearGradient").default;
}
import CardCoach from "./CardCoach";
class BeginRunScreen extends React.Component {
  onBack = () => {
    this.props.navigation.pop();
  };

  onPeopleZones = () => {
    this.props.navigation.push("Home");
  };
 onEvacuationcenter = () => {
    this.props.navigation.push("Evacuationcenter");
  };

  componentDidMount() {
    //this.refs.scrollView.scrollTo({ y: 0, x: 85, animated: true });
  }

  render() {
    return (
     <View>
      <View  style={{flex: 1, flexDirection: 'row',marginTop:30, height:10}} >

        <View
                  style={{
                  height: 130,
                  width: 130,
                    marginLeft: 30,
                    marginRight: 20,
					
                  }}
                ><LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3C8FFB','#3E9EFB', '#41BBFD']}  style={styles.linearGradient}>
                 <Image
                  source={require("../images/Police.png")}
                  style={styles.iconmain}
                />
                <Text style={[styles.text, { color: "#fff", fontSize: 16 }]}>
                  Police
                </Text>
				</LinearGradient>
                </View>
	            <View style={{ width: 130, height: 130,  marginLeft: 30,
                    marginRight: 20,
					marginBottom:10}} >
                 <LinearGradient colors={['#E470D5', '#AC7AE4', '#6753E6']}  style={styles.linearGradient} >
                   <Image
                  source={require("../images/distance-icon.png")}
                  style={styles.iconmain}
                />
                <Text onPress={this.onPeopleZones} style={[styles.text, { color: "#fff", fontSize: 16 }]}>
                  Rescue Team
                </Text>
				</LinearGradient>
                </View>
				</View>
				<View style={{background:'black',width:50,height:50,left:170,top:150,position:'absolute'}} ><Text > + </Text></View>
				 <View  style={{flex: 1, flexDirection: 'row',marginTop:150,height:10,marginBottom:30}} >
           <View
                  style={{
                   height: 130,
                  width: 130,
                    marginLeft: 30,
                    marginRight: 16,
					
                  }}
                >
                 <LinearGradient colors={['#25C2E0', '#2CE7D6', '#2FF6D1']}  style={styles.linearGradient}>
                <Image
                  source={require("../images/Evacuationcentre.png")}
                  style={styles.iconmain}
                />
                <Text onPress ={this.onEvacuationcenter} style={[styles.text, { color: "#fff", fontSize: 16 }]} >
                   Hospitals
                </Text>
				</LinearGradient>
                </View>
           <View style={{ width: 130, height: 130,  marginLeft: 30,
                    marginRight: 20,
					marginBottom:10 }}>
                <LinearGradient colors={['#FF9F45', '#FF8A47', '#FF8049']}  style={styles.linearGradient}>
                 <Image
                  source={require("../images/rescue.png")}
                  style={styles.iconmain}
                />
                <Text style={[styles.text, { color: "#fff", fontSize: 16 }]}>
                  Fire & Safety
                </Text>
				</LinearGradient>
                </View>
    </View>
        
	</View>
    );
  }
}

const styles = StyleSheet.create({
	  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
	borderRadius:0
  },
   linearGradient: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 15,
    borderRadius: 25
  },
   toolbar: {
    flexDirection: "row",
    backgroundColor: "transparent",
    height: 60
  },
  logosmall: {
    width: 40,
    height: 15
  },
  logoicon: {
    height: 30,
    width: 30
  },
  mainBar: {
    height: 160,
    borderBottomWidth: 0.5,
    borderBottomColor: "#555",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25
  },
  text: {
    backgroundColor: "transparent",
    fontFamily: "BebasNeue",
	alignItems: "center",
	justifyContent: "center"
  },
  iconmain: {
    width: 70,
    height: 70
  },
  optionBar: {
    height: 130,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#555",
    paddingBottom: 30,
    paddingHorizontal: 15
  },
  iconoption: {
    width: 32,
    height: 32
  },
  iconplaylist: {
    width: 35,
    height: 35
  },
  playlistBar: {
    paddingTop: 15,
    marginBottom: 10
  },
  imageplaylist: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  buttonRed: {
    backgroundColor: "#f02733",
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonRedText: {
    color: "#fff",
    fontFamily: "BebasNeue",
    fontSize: 24
  }
});

export default BeginRunScreen;
