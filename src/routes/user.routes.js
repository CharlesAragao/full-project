import express from "express";
import controller from "../controllers/userController";
import auth from "../middlewares/auth"

const router = express.Router();

router.get('/', auth, controller.listUsers);
router.put('/:id', auth, controller.updateUser);
router.delete('/:id', auth, controller.deleteUser);

