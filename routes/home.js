import HomeController from '../controllers/home_controller';

const ctrl = new HomeController();

export default [
  {
    path: '/',
    method: 'get',
    func: ctrl.index()
  }
];
