import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    mainContainer: {
        height: hp('15'),
        width: '48%',
        backgroundColor: 'red',
        marginTop: hp('2'),
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoStyle: {
        height: wp('15'),
        width: wp('15'),
    },
    text: {
        fontWeight: 'bold',
        fontSize: hp('2.4')
    }
});