import { Router } from 'express';
import controller from '../controllers/User';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir, apenas para fins de completar o CRUD.
// router.get('/', controller.index);
// router.get('/:id', loginRequired, controller.show);

router.post('/', controller.store);
router.put('/', loginRequired, controller.update);
router.delete('/', loginRequired, controller.delete);

export default router;
