import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

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



export default class cubeWorld extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   uri: [
    //     '../static_assets/criminalmind_lf.jpg', '../static_assets/criminalmind_rt.jpg', '../static_assets/criminalmind_up.jpg', '../static_assets/criminalmind_dn.jpg', '../static_assets/criminalmind_ft.jpg',
    //     '../static_assets/criminalmind_bk.jpg'
    //   ]
    // }
  }

  render() {
    const test = ({
      uri: [
        asset('Left.png'),
        asset('Right.png'),
        asset('Top.png'),
        asset('Bottom.png'),
        asset('Back.png'),
        asset('Front.png')
      ]
    });
    // AXIS: [ +X, -X, +Y, -Y, +Z, -Z]
    return (
      <View>
        <Pano source={test.uri}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('cubeWorld', () => cubeWorld);
