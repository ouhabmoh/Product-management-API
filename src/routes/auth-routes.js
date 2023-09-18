import express from "express";
import * as AuthController from "../controllers/auth-controller.js";

const router = express.Router();

router.post("/auth/login", AuthController.login);
router.post("/auth/register", AuthController.register);

export default router;
