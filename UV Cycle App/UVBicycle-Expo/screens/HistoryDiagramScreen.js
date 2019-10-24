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
  StyleSheet,
  Dimensions,
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import {
  Circle
} from 'react-native-svg';
import * as shape from 'd3-shape';

export default class HistoryDiagramScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: [],
      index: []
    }
    this.getindex();
  }

  /**
   * fetch historical UVindex from database
   * store timestamp and unindex to state variable
   */
  getindex = () => {
    AsyncStorage.multiGet(["email", "date"]).then(res => {
      var data = { email: res[0][1], date: res[1][1] };
      fetch('http://deco3801-teamwyzards.uqcloud.net/uvhistory.php', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((responseJson) => {
          var timetemp = [];
          var indexes = [];
          for (t in responseJson) {
            timetemp.push(t);
            indexes.push(responseJson[t]);
          }
          this.setState({
            time: timetemp,
            index: indexes
          })
        })
        .catch((error) => console.error(error));
    })
  }

  render() {
    const {navigate}=this.props.navigation;
    const Decorator = ({
      x,
      y,
      data
    }) => {
      return data.map((value, index) => (<
        Circle key={index}
        cx={x(index)}
        cy={y(value)}
        r={1.2}
        stroke={'rgb(134, 65, 244)'}
        fill={'black'} />
      ));
    }

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;
    const data = [];
    const indexes = [];
    for (i = 0; i < this.state.index.length; i++) {
      timetemp = this.state.time[i].split(" ");
      temp = timetemp[1].split(":");
      data.push({
        index: parseInt(this.state.index[i]),
        time: temp[1]
      });
      indexes.push(parseInt(this.state.index[i]));
    }

    return (
      <ScrollView>
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>UV History Index</Text>
        </View>
        <TouchableOpacity style={styles.uvButton} onPress={() => navigate('Main') }>
          <Image style={styles.backPic} source={require('../assets/images/back.png')} />
        </TouchableOpacity>
        <View style={{ height: Dimensions.get('window').height - 200, padding: 20, flexDirection: 'row' }}>
          <YAxis
            data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            //yAccessor={ ({ item }) => item.index }
            //style={{ marginBottom: xAxisHeight }}
            contentInset={verticalContentInset}
            svg={axesSvg} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <ImageBackground source={require('../assets/images/indexback.png')} style={{ width: '100%', height: '100%' }}>
              <LineChart
                style={{ flex: 1 }}
                data={indexes}
                //contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                contentInset={verticalContentInset}
                svg={{ stroke: 'rgb(0, 0, 0)', strokeWidth: 3 }}
                yMax={12}
                yMin={0}>
                <Grid />
                <Decorator />
              </LineChart>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50
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
        shadowOffset: { width: 0, height: 1 },
        shadowColor: 'grey',
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  contentContainer: {
    paddingTop: 30,
  },
  titleContainer: {
    alignItems: 'center'
  },
  title: {
    paddingTop: 40,
    paddingBottom: 20,
    fontSize: 33,
    color: '#1E6738',
    alignSelf: 'center'
  },
  backPic: {
    height: 30,
    width: 25,
    marginLeft: 15,
  },
});

HistoryDiagramScreen.navigationOptions = {
  header: null,
  title: 'HistoryPlot'
};