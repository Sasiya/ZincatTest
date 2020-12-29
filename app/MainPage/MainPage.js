import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Container, Header, Tab, Tabs, TabHeading } from 'native-base';
import HomePageDesign from '../../app/HomePageDesign';
import Empty from '../../screens/Empty';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/Entypo';




export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
       <Tabs
        tabBarPosition={'bottom'}>
          <Tab heading={ <TabHeading><Icon size={25} name="truck" /></TabHeading>}>
            <HomePageDesign />
          </Tab>
          <Tab heading={ <TabHeading><Icon2 size={25} name="navigate" /></TabHeading>}>
            <Empty />
          </Tab>
          <Tab heading={ <TabHeading><Icon size={25} name="book" /></TabHeading>}>
            <Empty />
          </Tab>
          <Tab heading={ <TabHeading><Icon3 size={25} name="tools" /></TabHeading>}>
            <Empty />
          </Tab>
        </Tabs>
      </View>
    );
  }
}
