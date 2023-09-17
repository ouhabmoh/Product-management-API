// routes/product.routes.js
import express from "express";
import productController from "../controllers/product-controller.js";
import { validate } from "../middlewares/validation-middleware.js";
import {
	productCreationValidationRules,
	productUpdateValidationRules,
} from "../validations/product-validations.js";
const router = express.Router();

// Add a new product
router.post(
	"/products",
	productCreationValidationRules(),
	validate,
	productController.addProduct
);

// Get products with pagination and search
router.get("/products", productController.getProducts);

// Get a product by ID
router.get("/products/:id", productController.getProduct);

// Update a product by ID
router.put(
	"/products/:id",
	productUpdateValidationRules(),
	validate,
	productController.updateProduct
);

// Remove a product by ID
router.delete("/products/:id", productController.removeProduct);

export default router;
