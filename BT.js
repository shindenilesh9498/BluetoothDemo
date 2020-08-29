import React from 'react';
import { View, Text } from 'react-native';
import RNBluetoothClassic, {
    BTEvents,
    BTCharsets,
  } from 'react-native-bluetooth-classic';

export default class BT extends React.Component{
    constructor() {
        super();
           
    }
   async componentDidMount(){
        let devices = await RNBluetoothClassic.list();
        console.log(devices);
    }
    render(){
        return(
            <View>
                <Text></Text>
            </View>
        )
    }
}