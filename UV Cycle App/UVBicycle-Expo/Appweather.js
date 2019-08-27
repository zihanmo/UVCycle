import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './screens/HomeScreen';
import AppNavigator from './navigation/AppNavigator';





export default class Appweather extends React.Component {
  

  state = {
    isLoading: false,
    temperature: 0,

    error: null
  };




  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Gettig Weather Condtions'
        });
      }
    );
  }
  



  fetchWeather(lat, lon) {

    
    fetch(
 
      `https://api.darksky.net/forecast/1c881bd9bc7c58c09bf74c28b5ffe195/${lat},${lon}?units=si`
     
    )
    
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({
          
          temperature: Math.round(json.daily.data[0].temperatureMax),
          temperature2: Math.round(json.daily.data[1].temperatureMax),
          temperature3: Math.round(json.daily.data[2].temperatureMax),
          temperature4: Math.round(json.daily.data[3].temperatureMax),
          temperature5: Math.round(json.daily.data[4].temperatureMax),
          temperature6: Math.round(json.daily.data[5].temperatureMax),
          weather1: json.daily.data[0].icon,
          weather2: json.daily.data[1].icon,
          weather3: json.daily.data[2].icon,
          weather4: json.daily.data[3].icon,
          weather5: json.daily.data[4].icon,
          weather6: json.daily.data[5].icon,
           time1: UNIXToDay(json.daily.data[0].time*1000),
           time2: UNIXToDay(json.daily.data[1].time*1000),
           time3: UNIXToDay(json.daily.data[2].time*1000),
           time4: UNIXToDay(json.daily.data[3].time*1000),
           time5: UNIXToDay(json.daily.data[4].time*1000),
           time6: UNIXToDay(json.daily.data[5].time*1000),
      
        
        

        
   
    
        
          location: json.timezone,
          
          isLoading: false
        });
      });
     
  }

  

 
  render() {
    
    const { isLoading, location,temperature,temperature2,temperature3,temperature4,temperature5,temperature6,
      weather1, weather2, weather3, weather4, weather5, weather6,time1, time2,time3, time4, time5, time6,image1} = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Fetching The Weather</Text>
          </View>
        ) : (
          <HomeScreen location={location} temperature={temperature} image1={image1} time1={time1} time2={time2} time3={time3} time4={time4} time5={time5} time6={time6} temperature2={temperature2} temperature3={temperature3} temperature4={temperature4}
           temperature5={temperature5} temperature6={temperature6} weather1={weather1} weather2={weather2} weather4={weather4} weather3={weather3} weather5={weather5} weather6={weather6}/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});





  
function UNIXToDay(timestamp) {
  var day = (new Date(timestamp)).getDay()
  
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "ERROR";
  }
}




