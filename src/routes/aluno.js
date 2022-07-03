import { Router } from 'express';
import controller from '../controllers/Aluno';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', loginRequired, controller.store);
router.put('/:id', loginRequired, controller.update);
router.delete('/:id', loginRequired, controller.delete);

export default router;
