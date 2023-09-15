// app.js

import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { connectToLocalDatabase } from "./config/db"; // Import your database connection function

// Create an Express application
const app = express();

// Use Morgan for logging HTTP requests (optional, for development)
app.use(morgan("dev"));

// Parse JSON and form data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a simple route
app.get("/", (req, res) => {
	res.json({ message: "Hello, world!" });
});

// Start the Express server
const PORT = process.env.PORT || 3000; // Use the specified port or default to 3000
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

// Connect to the local database when the application starts
connectToLocalDatabase()
	.then(() => {
		console.log("Connected to the local database");
	})
	.catch((error) => {
		console.error("Error connecting to the local database:", error);
		// Handle any startup errors here
	});
