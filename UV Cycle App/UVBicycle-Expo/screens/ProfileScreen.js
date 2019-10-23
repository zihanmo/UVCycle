import React, {Component} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { CheckBox } from 'react-native-elements'
import { 
  View,
  Button,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native'
export default class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      skinType: 0,
      romanNumerals: ["I", "II", "III", "IV", "V", "VI"],
      sensor: '',
      skinRomanNumeral: '',
      isModalVisible: false,
      checked: [false, false, false, false, false, false],
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
        const skintype = responseJson.skintype
        const sensor = responseJson.sensor
        const email = responseJson.email
        this.setState({
          email: email,
          name: fullName,
          skinType: skintype,
          sensor: sensor,
          skinRomanNumeral: this.state.romanNumerals[skintype-1]
        })
      })
      .catch((error) => console.error(error))
    })
  }

  /**
   * Control visibility of the pop-up modal
   */
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  /**
   * Update skin type stored in database
   */
  updateSkinType(){
    this.toggleModal();
    var data = {
      email: this.state.email,
      skintype: this.state.skinType
    }
    fetch("http://deco3801-teamwyzards.uqcloud.net/update.php", {
      method: 'POST',
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .catch((error) => console.error(error))
    this.setState({
      skinRomanNumeral: this.state.romanNumerals[data.skintype-1]
    })
  }

  /**
   * Set the skin type to specific value
   * @param {Integer} value - the number of skin type
   */
  setSkinType(value) {
    let newChecked = [false, false, false, false, false, false];
    newChecked[value-1] = true;
    this.setState({
      checked: newChecked,
      skinType: value
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
          <Text style={styles.subtitle}>Profile</Text>
        </View>

        <View style={styles.settings}>

          <View style={styles.settingContainer}>
            <MaterialIcons name="more-vert" size={25} color="gray" style={styles.settingIcons}/>
            <Text style={styles.settingText}>{this.state.email}</Text>
          </View>

          <View style={styles.settingContainer}>
            <MaterialIcons name="notifications" size={25} color="gray" style={styles.settingIcons} />
            <Text style={styles.settingText}>{this.state.name}</Text>
          </View>

        </View>

        <View style={styles.settings}>
          <View style={styles.settingContainer}>
            <MaterialIcons name="brightness-medium" size={25} color="gray" style={styles.settingIcons} />
            <Text style={styles.settingText}>Skin Type {this.state.skinRomanNumeral}</Text>
          </View>
          <View style={styles.settingMoreContainer}>
            <MaterialIcons name="bluetooth" size={25} color="gray" style={styles.settingIcons} />
            <Text style={styles.settingText}>UV Sensor</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.uvButton} onPress={this.toggleModal}>
            <Text style={styles.buttonText}>Change Skin Type</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.logout}>
            <Text style={styles.textLink}>Log out</Text>
          </TouchableOpacity>
          
        </View>
        <View>
          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ marginTop: 100 }}>
              <View style={styles.skinScale}>
                <CheckBox 
                  checkedIcon={<Image style={styles.skinPicChecked} source={require('../assets/images/fitzpatrick-scale/1.png') } />}
                  uncheckedIcon={<Image style={styles.skinPic} source={require('../assets/images/fitzpatrick-scale/1.png') } />}
                  checked={this.state.checked[0]}
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
              <Button title="Cancel" onPress={this.toggleModal} />
              <Button title="Confirm" onPress={() => this.updateSkinType()} />
            </View>
          </Modal>
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
  },
  skinPic: {
    height: 40,
    width: 40,
    marginHorizontal: -15
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
});
ProfileScreen.navigationOptions = {
  header: null,
  title: "Profile"
};
