import { body, param } from "express-validator";

class CategoryValidationRules {
	// Validation rules for creating a category
	static createCategoryValidationRules() {
		return [
			body("name")
				.notEmpty()
				.withMessage("Name is required")
				.isString()
				.withMessage("Name must be a string")
				.isLength({ min: 3, max: 100 })
				.withMessage("Name must be between 3 and 100 characters"),
			body("description")
				.notEmpty()
				.withMessage("Description is required")
				.isString()
				.withMessage("Description must be a string")
				.isLength({ min: 5, max: 500 })
				.withMessage(
					"Description must be between 5 and 500 characters"
				),
		];
	}

	// Validation rules for updating a category
	static updateCategoryValidationRules() {
		return [
			body("name")
				.optional() // Make the field optional for updates
				.isString()
				.withMessage("Name must be a string")
				.isLength({ min: 3, max: 100 })
				.withMessage("Name must be between 3 and 100 characters"),
			body("description")
				.optional() // Make the field optional for updates
				.isString()
				.withMessage("Description must be a string")
				.isLength({ min: 5, max: 500 })
				.withMessage(
					"Description must be between 5 and 500 characters"
				),
		];
	}

	static validateCategoryId() {
		return param("id")
			.isMongoId()
			.withMessage("Category ID must be a valid ObjectId");
	}
}

export default CategoryValidationRules;
