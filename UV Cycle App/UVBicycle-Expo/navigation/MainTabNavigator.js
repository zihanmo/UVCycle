import React from 'react';
import { Image,Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import HistoryDiagramScreen from '../screens/HistoryDiagramScreen';
import HistoryWorkout from '../screens/HistoryWorkout'
import ProfileScreen from '../screens/ProfileScreen';
import WeatherScreen from '../screens/WeatherForecastScreen';
import UvForecastScreen from '../screens/UvForecastScreen';
import HomeScreen from '../screens/HomeScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => {
    const image = focused
    ? require('../assets/images/homeiconactive.png')
    : require('../assets/images/homeiconinactive.png')
    return (
        <Image
            source={image}
            style={{height:25, width:25}}
        />
    )
  }
};
HomeStack.path = '';

const HistoryWorkoutStack = createStackNavigator(
  {
    HistoryWorkout: HistoryWorkout,
  },
  config
);
HistoryWorkoutStack.navigationOptions = {
  tabBarLabel: 'UV history',
  tabBarIcon: ({ focused }) =>{
    const image = focused
    ? require('../assets/images/historyiconactive.png')
    : require('../assets/images/historyiconinactive.png')
    return (
        <Image
            source={image}
            style={{height:25, width:25}}
        />
    )
  }
};
HistoryWorkoutStack.path = '';

const UvForecastStack = createStackNavigator(
  {
    UvForecast: UvForecastScreen,
  },
  config
);
UvForecastStack.navigationOptions = {
  tabBarLabel: 'UV forecast',
  tabBarIcon: ({ focused }) => {
    const image = focused
    ? require('../assets/images/forecasticonactive.png')
    : require('../assets/images/forecasticoninactive.png')
    return (
        <Image
            source={image}
            style={{height:25, width:25}}
        />
    )
  }
};
UvForecastStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) =>{
    const image = focused
    ? require('../assets/images/profileiconactive.png')
    : require('../assets/images/profileiconinactive.png')
    return (
        <Image
            source={image}
            style={{height:25, width:25}}
        />
    )
  }
};
ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ProfileStack,
  HistoryWorkoutStack,
  UvForecastStack,
});

tabNavigator.path = '';

export default tabNavigator;
