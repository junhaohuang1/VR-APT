import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import InputBox from './components/inputBox.js'

export default class Final_Project extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <InputBox/>
      </View>
    );
  }
};

AppRegistry.registerComponent('Final_Project', () => Final_Project);
