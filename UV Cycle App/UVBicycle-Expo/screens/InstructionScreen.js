import React, {Component} from 'react';
import * as WebBrowser from 'expo-web-browser';
import { View, ScrollView, Text, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class InstructionScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style = {styles.container}>
        <View style = {styles.desc}>
          <View style = {styles.picCon}>
            <Image style = {styles.titlePic} source = {require('../assets/images/uv.png')}/>
          </View>
          <View style = {styles.sub}>
            <Text style = {styles.subTitle}>What is Ultraviolet(UV)?</Text>
            <Text style = {styles.desctext}> 
              Ultraviolet light is a type of electromagnetic radiation that is all around us even though our eye can't detect it. Our body use it to make vitamin D, but too much exposure can cause painful burns and even cancer.
            </Text>
          </View>
        </View>

        <View style = {styles.desc}>
          <View style = {styles.picCon}>
            <Image style = {styles.titlePic} source = {require('../assets/images/ring.png')}/>
          </View>
          <View style = {styles.sub}>
          <Text style = {styles.subTitle}>How to read UV index</Text>
            <Text style = {styles.desctext}>
              The UV index provides a daily forecast of the expected risk of overexposure to the sun. The index represents the UV intensity levels on a scale of 0 (minimal risk) to 10+ (very high risk).
            </Text>
          </View>
        </View>

        <View style = {styles.desc}>
          <View style = {styles.picCon}>
            <Image style = {styles.titlePic} source = {require('../assets/images/sung.jpg')}/>
          </View>
          <View style = {styles.sub}>
            <Text style = {styles.subTitle}>UV light prevention</Text>
            <Text style = {styles.desctext}>
              Wear a wide brim hat to shade your face, head, ears, and neck. Wear wraparound sunglassed. Use sunscreen with SPF 15 or higher. Avoid indoor tannin.
            </Text>
          </View>
        </View>
        <View style={styles.detailsLabel}>
          <TouchableOpacity style={styles.uvButton} onPress={ () => navigate("Main")}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100
  },
  desc: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 15,
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 0, height: 1},
        shadowColor: 'grey',
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  subTitle: {
    color: '#41BD63',
    fontSize: 18,
    fontWeight: 'bold',
  },

  desctext: {
    color: 'grey',
    fontSize: 15,
  },

  titlePic: {
    height: 50,
    width: 50,
    resizeMode: 'center',
  },

  sub: {
    marginRight: 50,
  },

  picCon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  }


});
InstructionScreen.navigationOptions = {
  header: null,
  title: 'Information',
};