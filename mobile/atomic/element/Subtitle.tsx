import React from 'react'
import { Text } from 'react-native'

interface subtitle_props{
    text:string;
}

const Subtitle = (props:subtitle_props) => {
    const {text} = props;
  return (
   <Text>
        {text}
   </Text>
  )
}

export {Subtitle}
