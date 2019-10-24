import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class UvForecastScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      temperature: 0,
      error: null
    }
  }

  /**
   * Fetch location before loading the page
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
   * Fetch data from DarkSky API to get hourly 
   * UV index and the time for each index
   */

  fetchWeather(lat, lon) {
    fetch(`https://api.darksky.net/forecast/1c881bd9bc7c58c09bf74c28b5ffe195/${lat},${lon}?units=si`)
    .then(res => res.json())
    .then(json => {
      // console.log(json);
      this.setState({ 
      
        uv1: json.hourly.data[0].uvIndex,
        uv2: json.hourly.data[1].uvIndex,
        uv3: json.hourly.data[2].uvIndex,
        uv4: json.hourly.data[3].uvIndex,
        uv5: json.hourly.data[4].uvIndex,
        uv6: json.hourly.data[5].uvIndex,
     
      
        time1: UNIXToDay(json.hourly.data[0].time*1000),
        time2: UNIXToDay(json.hourly.data[1].time*1000),
        time3: UNIXToDay(json.hourly.data[2].time*1000),
        time4: UNIXToDay(json.hourly.data[3].time*1000),
        time5: UNIXToDay(json.hourly.data[4].time*1000),
        time6: UNIXToDay(json.hourly.data[5].time*1000),
        location: json.timezone,
        
        isLoading: false
      });
    });
  }

  render() {
    const { isLoading,time1, time2,time3, time4, time5, time6,image1,uv1, uv2,uv3,uv4,uv5,uv6} = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Fetching The Weather</Text>
          </View>
        ) : (
          <HomeScreen image1={image1} time1={time1} time2={time2} time3={time3} time4={time4} time5={time5} time6={time6} uv1={uv1} uv2={uv2} uv3={uv3} uv4={uv4} uv5={uv5} uv6={uv6}/>
        )}
      </View>
    );
  }
}
UvForecastScreen.navigationOptions = {
  header: null,
};

export function HomeScreen({image1, time1,uv1,uv2,uv3, uv4,uv5, uv6, time2,time3, time4,time5, time6}) {

  return (
    <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.subtitle}>UV Forecast</Text>
      </View>
      <View style={styles.UVbigContainer}>
        <View 
          style={{  
            height:"13%",
            width:"90%",
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom:12,
            borderRadius:20,
            justifyContent: 'center',backgroundColor: ChangeColorBasedOnUv(uv1)}}>
          <Text style={styles.timeText}>{time1}:00</Text>
          <Text style={styles.tempText}>{uv1}</Text>
        </View>

        <View style={{  
          height:"13%",
          width:"90%",
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom:12,
          borderRadius:20,
          justifyContent: 'center',backgroundColor: ChangeColorBasedOnUv(uv2)}}>
          <Text style={styles.timeText}>{time2}:00</Text>
          <Text style={styles.tempText}>{uv2}</Text>
        </View>

        <View style={{  
          height:"13%",
          width:"90%",
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom:12,
          borderRadius:20,
          justifyContent: 'center',backgroundColor: ChangeColorBasedOnUv(uv3)}}>
            <Text style={styles.timeText}>{time3}:00</Text>
            <Text style={styles.tempText}>{uv3}</Text>
        </View>

        <View style={{  
          height:"13%",
          width:"90%",
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom:12,
          borderRadius:20,
          justifyContent: 'center',backgroundColor: ChangeColorBasedOnUv(uv4)}}>
            <Text style={styles.timeText}>{time4}:00</Text>
            <Text style={styles.tempText}>{uv4}</Text>
        </View>

        <View style={{  
          height:"13%",
          width:"90%",
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom:12,
          borderRadius:20,
          justifyContent: 'center',backgroundColor: ChangeColorBasedOnUv(uv5)}}>
          <Text style={styles.timeText}>{time5}:00</Text>
          <Text style={styles.tempText}>{uv5}</Text>
        </View>

        <View style={{  
          height:"13%",
          width:"90%",
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom:12,
          borderRadius:20,
          justifyContent: 'center',backgroundColor: ChangeColorBasedOnUv(uv6)}}>
          <Text style={styles.timeText}>{time6}:00</Text>
          <Text style={styles.tempText}>{uv6}</Text>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
/**
 * Convert the UNIX time to the day
 * @param {Integer} timestamp - the UNIX time from dark sky api
 */
export function UNIXToDay(timestamp) {
  var day = (new Date(timestamp)).getHours()
    return day;
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
  UVContainer1:{
    height:"15%",
    width:"70%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UVbigContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    height:"85%",
    width:"90%",
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
    fontSize: 33,
    color: '#fff',
    marginLeft:"50%",
  },
  timeText: {
    fontSize: 33,
    color: '#fff',
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
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
    backgroundColor: '#ffffff',
   
  },
  headerContainer: {
    height:"15%",
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  BodyContainer: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    height:"35%",
    flexDirection: 'row'
  },
  title: {
    marginTop:17,
    fontSize: 13,
    color: '#1E6738'
  },
  tempText1: {
    fontSize: 24,
    color: '#1E6738',
    marginTop:7
  },
  tempText11: {
    fontSize: 44,
    color: '#1E6738',
    marginTop:7,
    fontWeight: 'bold',
  },
  weather1con:{
    width:"20%",
    backgroundColor:'#000',
    height:210,
    alignItems: 'center',
    borderColor: '#000',
    fontWeight: 'bold',
  },
  subtitle: {
  paddingTop:40,
  paddingBottom:20,
    fontSize: 33,
    color: '#1E6738',
  },
  imageweather2:{
    width: 10, 
    height: 50
  },
});

/**
 * change the color of UV container based on the UV index
 * @param {Integer} UVindex - the forecast UV index from API
 */
export function ChangeColorBasedOnUv(UVindex) {
  
  switch (UVindex) {
    case 0:
      return "#A5CF2E";
    case 1:
      return "#A5CF2E";
    case 2:
      return "#A5CF2E";
    case 3:
      return "#EBD826";
    case 4:
      return "#EBD826";
    case 5:
      return "#EBD826";
    case 6:
      return "#FEA71A";
    case 7:
      return "#FEA71A";
    case 8:
      return "#FE4C1E";
    case 9:
      return "#FE4C1Ed";
    case 10:
      return "#FE4C1E";
    case 11:
      return "#B568B6";
    default:
        return "#B568B6";

 
  }
}



export function UNIXToDay2(timestamp) {
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