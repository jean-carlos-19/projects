import React from 'react'
import { NativeSyntheticEvent, StyleProp, TextInput, TextInputChangeEventData, TextInputFocusEventData, TextStyle } from 'react-native'
import {styles} from './style/styles'
interface input_props{
  value:any;
  placeholder:string;
  editable:boolean;
  backgroundColor:StyleProp<TextStyle>;
  handleChange:((e: NativeSyntheticEvent<TextInputChangeEventData>) => void) | undefined
  handleBlur:((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
}
const Input_Text = (props:input_props) => {
  const {placeholder,editable,value,backgroundColor,handleBlur,handleChange} = props;
  return (
    <TextInput 
      style={[backgroundColor,styles.input]}
      placeholder={placeholder}
      value={value}
      editable={editable}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  )
}

export {Input_Text}
