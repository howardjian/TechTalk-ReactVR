import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import Button from './Button';

const clouds = [
  {
    key: 0,
    imageSrc = 'cloud.png',
  },
  {
    key: 1,
    imageSrc = 'angryCloud.png',
  }
]

export default class ButtonsWorld extends React.Component {
  render() {
    return (
      <View >
        <Pano source={asset('buttondrawing.jpg')}/>
        <Button />
      </View>
    );
  }
};

AppRegistry.registerComponent('ButtonsWorld', () => ButtonsWorld);
