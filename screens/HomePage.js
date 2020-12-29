import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomePageDesign from '../app/HomePageDesign';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <HomePageDesign />
    );
  }
}
