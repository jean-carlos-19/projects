import React from 'react'
import {Formik} from 'formik'
import { Filed_Text } from 'global/atomic/component';

interface form_props{
    initialValues:any
}
const Form = (props:form_props) => {
    const {initialValues} = props;
  return (
    <Formik
        initialValues={initialValues}
        onSubmit={(values,actions)=>{
            console.log(values)
        }}
    >
     {
        (props)=>{
            const {values,handleChange,handleBlur} = props;
            return (      
                Object.keys(values).map((prop:string)=>(
                    <Filed_Text 
                    title={`${values[prop]}`} 
                    sms_error={''} 
                    value={values[prop]} 
                    placeholder={`${values[prop]}`} 
                    editable={true} 
                    handleChange={handleChange(`${values[prop]}`)} 
                    handleBlur={handleBlur(`${values[prop]}`)} 
                    max_length={0} 
                    />
                ))
            )
        }
     }
    </Formik>
  )
}

export  {Form}
