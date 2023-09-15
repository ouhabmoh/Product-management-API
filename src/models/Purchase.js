// models/purchase.model.js
import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product", // Reference to the Product model for purchased product
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User", // Reference to the User model for the user who made the purchase
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	purchaseDate: {
		type: Date,
		default: Date.now,
	},
	// You can add more fields related to purchases (e.g., payment information, shipping details, etc.)
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

export default Purchase;
