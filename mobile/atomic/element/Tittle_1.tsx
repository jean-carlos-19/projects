import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import {styles} from './style/styles'
interface title_1_props{
    text:string;
    style?:StyleProp<TextStyle>;
}
const Tittle_1 = (props:title_1_props) => {
    const {text,style} = props;
  return (
    <Text style={[style, styles.title]}>
        {text}
    </Text>
  )
}

export  {Tittle_1}
