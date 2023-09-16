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

	async getPurchaseTrends() {
		try {
			const purchaseTrends = await Purchase.aggregate([
				// Aggregation pipeline for purchase trends
				{
					$group: {
						_id: {
							year: { $year: "$purchaseDate" },
							month: { $month: "$purchaseDate" },
						},
						count: { $sum: 1 },
					},
				},
				{
					$sort: { "_id.year": 1, "_id.month": 1 },
				},
			]);

			return purchaseTrends;
		} catch (error) {
			throw error;
		}
	}

	async calculateTotalPurchases() {
		try {
			const purchaseStats = await Purchase.aggregate([
				// Calculate total purchases
				{
					$group: {
						_id: null,
						totalPurchases: { $sum: 1 }, // Count total purchases
						totalQuantities: { $sum: "$quantity" }, // Sum total quantities
						totalPrice: { $sum: "$price" }, // Sum total prices
					},
				},
				// project the results to remove the _id field
				{
					$project: {
						_id: 0, // Exclude the _id field from the result
						totalPurchases: 1,
						totalQuantities: 1,
						totalPrice: 1,
					},
				},
			]);

			return purchaseStats[0];
		} catch (error) {
			throw new Error(
				"Error calculating purchase statistics: " + error.message
			);
		}
	}
}

export default new PurchaseService();
