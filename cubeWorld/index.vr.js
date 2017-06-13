import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class cubeWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const test = ({
      // AXIS: [ +X, -X, +Y, -Y, +Z, -Z]
      uri: [
        asset('Left.png'),
        asset('Right.png'),
        asset('Top.png'),
        asset('Bottom.png'),
        asset('Back.png'),
        asset('Front.png')
      ]
    });
    return (
      <View>
        <Pano source={test.uri}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('cubeWorld', () => cubeWorld);

const boxes = [
  {
    key: 0,
    uri: [
      '../static_assets/criminalmind_lf.jpg', '../static_assets/criminalmind_rt.jpg', '../static_assets/criminalmind_up.jpg', '../static_assets/criminalmind_dn.jpg', '../static_assets/criminalmind_ft.jpg',
      '../static_assets/criminalmind_bk.jpg'
    ]
  },
  {
    key: 1,
    uri: [
      '../static_assets/Left.png',
      '../static_assets/Right.png',
      '../static_assets/Top.png',
      '../static_assets/Bottom.png',
      '../static_assets/Back.png',
      '../static_assets/Front.png'
    ]
  }
]
