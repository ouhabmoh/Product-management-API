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
}

export default new PurchaseService();
