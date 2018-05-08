import * as Koa from 'koa';
import * as body from "koa-body";
import * as compose from 'koa-compose'
import { devRouter } from './controller/devRouter'
import { serverRouter } from './controller/serverRouter';
import { rootRouter } from './controller/rootRouter';
import * as serverless from 'serverless-http';
import { Http2ServerRequest } from 'http2';




async function errorHandler(ctx: Koa.Context, next: () => Promise<any>) {
    try {
        await next();
        if (ctx.status === 404) ctx.throw(404);
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = { error: err.message , stacktrace: err.stack.split('\n') }
    }
}

const app = new Koa();

app.use(compose([
    errorHandler,
    body(),
    devRouter,
    serverRouter,
    rootRouter
]));



module.exports.handler =  serverless(app, {
    request: (request:Http2ServerRequest) => {
        if (process.env.IS_OFFLINE) {
          request.url = request.url.replace(`/${process.env.offline_prefix}`,'');
          if (request.url === '') {
              request.url = '/';
          }     
        }
      }
});