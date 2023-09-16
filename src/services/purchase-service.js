// services/purchase.service.js
import Purchase from "../models/Purchase.js";

class PurchaseService {
	async getAllPurchases() {
		try {
			const purchases = await Purchase.find();
			return purchases;
		} catch (error) {
			throw error;
		}
	}

	async createPurchase(purchaseData) {
		try {
			const newPurchase = await Purchase.create(purchaseData);
			return newPurchase;
		} catch (error) {
			throw error;
		}
	}

	async getPurchaseById(purchaseId) {
		try {
			const purchase = await Purchase.findById(purchaseId);
			return purchase;
		} catch (error) {
			throw error;
		}
	}

	async updatePurchase(purchaseId, updates) {
		try {
			const updatedPurchase = await Purchase.findByIdAndUpdate(
				purchaseId,
				updates,
				{
					new: true, // Return the updated purchase
					runValidators: true, // Run validation checks on updates
				}
			);

			return updatedPurchase;
		} catch (error) {
			throw error;
		}
	}

	async deletePurchase(purchaseId) {
		try {
			const deletedPurchase = await Purchase.findByIdAndDelete(
				purchaseId
			);
			return deletedPurchase;
		} catch (error) {
			throw error;
		}
	}

	async getTopSellingProducts(limit) {
		try {
			const topSellingProducts = await Purchase.aggregate([
				{
					$group: {
						_id: "$product",
						totalQuantitySold: { $sum: "$quantity" },
					},
				},
				{
					$sort: {
						totalQuantitySold: -1, // Sort in descending order (highest to lowest)
					},
				},
				{
					$limit: 10, // Limit the results to the top 10 selling products
				},
				{
					$lookup: {
						from: "products", // Replace with your actual collection name
						localField: "_id",
						foreignField: "_id",
						as: "productDetails",
					},
				},
				{
					$unwind: "$productDetails",
				},
			]);

			return topSellingProducts;
		} catch (error) {
			throw error;
		}
	}
}

export default new PurchaseService();
