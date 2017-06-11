import React from 'react';
import {
  View,
} from 'react-vr';
import Button from './Button';

class UI extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const buttons = this.props.buttonConfig.map((button) =>
      <Button
        key={button.key}
        onClick={() => {
          this.props.onClick(button.key);
        }}
        src={button.imageSrc}
      />
    )

    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          transform: [
            {translate: [4, 3, 1]},
            {rotateY: -90}
          ],
          width: 3,
        }}
      >
        {buttons}
      </View>
    )
  }
}

export default UI;
