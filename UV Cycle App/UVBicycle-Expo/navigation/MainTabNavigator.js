import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WeatherScreen from '../screens/WeatherForecastScreen';
import InstructionScreen from '../screens/InstructionScreen';
import UvForecastScreen from '../screens/UvForecastScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const WeatherStack = createStackNavigator(
  {
    Weather: WeatherScreen,
  },
  config
);

WeatherStack.navigationOptions = {
  tabBarLabel: 'Weather',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

WeatherStack.path = '';


const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';





const UvForecastStack = createStackNavigator(
  {
    Links: UvForecastScreen,
  },
  config
);

UvForecastStack.navigationOptions = {
  tabBarLabel: 'UV forecast',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
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
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
};

ProfileStack.path = '';


const InstructionStack = createStackNavigator(
  {
    Settings: InstructionScreen,
  },
  config
);

InstructionStack.navigationOptions = {
  tabBarLabel: 'README',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};
InstructionStack.path = '';


const tabNavigator = createBottomTabNavigator({
  WeatherStack,
  LinksStack,
  ProfileStack,
  LinksStack,
  UvForecastStack,
  InstructionStack
});

tabNavigator.path = '';

export default tabNavigator;
