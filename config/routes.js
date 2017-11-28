import Router from 'koa-router';
import home from '../routes/home';
import users from '../routes/users';

const router = Router();
const routes = home.concat(users);

routes.forEach((v) => {
  router[v.method](v.path, v.func);
});

export default router;
