import {StyleSheet,Dimensions} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

const progress_bar_styles = StyleSheet.create({
    pogress_bar:{
        width:"100%",
        paddingVertical:RFValue(8),
        borderRadius:RFValue(8),
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:"rgba(131, 126, 126, 0.3)",
    },
    item:{
        width:RFValue(40),
        height:RFValue(40),
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:RFValue(40),
        backgroundColor:"#0F172A",
    },
    text_btn:{
        color:"#f2f2f2"
    },
    item_disable:{
        backgroundColor:"#f2f2f2",
    },
    text_disable:{
        color:"#0F172A"
    },
    
})
export {progress_bar_styles}