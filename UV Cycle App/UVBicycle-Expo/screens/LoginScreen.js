import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
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

import { CheckBox } from 'react-native-elements'

// import { black, grey, white, hidden } from 'ansi-colors';
// export default function ConfigurationScreen() {
export default class ConfigurationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      skinType: 0,
      sensorName: '',
      checked: [false, false, false, false, false, false]
    }
  }

  setSkinType(value) {
    let newChecked = [false, false, false, false, false, false];
    newChecked[value-1] = true;
    this.setState({
      checked: newChecked,
      skinType: value
    })
  }


  render() {
    return (
      
      <ScrollView style={styles.container}>
        <View
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>UV Cycle</Text>
        </View>
        <Image style={styles.teamLogo} source={require('../assets/images/TeamWyzards.png') } />
        <View 
            style={styles.detailsContainer}
            onSubmit={this.onSubmit}>

            <View style={styles.detailsLabel}>
              <TextInput
              style={styles.detailsLabelInput}
              placeholder={ "Email" }
              onChangeText={(text) => this.setState({email:text})}
              />
            </View>

            <View style={styles.detailsLabel}>
              <TextInput
              style={styles.detailsLabelInput}
              placeholder={ "Password" }
              onChangeText={(text) => this.setState({password:text})}
              />
            </View>
            
            <View style={styles.detailsLabel}>
              <TouchableOpacity style={styles.uvButton} onPress={this.addNewUser}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
        </View>

        <Image style={styles.logo} source={require('../assets/images/BicycleQueensland.jpg') } />

        </View >

      </ScrollView>
    );
  }
}

ConfigurationScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
    titleContainer: {
        alignItems: 'center',
        paddingTop: 70,
        marginBottom: 50,
    },
    title: {
        fontSize: 30,
        color: '#1E6738'
    },
    welcomeContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    welcomeText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    detailsContainer: {
        // marginTop: 50,
        marginHorizontal: 30,
    },
    detailsInstructionText: {
        lineHeight: 24,
        fontSize: 20
    },
    detailsLabel: {
        marginVertical: 10,
    },
    detailsLabelText: {
        fontSize: 15
    },
    detailsLabelInput: {
        height: 45,
        padding: 8,
        fontSize: 24,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 5
    },
    skinScale: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'nowrap'
    },
    skinPic: {
        height: 40,
        width: 40,
        marginHorizontal: -15
    },
    skinPicChecked: {
        height: 40,
        width: 40,
        borderWidth: 2,
        marginHorizontal: -15,
        borderRadius: 5
    },
    uvButton: {
        color: '#fff',
        backgroundColor: '#1E6738',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        margin: 10
    },
    checkBox: {
        width: 50,
        height: 50,
        borderWidth: 2
    },
    logo: {
        width: 250,
        height: 70,
        padding: 50,
        alignItems: 'center',
        borderWidth: 2
    },
    teamLogo: {
        width: 300,
        height: 300,
        alignSelf: 'center'
    },
    logo: {
        width: 300,
        alignSelf: 'center',
        margin: 50
    }
});
