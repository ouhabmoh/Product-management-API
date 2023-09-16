// config/db.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import config from "./index.js"; // Assuming you have an index.js for environment-specific configuration
const envPath =
	"C:/Users/Utilisateur/Desktop/Projects/Legal-Doctorine/.env.development";
console.log(envPath);
// Load environment-specific variables from the .env file
dotenv.config();
// Function to connect to the database
async function connectToDatabase() {
	try {
		console.log(config);
		// const { url } = config.database;
		console.log(process.env.DEV_DATABASE_URL);
		await mongoose.connect(process.env.DEV_DATABASE_URL, {
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
