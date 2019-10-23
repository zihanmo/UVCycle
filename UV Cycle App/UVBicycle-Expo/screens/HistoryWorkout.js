import React, {
  Component
} from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  Grid,
  AreaChart
} from 'react-native-svg-charts';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Button,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native';
import {
  Circle
} from 'react-native-svg';
import * as shape from 'd3-shape';
import { object } from 'yup';

export default class HistoryWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: [],
    }
    this.fetchData();
  }
  fetchData() {
    // Get email value stored in asyncstorage
    AsyncStorage.getItem("email").then(res => {
      var data = { email: res }
      fetch("http://deco3801-teamwyzards.uqcloud.net/UVHistoryImprove.php", {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            workout: responseJson,
          })
        })
        .catch((error) => console.error(error))
    })
  }
  getWorkout(value) {
    AsyncStorage.setItem("date", value);
    this.props.navigation.navigate('HistoryPlot');
  }


  render() {
    const data = [];
    for (i = 0; i < this.state.workout.length; i++) {
      data.push({
        key: this.state.workout[i]
      });
    }
    return (
      <ScrollView>
        <View>
          <Text style={styles.subtitle}>UV History Workout</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.container} onPress={() => this.getWorkout(item.key)}>
              <Text style={styles.text}>{item.key}</Text>
            </TouchableOpacity>} />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "85%",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 1,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#41BD63",
    height: 60,
    justifyContent: "center"
  },
  text: {
    fontSize: 33,
    color: "#ffffff",
    marginLeft: 20
  },
  subtitle: {
    paddingTop: 40,
    paddingBottom: 20,
    fontSize: 33,
    color: '#1E6738',
    alignSelf: 'center'
  }
});
