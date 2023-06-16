import React from 'react'
import { NativeSyntheticEvent, StyleProp, TextInput, TextInputChangeEventData, TextInputFocusEventData, TextStyle } from 'react-native'
import {styles} from './style/styles'
interface input_props{
  value:any;
  placeholder:string;
  editable:boolean;
  backgroundColor:StyleProp<TextStyle>;
  handleChange:(((text: string) => void) | undefined);
  handleBlur:((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
}
const Input_Text = (props:input_props) => {
  const {placeholder,editable,value,backgroundColor,handleBlur,handleChange} = props;
  return (
    <TextInput 
      placeholderTextColor={"#9B9999"}
      style={[backgroundColor,styles.input]}
      placeholder={placeholder}
      value={value}
      editable={editable}
      onChangeText={handleChange}
      onBlur={handleBlur}
    />
  )
}

export {Input_Text}
