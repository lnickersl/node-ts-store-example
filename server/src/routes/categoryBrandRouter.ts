import {Router} from 'express';
import categoryBrandController from '../controllers/categoryBrandController';
import {EUserRole} from '../enums/EUserRole';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post(
  '/',
  authMiddleware(EUserRole.Admin),
  controllerErrorCatch(categoryBrandController.create)
);

export default router;
