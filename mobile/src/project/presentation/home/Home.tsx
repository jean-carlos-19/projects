import React from 'react'
import { View } from 'react-native'
import { Tittle_1 } from 'global/atomic/element'
import {Form} from 'global/atomic/layout'
import {STYLES} from './style/styles'
import {validation,MAX_VALUE} from './validation'

const Home = () => {
  return (
    <View style={STYLES.container}>
      <Tittle_1 text={'Create your first projects'} />
      <Form
        max_values={MAX_VALUE} 
        validadion={validation}
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
