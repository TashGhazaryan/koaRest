import { APIGatewayEvent, Context, Callback } from "aws-lambda";
import { SlsResponse } from "../@types/types";

module.exports.info = (event: APIGatewayEvent, _: Context, callback: Callback) => {
    const response: SlsResponse = {
        statusCode: 200,
        body: JSON.stringify({
            timestamp: new Date(),
            body: event
        })
    }
    callback(null, response);
}