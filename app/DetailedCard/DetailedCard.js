import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class DetailedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {formData, onPress} = this.props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <Text style={styles.cardText}>Date: {formData.date}</Text>
      <Text style={styles.cardText}>Location: {formData.location}</Text>
      <Text style={styles.cardText}>Current Reading: {formData.reading}</Text>
    </TouchableOpacity>
  );
}
}
