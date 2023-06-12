import React from 'react'
import { Text } from 'react-native'

interface title_1_props{
    text:string;
}
const Tittle_1 = (props:title_1_props) => {
    const {text} = props;
  return (
    <Text>
        {text}
    </Text>
  )
}

export  {Tittle_1}
