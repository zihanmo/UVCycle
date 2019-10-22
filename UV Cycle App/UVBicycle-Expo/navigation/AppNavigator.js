import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen'
import Information from '../screens/InstructionScreen'
import Weather from '../screens/WeatherForecastScreen'
import HistoryPlot from '../screens/HistoryDiagramScreen'

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: Login,
    Signup: Signup,
    Main: MainTabNavigator,
    Info: Information,
    Weather: Weather,
    HistoryPlot: HistoryPlot,
  })
);
