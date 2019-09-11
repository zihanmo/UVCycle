import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
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

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      
      <ScrollView style={styles.container}>
          <View style={styles.infoContainer}>
            
          </View>
          <View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Info")}>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
              size={26}
              style={{ marginBottom: -3 }}
            />
            </TouchableOpacity>
          </View>
      </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoContainer: {
      backgroundColor: '#41BD63',
      height: 200
  }
});
