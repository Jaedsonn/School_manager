import { Router } from "express";
import { create_student,delete_student,get_student,get_students,update_student } from "../../controllers/student";
import { jwt_verify } from "../../middlewares/jwt_verify";

const router = Router();

router.route("/student")
  .get(jwt_verify, get_students)
  .post(jwt_verify, create_student);
router.route("/student/:id")
  .get(jwt_verify, get_student)
  .put(jwt_verify, update_student)
  .delete(jwt_verify, delete_student);

export default router;
