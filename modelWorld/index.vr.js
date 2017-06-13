import React from 'react';
import {
  Model,
  AmbientLight,
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class modelWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      rotation: 90
    }

    this.lastUpdate = Date.now();
    this.rotate = this.rotate.bind(this)
  }

  componentDidMount() {
    this.rotate();
  }
  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle); this.frameHandle = null;
    }
  }


  rotate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;
    this.lastUpdate = now;

    this.setState({ rotation: this.state.rotation + delta / 150 });
    this.frameHandle = requestAnimationFrame(this.rotate);
  }


  render() {
    return (
      <View>
        <Pano source={
          [
            asset('criminalmind_rt.jpg'),
            asset('criminalmind_lf.jpg'),
            asset('criminalmind_up.jpg'),
            asset('criminalmind_dn.jpg'),
            asset('criminalmind_bk.jpg'),
            asset('criminalmind_ft.jpg')
          ]
        }/>

      <AmbientLight intensity={ 2.5 } />

      <Model
        style={{
          transform: [
            {translate: [60, 0, 0]},
            {scale: .05},
            {rotateY: this.state.rotation},
            {rotateX: 20},
            {rotateZ: -10} ],
        }}
        source={{obj:asset('earth.obj'), mtl:asset('earth.mtl')}}

        lit={true}
      />
      </View>
    );
  }
};

AppRegistry.registerComponent('modelWorld', () => modelWorld);
