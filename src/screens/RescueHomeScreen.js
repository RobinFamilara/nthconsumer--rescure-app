/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, FlatList ,View,Image} from 'react-native';
import { Card,ListItem,Avatar  } from 'react-native-material-ui';
import LinearGradient from 'react-native-linear-gradient';
export default class RescueHomeScreen extends Component<Props> {
	
	constructor(props) {
    super(props);

    this.state = {
		responseData:[]
	}
  }
componentWillMount(){
 fetch('https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/National_Shelter_System_Facilities/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,ID,NAME,ADDRESS,ADDRESS2,CITY,STATE,ZIP,ZIP4,TELEPHONE,TYPE,STATUS,POPULATION,COUNTY,COUNTYFIPS,COUNTRY,LATITUDE,LONGITUDE,NAICS_CODE,NAICS_DESC,SOURCE,SOURCEDATE,VAL_METHOD,VAL_DATE,WEBSITE,FEMA_ID,ARC_ID,EVAC_CAP,POST_CAP,SURGE&outSR=4326&f=json').then((response) => {
	 debugger;
	 return response.json();
    // This in the other hand will cause additional rerender,
    // since fetch is async and state is set after request completes.
    
  }).then(data => {
	  this.setState({ responseData: data.features});
  // Work with JSON data here
  console.log(data);
}).catch(err => {
  // Do something for an error here
});

}	
	
	
	 render() {
	  if(!this.state.responseData.length)
		{
            return null;
        }
		  
		  
   return (	
 <FlatList
        data={this.state.responseData}
        renderItem={({ item }) => (
          <View><Card>
   <Text style={[styles.text, { color: "#000", fontSize: 16 }]}>{item.attributes.NAME}</Text>
   <Text style={[styles.text, { color: "#000", fontSize: 14 }]}>{item.attributes.ADDRESS}</Text><Text style={[styles.text, { color: "#000", fontSize: 14 }]}>{item.attributes.CITY}</Text><Text style={[styles.text, { color: "#000", fontSize: 14 }]}>{item.attributes.STATE}</Text><Text style={[styles.text, { color: "#000", fontSize: 14 }]}>{item.attributes.COUNTRY}</Text><Text style={[styles.text, { color: "#000", fontSize: 14 }]}>{item.attributes.FEMA_ID}</Text></Card></View>
        )}
      />

    )

  return (
    <View>
      <View>
      {lapsList}
      </View>
    </View>
  )
}
	

}


const styles = StyleSheet.create({
	
});