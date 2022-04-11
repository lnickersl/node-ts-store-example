import {Router} from 'express';
import brandController from '../controllers/brandController';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';

const router = Router();

router.post('/', controllerErrorCatch(brandController.create));
router.get('/', controllerErrorCatch(brandController.getAll));
router.delete('/', controllerErrorCatch(brandController.delete));

export default router;
