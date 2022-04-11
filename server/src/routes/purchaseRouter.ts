import {Router} from 'express';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import purchaseController from '../controllers/purchaseController';

const router = Router();

router.post('/', controllerErrorCatch(purchaseController.create));
router.get('/', controllerErrorCatch(purchaseController.getAll));
router.get('/:id', controllerErrorCatch(purchaseController.getOne));

export default router;
