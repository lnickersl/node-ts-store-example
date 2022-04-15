import {Router} from 'express';
import brandController from '../controllers/brandController';
import {EUserRole} from '../enums/EUserRole';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import roleMiddleware from '../middleware/roleMiddleware';

const router = Router();

router.post(
  '/',
  roleMiddleware(EUserRole.Admin),
  controllerErrorCatch(brandController.create)
);
router.get('/', controllerErrorCatch(brandController.getAll));
router.delete(
  '/',
  roleMiddleware(EUserRole.Admin),
  controllerErrorCatch(brandController.delete)
);

export default router;
