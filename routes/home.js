export default [
  {
    path: '/',
    method: 'get',
    func: (ctx, next) => {
      ctx.body = 'Hello world!';
    }
  }
];
