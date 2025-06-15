import { Router } from "express";
import { createToken } from "../../controllers/token";

const router = Router();

router.post('/token', createToken);

export default router;
