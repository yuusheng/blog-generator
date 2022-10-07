import Router from 'koa-router'

const router = new Router({ prefix: '/api' })

router.get('/', async (ctx) => {
  ctx.body = { msg: 'hello koa-ts' }
})

export default router
