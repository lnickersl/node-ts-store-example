import {Router} from 'express';
import purchaseController from '../controllers/purchaseController';

const router = Router();

router.post('/', purchaseController.create);
router.get('/', purchaseController.getAll);
router.get('/:id', purchaseController.getOne);

export default router;
