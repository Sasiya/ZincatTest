import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
 mainContainer: {
     flex: 1,
     backgroundColor: 'white'
 },
 upperRow: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     width: '95%',
     alignSelf: 'center',
     height: hp('12'),
 },
 upperText: {
     fontSize: hp('2'),
     alignSelf: 'center'
 },
 middleRow: {
     width: '95%',
     alignSelf: 'center',
     flexDirection: 'row',
     justifyContent: 'space-between'
 },
 bottomContainer: {
     width: '95%',
     alignSelf: 'center',
     position: 'absolute',
     bottom: 0
 },
 modalContainer: {
     width: '95%',
     backgroundColor: 'white',
     alignSelf: 'center',
     borderRadius: 15,
     alignItems: 'center',
     padding: hp('2'),
 },
 modalHeader: {
     alignSelf: 'center',
     marginTop: hp('3'),
     fontSize: hp('5'),
     fontWeight: 'bold'

 },
 modalContainerBottom: {
    marginTop: hp('2'),

 },
 upperRow2: {
     flexDirection: 'row',
     justifyContent: 'space-between'

 },
 modalInput: {
     width: wp('75'),
     borderBottomWidth: 1,
     height: hp('6'),
     borderColor: '#fc5d00',
     marginBottom: hp('3')
 },
 inputLabel: {
     color: '#808080'
 },
 modalButton: {
     width: wp('75'),
     height: hp('9'),
     backgroundColor: '#fc5d00',
     borderRadius: 28,
     justifyContent: 'center',
     alignItems: 'center',
 },
 buttonText: {
     fontSize: hp('2.7'),
     color: 'white'
 },
 logoStyle: {
     width: wp('24'),
     height: hp('4')
 }
})