import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    tabContainer: {
        flex: 1
    },
    tabContainer: {
        elevation: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: hp('7%'),
        alignSelf: 'center'
      },
    tabBarUnderlineStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 0,
      width: 0
    },
    mainContainer: {
      flex: 1
    },
    tabsContainer : {
        marginTop: hp('2'),
        flex: 1,
    },
})