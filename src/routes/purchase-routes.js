// routes/purchases.router.js
import express from "express";
import purchaseController from "../controllers/purchase-controller.js";
import PurchaseValidationRules from "../validations/purchase-validation.js";
import { validate } from "../middlewares/validation-middleware.js";
import { isAdmin } from "../middlewares/authorization-middleware.js";
import { isLoggedIn } from "../middlewares/authentication-middleware.js";
const router = express.Router();

// Purchase statistics
router.get("/purchases/stats", purchaseController.getPurchaseStats);

// Create a new purchase
router.post(
	"/purchases",
	isLoggedIn,
	PurchaseValidationRules.createPurchaseValidationRules(),
	validate,
	purchaseController.createPurchase
);

// Get all purchases
router.get(
	"/purchases",
	isAdmin,
	PurchaseValidationRules.validateQueryParameters(),
	validate,
	purchaseController.getAllPurchases
);

// Get purchase by ID
router.get(
	"/purchases/:id",
	isAdmin,
	PurchaseValidationRules.validatePurchaseId(),
	validate,
	purchaseController.getPurchaseById
);

// Update purchase by ID
router.put(
	"/purchases/:id",
	isAdmin,
	PurchaseValidationRules.updatePurchaseValidationRules(),
	validate,
	purchaseController.updatePurchase
);

// Delete purchase by ID
router.delete(
	"/purchases/:id",
	isAdmin,
	PurchaseValidationRules.validatePurchaseId(),
	validate,
	purchaseController.deletePurchase
);

// Top-selling products
router.get(
	"/purchases/stats/top-selling-products",
	purchaseController.getTopSellingProducts
);

// Purchase trends
router.get(
	"/purchases/stats/purchase-trends",
	purchaseController.getPurchaseTrends
);

export default router;
