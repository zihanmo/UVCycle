import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { connectActionSheet } from '@expo/react-native-action-sheet'
import { 
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
export default class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      skinType: 0,
      sensor: ''
    }
    this.fetchData();
  }

  /**
   * Fetch data from server to get user information by email
   * Set state according to responsed Json
   */
  fetchData() {
    // Get email value stored in asyncstorage
    AsyncStorage.getItem("email").then(res => {
      var data = {email: res}
      fetch("http://deco3801-teamwyzards.uqcloud.net/profile.php", {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((responseJson) => {
        // combile first name and last name
        const fullName = responseJson.firstname + " " + responseJson.lastname
        const skinType = responseJson.skintype
        const sensor = responseJson.sensor
        const email = responseJson.email
        this.setState({
          email: email,
          name: fullName,
          skinType: skinType,
          sensor: sensor
        })
      })
      .catch((error) => console.error(error))
    })
  }

  /**
   * Clear AsyncStorage and redirect screent to Login
   */
  logout = async () => {
    AsyncStorage.clear();
    this.props.navigation.navigate("Login")
  }

  render() {
    
    return (
      <ScrollView style={styles.container}>

        <View>
          <Text style={styles.subtitle}>Proifle</Text>
        </View>

        <View style={styles.settings}>

          <View style={styles.settingContainer}>
            <MaterialIcons name="brightness-medium" size={25} color="gray" style={styles.settingIcons}/>
            <Text style={styles.settingText}>{this.state.email}</Text>
          </View>

          <View style={styles.settingContainer}>
            <MaterialIcons name="notifications" size={25} color="gray" style={styles.settingIcons} />
            <Text style={styles.settingText}>{this.state.name}</Text>
          </View>

        </View>

        <View style={styles.settings}>
          <View style={styles.settingContainer}>
            <MaterialIcons name="more-vert" size={25} color="gray" style={styles.settingIcons} />
            <Text style={styles.settingText}>Skin Type</Text>
          </View>
          <View style={styles.settingMoreContainer}>
            <MaterialIcons name="bluetooth" size={25} color="gray" style={styles.settingIcons} />
            <Text style={styles.settingText}>UV Sensor</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.uvButton}>
            <Text style={styles.buttonText}>Change Skin Type</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.uvButton}>
            <Text style={styles.buttonText}>Setup UV Sensor</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.logout}>
            <Text style={styles.textLink}>Log out</Text>
          </TouchableOpacity>
          

        </View>
        
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0'
  },
  settings: {
    backgroundColor: '#ffffff',
    marginTop: 40
  },
  settingContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0'
  },
  settingMoreContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 20,
  },
  settingText: {
    fontSize: 20,
    color: 'gray'
  },
  settingIcons: {
    marginRight: 10
  },
  subtitle: {
    paddingTop:40,
    paddingBottom:20,
    fontSize: 33,
    color: '#1E6738',
    alignSelf: 'center'
  },
  buttonContainer: {
    marginVertical: 20
  },
  uvButton: {
    color: '#fff',
    backgroundColor: '#41BD63',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    margin: 10
  },
  textLink: {
    fontSize: 20,
    color: '#41BD63',
    textAlign: 'center'
  }
});
ProfileScreen.navigationOptions = {
  header: null,
  title: "Profile"
};
