import { useState } from "react"

const useStateGlobal =()=>{
    const [loading,set_loading] = useState(false);
    const [message,set_message] = useState('');
    const [error,set_error] = useState('');

    const hidden_menssage =()=>{
        set_error('');
        set_message('');
    }

    return {loading,set_loading,message,set_message,error,set_error,hidden_menssage}
}
export {useStateGlobal}