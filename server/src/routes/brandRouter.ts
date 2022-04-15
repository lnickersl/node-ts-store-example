import {Router} from 'express';
import brandController from '../controllers/brandController';
import {EUserRole} from '../enums/EUserRole';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post(
  '/',
  authMiddleware(EUserRole.Admin),
  controllerErrorCatch(brandController.create)
);
router.get('/', controllerErrorCatch(brandController.getAll));
router.delete(
  '/',
  authMiddleware(EUserRole.Admin),
  controllerErrorCatch(brandController.delete)
);

export default router;
