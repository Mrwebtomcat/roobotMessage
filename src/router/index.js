const router = require('koa-router')()
router.get('/',async (ctx,next)=>{
  ctx.body = 'hello world'
})

router.get('/api',async (ctx,next)=>{
  const req_query = ctx.query;
  ctx.body = {
    body:1,
    req_query
  }
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})  

module.exports = router