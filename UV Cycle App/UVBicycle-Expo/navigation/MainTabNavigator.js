import React from 'react';
import { Image,Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WeatherScreen from '../screens/WeatherForecastScreen';
import InstructionScreen from '../screens/InstructionScreen';
import UvForecastScreen from '../screens/UvForecastScreen';
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

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

const WeatherStack = createStackNavigator(
  {
    Weather: WeatherScreen,
  },
  config
);

WeatherStack.navigationOptions = {
  tabBarLabel: 'Weather',
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

WeatherStack.path = '';


const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
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

LinksStack.path = '';





const UvForecastStack = createStackNavigator(
  {
    Links: UvForecastScreen,
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

ProfileStack.path = '';


// const InstructionStack = createStackNavigator(
//   {
//     Settings: InstructionScreen,
//   },
//   config
// );

// InstructionStack.navigationOptions = {
//   tabBarLabel: 'README',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };
// InstructionStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  WeatherStack,
  LinksStack,
  ProfileStack,
  LinksStack,
  UvForecastStack,
});

tabNavigator.path = '';

export default tabNavigator;
