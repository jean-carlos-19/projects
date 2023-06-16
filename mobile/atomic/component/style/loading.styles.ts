import {StyleSheet,Dimensions} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

const {width,height} = Dimensions.get('screen');
const loading_styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
        position:'absolute',
        zIndex:2,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:"rgba(0, 0, 0, 0.8)",
    },    
    text:{
        marginTop:16,
        color:"#f2f2f2"
    }
})
export {loading_styles}