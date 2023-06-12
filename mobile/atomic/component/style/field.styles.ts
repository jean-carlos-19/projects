import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const field_styles =  StyleSheet.create({
    container:{
        width:"100%",
        height:RFValue(100),
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"space-between",
        marginTop:RFValue(24)
    },
    header:{
        width:"100%",
        flexDirection:'row',
        justifyContent:"space-between"
    },
    field:{
        color:"#9B9999",
        backgroundColor:"rgba(131, 126, 126, 0.3)"
    },
    sms_error:{
        color:"#F46E6E",
    },
    lenght_error:{
        width:"100%",
        color:"#9B9999",
        textAlign:"right"
    },
    title:{
        color:"#9B9999"
    }
})
export {field_styles}