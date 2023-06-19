import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Formik } from 'formik'
import { ObjectSchema } from 'yup';
import { Field_Text } from 'global/atomic/component';
import { styles } from './style'
import { Create_Entity } from 'project/domain/entity';
interface form_props {
    initialValues: Create_Entity;
    validadion: ObjectSchema<Create_Entity>;
    max_values: any;
    position: number;
    position_location: (position: number) => void;
    handle_send: (values: any) => void;
}

const Form = (props: form_props) => {
    const { initialValues, validadion, max_values, position, position_location, handle_send } = props;
    return (
        <Formik
            validateOnMount={true}
            validationSchema={validadion}
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                actions.resetForm();
                handle_send(values)
            }}
        >
            {
                (props) => {
                    const { values, errors, touched, isValid, handleChange, handleBlur, handleSubmit } = props;
                    return (
                        position === 1 ? (
                            <>
                                <Field_Text
                                    title={'Title'}
                                    sms_error={errors?.title && touched?.title ? errors.title : ''}
                                    value={values.title}
                                    placeholder={'Ej: my title'}
                                    editable={true}
                                    handleChange={handleChange('title')}
                                    handleBlur={handleBlur('title')}
                                    max_length={max_values.title}
                                />
                                <Field_Text
                                    title={'Description'}
                                    sms_error={errors?.description && touched?.description ? errors.description : ''}
                                    value={values.description}
                                    placeholder={'Ej: my description'}
                                    editable={true}
                                    handleChange={handleChange('description')}
                                    handleBlur={handleBlur('description')}
                                    max_length={max_values.description}
                                />
                                <Field_Text
                                    title={'Conclusion'}
                                    sms_error={errors?.conclusion && touched?.conclusion ? errors.conclusion : ''}
                                    value={values.conclusion}
                                    placeholder={'Ej: my conclusion'}
                                    editable={true}
                                    handleChange={handleChange('conclusion')}
                                    handleBlur={handleBlur('conclusion')}
                                    max_length={max_values.conclusion}
                                />
                                <Field_Text
                                    title={'Category'}
                                    sms_error={errors?.category && touched?.category ? errors.category : ''}
                                    value={values.category}
                                    placeholder={'Ej: Web o Mobile o Server'}
                                    editable={true}
                                    handleChange={handleChange('category')}
                                    handleBlur={handleBlur('category')}
                                    max_length={max_values.category}
                                />
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => position_location(2)}
                                    disabled={
                                        !errors?.title && touched?.title &&
                                            !errors?.description && touched?.description &&
                                            !errors?.conclusion && touched?.conclusion &&
                                            !errors?.category && touched?.category ? false : true
                                    }
                                >
                                    <Text>
                                        {
                                            !errors?.title && touched?.title &&
                                                !errors?.description && touched?.description &&
                                                !errors?.conclusion && touched?.conclusion &&
                                                !errors?.category && touched?.category ? 'Next' : 'Wait.. empty fields'
                                        }
                                    </Text>
                                </TouchableOpacity>
                            </>
                        ) : (
                            <>
                                <Field_Text
                                    title={'Tecnologies'}
                                    sms_error={errors?.tecnologies && touched?.tecnologies ? errors.tecnologies : ''}
                                    value={values.tecnologies}
                                    placeholder={'Ej: Typescript, Sql'}
                                    editable={true}
                                    handleChange={handleChange('tecnologies')}
                                    handleBlur={handleBlur('tecnologies')}
                                    max_length={max_values.tecnologies}
                                />
                                <Field_Text
                                    title={'Portada'}
                                    sms_error={errors?.url_image && touched?.url_image ? errors.url_image : ''}
                                    value={values.url_image}
                                    placeholder={'"Ej: url de la portada'}
                                    editable={true}
                                    handleChange={handleChange('url_image')}
                                    handleBlur={handleBlur('url_image')}
                                    max_length={max_values.image}
                                />
                                <Field_Text
                                    title={'Demo'}
                                    sms_error={errors?.url_demo && touched?.url_demo ? errors.url_demo : ''}
                                    value={values.url_demo}
                                    placeholder={'"Ej: url del app'}
                                    editable={true}
                                    handleChange={handleChange('url_demo')}
                                    handleBlur={handleBlur('url_demo')}
                                    max_length={max_values.demo}
                                />
                                <Field_Text
                                    title={'Github'}
                                    sms_error={errors?.url_github && touched?.url_github ? errors.url_github : ''}
                                    value={values.url_github}
                                    placeholder={'Ej: url de github'}
                                    editable={true}
                                    handleChange={handleChange('url_github')}
                                    handleBlur={handleBlur('url_github')}
                                    max_length={max_values.github}
                                />
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        handleSubmit();
                                        position_location(1);
                                    }}
                                    disabled={!isValid}
                                >
                                    <Text>Save project</Text>
                                </TouchableOpacity>
                            </>
                        )

                    )
                }
            }
        </Formik>
    )
}

export { Form }
