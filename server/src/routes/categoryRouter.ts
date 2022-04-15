import {Router} from 'express';
import categoryController from '../controllers/categoryController';
import {EUserRole} from '../enums/EUserRole';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import roleMiddleware from '../middleware/roleMiddleware';

const router = Router();

router.post(
  '/',
  roleMiddleware(EUserRole.Admin),
  controllerErrorCatch(categoryController.create)
);

router.delete(
  '/',
  roleMiddleware(EUserRole.Admin),
  controllerErrorCatch(categoryController.delete)
);

router.get('/', controllerErrorCatch(categoryController.getAll));

export default router;
