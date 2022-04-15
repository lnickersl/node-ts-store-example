import {Router} from 'express';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import productController from '../controllers/productController';
import roleMiddleware from '../middleware/roleMiddleware';
import {EUserRole} from '../enums/EUserRole';

const router = Router();

router.post(
  '/',
  roleMiddleware(EUserRole.Admin),
  controllerErrorCatch(productController.create)
);

router.delete(
  '/',
  roleMiddleware(EUserRole.Admin),
  controllerErrorCatch(productController.delete)
);

router.get('/:id', controllerErrorCatch(productController.getOne));
router.get('/', controllerErrorCatch(productController.getAll));

export default router;
