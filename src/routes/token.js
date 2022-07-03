import { Router } from 'express';
import controller from '../controllers/Token';

const router = new Router();

router.post('/', controller.store);

export default router;
