import { body, param, query } from "express-validator";

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

export const productUpdateValidationRules = () => {
	return [
		// name field validation
		body("name")
			.optional() // Make the field optional for updates
			.isString()
			.withMessage("Name must be a string")
			.isLength({ min: 3, max: 100 })
			.withMessage("Name must be between 3 and 100 characters"),

		// category field validation (assuming it's a valid ObjectId)
		body("category")
			.optional() // Make the field optional for updates
			.isMongoId()
			.withMessage("Category must be a valid ObjectId"),

		// price field validation
		body("price")
			.optional() // Make the field optional for updates
			.isInt({ min: 0 })
			.withMessage("Price must be a number"),

		// qte field validation
		body("qte")
			.optional() // Make the field optional for updates
			.isInt({ min: 0 })
			.withMessage("Quantity must be a positive integer"),
	];
};

export const validateProductId = () => {
	return param("id")
		.isMongoId()
		.withMessage("Product ID must be a valid ObjectId");
};

export const validateQueryParameters = () => {
	return [
		query("page")
			.optional()
			.isInt({ min: 1 })
			.withMessage("Page must be a positive integer"),
		query("limit")
			.optional()
			.isInt({ min: 1 })
			.withMessage("Limit must be a positive integer"),
		query("name")
			.optional()
			.isString()
			.withMessage("Name must be a string"),
		query("category")
			.optional()
			.isMongoId()
			.withMessage("Category must be a valid ObjectId"),
		query("minPrice")
			.optional()
			.isFloat({ min: 0 })
			.withMessage("Min price must be a non-negative number"),
		query("maxPrice")
			.optional()
			.isFloat({ min: 0 })
			.withMessage("Max price must be a non-negative number"),
	];
};
