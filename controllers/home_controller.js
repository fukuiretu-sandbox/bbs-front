export default class HomeController {
  constructor() {
  }

  index () {
    return async (ctx, next) => {
      ctx.logger.info('hogehoge');
      
      await ctx.render('home/index', {
        user: 'John'
      });
    }
  }
}
