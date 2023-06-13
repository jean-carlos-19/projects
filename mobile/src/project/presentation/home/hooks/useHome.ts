import { useState } from "react";

const values_project = {
    title:"",
    description:"",
    conclusion:"",
    category:"",
    tecnologies:"",
    demo:"",
    github:"",   
}
const fields = {
    title:{
        label:"",
        placeholder:""
    },
    description:{
        label:"",
        placeholder:""
    },
    conclusion:{
        label:"",
        placeholder:""
    },
    category:{
        label:"",
        placeholder:""
    },
    tecnologies:{
        label:"",
        placeholder:""
    },
    demo:{
        label:"",
        placeholder:""
    },
    github:{
        label:"",
        placeholder:""
    }   
}
const useHome =()=>{
    const [initialValues]= useState(values_project);
    const [fields]= useState(values_project);
    return {initialValues,fields};
};

export {useHome}