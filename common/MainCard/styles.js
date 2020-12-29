import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    mainContainer:{
        width: '95%',
        height: hp('15'),
        backgroundColor: '#d9ffe3',
        alignSelf: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('2')
    } ,
    logoStyle: {
        height: wp('15'),
        width: wp('15'),
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: hp('3')
    }
});