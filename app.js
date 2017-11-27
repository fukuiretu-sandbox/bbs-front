'use strict';

import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = Router();

// アクセスログ
app.use(async (ctx, next) => {
  const start = new Date;
  await next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// エラーハンドリング
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
    console.log(err);
  }
});

router.get('/users/:id', function (ctx, next) {
  ctx.body = ctx.params['id'];
});

router.get('/', function (ctx, next) {
  ctx.body = 'Hello world!';
});


app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3005);
