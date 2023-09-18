import { body, param, query } from "express-validator";

class PurchaseValidationRules {
	// Validation rules for creating a purchase
	static createPurchaseValidationRules() {
		return [
			// Validate the product ID
			body("product")
				.notEmpty()
				.withMessage("Product ID is required")
				.isMongoId()
				.withMessage("Product ID must be a valid ObjectId"),

			// Validate the quantity
			body("quantity")
				.notEmpty()
				.withMessage("Quantity is required")
				.isInt({ min: 1 })
				.withMessage("Quantity must be a positive integer"),

			// Validate the price
			body("price")
				.notEmpty()
				.withMessage("Price is required")
				.isFloat({ min: 0 })
				.withMessage("Price must be a non-negative number"),
		];
	}

	// Validation rules for updating a purchase
	static updatePurchaseValidationRules() {
		return [
			// Validate the quantity
			body("quantity")
				.optional() // Make the field optional for updates
				.isInt({ min: 1 })
				.withMessage("Quantity must be a positive integer"),

			// Validate the price
			body("price")
				.optional() // Make the field optional for updates
				.isFloat({ min: 0 })
				.withMessage("Price must be a non-negative number"),
		];
	}

	// Validation rule for validating purchase ID in request params
	static validatePurchaseId() {
		return param("id")
			.isMongoId()
			.withMessage("Purchase ID must be a valid ObjectId");
	}

	// Validation rules for request query parameters
	static validateQueryParameters() {
		return [
			query("page")
				.optional()
				.isInt({ min: 1 })
				.withMessage("Page must be a positive integer"),
			query("limit")
				.optional()
				.isInt({ min: 1 })
				.withMessage("Limit must be a positive integer"),
		];
	}
}

export default PurchaseValidationRules;
