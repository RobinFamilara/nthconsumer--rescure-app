import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Animated,
  Easing,
  PanResponder,
  ScrollView,
  Dimensions,
  Platform,
  Permissions
} from "react-native";
import DeviceInfo from 'react-native-device-info';
// import { MapView, LinearGradient, Location, Permissions } from "expo";
 
if (Platform.OS != "dom") {
  var LinearGradient = require("react-native-linear-gradient").default;
} else {
  var LinearGradient = require("../components/LinearGradient").default;
}
import CardProfile from "./CardProfile";
import CardCoach from "./CardCoach";
import CardHistory from "./CardHistory";

if (Platform.OS != "dom") {
  var MapView = require("react-native-maps").default;
} else {
  var MapView = () => {
    return (
      <Image
        source={require("../images/mapmain.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%", flex: 1 }}
      />
    );
  };
}
let test = [
  {
    "id":1,
	"state":"Alaska",
    "latitude":61.3850,
    "longitude":-152.2683
  },
  {
	  "id":2,
    "state":"Alabama",
    "latitude":32.7990,
    "longitude":-86.8073
  },
  {
	   "id":3,
    "state":"Arkansas",
    "latitude":34.9513,
    "longitude":-92.3809
  },
  {
	   "id":4,
    "state":"Arizona",
    "latitude":33.7712,
    "longitude":-111.3877
  },
  { "id":5,
    "state":"California",
    "latitude":36.1700,
    "longitude":-119.7462
  },
  {"id":6,
    "state":"Colorado",
    "latitude":39.0646,
    "longitude":-105.3272
  },
  {
    "state":"Connecticut",
    "latitude":41.5834,
    "longitude":-72.7622
  },
  {
    "state":"Delaware",
    "latitude":39.3498,
    "longitude":-75.5148
  },
  {
    "state":"Florida",
    "latitude":27.8333,
    "longitude":-81.7170
  },
  {
    "state":"Georgia",
    "latitude":32.9866,
    "longitude":-83.6487
  },
  {
    "state":"Hawaii",
    "latitude":21.1098,
    "longitude":-157.5311
  },
  {
    "state":"Iowa",
    "latitude":42.0046,
    "longitude":-93.2140
  },
  {
    "state":"Idaho",
    "latitude":44.2394,
    "longitude":-114.5103
  },
  {
    "state":"Illinois",
    "latitude":40.3363,
    "longitude":-89.0022
  },
  {
    "state":"Indiana",
    "latitude":39.8647,
    "longitude":-86.2604
  },
  {
    "state":"Kansas",
    "latitude":38.5111,
    "longitude":-96.8005
  },
  {
    "state":"Kentucky",
    "latitude":37.6690,
    "longitude":-84.6514
  },
  {
    "state":"Louisiana",
    "latitude":31.1801,
    "longitude":-91.8749
  },
  {
    "state":"Massachusetts",
    "latitude":42.2373,
    "longitude":-71.5314
  },
  {
    "state":"Maryland",
    "latitude":39.0724,
    "longitude":-76.7902
  },
  {
    "state":"Maine",
    "latitude":44.6074,
    "longitude":-69.3977
  },
  {
    "state":"Michigan",
    "latitude":43.3504,
    "longitude":-84.5603
  },
  {
    "state":"Minnesota",
    "latitude":45.7326,
    "longitude":-93.9196
  },
  {
    "state":"Missouri",
    "latitude":38.4623,
    "longitude":-92.3020
  },
  {
    "state":"Mississippi",
    "latitude":32.7673,
    "longitude":-89.6812
  },
  {
    "state":"Montana",
    "latitude":46.9048,
    "longitude":-110.3261
  },
  {
    "state":"North Carolina",
    "latitude":35.6411,
    "longitude":-79.8431
  },
  {
    "state":"North Dakota",
    "latitude":47.5362,
    "longitude":-99.7930
  },
  {
    "state":"Nebraska",
    "latitude":41.1289,
    "longitude":-98.2883
  },
  {
    "state":"New Hampshire",
    "latitude":43.4108,
    "longitude":-71.5653
  },
  {
    "state":"New Jersey",
    "latitude":40.3140,
    "longitude":-74.5089
  },
  {
    "state":"New Mexico",
    "latitude":34.8375,
    "longitude":-106.2371
  },
  {
    "state":"Nevada",
    "latitude":38.4199,
    "longitude":-117.1219
  },
  {
    "state":"New York",
    "latitude":42.1497,
    "longitude":-74.9384
  },
  {
    "state":"Ohio",
    "latitude":40.3736,
    "longitude":-82.7755
  },
  {
    "state":"Oklahoma",
    "latitude":35.5376,
    "longitude":-96.9247
  },
  {
    "state":"Oregon",
    "latitude":44.5672,
    "longitude":-122.1269
  },
  {
    "state":"Pennsylvania",
    "latitude":40.5773,
    "longitude":-77.2640
  },
  {
    "state":"Rhode Island",
    "latitude":41.6772,
    "longitude":-71.5101
  },
  {
    "state":"South Carolina",
    "latitude":33.8191,
    "longitude":-80.9066
  },
  {
    "state":"South Dakota",
    "latitude":44.2853,
    "longitude":-99.4632
  },
  {
    "state":"Tennessee",
    "latitude":35.7449,
    "longitude":-86.7489
  },
  {
    "state":"Texas",
    "latitude":31.1060,
    "longitude":-97.6475
  },
  {
    "state":"Utah",
    "latitude":40.1135,
    "longitude":-111.8535
  },
  {
    "state":"Virginia",
    "latitude":37.7680,
    "longitude":-78.2057
  },
  {
    "state":"Vermont",
    "latitude":44.0407,
    "longitude":-72.7093
  },
  {
    "state":"Washington",
    "latitude":47.3917,
    "longitude":-121.5708
  },
  {
    "state":"Wisconsin",
    "latitude":44.2563,
    "longitude":-89.6385
  },
  {
    "state":"West Virginia",
    "latitude":38.4680,
    "longitude":-80.9696
  },
  {
    "state":"Wyoming",
    "latitude":42.7475,
    "longitude":-107.2085
  }
]
const windowWidth = Dimensions.get("window").width;
const uuid = DeviceInfo.getUniqueID();
class HomeScreen extends React.Component {
	debugger;
  constructor(props) {
    super(props);
    this.state = {
		

      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
      pulse: new Animated.Value(0),
      carousel: false,
      marker: {
         latitude: 36.1700,
        longitude: -119.7462,
      },
      region: {
        latitude: 36.1700,
        longitude: -119.7462,
        latitudeDelta: 100,
        longitudeDelta: 100
      }
    };
  }

  isDropZone(gesture) {
    return gesture.moveY > 0 && gesture.moveY < 350;
  }

  componentWillMount() {
	  debugger;
	  
	  fetch('https://imfpush.ng.bluemix.net/imfpush/v1/apps/25b3690e-6d01-4fae-8527-833a8c634f54/devices', {  
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
	'clientSecret':'f468cbc8-cfc3-45b1-8693-6a6a82fe9ee8'
  },
  body: JSON.stringify({"deviceId":uuid,"platform":"G","token":"abcd","userId":"SampleUser"})
}).then(function(response) {
	debugger;
    return response.json();
  }).then(function(data) {
debugger;
  });
    this.mover = Animated.event([null, { dy: this.state.pan.y }]);
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => {
        return true;
      },
      onMoveShouldSetPanResponderCapture: () => {
        if (!this.state.carousel) {
          return true;
        }
        return false;
      },

      onPanResponderGrant: (e, gestureState) => {
        if (!this.state.carousel) {
          this.state.pan.setOffset({
            x: this.state.pan.x._value,
            y: this.state.pan.y._value
          });
          this.state.pan.setValue({ x: 0, y: 0 });
        }
      },
      onPanResponderMove: (e, gesture) => {
        if (this.state.carousel) {
          return;
        }
        return this.mover(e, gesture);
      },
      onPanResponderRelease: (e, gesture) => {
        // Set the initial value to the current state
        if (this.isDropZone(gesture)) {
          Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start(
            () => {
              this.state.pan.flattenOffset();
            }
          );
          this.setState({
            carousel: true
          });
        } else {
          Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();
          this.setState({
            carousel: true
          });
        }
      }
    });
    this._panResponder2 = PanResponder.create({
      onMoveShouldSetResponderCapture: () => {
        return true;
      },
      onMoveShouldSetPanResponderCapture: () => {
        return true;
      },

      // Initially, set the value of x and y to 0 (the center of the screen)
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setValue({ x: 0, y: 0 });
      },

      onPanResponderMove: (e, gesture) => {
        if (this.state.carousel) {
          return;
        }
        return this.mover(e, gesture);
      },

      onPanResponderRelease: (e, gesture) => {
        if (!this.isDropZone(gesture)) {
          Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();
          this.setState({
            carousel: false
          });
        }
      }
    });
  }
  componentDidMount() {
	  navigator.geolocation.getCurrentPosition((position) => {
    this.setState({position: {longitude: position.longitude, latitude: position.latitude}});

}, (error) => {
    alert(JSON.stringify(error))
}, {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 1000
});
	  
    setInterval(() => {
      Animated.sequence([
        Animated.spring(this.state.pulse, { toValue: 1, friction: 1 }),
        Animated.spring(this.state.pulse, { toValue: 0.8 })
      ]).start();
    }, 2000);
  }
  onRegionChange = region => {
    this.setState({ region });
  };
  onBegin = () => {
    this.props.navigation.push("BeginRun");
  };
  onHistory = () => {
    this.props.navigation.push("History");
  };
  render() {
    let { pan, scale } = this.state;
    let [translateX, translateY] = [pan.x, pan.y];
    console.log("Platform", Platform.OS);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <MapView
          style={{ flex: 1, marginBottom: 20 }}
          region={this.state.region}
          showsUserLocation = {true}
                    followUserLocation = {true}
                    showsMyLocationButton = {true}
                    zoomEnabled = {true}
        >
          <MapView.Marker coordinate={this.state.marker}  image={require('../images/people_icon.png')} title={"My Location"}>
           
          </MapView.Marker>
		  {test.map(marker => (
    <MapView.Marker
      coordinate={{latitude :marker.latitude,longitude:marker.longitude}}
      title={marker.title}
	  image={require('../images/people_icon.png')}
      description={marker.description}
    />
  ))}
        </MapView>
        <View style={styles.toolbar}>
          <LinearGradient
            colors={[
              "rgba(250,203,102,1)",
              "rgba(250,203,102,0.8)",
              "rgba(250,203,102,0)"
            ]}
            style={{
              height: 50,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0
            }}
          />
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../images/left-icon.png")}
              style={styles.logoicon}
            />
          </View>
          <View
            style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../images/logonike.png")}
              style={styles.logosmall}
            />
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={require("../images/right-icon.png")}
              style={styles.logoicon}
            />
          </View>
        </View>
        <View style={styles.content}>
          <Animated.View
            style={{
              transform: [
                { translateX },
                { translateY },
                { rotate: "0deg" },
                { scale }
              ],
              marginBottom: -120
            }}
            {...this._panResponder.panHandlers}
          >
            
          </Animated.View>
        </View>
        <View style={styles.footer}>
          <LinearGradient
            pointerEvents="none"
            colors={[
              "rgba(255,255,255,0)",
              "rgba(255,255,255,0.8)",
              "rgba(255,255,255,1)",
              "rgba(255,255,255,1)"
            ]}
            style={{
              height: 50,
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0
            }}
          />
             <TouchableOpacity
            style={styles.buttonRedWrapper}
            onPress={this.onBegin}
          >
            <View
              style={styles.buttonRed}
              shadowColor={"#f02733"}
              shadowOffset={{ width: 0, height: 10 }}
              shadowOpacity={0.4}
              shadowRadius={20}
            >
              <Text style={styles.buttonRedText}>DASHBOARD</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logosmall: {
    width: 60,
    height: 35
  },
  logoicon: {
    height: 30,
    width: 30
  },
  toolbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
    flexDirection: "row",
    backgroundColor: "transparent",
    height: 50
  },
  footer: {
    padding: 30,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 60
  },
  content: {
    padding: 30,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 0
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
    textAlign: "center",
    fontSize: 24
  }
});

export default HomeScreen;
