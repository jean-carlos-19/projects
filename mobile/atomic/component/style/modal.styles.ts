import {StyleSheet,Dimensions} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

const {width,height} = Dimensions.get('screen');
const modal_styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
        position:'absolute',
        zIndex:2,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:"rgba(0, 0, 0, 0.9)",
    },    
    modal:{
        width:width - RFValue(64),
        borderRadius:RFValue(8),
        backgroundColor:"white"
    },
    header:{
        padding:RFValue(16),
        borderTopLeftRadius:RFValue(8),
        borderTopRightRadius:RFValue(8),
        textAlign:"center"
    },
    boddy:{
        padding:RFValue(16),
        borderTopLeftRadius:RFValue(8),
        borderTopRightRadius:RFValue(8),
        color:"#333"
    },
    button:{
        width:"100%",
        padding:RFValue(16),
        borderBottomLeftRadius:RFValue(8),
        borderBottomRightRadius:RFValue(8),
    },
    text:{
        color:"#f2f2f2",
        textAlign:"center"
    },
    error:{
        backgroundColor:"#CD1818",
        color:"#f2f2f2",
    },
    success:{
        backgroundColor:"#0079FF",
        color:"#f2f2f2",
    }
})
export {modal_styles}