import React from 'react';
import ValidationComponent from 'react-native-form-validator';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';

export default class LoginScreen extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  /**
   * Check if every input is valid
   */
  formValidation = () => {
    this.validate({
      email: {email: true, required: true},
      password: {minlength: 6, required: true}
    });
  }

  /**
   * Fetch data to check authentication, checking is doing in php file.
   * Once the credential matched, save email in AsyncStorage
   */
  login = () => {
    fetch("http://deco3801-teamwyzards.uqcloud.net/login.php", {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        if (responseJson == "Credential matched!") {
          AsyncStorage.setItem("email", this.state.email);
          // redirect to HomeScreen
          this.props.navigation.navigate('Main');
        }
        alert(responseJson);
    })
    .catch((error) => console.error(error))
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
            style={styles.detailsContainer} 
            behavior="position" >
          <View
              style={styles.container}
              contentContainerStyle={styles.contentContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>UV Cycle</Text>
            </View>
            <Image style={styles.teamLogo} source={require('../assets/images/TeamWyzards.png') } />
          
            <View>
            
              <View style={styles.detailsLabel}>
                <TextInput
                style={styles.detailsLabelInput}
                placeholder={ "Email" }
                autoCapitalize = {'none'}
                onChangeText={(text) => this.setState({email:text})}
                />
              </View>

              <View style={styles.detailsLabel}>
                <TextInput
                secureTextEntry={true}
                style={styles.detailsLabelInput}
                placeholder={ "Password" }
                autoCapitalize = {'none'}
                onChangeText={(text) => this.setState({password:text})}/>
              </View>
            
              <View style={styles.detailsLabel}>

                <TouchableOpacity style={styles.uvButton} onPress={this.login}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate("Signup")}>
                  <Text style={styles.textLink}>Sign Up</Text>
                </TouchableOpacity>

              </View>
            </View>

            <Image style={styles.logo} source={require('../assets/images/BicycleQueensland.jpg') } />
          </View >
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}


LoginScreen.navigationOptions = {
  header: null,
  title: 'Login'
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
    flex: 1,
    marginHorizontal: 30
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
    backgroundColor: '#41BD63',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10
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
  },
  teamLogo: {
    width: 300,
    height: 300,
    alignSelf: 'center'
  },
  textLink: {
    fontSize: 16,
    color: '#41BD63',
    textAlign: 'center'
  }
});
