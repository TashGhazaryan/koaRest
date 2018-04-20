import * as Router from 'koa-router';

const router = new Router()

router.get('/', async (ctx) => {
    const resp = {
        message: 'Hello World'
    }
    ctx.body = resp;
})

router.get('/test-error', async () => {
    throw new Error('my error');
})

export const rootRouter = router.routes();