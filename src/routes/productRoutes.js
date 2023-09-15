// routes/product.routes.js
import express from "express";
import productController from "../controllers/product.controller";

const router = express.Router();

// Add a new product
router.post("/products", productController.addProduct);

// Get products with pagination and search
router.get("/products", productController.getProducts);

// Get a product by ID
router.get("/products/:id", productController.getProduct);

// Update a product by ID
router.put("/products/:id", productController.updateProduct);

// Remove a product by ID
router.delete("/products/:id", productController.removeProduct);

export default router;
