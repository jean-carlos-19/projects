import {object,string} from 'yup'
const validation = object({
    title:string().required(),
    description:string().required(),
    conclusion:string().required(),
    category:string().required(),
    tecnologies:string().required(),
    demo:string().required(),
    github:string().required(),
})
export {validation}