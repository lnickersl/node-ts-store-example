import {Router} from 'express';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import productController from '../controllers/productController';

const router = Router();

router.post('/', controllerErrorCatch(productController.create));
router.get('/:id', controllerErrorCatch(productController.getOne));
router.get('/', controllerErrorCatch(productController.getAll));
router.delete('/', controllerErrorCatch(productController.delete));

export default router;
