import React from 'react'
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, TextInputFocusEventData } from 'react-native'

interface input_props{
  value:any;
  placeholder:string;
  editable:boolean;
  handleChange:((e: NativeSyntheticEvent<TextInputChangeEventData>) => void) | undefined
  handleBlur:((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
}
const Input_Text = (props:input_props) => {
  const {placeholder,editable,handleBlur,handleChange,value} = props;
  return (
    <TextInput 
      placeholder={placeholder}
      value={value}
      editable={editable}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  )
}

export {Input_Text}
