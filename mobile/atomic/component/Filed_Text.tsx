import React from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData, TextInputFocusEventData, View } from 'react-native'
import { Tittle_1,Text_Small, Input_Text } from 'global/atomic/element'

interface field_props{
    title:string;
    sms_error:string;
    
    value:any;
    placeholder:string;
    editable:boolean;
    handleChange:((e: NativeSyntheticEvent<TextInputChangeEventData>) => void) | undefined
    handleBlur:((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
    
    max_length:number;
}
const Filed_Text = (props:field_props) => {
    const {title,sms_error,value,placeholder,editable,handleChange,handleBlur,max_length} = props;
  return (
    <View>
      <View>
        <Tittle_1 text={title} />
        <Text_Small text={sms_error} />
      </View>
      <Input_Text 
        placeholder={placeholder} 
        value={value} 
        editable={editable} 
        handleChange={handleChange} 
        handleBlur={handleBlur}      
        />
      <Text_Small text={`0 / ${max_length}`} />
    </View>
  )
}

export {Filed_Text}