import {Router} from 'express';
import cartItemController from '../controllers/cartItemController';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post(
  '/',
  authMiddleware(),
  controllerErrorCatch(cartItemController.create)
);

router.delete(
  '/',
  authMiddleware(),
  controllerErrorCatch(cartItemController.delete)
);

router.get(
  '/',
  authMiddleware(),
  controllerErrorCatch(cartItemController.getAll)
);

export default router;
