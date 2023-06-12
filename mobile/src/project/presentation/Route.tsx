import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from './home'
const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ 
      headerTintColor:"",
      headerShown:false,
      headerStyle:{
        backgroundColor:""
      }
    }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export {Route}
