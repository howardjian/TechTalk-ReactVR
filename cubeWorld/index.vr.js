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
      '../static_assets/Front.png',
      '../static_assets/Back.png'
    ]
  }
]

export default class cubeWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: [
        '../static_assets/criminalmind_lf.jpg', '../static_assets/criminalmind_rt.jpg', '../static_assets/criminalmind_up.jpg', '../static_assets/criminalmind_dn.jpg', '../static_assets/criminalmind_ft.jpg',
        '../static_assets/criminalmind_bk.jpg'
      ]
    }
  }

  render() {
    // AXIS: [ +X, -X, +Y, -Y, +Z, -Z]
    return (
      <View>
        <Pano source={
          {
            uri:
            [
              '../static_assets/criminalmind_lf.jpg', '../static_assets/criminalmind_rt.jpg', '../static_assets/criminalmind_up.jpg', '../static_assets/criminalmind_dn.jpg', '../static_assets/criminalmind_ft.jpg',
              '../static_assets/criminalmind_bk.jpg'
            ]
          }
        }/>
      </View>
    );
  }
}

AppRegistry.registerComponent('cubeWorld', () => cubeWorld);


// <Text
//   style={{
//     backgroundColor: '#777879',
//     fontSize: 0.8,
//     fontWeight: '400',
//     layoutOrigin: [0.5, 0.5],
//     paddingLeft: 0.2,
//     paddingRight: 0.2,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     transform: [{translate: [0, 0, -3]}],
//   }}>
//   hello
// </Text>
