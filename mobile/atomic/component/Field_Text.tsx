import React from 'react'
import { View } from 'react-native'
import { Label,Text_Small, Input_Text } from 'global/atomic/element'
import {field_styles} from './style/field.styles'

interface field_props{
    title:string;
    sms_error:string;
    
    value:any;
    placeholder:string;
    editable:boolean;
    handleChange:(field: any) => void | ((e: string | React.ChangeEvent<any>) => void)
    handleBlur:(field: any) => void | ((e: string | React.ChangeEvent<any>) => void)
    
    max_length:number;
}
const Field_Text = (props:field_props) => {
    const {title,sms_error,value,placeholder,editable,handleChange,handleBlur,max_length} = props;
    return (
    <View style={field_styles.container}>
      <View>
        <Label style={field_styles.title} text={title} />
        <Text_Small text={sms_error} />
      </View>
      <Input_Text 
        backgroundColor={field_styles.field}
        placeholder={placeholder} 
        value={value} 
        editable={editable} 
        handleChange={handleChange} 
        handleBlur={handleBlur}      
        />
      <Text_Small style={field_styles.sms_error} text={`${value} / ${max_length}`} />
    </View>
  )
}

export {Field_Text}