import { Router } from "express";
import { uploadImage, get_image_by_id } from "../../controllers/upload";
import { jwt_verify } from "../../middlewares/jwt_verify";

const router = Router();

router.route("/upload/:id")
  .post(jwt_verify, uploadImage)
  .get(jwt_verify,get_image_by_id);

  export default router
