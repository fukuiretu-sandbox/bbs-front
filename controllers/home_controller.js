export default class HomeController {
  constructor() {
  }

  index () {
    return (ctx, next) => {
      ctx.body = 'Hello World!!'
    }
  }
}
