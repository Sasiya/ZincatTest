import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';



export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {title} = this.props;
    return (
      <View>
        <View style={styles.mainContainer}>
                  <Icon color={'white'} size={35} name="book" />
                  <Text style={styles.headerText}> {title} </Text>
        </View>
        <Image
                style={styles.logoStyle}
                source={require('../../assets/wave.png')}
            />
      </View>
    );
  }
}
