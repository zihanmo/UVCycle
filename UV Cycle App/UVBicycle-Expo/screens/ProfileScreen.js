import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { 
  View,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native'
export default class ProfileScreen extends Component {
  
  render() {
    return (
      <ScrollView style={styles.container}>

        <View>
          <Text style={styles.subtitle}>Proifle</Text>
        </View>

        <View style={styles.settings}>

          

          <View style={styles.settingContainer}>
            <MaterialIcons name="brightness-medium" size={25} color="gray" style={styles.settingIcons}/>
            <Text style={styles.settingText}>Display</Text>
          </View>

          <View style={styles.settingContainer}>
          <MaterialIcons name="notifications" size={25} color="gray" style={styles.settingIcons} />
            <Text style={styles.settingText}>Sound & Notification</Text>
          </View>

          <View style={styles.settingContainer}>
          <MaterialIcons name="camera-alt" size={25} color="gray" style={styles.settingIcons} />
            <Text style={styles.settingText}>Scan Skin Tone</Text>
          </View>

          <View style={styles.settingMoreContainer}>
          <MaterialIcons name="more-vert" size={25} color="gray" style={styles.settingIcons} />
            <Text style={styles.settingText}>More</Text>
          </View>
        </View>

        <View style={styles.settings}>
          <View style={styles.settingContainer}>
          <MaterialIcons name="bluetooth" size={25} color="gray" style={styles.settingIcons} />
            <Text style={styles.settingText}>Bluetooth</Text>
          </View>
          <View style={styles.settingMoreContainer}>
          <MaterialIcons name="more-vert" size={25} color="gray" style={styles.settingIcons} />
            <Text style={styles.settingText}>More</Text>
          </View>
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
});
ProfileScreen.navigationOptions = {
  header: null,
};
