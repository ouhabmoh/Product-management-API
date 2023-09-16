// routes/purchases.router.js
import express from "express";
import purchaseController from "../controllers/purchase-controller.js";

const router = express.Router();

// Create a new purchase
router.post("/purchases", purchaseController.createPurchase);

// Get all purchases
router.get("/purchases", purchaseController.getAllPurchases);

// Get purchase by ID
router.get("/purchases/:id", purchaseController.getPurchaseById);

// Update purchase by ID
router.put("/purchases/:id", purchaseController.updatePurchase);

// Delete purchase by ID
router.delete("/purchases/:id", purchaseController.deletePurchase);

// Top-selling products
router.get(
	"/purchases/stats/top-selling-products",
	purchaseController.getTopSellingProducts
);

export default router;
