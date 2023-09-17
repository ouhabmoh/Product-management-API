import express from "express";

import creditCardController from "../controllers/credit-card-controller.js";

const router = express.Router();

// Define the route for retrieving filtered credit card data
router.get(
	"/external-api/credit-cards",
	creditCardController.getFilteredCreditCardData
);

export default router;
