import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
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
export default class WeatherScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      temperature: 0,
      error: null
    }
  }

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

  /**
   * Fetch data from DarkSky API to get dayly 
   * temperature, weather and the time for each 
   * weather
   */
  fetchWeather(lat, lon) {
    fetch(`https://api.darksky.net/forecast/1c881bd9bc7c58c09bf74c28b5ffe195/${lat},${lon}?units=si`)
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
      <ScrollView style={styles.weatherContainer}>
        <View style={styles.titletex}>
          <Text style={styles.subtitle}>Weather Forecast</Text>
        </View>
        <View style={styles.detailsLabel}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Main")}>
            <Text style={styles.textLink}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.weainfo}>
            {WeatherDescToImageSource(weather1)}
            <Text style={styles.tempText11}>{temperature} °C</Text>
            <Text style={styles.tempText1}>{weather1}</Text>
          </View>
        </View>

        <View style={styles.BodyContainer}>

          <View style={styles.weather1con}>
            <Text style={styles.tempText}>{time2}</Text>
            {WeatherDescToSmallImageSource(weather2)}
            <Text style={styles.tempText}>{temperature2} °C</Text>
          </View>

          <View style={styles.weather1con}>
            <Text style={styles.tempText}>{time3}</Text>
              {WeatherDescToSmallImageSource(weather3)}
            <Text style={styles.tempText}>{temperature3} °C</Text>
          </View>

          <View style={styles.weather1con}>
            <Text style={styles.tempText}>{time4}</Text>
              {WeatherDescToSmallImageSource(weather4)}
            <Text style={styles.tempText}>{temperature4} °C</Text>
          </View>

          <View style={styles.weather1con}>
            <Text style={styles.tempText}>{time5}</Text>
            {WeatherDescToSmallImageSource(weather5)}
            <Text style={styles.tempText}>{temperature5} °C</Text>
          </View>

          <View style={styles.weather1con}>
            <Text style={styles.tempText}>{time6}</Text>
            {WeatherDescToSmallImageSource(weather6)}
            <Text style={styles.tempText}>{temperature6} °C</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

WeatherScreen.navigationOptions = {
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
 /**
   * Convert the UNIX time to the day
   * @param {int} timestamp - the UNIX time from dark sky api
   */
  
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
    paddingBottom: 30,
    marginBottom: 20,
  },

  forcastContainer: {
    alignItems: 'center',
  },

  welcomeImage: {
    width: 165,
    height: 165,
    resizeMode: 'contain',
    paddingBottom:40,
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
    fontSize: 15,
    color: '#000',
    marginTop:17,
    fontWeight: 'bold',
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
    height: "100%",
    backgroundColor: '#ffffff',
  },

  headerContainer: {
    height:"65%",
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
 
  BodyContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:"35%",
    flexDirection: 'row',
    marginTop: 40,
  },

  title: {
    marginTop:17,
    fontSize: 13,
    color: '#1E6738'
  },

  tempText1: {
    fontSize: 24,
    color: '#1E6738',
    marginTop: 7
  },

  tempText11: {
    fontSize: 44,
    color: '#1E6738',
    marginTop:7,
    fontWeight: 'bold',
  },

  weather1con:{
    width:"20%",
    backgroundColor:'#41BD63',
    height:200,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  
  subtitle: {
    paddingTop:40,
    paddingBottom:20,
    fontSize: 33,
    color: '#1E6738',
  },

  weainfo: {
    alignItems: 'center',
    marginTop: 70,
  },

  textLink: {
    fontSize: 16,
    color: '#41BD63',
    marginLeft: 5,
    },

    titletex: {
      alignItems: 'center',
    },
});

 /**
   * Change the weather images based on weather description
   * @param {String} weatherDesc - the weather from DarkSky API
   */
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
      return    <Image style={styles.imageweather}
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

 /**
   * Change the weather images based on weather description
   * @param {String} weatherDesc1 - the weather from DarkSky API
   */
function WeatherDescToSmallImageSource(weatherDesc1) {
  
  switch (weatherDesc1) {
    case "partly-cloudy-day":
      return <Image style={styles.imageweather}
      source={require('../assets/images/partly-cloudy-day1.png')}
      style={styles.welcomeImage2}
    />;
    case "clear-day":
      return <Image style={styles.imageweather}
      source={
        require('../assets/images/clear-day1.png')

      }
      style={styles.welcomeImage2}
    />;
    case "partly-cloudy-night":
      return <Image style={styles.imageweather}
      source={require('../assets/images/partly-cloudy-night1.png')}
      style={styles.welcomeImage2}
    />;
    case "partly-cloudy-day":
      return <Image style={styles.imageweather}
      source={require('../assets/images/partly-cloudy-day1.png')}
      style={styles.welcomeImage2}
    />;
    case "cloudy":
      return <Image style={styles.imageweather}
      source={require('../assets/images/cloudy1.png')}
      style={styles.welcomeImage2}
    />;
    case "rain":
      return <Image style={styles.imageweather}
      source={require('../assets/images/rain1.png')}
      style={styles.welcomeImage2}
    />;
    case "sleet":
      return <Image style={styles.imageweather}
      source={require('../assets/images/sleet1.png')}
      style={styles.welcomeImage2}
    />;
    case "snow":
      return <Image style={styles.imageweather}
      source={require('../assets/images/snow1.png')}
      style={styles.welcomeImage2}
    />;
    case "wind":
      return <Image style={styles.imageweather}
      source={require('../assets/images/wind1.png')}
      style={styles.welcomeImage2}
    />;
    case "fog":
      return <Image style={styles.imageweather}
      source={require('../assets/images/fog1.png')}
      style={styles.welcomeImage2}
    />;
  }
}
