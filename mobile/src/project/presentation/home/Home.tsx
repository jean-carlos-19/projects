import React from 'react'
import { View } from 'react-native'
import {Form} from 'global/atomic/layout'
import {STYLES} from './style/styles'
import { Tittle_1 } from 'global/atomic/element'
const Home = () => {
  return (
    <View style={STYLES.container}>
      <Tittle_1 text={'Create your first projects'} />
      <Form 
        initialValues={{
          title:"",
          description:"",
          conclusion:"",
          category:"",
          tecnologies:"",
          demo:"",
          github:"",

        }}      
      />
    </View>
  )
}

export {Home} 
