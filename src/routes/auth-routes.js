import express from "express";
import * as AuthController from "../controllers/auth-controller.js";
import {
	loginValidationRules,
	registerValidationRules,
} from "../validations/auth-validation.js";
import { validate } from "../middlewares/validation-middleware.js";
const router = express.Router();

router.post(
	"/auth/login",
	loginValidationRules(),
	validate,
	AuthController.login
);
router.post(
	"/auth/register",
	registerValidationRules(),
	validate,
	AuthController.register
);

export default router;
