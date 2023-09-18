import express from "express";

import creditCardController from "../controllers/credit-card-controller.js";
import CreditCardValidationRules from "../validations/credit-card-validation.js";
import { validate } from "../middlewares/validation-middleware.js";
import { isAdmin } from "../middlewares/authorization-middleware.js";
const router = express.Router();

// Define the route for retrieving filtered credit card data
router.get(
	"/external-api/credit-cards",
	isAdmin,
	CreditCardValidationRules.validateQuery(),
	validate,
	creditCardController.getFilteredCreditCardData
);

export default router;
