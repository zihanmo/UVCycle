import React, {Component} from 'react'
import { LineChart, XAxis, YAxis, Grid } from 'react-native-svg-charts'
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground
} from 'react-native'
import {Circle} from 'react-native-svg'

export default class LinkScreen extends Component {

    render() {
        const Decorator = ({ x, y, data }) => {
            return data.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 1.2 }
                    stroke={ 'rgb(134, 65, 244)' }
                    fill={ 'black' }
                />
            ))
        }

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30
        const indexes = [];
        const time = [];
        for (i = 0; i < 6; i++) {
            for (j = 0; j < 30; j+=2){
                // mins = "";
                // if (0 <= j && j < 10) {
                //     mins += ("0" + j);
                // } else {
                //     mins += j;
                // }
                indexes.push(Math.random()*11 + 1);
            }
            // hour = "";
            // if (0 <= i && i < 10) {
            //     hour += ("0" + i);
            // } else {
            //     hour += i;
            // }
            time.push(i);
        }
        return (
            
            <View>
                
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>UV history index</Text>
                </View>
                <View style={{ height: Dimensions.get('window').height - 200, padding: 20, flexDirection: 'row' }}>
                    <YAxis
                        data={indexes}
                        style={{ marginBottom: xAxisHeight }}
                        contentInset={verticalContentInset}
                        svg={axesSvg}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                    <ImageBackground source={require('../assets/images/indexback.png')} style={{width: '100%', height: '100%'}}>
                        <LineChart
                            style={{ flex: 1 }}
                            data={indexes}
                            contentInset={verticalContentInset}
                            svg={{ stroke: 'rgb(255, 255, 255)', strokeWidth: 1.5 }}
                            gridMin={0}
                            gridMax={12}
                        >
                        <Grid/>
                        <Decorator/>
                        </LineChart>
                    </ImageBackground>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight, marginTop: 10 }}
                        data={time}
                        formatLabel={ value => `${value+6}am` }
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                    </View>
                </View>
            </View>
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
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 10,
    },
    title: {
      fontSize: 30,
      color: '#1E6738'
    },
});
