// config/index.js

import dotenv from "dotenv";

// Load environment-specific variables from .env files
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const development = {
	server: {
		port: 3000,
		host: "localhost",
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

export default config[process.env.NODE_ENV];
