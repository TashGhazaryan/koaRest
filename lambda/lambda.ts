import { APIGatewayEvent, Callback, Context } from 'aws-lambda';
import { SlsResponse } from '../@types/types';

module.exports.hello = (event: APIGatewayEvent, _: Context, callback: Callback) => {
  const response: SlsResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!',
      input: event,
    }),
  };
  callback(null, response);
};
