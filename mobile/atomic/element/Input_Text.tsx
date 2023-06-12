import React from 'react'
import { TextInput } from 'react-native'

interface input_props{
  placeholder:string;
}
const Input_Text = (props:input_props) => {
  const {placeholder} = props;
  return (
    <TextInput 
      placeholder={placeholder}
    />
  )
}

export {Input_Text}
