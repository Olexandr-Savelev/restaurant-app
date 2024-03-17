import express from "express";
import UserController from "../controllers/user.controller";
const router = express.Router();

router.post("/", UserController.LoginAsUser);
router.get("/", UserController.GetLoggedUser);

export default router;
