import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../../common/Header';
import MainCard from '../../common/MainCard';
import SecondaryCard from '../../common/SecondaryCard';
import DataTimePicker from '../../common/DataTimePicker';
import DetailedCard from '../DetailedCard';
import styles from './styles';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class HomePageDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        formData: {
            date: '',
            location: '',
            reading: '',
        }
    };
  }
  onSubmit(){
      const {formData} = this.state;
      if(formData.date == '' || formData.location == '' || formData.reading == ''){
          return alert('Please fill required feilds')
      }
      return this.setState({modal: false})
  }

  renderDetails(){
      const {formData, modal} = this.state;
      if(formData.date == '' && formData.location == '' && formData.reading == ''){
          return (
              <View>
                    <MainCard onPress={ ()=> this.setState({modal: !modal})} color={'#d9ffe3'} image={require('../../assets/hand.png')}>Start Driving</MainCard>
              </View>
          )
      }
      return(
          <View>
                <DetailedCard onPress={ ()=> this.setState({modal: !modal})} formData={formData} />
          </View>
      )
  }

  render() {
      const {modal, formData} = this.state;
    return (
      <View style={styles.mainContainer}>
            <Header title={'DriveTime'}/>
            <View style={styles.upperRow}>
                    <View style={{borderRightWidth: 1, flex: 1, borderColor: '#C7C7C7', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.upperText}>Select Vehicle</Text>
                                <Icon size={25} name="angle-down" />
                            </View>
                            <View>
                                <Text style={{...styles.upperText, fontWeight: 'bold', alignSelf: 'center'}}>114, 000km</Text>
                                <Text style={{...styles.upperText, fontSize: hp('1.7'), alignSelf: 'center'}}>Hubometer</Text>
                            </View>
                    </View>
                    <View style={{borderRightWidth: 1, flex: 1, borderColor: '#C7C7C7', alignItems: 'center'}}>
                            <Text style={{fontSize: hp('3.5'), fontWeight: 'bold'}}>Idle</Text>
                            <Text style={styles.upperText}>Current Status</Text>
                            <Image
                                style={styles.logoStyle}
                                source={require('../../assets/4star.jpg')}
                            />
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={{fontSize: hp('3.8'), fontWeight: 'bold'}}>3h</Text>
                            <Text style={styles.upperText}>Next Break due</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={{flex: 1}}>
                        {this.renderDetails()}
                    
                        <View style={styles.middleRow}>
                            <SecondaryCard image={require('../../assets/owork.png')} color={'#ffeca8'}>Start Other Work</SecondaryCard>
                            <SecondaryCard image={require('../../assets/rest.png')} color={'#a6e6ff'}>Start Rest</SecondaryCard>
                        </View>
                        <MainCard color={'#ffe8f6'} image={require('../../assets/stopWatch.png')}>End Of Day</MainCard>
                        
                        <View style={styles.bottomContainer}>
                            <Text>Drivers Latest Remarks</Text>
                            <Text style={{fontWeight: 'bold'}}>Gate Access code 82323. ask for mike </Text>
                        </View>
            </ScrollView>
            <Modal animationOutTiming={800} animationInTiming={800} 
            onModalShow={()=> this.setState({formData: {...formData, date: '', location:'', reading: ''}})} isVisible={modal}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalHeader}>Start Driving</Text>
                    <View style={styles.modalContainerBottom}>            
                            <Text style={styles.inputLabel}>Date and time</Text>
                            <DataTimePicker onChange={date=> this.setState({formData: {...formData, date}})}/>
                            <Text style={styles.inputLabel}>Location</Text>
                            <TextInput onChangeText={location=> this.setState({formData: {...formData, location}})} style={styles.modalInput}/>
                            <Text style={styles.inputLabel}>Current Hubo Reading</Text>
                            <TextInput onChangeText={(reading)=> this.setState({formData: {...formData, reading}})} keyboardType={'number-pad'} style={styles.modalInput}/>
                            <TouchableOpacity onPress={()=> this.onSubmit()} style={styles.modalButton}>
                                <Text style={styles.buttonText}>CONFIRM AND LOG</Text>
                            </TouchableOpacity>
                            <Text onPress={()=> this.setState({modal: false, formData: {...formData, date: '', location:'', reading: ''}})} style={{...styles.buttonText, color: '#fc5d00', alignSelf: 'center', paddingTop: hp('3')}}>Cancel</Text>
                    </View>
                </View>
            </Modal>
      </View>
    );
  }
}
