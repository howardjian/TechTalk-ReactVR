import React from 'react';
import {
  asset,
  Image,
  View,
  VrButton,
} from 'react-vr';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  onButtonClick () {
    this.props.onClick();
  }

  render() {
    return (
      <View>
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          width: 0.7
        }}
        <VrButton onClick={this.onButtonClick}>
          <Image
            style={{
              width: 0.7,
              height: 0.7,
            }}
            source={asset('cloud.png')}
          >
          </Image>
        </VrButton>
      </View>
    )
  }
}

export default Button;


// <Text
//   style={{
//       backgroundColor: '#777879',
//       fontSize: 0.5,
//       fontWeight: '200',
//       layoutOrigin: [0.5, 0.5],
//       paddingLeft: 0.2,
//       paddingRight: 0.2,
//       textAlign: 'center',
//       textAlignVertical: 'center'
//     }}
// >
//   Am I Real?
// </Text>
