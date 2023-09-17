// routes/purchases.router.js
import express from "express";
import purchaseController from "../controllers/purchase-controller.js";
import PurchaseValidationRules from "../validations/purchase-validation.js";
import { validate } from "../middlewares/validation-middleware.js";
const router = express.Router();

// Purchase statistics
router.get("/purchases/stats", purchaseController.getPurchaseStats);

// Create a new purchase
router.post(
	"/purchases",
	PurchaseValidationRules.createPurchaseValidationRules(),
	validate,
	purchaseController.createPurchase
);

// Get all purchases
router.get(
	"/purchases",
	PurchaseValidationRules.validateQueryParameters(),
	validate,
	purchaseController.getAllPurchases
);

// Get purchase by ID
router.get(
	"/purchases/:id",
	PurchaseValidationRules.validatePurchaseId(),
	validate,
	purchaseController.getPurchaseById
);

// Update purchase by ID
router.put(
	"/purchases/:id",
	PurchaseValidationRules.updatePurchaseValidationRules(),
	validate,
	purchaseController.updatePurchase
);

// Delete purchase by ID
router.delete("/purchases/:id", purchaseController.deletePurchase);

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
