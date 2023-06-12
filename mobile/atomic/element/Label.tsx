import React from 'react'
import { Text } from 'react-native'


interface label_props{
    text:string;
}

const Label = (props:label_props) => {
    const {text} = props;
  return (
    <Text>
      {text}
    </Text>
  )
}

export {Label}
