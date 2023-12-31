// routes/product.routes.js
import express from "express";
import productController from "../controllers/product-controller.js";
import { isAdmin } from "../middlewares/authorization-middleware.js";
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
	"/",
	isAdmin,
	productCreationValidationRules(),
	validate,
	productController.addProduct
);

// Get products with pagination and search
router.get(
	"/",
	validateQueryParameters(),
	validate,
	productController.getProducts
);

// Get a product by ID
router.get("/:id", validateProductId(), validate, productController.getProduct);

// Update a product by ID
router.put(
	"/:id",
	isAdmin,
	productUpdateValidationRules(),
	validate,
	productController.updateProduct
);

// Remove a product by ID
router.delete(
	"/:id",
	isAdmin,
	validateProductId(),
	validate,
	productController.removeProduct
);

export default router;
