import {Router} from 'express';

import userRouter from './userRouter';
import categoryRouter from './categoryRouter';
import brandRouter from './brandRouter';
import productRouter from './productRouter';
import purchaseRouter from './purchaseRouter';

const router = Router();

router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/brand', brandRouter);
router.use('/product', productRouter);
router.use('/purchase', purchaseRouter);

export default router;
