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
    fetch('http://deco3801-teamwyzards.uqcloud.net/uvhistory.php', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: 'test',
      })
    })
    .then((response) => response.json())
    .then((res) => {
      tiemstamp = res.time.split("+");
      indexes = res.index.split("+");
      this.setState({
          time: tiemstamp.slice(1),
          index: indexes.slice(1)
      });
    });
  }

  render() {
    const Decorator = ({
      x,
      y,
      data
    }) => {
      return data.map((value, index) => ( <
        Circle key = {index}
        cx = {x(index)}
        cy = {y(value)}
        r = {1.2}
        stroke = {'rgb(134, 65, 244)'}
        fill = {'black'}/>
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
          <Text style={styles.title}>UV history index</Text>
        </View>
        <View style={{ height: Dimensions.get('window').height - 200, padding: 20, flexDirection: 'row' }}>
          <YAxis
            data={ data }
            yAccessor={ ({ item }) => item.index }
            style={{ marginBottom: xAxisHeight }}
            contentInset={verticalContentInset}
            svg={axesSvg}/>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <ImageBackground source={require('../assets/images/indexback.png')} style={{width: '100%', height: '100%'}}>
              <LineChart
                style={{ flex: 1 }}
                data={ indexes }
                //contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                contentInset={verticalContentInset}
                svg={{ stroke: 'rgb(0, 0, 0)', strokeWidth: 3 }}
                gridMin={0}
                gridMax={12}>
                <Grid/>
                <Decorator/>
              </LineChart>
            </ImageBackground>
            <XAxis
              style={{ marginHorizontal: -10, height: xAxisHeight, marginTop: 10 }}
              data={data}
              xAccessor={ ({ item }) => item.time }
              numberOfTicks={ data.length }
              // format improvement
              formatLabel={ value => `22:${value}` }
              contentInset={{ left: 10, right: 10 }}
              svg={axesSvg}/>
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  titleContainer: {
    alignItems: 'center'
  },
  title: {
    paddingTop:40,
    paddingBottom:20,
    fontSize: 33,
    color: '#1E6738',
    alignSelf: 'center'
  },
});

HistoryDiagramScreen.navigationOptions = {
  header: null,
};