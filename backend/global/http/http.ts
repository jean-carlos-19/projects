import { Response } from "express";

class Http{

    public response(response:Response,id_response:number,message_response:string){
        response.json({
            id_response,
            message_response
        })
    }
    public response_server_failed(response:Response){
        response.json({
            id_response:500,
            message_response:'Error internal server'
        })
    }
}
export {Http}