import Koa from 'koa';
import router from './config/routes';
import Logger from 'koa-logger';
import views from 'koa-views';

const app = new Koa();

app.use(Logger());

// Must be used before any router is used
app.use(views(__dirname + '/views', {
  map: {
    html: 'nunjucks'
  }
}));

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

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3005);
console.log('server start listen at 3005');
