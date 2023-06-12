import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'

interface text_small_props{
    text:string;
    style?:StyleProp<TextStyle>;
}

const Text_Small = (props:text_small_props) => {
    const {text,style} = props;
  return (
    <Text style={[style]}>
      {text}
    </Text>
  )
}

export {Text_Small}
