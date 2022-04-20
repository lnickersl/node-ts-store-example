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
router.delete(
  '/',
  authMiddleware(EUserRole.Admin),
  controllerErrorCatch(brandController.delete)
);

router.get('/', controllerErrorCatch(brandController.getAll));

router.get('/:id', controllerErrorCatch(brandController.getOne));

export default router;
