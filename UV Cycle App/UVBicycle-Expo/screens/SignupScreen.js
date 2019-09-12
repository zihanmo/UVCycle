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
} from 'react-native';

import { CheckBox } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';


export default class SignupScreen extends Component {
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

  addNewUser = () => {
    var data = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      skinType: this.state.skinType,
      sensorName: this.state.sensorName
    }
    fetch("http://deco3801-teamwyzards.uqcloud.net/signup.php", {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson == "Sign Up successfully") {
        this.props.navigation.navigate('Login');
      }
      alert(responseJson)
    })
    .catch(function(err){console.log(err)});
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      
      <ScrollView style={styles.container}>
        <View
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>UV Cycle</Text>
          </View>

          <View style={styles.detailsContainer}>

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
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/1.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/1.png') } />}
                  checked={this.state.checked[0]}
                  // onPress={(value) => this.setState({ checked: !this.state.checked[0] })}
                  onPress={() => this.setSkinType(1)}
                  />
                <CheckBox 
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/2.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/2.png') } />}
                  checked={this.state.checked[1]}
                  onPress={() => this.setSkinType(2)}
                  />
                <CheckBox 
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/3.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/3.png') } />}
                  checked={this.state.checked[2]}
                  onPress={() => this.setSkinType(3)}
                  />

                <CheckBox 
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/4.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/4.png') } />}
                  checked={this.state.checked[3]}
                  onPress={() => this.setSkinType(4)}/>
                <CheckBox 
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/5.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/5.png') } />}
                  checked={this.state.checked[4]}
                  onPress={() => this.setSkinType(5)}/>
                <CheckBox 
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/6.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/6.png') } />}
                  checked={this.state.checked[5]}
                  onPress={() => this.setSkinType(6)}/>
                
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

              <TouchableOpacity onPress={() => navigate("Login")}>
                <Text>Already have account? Login here</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image style={styles.logo} source={require('../assets/images/BicycleQueensland.jpg') } />

        </View >

      </ScrollView>
    );
  }
}

SignupScreen.navigationOptions = {
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
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    alignSelf: 'center'
  }
});
