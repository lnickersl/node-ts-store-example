import {Router} from 'express';
import {controllerErrorCatch} from '../helpers/controllerErrorCatch';
import userController from '../controllers/userController';

const router = Router();

router.post('/registration', controllerErrorCatch(userController.registration));
router.post('/login', controllerErrorCatch(userController.login));
router.get('/auth', controllerErrorCatch(userController.auth));

export default router;
