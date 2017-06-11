import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import Canvas from './Canvas';
import UI from './UI';

const clouds = [
  {
    key: 0,
    imageSrc: 'cloud.png',
    panoSrc: 'flowers.jpg'
  },
  {
    key: 1,
    imageSrc: 'angryCloud.png',
    panoSrc: 'buttondrawing.jpg'
  }
];

export default class ButtonsWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: 'buttondrawing.jpg'
    };
  }

  render() {
    return (
      <View >
        <Canvas
          src={this.state.src}
        />
        <UI
          buttonConfig={clouds}
          onClick={(key) => {
            this.setState({src: clouds[key].panoSrc})
          }}
        />
      </View>
    );
  };
};

AppRegistry.registerComponent('ButtonsWorld', () => ButtonsWorld);
