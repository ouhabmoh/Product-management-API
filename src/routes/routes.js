import express from "express";
import productsRouter from "./product-routes.js";
import categoriesRouter from "./category-routes.js";
import purchasesRouter from "./purchase-routes.js";
import creditCardsRouter from "./credit-card-routes.js";
import authRouter from "./auth-routes.js";

const router = express.Router();

// Mount the categories router
router.use("/categories", categoriesRouter);

// Mount the products router
router.use("/products", productsRouter);

// Mount the purchases router
router.use("/purchases", purchasesRouter);

// Mount the credit cards router
router.use("/credit-card", creditCardsRouter);

// Mount the authentication router
router.use("/auth", authRouter);

// Define a default route (catch-all route)
router.use((req, res) => {
	res.status(404).json({ message: "Page not found" });
});

export default router;
