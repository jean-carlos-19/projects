import { StyleSheet } from "react-native";

const field_styles =  StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"column",
        alignItems:"flex-start",
    },
    field:{
        color:"#9B9999",
        backgroundColor:"rgba(131, 126, 126, 0.3)"
    },
    sms_error:{
        width:"100%",
        color:"#9B9999",
        textAlign:"right"
    },
    title:{
        color:"#9B9999"
    }
})
export {field_styles}