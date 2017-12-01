export default class HomeController {
  constructor() {
  }

  index () {
    return async (ctx, next) => {
      await ctx.render('home/index', {
        user: 'Retu'
      });
    }
  }
}
