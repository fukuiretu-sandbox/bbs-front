import Koa from 'koa';
import router from './config/routes';
import log4js from 'log4js';
import views from 'koa-views';
import serve from 'koa-static';

const app = new Koa();

app.use(serve(__dirname + '/public', {
  extensions: true
}));

// Must be used before any router is used
app.use(views(__dirname + '/views', {
  map: {
    html: 'nunjucks'
  }
}));

// Logger
app.use(async (ctx, next) => {
  log4js.configure('./config/log4js.json');
  ctx.logger = log4js.getLogger(process.env.NODE_ENV);

  ctx.logger.info('Start.')
  ctx.logger.info(ctx.request.url)

  await next();

  ctx.logger.info('End.')
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

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3005);
console.log('server start listen at 3005');
