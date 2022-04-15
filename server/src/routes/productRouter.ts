import {Router} from 'express';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import productController from '../controllers/productController';
import {EUserRole} from '../enums/EUserRole';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post(
  '/',
  authMiddleware(EUserRole.Admin),
  controllerErrorCatch(productController.create)
);

router.delete(
  '/',
  authMiddleware(EUserRole.Admin),
  controllerErrorCatch(productController.delete)
);

router.get('/:id', controllerErrorCatch(productController.getOne));
router.get('/', controllerErrorCatch(productController.getAll));

export default router;
