import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { connectToDatabase } from "./src/configs/db.js"; // Import database connection function
import router from "./src/routes/routes.js";

// Create an Express application
const app = express();

// Use Morgan for logging HTTP requests (optional, for development)
app.use(morgan("dev"));

// Parse JSON and form data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the router defined in router.js
app.use("/api", router);

// Start the Express server
const PORT = process.env.PORT || 3000; // Use the specified port or default to 3000
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

// Connect to the local database when the application starts
connectToDatabase()
	.then(() => {
		console.log("Connected to the local database");
	})
	.catch((error) => {
		console.error("Error connecting to the local database:", error);
		// Handle any startup errors here
	});
