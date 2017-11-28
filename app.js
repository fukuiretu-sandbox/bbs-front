'use strict';

import Koa from 'koa';
import Router from 'koa-router';
import Logger from 'koa-logger';

const app = new Koa();
const router = Router();

app.use(Logger());


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
console.log('server start listen at 3005');
