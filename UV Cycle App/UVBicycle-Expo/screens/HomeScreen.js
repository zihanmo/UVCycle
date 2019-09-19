import React, {Component} from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, Form } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      temperature: 0,
      error: null
    }
  }

  /**
   * Fetch weather according to location before loading the page
   */
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
   * Fetch data from Dark Sky API for temperature, location and weather
   * @param {Float} lat latitude
   * @param {Float} lon longitude
   */
  fetchWeather(lat, lon) {
    fetch(`https://api.darksky.net/forecast/1c881bd9bc7c58c09bf74c28b5ffe195/${lat},${lon}?units=si`)
    .then(res => res.json())
    .then(json => {
      this.setState({ 
        temperature: Math.round(json.daily.data[0].temperatureMax),
        weather1: json.daily.data[0].icon,
        location: json.timezone,
        isLoading: false
      });
    });
  }
  // Views displayed in the home screen
  render() {
    const { location,temperature, weather1 } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.infoContainer}>
          <View style = {styles.weather}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Weather")}>
            {WeatherDescToImageSource(weather1)}
          </TouchableOpacity>
          </View>
          <View style = {styles.tempnloc}>
            <Text style = {styles.tempstyle}> {temperature}°C </Text>
            <View style = {styles.location}>
              <Image style = {styles.loc} source = {require('../assets/images/loc.png')}/>
              <Text style = {styles.loctex}> {location} </Text>
            </View> 
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.infoButton} 
            onPress={()=>this.props.navigation.navigate("Info")}>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
              size={30}
              style={{ marginBottom: -2, color: 'gray' }}
            />
          </TouchableOpacity>
        </View>

        <View style = {styles.dash}>
          <View style = {styles.dashcontainer}>
            <Image style = {styles.maindash} source = {require('../assets/images/low.png')}/>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.sharebtn}>Refresh</Text>
          </TouchableOpacity>
        </View>  
        <View style = {styles.timecontainer}>
          <View style = {styles.timetex}>
            <Text style = {styles.tex1}>Time Elapsed</Text>
            <Text style = {styles.tex2}>Exposed to UV</Text>
          </View>
          <View style = {styles.howlong}>
            <Text style = {styles.timespent}>9:41</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoContainer: {
    backgroundColor: '#41BD63',
    height: 200,
    flexDirection: 'row',
  },
  timecontainer: {
    backgroundColor: '#41BD63',
    height: 200,
    marginTop: 40,
    flexDirection: 'row',
  },
  weather: {
    paddingTop: 80,
    paddingLeft: 30,
  },
  tempstyle: {
    color: '#fff',
    fontSize: 30,
  },
  tempnloc: {
    paddingTop: 80,
    paddingLeft: 20,
  },
  loctex: {
    color: '#fff',
    fontSize: 20,
  },
  loc: {
    width: 15,
    height: 21,
  },
  location: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  dashcontainer: {},
  maindash: {
    width: 300,
    height: 150,
  },
  dash: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  button: {
    backgroundColor: '#41BD63',
    alignItems: 'center',
    borderRadius: 3,
    margin: 30,
    marginTop: 50,
  },
  sharebtn: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  timespent: {
    fontSize: 60,
    color: '#fff',
    textShadowColor: '#78756f',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  timetex: {
    alignItems: 'center',
    margin: 40,
  },
  tex1: {
    color: '#fff',
    fontSize: 30,
  },
  tex2: {
    color: '#fff',
    fontSize: 25,
  },
  howlong: {
    marginTop: 35,
  },
  imageweather: {
    width: 80,
    height: 80,
  },
  infoButton: {
    color: 'grey',
    marginTop: 10,
    marginRight: 10,
    alignSelf: 'flex-end'
  }
});

/**
 * Change weather image based on weather description 
 * @param {String} weatherDesc - weather description from the API
 */
function WeatherDescToImageSource(weatherDesc) {
  
  switch (weatherDesc) {

    case "partly-cloudy-day":
      return    <Image style={styles.imageweather}
      source={ require('../assets/images/partly-cloudy-day.png')}
    />;

    case "clear-day":
      return    <Image style={styles.imageweather}
      source={ require('../assets/images/clear-day.png')}
    />;

    case "partly-cloudy-night":
      return    <Image style={styles.imageweather}
      source={require('../assets/images/partly-cloudy-night.png')}
    />;

    case "partly-cloudy-day":
      return    <Image style={styles.imageweather}
      source={require('../assets/images/partly-cloudy-day.png')}
    />;

    case "cloudy":
      return    <Image style={styles.imageweather}
      source={require('../assets/images/cloudy.png')}
    />;

    case "rain":
      return    <Image style={styles.imageweather}
      source={require('../assets/images/rain.png')}
    />;

    case "sleet":
      return    <Image style={styles.imageweather}
      source={require('../assets/images/sleet.png')}
    />;

    case "snow":
      return    <Image style={styles.imageweather}
      source={require('../assets/images/snow.png')}
    />;

    case "wind":
      return    <Image style={styles.imageweather}
      source={require('../assets/images/wind.png')}
    />;

    case "fog":
      return    <Image style={styles.imageweather}
      source={require('../assets/images/fog.png')}
    />;
  }
}