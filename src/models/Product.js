// models/product.model.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category", // Reference to the Category model
		required: true,
	},

	price: {
		type: Number,
		required: true,
	},

	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User", // Reference to the User model (assuming a user owns the product)
		required: true,
	},
	qte: {
		type: Number,
		default: 0,
	},
});

const Product = mongoose.model("Product", productSchema);

export default Product;
