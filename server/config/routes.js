import Router from 'koa-router';
import HomeController from '../app/controllers/homeController';

const router = Router();
const homeCtrl = new HomeController();

router.get('/', homeCtrl.index());

export default router;
