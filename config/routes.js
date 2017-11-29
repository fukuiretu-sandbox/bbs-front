import Router from 'koa-router';
import HomeController from '../controllers/home_controller';

const router = Router();
const homeCtrl = new HomeController();

router.get('/', homeCtrl.index());

export default router;
