// controllers/purchase.controller.js
import purchaseService from "../services/purchase-service.js";

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
		try {
			const purchaseData = req.body;
			const newPurchase = await purchaseService.createPurchase(
				purchaseData
			);
			res.status(201).json(newPurchase);
		} catch (error) {
			console.error("Error creating purchase:", error);
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
}

export default new PurchaseController();
