import { APIGatewayEvent, Context, Callback } from "aws-lambda";
import { SlsResponse } from "../@types/types";

module.exports.getDev = (event: APIGatewayEvent, _: Context, callback: Callback) => {
    const reponse: SlsResponse = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Dev Endpoint!",
            input: event
        })
    }

    callback(null, reponse)
}

module.exports.postDev = (event: APIGatewayEvent, _: Context, callback: Callback) => {
    console.log(typeof event.body);
    const resposne: SlsResponse = {
        statusCode: 200,
        body: JSON.stringify({
            params: event.pathParameters,
            body: event.body ? JSON.parse(event.body) : ''
        })
    }
    callback(null, resposne)
}   