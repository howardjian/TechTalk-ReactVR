import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import UI from './UI';

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
        <UI
          buttonConfig={clouds}
          onClick={(key) => {
            this.setState({src: clouds[key].imageSrc})
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('ButtonsWorld', () => ButtonsWorld);
