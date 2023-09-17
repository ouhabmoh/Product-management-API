import mongoose from "mongoose";
import purchaseService from "../services/purchase-service.js";
import productService from "../services/product-service.js";

class PurchaseController {
	async getAllPurchases(req, res) {
		try {
			const purchases = await purchaseService.getAllPurchases();
			res.status(200).json(purchases);
		} catch (error) {
			console.error("Error fetching purchases:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async createPurchase(req, res) {
		const session = await mongoose.startSession();
		session.startTransaction();

		try {
			const purchaseData = req.body;

			// Verify if the product exists and has enough quantity available
			const product = await productService.getProduct(
				purchaseData.product
			);
			if (!product) {
				return res.status(404).json({ error: "Product not found" });
			}
			if (product.qte < purchaseData.quantity) {
				return res
					.status(400)
					.json({ error: "Insufficient quantity available" });
			}

			// // Verify if the user exists
			// const user = await userService.getUserById(purchaseData.user);
			// if (!user) {
			// 	return res.status(404).json({ error: "User not found" });
			// }

			// Create the purchase
			const newPurchase = await purchaseService.createPurchase(
				purchaseData,
				session
			);

			// Update the product quantity after the purchase
			await productService.updateProduct(product._id, {
				qte: product.qte - purchaseData.qte,
			});

			await session.commitTransaction();
			session.endSession();

			res.status(201).json(newPurchase);
		} catch (error) {
			console.error("Error creating purchase:", error);

			await session.abortTransaction();
			session.endSession();

			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async getPurchaseById(req, res) {
		try {
			const purchaseId = req.params.id;
			const purchase = await purchaseService.getPurchaseById(
				purchaseId
			);

			if (!purchase) {
				res.status(404).json({ error: "Purchase not found" });
			} else {
				res.status(200).json(purchase);
			}
		} catch (error) {
			console.error("Error fetching purchase:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async updatePurchase(req, res) {
		try {
			const purchaseId = req.params.id;
			const updates = req.body;
			const updatedPurchase = await purchaseService.updatePurchase(
				purchaseId,
				updates
			);

			if (!updatedPurchase) {
				res.status(404).json({ error: "Purchase not found" });
			} else {
				res.status(200).json(updatedPurchase);
			}
		} catch (error) {
			console.error("Error updating purchase:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async deletePurchase(req, res) {
		try {
			const purchaseId = req.params.id;
			const deletedPurchase = await purchaseService.deletePurchase(
				purchaseId
			);

			if (!deletedPurchase) {
				res.status(404).json({ error: "Purchase not found" });
			} else {
				res.status(204).send(); // Respond with no content upon successful deletion
			}
		} catch (error) {
			console.error("Error deleting purchase:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async getTopSellingProducts(req, res) {
		const limit = parseInt(req.query.limit) || 10; // Default limit to 10 if not specified

		try {
			const topSellingProducts =
				await purchaseService.getTopSellingProducts(limit);
			res.json(topSellingProducts);
		} catch (error) {
			console.error("Error fetching top-selling products:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async getPurchaseTrends(req, res) {
		try {
			const purchaseTrends = await purchaseService.getPurchaseTrends();
			res.json(purchaseTrends);
		} catch (error) {
			console.error("Error fetching purchase trends:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async getPurchaseStats(req, res) {
		try {
			const purchaseStats =
				await purchaseService.calculateTotalPurchases();

			if (!purchaseStats) {
				return res
					.status(404)
					.json({ error: "No purchase data available." });
			}

			res.status(200).json(purchaseStats);
		} catch (error) {
			console.error("Error retrieving purchase statistics:", error);

			res.status(500).json({ error: "Internal Server Error" });
		}
	}
}

export default new PurchaseController();
