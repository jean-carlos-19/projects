import React from 'react'
import { Text } from 'react-native'

interface text_small_props{
    text:string;
}

const Text_Small = (props:text_small_props) => {
    const {text} = props;
  return (
    <Text>
      {text}
    </Text>
  )
}

export {Text_Small}
