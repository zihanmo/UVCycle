import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import ConfigurationScreen from '../screens/ConfigurationScreen';
import LinksScreen from '../screens/LinksScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WeatherScreen from '../screens/HomeScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ConfigurationStack = createStackNavigator(
  {
    Settings: ConfigurationScreen,
  },
  config
);

ConfigurationStack.navigationOptions = {
  tabBarLabel: 'Configuration',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ConfigurationStack.path = '';

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



const tabNavigator = createBottomTabNavigator({
  ConfigurationStack,
  WeatherStack,
  LinksStack,
  ProfileStack
});

tabNavigator.path = '';

export default tabNavigator;
