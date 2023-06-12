import {object,string} from 'yup'

const MAX_VALUE = Object.freeze({
    title:50,
    description:255,
    conclusion:255,
    category:255,
    tecnologies:255,
    demo:255,
    github:255
})
const validation = object({
    title:string().required('title is a required field').max(MAX_VALUE.title,'value exceeded'),
    description:string().required('descripction is a required field').max(MAX_VALUE.description,'value exceeded'),
    conclusion:string().required('conclusion is a required field').max(MAX_VALUE.conclusion,'value exceeded'),
    category:string().required('category is a required field').max(MAX_VALUE.category,'value exceeded'),
    tecnologies:string().required('tecnologies is a required field').max(MAX_VALUE.tecnologies,'value exceeded'),
    demo:string().required('demo is a required field').max(MAX_VALUE.demo,'value exceeded'),
    github:string().required('github is a required field').max(MAX_VALUE.github,'value exceeded'),
})
export {validation,MAX_VALUE}