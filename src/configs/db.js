// config/db.js

import mongoose from "mongoose";
import config from "./index"; // Assuming you have an index.js for environment-specific configuration

// Function to connect to the database
async function connectToDatabase() {
	try {
		const { url } = config.database;

		await mongoose.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// Other MongoDB options
		});

		console.log("Connected to the database");
	} catch (error) {
		console.error("Database connection error:", error);
		process.exit(1); // Exit the application on connection error
	}
}

export { connectToDatabase };
