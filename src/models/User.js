// models/user.model.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	// You can add more user-related fields as needed (e.g., name, address, etc.)
});

const User = mongoose.model("User", userSchema);

export default User;
