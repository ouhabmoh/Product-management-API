import { query } from "express-validator";

class CreditCardValidationRules {
	static validateQuery() {
		return [
			query("limit")
				.optional() // Make the field optional
				.isInt({ min: 1 })
				.withMessage(
					"Limit must be a positive integer greater than or equal to 1"
				),
		];
	}
}

export default CreditCardValidationRules;
