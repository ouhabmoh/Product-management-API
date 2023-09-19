# Product Management API

Welcome to the Product Management API, a powerful tool for managing products and categories. This API allows you to perform various operations related to product management, including creating, updating, and retrieving product and category information.

## Table of Contents

-    [Introduction](#introduction)
-    [Technologies Used](#technologies-used)
-    [Installation](#installation)
-    [Database Setup](#database-setup)
-    [Configuration](#configuration)
-    [Usage](#usage)
-    [Authentication](#authentication)
-    [Testing](#testing)
-    [Contributing](#contributing)
-    [License](#license)
-    [Authors](#authors)
-    [Acknowledgments](#acknowledgments)
-    [API Documentation](#api-documentation)
-    [Docker](#docker)
-    [Deployment](#deployment)
-    [Troubleshooting](#troubleshooting)
-    [Changelog](#changelog)
-    [Roadmap](#roadmap)
-    [Support](#support)
-    [GitHub Repository](#github-repository)

## Introduction

The Product Management API simplifies the task of managing products and categories for your business. Whether you're a small e-commerce platform or a large retail corporation, this API can streamline your product-related operations.

**Key Features:**

-    Create, update, and delete products
-    Categorize products for better organization
-    Handle product pricing and quantities
-    Authenticate users for secure product management

## Technologies Used

-    Node.js: The server-side runtime environment.
-    Express.js: A fast, unopinionated, and minimalist web framework for Node.js.
-    MongoDB: A NoSQL database for storing product and category data.
-    Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
-    Passport.js: Authentication middleware for Node.js.
-    Docker: Containerization for easy deployment.
-    Jest: A JavaScript testing framework.

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

## Usage

The API offers a variety of endpoints for managing products and categories. Refer to the API Documentation section for detailed usage instructions, including example requests and responses.

Authentication

To access certain endpoints, authentication is required. Follow the API Documentation to learn how to authenticate with the API.

Testing

You can run tests for the API using Jest. Execute the following command:

```bash

npm test
```

## API Documentation

For detailed API documentation, please refer to the [API Documentation](https://brindle-armadillo-af0.notion.site/Product-Management-API-Docs-a45e490414c74d6e886272430b37e348?pvs=4).
