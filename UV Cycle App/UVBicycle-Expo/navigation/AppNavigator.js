import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen'
import Information from '../screens/InstructionScreen'

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Info: Information,
    Login: Login,
    Signup: Signup,
    Main: MainTabNavigator,
    
  })
);
