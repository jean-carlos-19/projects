import React from 'react'
import { Formik } from 'formik'
import { AnyObject, ObjectSchema } from 'yup';
import { Field_Text } from 'global/atomic/component';

interface form_props {
    initialValues:any;
    validadion: ObjectSchema<any>;
    max_values:any;
}
const Form = (props: form_props) => {
    const { initialValues,validadion,max_values } = props;
    return (
        <Formik
            validateOnMount={true}
            validationSchema={validadion}
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                console.log(values)
            }}
        >
            {
                (props) => {
                    const { values,errors, touched, handleChange, handleBlur } = props;
                    return (
                        Object.keys(initialValues).map((prop:string,i:number)=>(
                            <Field_Text
                                key={i}
                                title={prop}
                                sms_error={errors?.[prop] && touched?.[prop] ? errors?.[prop] : ''}
                                value={values[prop]}
                                placeholder={`Ej. Myfirst project.`}
                                editable={true}
                                handleChange={handleChange(prop)}
                                handleBlur={handleBlur(prop)}
                                max_length={max_values[prop]}
                            />
                        ))
                            
                    )
                }
            }
        </Formik>
    )
}

export { Form }
