import { useState } from "react"

const useStateGlobal =()=>{
    const [loading,set_loading] = useState(false);
    const [message,set_message] = useState();
    const [error,set_error] = useState();

    return {loading,set_loading,message,set_message,error,set_error}
}
export {useStateGlobal}