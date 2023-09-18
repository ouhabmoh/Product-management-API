// routes/categories.router.js
import express from "express";
import categoryController from "../controllers/category-controller.js";
import CategoryValidationRules from "../validations/category-validation.js";
import { validate } from "../middlewares/validation-middleware.js";
import { isAdmin } from "../middlewares/authorization-middleware.js";
const router = express.Router();

// Create a new category
router.post(
	"/categories",
	isAdmin,
	CategoryValidationRules.createCategoryValidationRules(),
	validate,
	categoryController.createCategory
);

// Get all categories
router.get("/categories", categoryController.getCategories);

// Get a category by ID
router.get(
	"/categories/:id",
	CategoryValidationRules.validateCategoryId(),
	validate,
	categoryController.getCategoryById
);

// Update a category by ID
router.put(
	"/categories/:id",
	isAdmin,
	CategoryValidationRules.updateCategoryValidationRules(),
	validate,
	categoryController.updateCategory
);

// Delete a category by ID
router.delete(
	"/categories/:id",
	isAdmin,
	CategoryValidationRules.validateCategoryId(),
	validate,
	categoryController.deleteCategory
);

export default router;
