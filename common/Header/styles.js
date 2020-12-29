import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    mainContainer: {
        height: hp('10'),
        backgroundColor: '#fc5d00',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    

    },
    logoStyle: {
        width: '130%',
        height: hp('10')
    },
    headerText: {
        fontSize: hp('4'),
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white'
    }
})