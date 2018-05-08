import * as Router from 'koa-router';
const router = new Router({
    prefix: '/server'
})

router.get('/info', async (ctx) => {
    console.log(ctx.request)
    const resp = {
        timestamp: Date.now()
    }
    ctx.body = resp;
})
router.get('/dev', async (ctx) => {
    console.log(ctx.request)
    const resp = {
        timestamp: "tagiiil"
    }
    ctx.body = resp;
})

export const serverRouter = router.routes();