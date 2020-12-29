import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Children } from 'react/cjs/react.development';
import styles from './styles';

export default class MainCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {image, children, color, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={{...styles.mainContainer, backgroundColor: color}}>
        <Image
            style={styles.logoStyle}
            source={image}
        />
        <Text style={styles.cardText}>{children}</Text>
      </TouchableOpacity>
    );
  }
}
