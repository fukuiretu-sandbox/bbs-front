export default [
  {
    path: '/users/:id',
    method: 'get',
    func: (ctx, next) => {
      ctx.body = ctx.params['id'];
    }
  }
];
