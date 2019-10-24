import React, {
  Component
} from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  RefreshControl
} from 'react-native';
export default class HistoryWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: [],
      refreshing: false,
    }
    this.fetchWorkout();
    this.fetchWorkout = this.fetchWorkout.bind(this);
  }
  _onRefresh = () => {
    this.setState({ refreshing: true }, function () { this.fetchWorkout() });
    this.setState({ refreshing: false });
  }

  fetchWorkout() {
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
            workout: responseJson
          })
          const dataArray = [];
          for (i = 0; i < this.state.workout.length; i++) {
            dataArray.push({
              key: this.state.workout[i]
            });
          }
          this.setState({
            data: dataArray
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

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }>
        <View>
          <Text style={styles.subtitle}>UV History Workout</Text>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.container} onPress={() => this.getWorkout(item.key)}>
              <Text style={styles.text}>{item.key}</Text>
            </TouchableOpacity>} />
        <Text style={styles.sharebtn}>Pull down to refresh</Text>
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
  },
  sharebtn: {
    fontSize: 30,
    color: '#41BD63',
    textAlign: 'center'
  },
});
