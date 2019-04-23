const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const {Init} = require('../cli/index.js')



// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

router.get('/test',(ctx,next)=> {
  console.log("启动打包")
  Init();
})

app.use(router.routes()).use(router.allowedMethods());

console.log("程序启动正常")

app.listen(3000);