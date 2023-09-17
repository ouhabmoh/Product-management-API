import { body } from "express-validator";

export const productCreationValidationRules = () => {
	return [
		// name field validation
		body("name")
			.bail()
			.notEmpty()
			.withMessage("Name is required")
			.isString()
			.withMessage("Name must be a string")
			.isLength({ min: 3, max: 100 })
			.withMessage("Name must be between 3 and 100 characters"),

		// category field validation (assuming it's a valid ObjectId)
		body("category")
			.bail()
			.notEmpty()
			.withMessage("Category is required")
			.isMongoId()
			.withMessage("Category must be a valid ObjectId"),

		// price field validation
		body("price")
			.bail()
			.notEmpty()
			.withMessage("Price is required")
			.isInt({ min: 0 })
			.withMessage("Price must be a number"),

		// qte field validation
		body("qte")
			.bail()
			.notEmpty()
			.withMessage("Quantity is required")
			.isInt({ min: 0 })
			.withMessage("Quantity must be a positive integer"),
	];
};
