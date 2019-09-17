import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Form
} from 'react-native';
import { whileStatement } from '@babel/types';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      
      <ScrollView style={styles.container}>
          <View style={styles.infoContainer}>
            <View style = {styles.weather}>
              <Image style = {styles.weatherpic} source = {require('../assets/images/clear-day.png')}/>
            </View>
            <View style = {styles.tempnloc}>
              <Text style = {styles.tempstyle}> 25°C </Text>
              <View style = {styles.location}>
                <Image style = {styles.loc} source = {require('../assets/images/homeiconinactive.png')}/>
                <Text style = {styles.loctex}> University of Queensland </Text>
              </View> 
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Info")}>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
              size={25}
              style={{ marginBottom: -2 }}
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

  weatherpic: {
    width: 80,
    height: 80,
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
    width: 20,
    height: 20,
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

});
