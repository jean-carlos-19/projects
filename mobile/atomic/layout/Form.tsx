import React from 'react'
import {Formik} from 'formik'
import { Field_Text } from 'global/atomic/component';

interface form_props{
    initialValues:any
}
const Form = (props:form_props) => {
    const {initialValues} = props;
  return (
    <Formik
        validateOnMount={true}
        initialValues={initialValues}
        onSubmit={(values,actions)=>{
            console.log(values)
        }}
    >
     {
        (props)=>{
            const {values,handleChange,handleBlur} = props;
            return (      
                Object.keys(initialValues).map((prop:string,i:number)=>{
                    console.log(values.title)
                    return(
                        <Field_Text 
                            key={i}
                            title={`${prop.toLocaleLowerCase()}`} 
                            sms_error={''} 
                            value={values[prop]} 
                            placeholder={`${prop.toLocaleLowerCase()}`} 
                            editable={true} 
                            handleChange={handleChange(`${prop}`)} 
                            handleBlur={handleBlur(`${prop}`)} 
                            max_length={25} 
                        />
                    )
                })
            )
        }
     }
    </Formik>
  )
}

export  {Form}
