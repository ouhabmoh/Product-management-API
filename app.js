import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { connectToDatabase } from "./src/configs/db.js";
import router from "./src/routes/routes.js";
import userRoutes from './src/routes/user-routes.js';

const app = express();

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", router);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

connectToDatabase()
	.then(() => {
		console.log("Connected to the local database");
	})
	.catch((error) => {
		console.error("Error connecting to the local database:", error);
		// Handle any startup errors here
	});
