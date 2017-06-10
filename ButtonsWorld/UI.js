import React from 'react';
import {
  View,
} from 'react-vr';
import Button from './Button';

class UI extends React.Component {
  constructor(props){
    super(props);
    this.buttons = this.props.buttonConfig;
  }

  render() {
    const buttons = this.buttons.map((button) => {
      <Button
        key={button.key}
        onClick={() => {
          this.props.onClick(button.key);
        }}
        src={button.imageSrc}
      />
    })
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          transform: [
            {translate: [0, 0, -3]}
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
