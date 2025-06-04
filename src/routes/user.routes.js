import express from "express";
import controller from "../controllers/userController.js";
// import auth from "../middlewares/auth.js"

const router = express.Router();

router.post('/register', controller.registerUser);
router.post('/login', controller.authentication);

// router.get("/", auth, controller.listUsers);
router.get("/", controller.listUsers);
// router.put("/:id", auth, controller.updateUser);
router.put("/:id", controller.updateUser);
// router.delete('/:id', auth, controller.deleteUser);
router.delete('/:id', controller.deleteUser);


export default router;

