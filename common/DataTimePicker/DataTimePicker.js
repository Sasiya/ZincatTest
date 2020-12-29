import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class DataTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: ''
    };
  }

  render() {
      const {setValue, onChange} = this.props
      const {date} = this.state
    return (
        <DatePicker
        style={{  
        width: wp('75'),
        borderBottomWidth: 1,
        marginBottom: hp('2'),
        borderColor: '#fc5d00',
        height: hp('6'),}}
        date={this.state.date}
        mode='date'
        placeholder=" "
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2100-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon= {false}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 0,
            borderWidth: 0,
            alignItems: "flex-start",
            borderColor: 'fc5d00'
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {onChange(date) ,this.setState({date})}}
      />
    );
  }
}
