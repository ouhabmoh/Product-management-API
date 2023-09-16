// config/index.js

import dotenv from "dotenv";

// Load environment-specific variables from .env files
import path from "path"; // Import the 'path' module

// Get the directory name of the current module using import.meta.url
const currentDir = path.dirname(new URL(import.meta.url).pathname);

// Construct the path to the .env file two levels up from the current directory
//const envPath = path.join(currentDir, `../../.env.${process.env.NODE_ENV}`);
const envPath =
	"C:/Users/Utilisateur/Desktop/Projects/Legal-Doctorine/.env.development";
console.log(envPath);
// Load environment-specific variables from the .env file
dotenv.config({ path: envPath });
console.log(process.env.NODE_ENV);
console.log(process.env.DEV_DATABASE_URL);
const development = {
	server: {
		port: process.env.DEV_SERVER_PORT || 3000,
		host: process.env.DEV_SERVER_HOST || "localhost",
	},
	database: {
		url: process.env.DEV_DATABASE_URL,
	},
	// Other development-specific settings
};

const production = {
	server: {
		port: process.env.PORT,
		host: process.env.HOST,
	},
	database: {
		url: process.env.PROD_DATABASE_URL,
	},
	// Other production-specific settings
};

const config = {
	development,
	production,
};
console.log(config[`${process.env.NODE_ENV}`]);
export default config[process.env.NODE_ENV];
