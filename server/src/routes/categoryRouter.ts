import {Router} from 'express';
import categoryController from '../controllers/categoryController';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';

const router = Router();

router.post('/', controllerErrorCatch(categoryController.create));
router.get('/', controllerErrorCatch(categoryController.getAll));
router.delete('/', controllerErrorCatch(categoryController.delete));

export default router;
