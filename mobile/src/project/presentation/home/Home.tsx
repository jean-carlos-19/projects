import React from 'react'
import { View } from 'react-native'
import {Form} from 'global/atomic/layout'
const Home = () => {
  return (
    <View>
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
