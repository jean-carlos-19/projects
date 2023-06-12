import React, { useState } from 'react'
import { NativeSyntheticEvent, TextInputFocusEventData, View } from 'react-native'
import { Label,Text_Small, Input_Text } from 'global/atomic/element'
import {field_styles} from './style/field.styles'

interface field_props{
    title:string;
    sms_error:any;
    value:string;
    placeholder:string;
    editable:boolean;
    max_length:number;
    handleChange:(((text: string) => void) | undefined);
    handleBlur:((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
}
const Field_Text = (props:field_props) => {
    const {title,sms_error,value,placeholder,editable,handleChange,handleBlur,max_length} = props;
    return (
    <View style={field_styles.container}>
      <View style={field_styles.header}>
        <Label style={field_styles.title} text={title} />
        <Text_Small style={field_styles.sms_error} text={sms_error}  />
      </View>
      <Input_Text 
        backgroundColor={field_styles.field}
        placeholder={placeholder} 
        value={value} 
        editable={editable} 
        handleChange={handleChange} 
        handleBlur={handleBlur}      
        />
      <Text_Small style={[field_styles.lenght_error,(value.length > max_length) ? {color:"#F46E6E"}:{}]} text={`${value.length} / ${max_length}`} />
    </View>
  )
}

export {Field_Text}