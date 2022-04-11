import {Router} from 'express';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import productController from '../controllers/productController';

const router = Router();

router.post('/', controllerErrorCatch(productController.create));
router.get('/', controllerErrorCatch(productController.getAll));
router.get('/:id', controllerErrorCatch(productController.getOne));

export default router;
