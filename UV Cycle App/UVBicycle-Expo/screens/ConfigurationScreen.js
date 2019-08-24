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
import CheckBoxGroup from "react-native-checkbox-group"
import { MonoText } from '../components/StyledText';

// import { black, grey, white, hidden } from 'ansi-colors';
// export default function ConfigurationScreen() {
export default class ConfigurationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      skinType: 1
    }
  }

  addNewUser = () => {
    var data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      skinType: 1
    }
    fetch("http://192.168.1.236:8082/user", {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseJson) => console.log('Success: ' + responseJson))
    .catch(function(err){console.log(err)});
    alert(JSON.stringify(data));
  }

  render() {
    return (
      
      <View style={styles.container}>
        <View
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>UV Cycle</Text>
          </View>

          <View style={styles.welcomeContainer}>

            <Text style={styles.welcomeText}>
              Welcome to use UV Cycle by Bicycle Queensland and Wyzards
            </Text>

          </View>

          <View 
            style={styles.detailsContainer}
            onSubmit={this.onSubmit}>
            <Text style={styles.detailsInstructionText}>
              Please complete your details and set up UV sensor.
            </Text>

            <View style={styles.detailsLabel}>
              {/* <Text style={styles.detailsLabelText}>First Name: </Text> */}
              <TextInput
              style={styles.detailsLabelInput}
              placeholder={ "First Name" }
              onChangeText={(text) => this.setState({firstName:text})}
              />
            </View>
            <View style={styles.detailsLabel}>
              {/* <Text style={styles.detailsLabelText}>Last Name: </Text> */}
              <TextInput
              style={styles.detailsLabelInput}
              placeholder={ "Last Name" }
              onChangeText={(text) => this.setState({lastName:text})}
              />
            </View>

            <View style={styles.detailsLabel}>
              <Text style={styles.detailsInstructionText}>
                Select your skin colour:
              </Text>
            
              <View style={styles.skinScale}>
                <CheckBox 
                  value={1} 
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/1.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/1.png') } />}
                  checked={true}
                  onPress={this.onChangeSkinType}
                  />
                <CheckBox 
                  value={2} 
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/2.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/2.png') } />}
                  checked={true}
                  onPress={this.onChangeSkinType}/>
                <CheckBox 
                  value={1} 
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/3.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/3.png') } />}/>
                <CheckBox 
                  value={1} 
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/4.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/4.png') } />}/>
                <CheckBox 
                  value={1} 
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/5.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/5.png') } />}/>
                <CheckBox 
                  value={1} 
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/6.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/6.png') } />}/>
                
              </View>
            </View>

            <View style={styles.detailsLabel}>
              <TouchableOpacity style={styles.uvButton} >
                <Text style={styles.buttonText}>Set up UV sensor</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.detailsLabel}>
              <TouchableOpacity style={styles.uvButton} onPress={this.addNewUser}>
                <Text style={styles.buttonText}>Finish</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View >

      </View>
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
    marginTop: 50,
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
    fontSize: 20
  },
  detailsLabelInput: {
    height: 40,
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
  }
});
