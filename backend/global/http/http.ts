import { Response } from "express";

class Http {
  public response_cud(
    response: Response,
    id_response: number,
    message_response: string
  ) {
    response.json({
      id_response,
      message_response,
    });
  }
  public response_r(response: Response, data: any[]) {
    response.json({
      data: data,
    });
  }
  public response_server_failed(response: Response) {
    response.json({
      id_response: 500,
      message_response: "Error internal server",
    });
  }
}
export { Http };
