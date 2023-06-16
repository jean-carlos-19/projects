import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    button:{
        width:"100%",
        borderRadius:RFValue(8),
        alignItems:"center",
        padding:RFValue(16),
        backgroundColor:"#f1f1f1"
    }
});
export {styles}