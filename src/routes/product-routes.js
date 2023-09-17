// routes/product.routes.js
import express from "express";
import productController from "../controllers/product-controller.js";
import { validate } from "../middlewares/validation-middleware.js";
import {
	productCreationValidationRules,
	productUpdateValidationRules,
	validateProductId,
	validateQueryParameters,
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
router.get(
	"/products",
	validateQueryParameters(),
	validate,
	productController.getProducts
);

// Get a product by ID
router.get(
	"/products/:id",
	validateProductId(),
	validate,
	productController.getProduct
);

// Update a product by ID
router.put(
	"/products/:id",
	productUpdateValidationRules(),
	validate,
	productController.updateProduct
);

// Remove a product by ID
router.delete(
	"/products/:id",
	validateProductId(),
	validate,
	productController.removeProduct
);

export default router;
