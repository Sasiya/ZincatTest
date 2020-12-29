import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainPage from '../app/MainPage';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <MainPage />
    );
  }
}
