import { APIGatewayEvent } from "aws-lambda";
import { Request } from "express";

export interface SlsResponse {
    statusCode:number,
    body?: string
}
export interface SlsRequest extends Request {
    event: object
    context:object
}
export interface ServerlessError extends Error {
    status: number
    stackTrace?: any
}