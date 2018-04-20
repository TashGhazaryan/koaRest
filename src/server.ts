import * as Koa from 'koa';
import * as body from "koa-body";
import * as compose from 'koa-compose'
import { devRouter } from './controller/devRouter'
import { serverRouter } from './controller/serverRouter';
import { rootRouter } from './controller/rootRouter';

async function erorHandler(ctx: Koa.Context, next: () => Promise<any>) {
    try {
        await next();
        if (ctx.status === 404) ctx.throw(404);
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = { error: err.message, stacktrace: err.stack.split('\n') }
    }
}

const app = new Koa();
const all = compose([
    erorHandler,
    body(),
    devRouter,
    serverRouter,
    rootRouter
])

app.use(all);
app.listen(8080);
console.log('Server running on port 8080');