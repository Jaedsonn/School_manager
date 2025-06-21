import { Router } from "express";
import {
  create_user,
  get_user,
  update_user,
  delete_user
} from "../../controllers/user";
import { jwt_verify } from "../../middlewares/jwt_verify";
import { createToken } from "../../controllers/token";

const router = Router();

// All routes are prefixed with /api/users
router.post('/users/login', get_user, createToken);

router.route('/users')
  .post(create_user)
  .put(jwt_verify, update_user)
  .delete(jwt_verify, delete_user);

export default router;
