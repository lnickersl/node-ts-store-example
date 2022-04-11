import {Router} from 'express';
import brandController from '../controllers/brandController';

const router = Router();

router.post('/', brandController.create);
router.get('/', brandController.getAll);
router.delete('/', brandController.delete);

export default router;
