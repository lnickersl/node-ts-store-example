import {Router} from 'express';
import categoryController from '../controllers/categoryController';
import {EUserRole} from '../enums/EUserRole';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post(
  '/',
  authMiddleware(EUserRole.Admin),
  controllerErrorCatch(categoryController.create)
);

router.delete(
  '/',
  authMiddleware(EUserRole.Admin),
  controllerErrorCatch(categoryController.delete)
);

router.get('/', controllerErrorCatch(categoryController.getAll));

export default router;
