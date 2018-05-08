import * as Router from 'koa-router';

const router = new Router({
    prefix: '/dev'
})

router.get('/', async (ctx) => {
    console.log(ctx.url);
    const resp = {
        message: 'Dev Endpoint!'
    }
    ctx.body = resp;
})

router.post('/:id', async (ctx) => {
    const resp = {
        params: ctx.params,
        body: ctx.request.body
    }
    ctx.body = resp;
})

export const devRouter = router.routes();