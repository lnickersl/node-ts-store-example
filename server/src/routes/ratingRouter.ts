import {Router} from 'express';
import ratingController from '../controllers/ratingController';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post(
  '/',
  authMiddleware(),
  controllerErrorCatch(ratingController.create)
);

export default router;
