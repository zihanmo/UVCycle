import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PropTypes from 'prop-types';


import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';


export default function HomeScreen({image1, time2,time3, time4,time5, time6,weather1, temperature,location,temperature2,weather2, temperature3,weather3, temperature4,weather4, temperature5,weather5,temperature6,weather6,}) {

  return (
    
    
    



        <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
      <Text style={styles.subtitle}>Weather Forecast</Text>
  


   
      {WeatherDescToImageSource(weather1)}

      


    

      <Text style={styles.tempText11}>{temperature} C</Text>
      <Text style={styles.tempText1}>{weather1}</Text>
      </View>

      
      <View style={styles.BodyContainer}>

      <View style={styles.weather1con}>
      <Text style={styles.tempText}>{time2}</Text>
      {WeatherDescToSmallImageSource(weather2)}
      <Text style={styles.tempText}>{temperature2} C</Text>
    
      </View>

      <View style={styles.weather1con}>
      <Text style={styles.tempText}>{time3}</Text>
      {WeatherDescToSmallImageSource(weather3)}
      <Text style={styles.tempText}>{temperature3} C</Text>
 
      </View>

      <View style={styles.weather1con}>
      <Text style={styles.tempText}>{time4}</Text>
      {WeatherDescToSmallImageSource(weather4)}
      <Text style={styles.tempText}>{temperature4} C</Text>

      </View>

      <View style={styles.weather1con}>
      <Text style={styles.tempText}>{time5}</Text>
      {WeatherDescToSmallImageSource(weather5)}
      <Text style={styles.tempText}>{temperature5} C</Text>
   
      </View>

      <View style={styles.weather1con}>
      <Text style={styles.tempText}>{time6}</Text>
      {WeatherDescToSmallImageSource(weather6)}
      <Text style={styles.tempText}>{temperature6} C</Text>
   
      </View>
      </View>
      
    
    </View>
   
     
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    marginTop: 30,
  },
  heardercontainer: {
    paddingTop: 40,
  },
 
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  forcastContainer: {

    alignItems: 'center',
  },
  welcomeImage: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
    marginTop: 3,

  },

  welcomeImage2: {
    width: 60,
    height: 50,
    resizeMode: 'contain',
    marginTop: 13,
    marginBottom: 30,
   
  },


  forcastImage: {
    width: 350,
    height: 200,

  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 30,
    color: 'black',
    lineHeight: 50,
    textAlign: 'center',
  },


  tempText: {
    fontSize: 13,
    color: '#fff',
    marginTop:17,

  },


  weathertext: {
    fontSize: 20,
    color: 'blue',
    lineHeight: 50,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  weatherContainer: {
   

    backgroundColor: '#ffffff',
   
  },
  headerContainer: {

    alignItems: 'center',
  
  },
 
  BodyContainer: {
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row'
  },
  title: {
    marginTop:17,
    fontSize: 13,
    color: '#6495ed'
  },
  tempText1: {
    fontSize: 24,
    color: '#6495ed',
    marginTop:7
  },

  tempText11: {
    fontSize: 44,
    color: '#6495ed',
    marginTop:7,
    fontWeight: 'bold',
  },

  weather1con:{

  width:"20%",
  backgroundColor:'#000',
  height:190,
    alignItems: 'center',
    borderColor: '#000'
  },
  
  subtitle: {
    marginTop:60,
    marginBottom:20,
    fontSize: 33,
    color: '#000'
    
  },
  imageweather2:{
    width: 10, 
    height: 50
  },



});



  

function WeatherDescToImageSource(weatherDesc) {
  
  switch (weatherDesc) {
    case "partly-cloudy-day":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/partly-cloudy-day.png')

      }
      style={styles.welcomeImage}
    />;
    case "clear-day":
      return    <Image style={styles.imageweather2}
      source={
        require('../assets/images/clear-day.png')

      }
      style={styles.welcomeImage}
    />;
    case "partly-cloudy-night":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/partly-cloudy-night.png')

      }
      style={styles.welcomeImage}
    />;
    case "partly-cloudy-day":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/partly-cloudy-day.png')

      }
      style={styles.welcomeImage}
    />;
    case "cloudy":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/cloudy.png')

      }
      style={styles.welcomeImage}
    />;
    case "rain":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/rain.png')

      }
      style={styles.welcomeImage}
    />;
    case "sleet":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/sleet.png')

      }
      style={styles.welcomeImage}
    />;
    case "snow":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/snow.png')

      }
      style={styles.welcomeImage}
    />;
    case "wind":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/wind.png')

      }
      style={styles.welcomeImage}
    />;
    case "fog":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/fog.png')

      }
      style={styles.welcomeImage}
    />;





  }
}












function WeatherDescToSmallImageSource(weatherDesc1) {
  
  switch (weatherDesc1) {
    case "partly-cloudy-day":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/partly-cloudy-day1.png')

      }
      style={styles.welcomeImage2}
    />;
    case "clear-day":
      return    <Image style={styles.imageweather2}
      source={
        require('../assets/images/clear-day1.png')

      }
      style={styles.welcomeImage2}
    />;
    case "partly-cloudy-night":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/partly-cloudy-night1.png')

      }
      style={styles.welcomeImage2}
    />;
    case "partly-cloudy-day":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/partly-cloudy-day1.png')

      }
      style={styles.welcomeImage2}
    />;
    case "cloudy":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/cloudy1.png')

      }
      style={styles.welcomeImage2}
    />;
    case "rain":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/rain1.png')

      }
      style={styles.welcomeImage2}
    />;
    case "sleet":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/sleet1.png')

      }
      style={styles.welcomeImage2}
    />;
    case "snow":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/snow1.png')

      }
      style={styles.welcomeImage2}
    />;
    case "wind":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/wind1.png')

      }
      style={styles.welcomeImage2}
    />;
    case "fog":
      return    <Image style={styles.imageweather}
      source={
        require('../assets/images/fog1.png')

      }
      style={styles.welcomeImage2}
    />;





  }
}
