import { Router } from 'express';
import controller from '../controllers/Foto';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, controller.store);

export default router;
