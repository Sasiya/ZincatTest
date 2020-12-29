import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';


export default class SecondaryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {image, children, color} = this.props;

    return (
      <View style={{...styles.mainContainer, backgroundColor: color}}>
           <Image
            style={styles.logoStyle}
            source={image}
        />
        <Text style={styles.text}> {children} </Text>

      </View>
    );
  }
}
