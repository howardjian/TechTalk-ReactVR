import React from 'react';
import {
  Model,
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class modelWorld extends React.Component {
  render() {
    return (
      <View>
        <Pano source={
          {
            uri: [
              '../static_assets/Left.png',
              '../static_assets/Right.png',
              '../static_assets/Top.png',
              '../static_assets/Bottom.png',
              '../static_assets/Back.png',
              '../static_assets/Front.png'
            ]
          }
        }/>
      </View>
    );
  }
};

AppRegistry.registerComponent('modelWorld', () => modelWorld);
