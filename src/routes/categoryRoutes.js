// routes/categories.router.js
import express from "express";
import categoryController from "../controllers/category.controller.js";

const router = express.Router();

// Create a new category
router.post("/categories", categoryController.createCategory);

// Get all categories
router.get("/categories", categoryController.getCategories);

// Get a category by ID
router.get("/categories/:id", categoryController.getCategoryById);

// Update a category by ID
router.put("/categories/:id", categoryController.updateCategory);

// Delete a category by ID
router.delete("/categories/:id", categoryController.deleteCategory);

export default router;
