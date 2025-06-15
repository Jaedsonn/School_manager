import { Router } from 'express';
import studentRoutes from './modulos/student';
import userRoutes from './modulos/user';
import authRoutes from './modulos/token';
import uploadRoutes from './modulos/upload';

const router = Router();

router.use('/api', studentRoutes);
router.use('/api', userRoutes);
router.use('/api/auth', authRoutes);
router.use("/api", uploadRoutes);

export default router;
