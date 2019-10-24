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
    this.fetchData();
    this.fetchData = this.fetchData.bind(this);
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    fetchData().then(() => {
      this.setState({ refreshing: false });
    });
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
          data={data}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.container} onPress={() => this.getWorkout(item.key)}>
              <Text style={styles.text}>{item.key}</Text>
            </TouchableOpacity>} />
        <TouchableOpacity style={styles.button} onPress={() => this.fetchData}>
          <Text style={styles.sharebtn}>Refresh</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#41BD63',
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 50,
    marginHorizontal: 50
  },
  sharebtn: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center'
  },
});
