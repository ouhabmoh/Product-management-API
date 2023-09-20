# Product Management API

Welcome to the Product Management API for managing products and categories. This API allows you to perform various operations related to product management, including creating, updating, and retrieving product, purchases, users and category information.

## Table of Contents

-    [Introduction](#introduction)
-    [Technologies Used](#technologies-used)
-    [Installation](#installation)
-    [Database Setup](#database-setup)
-    [Configuration](#configuration)
-    [Usage](#usage)
-    [Authentication](#authentication)
-    [API Documentation](#api-documentation)
-    [Database Schema](#database-schema-and-model-design-choices)
## Introduction

The Product Management API simplifies the task of managing products, purchases, users and category and categories for your business.
**Key Features:**

-    Create, update, and delete products
-    Categorize products for better organization
-    Handle product pricing and quantities
-    Manage Purchases.
-    Authenticate users for secure product management

## Technologies Used

-    Node.js: The server-side runtime environment.
-    Express.js: A fast, unopinionated, and minimalist web framework for Node.js.
-    MongoDB: A NoSQL database for storing product, purchases, users and category data.
-    Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
-    Passport.js: Authentication middleware for Node.js.
-

## Installation

To set up the Product Management API locally, follow these steps:

1. **Clone the GitHub repository:**

     ```bash
     git clone https://github.com/yourusername/product-management-api.git
     ```

2. **Navigate to the project directory:**

     ```bash
     cd product-management-api
     ```

3. **Install dependencies:**

```bash
npm install
```

## Database Setup

This API uses MongoDB as its database. You can configure the database connection in the .env file. Ensure you have a MongoDB instance running.

**Configuration**

To configure the API for your development environment, create a `.env` file in the project root directory if it doesn't already exist, and include the following environment variables:

```dotenv
# Development Environment Variables

# Server settings
DEV_SERVER_PORT
DEV_SERVER_HOST
NODE_ENV

# Database URL
DEV_DATABASE_URL

# JWT
JWT_SECRET_KEY
TOKEN_EXPIRATION_TIME
```

## Run the Project:

Start the API server by running the following command:

```bash

npm start
```

The API server will start, and you'll see log messages indicating that the server is running. By default, it will run on http://localhost:PORT, but you can adjust the port and other settings in your .env file.

**Access the API:** You can now access the API by opening a web browser or using a tool like Postman to send HTTP requests to the endpoints. Refer to the API Documentation section for detailed instructions on how to use the API.

## Usage

The API offers a variety of endpoints for managing products and categories. Refer to the API Documentation section for detailed usage instructions, including example requests and responses.

## Authentication

To access certain endpoints, authentication is required. Follow the API Documentation to learn how to authenticate with the API.

## API Documentation

For detailed API documentation, please refer to the [API Documentation](https://brindle-armadillo-af0.notion.site/Product-Management-API-Docs-a45e490414c74d6e886272430b37e348?pvs=4).

## Database Schema and Model Design Choices

For detailed Explanations, please refer to the [Model](https://brindle-armadillo-af0.notion.site/Database-schema-and-model-design-choices-0a80423f10104804a60b310743d54886?pvs=4).
