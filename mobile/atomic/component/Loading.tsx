import React from 'react'
import { View,ActivityIndicator,Text } from 'react-native'
import {loading_styles} from './style/loading.styles'

interface loading_props{
  message:string;
}

const Loading = (props:loading_props) => {
  const {message} = props;
  return (
    <View style={loading_styles.container}>
        <ActivityIndicator  size={70} color="#f2f2f2" />
        <Text style={loading_styles.text}>Cargando... Por favor espere</Text>
        <Text style={loading_styles.text}>{message}</Text>
    </View>
  )
}

export {Loading}
