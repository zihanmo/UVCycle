import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { 
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
export default class ProfileScreen extends Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>

        <View>
          <Text style={styles.subtitle}>Proifle</Text>
        </View>

        <View style={styles.settings}>

          

          <View style={styles.settingContainer}>
            <MaterialIcons name="brightness-medium" size={25} color="gray" style={styles.settingIcons}/>
            <Text style={styles.settingText}>Username</Text>
          </View>

          <View style={styles.settingContainer}>
          <MaterialIcons name="notifications" size={25} color="gray" style={styles.settingIcons} />
            <Text style={styles.settingText}>Email</Text>
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

          <TouchableOpacity onPress={()=>navigate("Login")}>
            <Text style={styles.logout}>Log out</Text>
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
  logout: {
    fontSize: 20,
    color: '#41BD63',
    textAlign: 'center'
  }
});
ProfileScreen.navigationOptions = {
  header: null,
};
