import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import SignupScreen from '../screens/SignupScreen';
import LinksScreen from '../screens/LinksScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WeatherScreen from '../screens/HomeScreen';
import InstructionScreen from '../screens/InstructionScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const SignupStack = createStackNavigator(
  {
    Settings: SignupScreen,
  },
  config
);

SignupStack.navigationOptions = {
  tabBarLabel: 'Signup',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SignupStack.path = '';


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
  SignupStack,
  WeatherStack,
  LinksStack,
  ProfileStack,
  LinksStack,
  InstructionStack
});

tabNavigator.path = '';

export default tabNavigator;
