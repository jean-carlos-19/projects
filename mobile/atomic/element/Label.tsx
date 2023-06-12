import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'


interface label_props{
    text:string;
    style?:StyleProp<TextStyle>;
}

const Label = (props:label_props) => {
    const {text,style} = props;
  return (
    <Text style={style}>
      {text}
    </Text>
  )
}

export {Label}
