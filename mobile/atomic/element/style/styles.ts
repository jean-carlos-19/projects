import {StyleSheet} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
const styles = StyleSheet.create({
 title:{
  width:RFValue(200),
  color:"#f2f2f2",
  fontSize:RFValue(24),
  fontStyle:"normal",
  lineHeight:RFValue(28),
  textAlign:"center"
 },
 input:{
    width:"100%",
    padding:10,
    borderRadius:8,
 }
})
export {styles}