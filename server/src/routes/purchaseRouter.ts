import {Router} from 'express';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import purchaseController from '../controllers/purchaseController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post(
  '/',
  authMiddleware(),
  controllerErrorCatch(purchaseController.create)
);
router.get(
  '/',
  authMiddleware(),
  controllerErrorCatch(purchaseController.getAll)
);
router.get(
  '/:id',
  authMiddleware(),
  controllerErrorCatch(purchaseController.getOne)
);

export default router;
