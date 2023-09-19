# Legal-Doctorine API Documentation

This is a RESTful API backend for product management. It allows you to manage products, categories, purchases with user authentication.

## Base URL

All URLs referenced in the documentation have the following base:

```
http://localhost:3000/api
```

## Endpoints

### Auth Routes

#### POST /auth/login

This endpoint is used to log in a user.

Request body should include:

- `email`: User's email
- `password`: User's password

Example request:

```
curl -X POST -H "Content-Type: application/json" -d '{"email": "user@example.com", "password": "password123"}' http://localhost:3000/api/auth/login
```

#### POST /auth/register

This endpoint is used to register a new user.

Request body should include:

- `email`: User's email
- `password`: User's password

Example request:

```
curl -X POST -H "Content-Type: application/json" -d '{"email": "user@example.com", "password": "password123"}' http://localhost:3000/api/auth/register
```

### Category Routes

#### POST /categories

This endpoint is used to create a new category. Only admin users can access this endpoint.

Request body should include:

- `name`: Category name

Example request:

```
curl -X POST -H "Content-Type: application/json" -d '{"name": "Electronics"}' http://localhost:3000/api/categories
```

#### GET /categories

This endpoint is used to get all categories.

Example request:

```
curl -X GET http://localhost:3000/api/categories
```

#### GET /categories/:id

This endpoint is used to get a category by its ID.

Example request:

```
curl -X GET http://localhost:3000/api/categories/1
```

#### PUT /categories/:id

This endpoint is used to update a category by its ID. Only admin users can access this endpoint.

Request body should include:

- `name`: New category name

Example request:

```
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Category"}' http://localhost:3000/api/categories/1
```

#### DELETE /categories/:id

This endpoint is used to delete a category by its ID. Only admin users can access this endpoint.

Example request:

```
curl -X DELETE http://localhost:3000/api/categories/1
```

### Product Routes

#### POST /products

This endpoint is used to add a new product. Only admin users can access this endpoint.

Request body should include:

- `name`: Product name
- `description`: Product description
- `price`: Product price
- `category`: Product category ID

Example request:

```
curl -X POST -H "Content-Type: application/json" -d '{"name": "New Product", "description": "This is a new product", "price": 100, "category": 1}' http://localhost:3000/api/products
```

#### GET /products

This endpoint is used to get products with pagination and search.

Example request:

```
curl -X GET http://localhost:3000/api/products
```

#### GET /products/:id

This endpoint is used to get a product by its ID.

Example request:

```
curl -X GET http://localhost:3000/api/products/1
```

#### PUT /products/:id

This endpoint is used to update a product by its ID. Only admin users can access this endpoint.

Request body should include:

- `name`: New product name
- `description`: New product description
- `price`: New product price
- `category`: New product category ID

Example request:

```
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Product", "description": "This is an updated product", "price": 150, "category": 1}' http://localhost:3000/api/products/1
```

#### DELETE /products/:id

This endpoint is used to remove a product by its ID. Only admin users can access this endpoint.

Example request:

```
curl -X DELETE http://localhost:3000/api/products/1
```

### Purchase Routes

#### POST /purchases

This endpoint is used to create a new purchase. Only logged in users can access this endpoint.

Request body should include:

- `product`: Product ID
- `quantity`: Quantity of the product

Example request:

```
curl -X POST -H "Content-Type: application/json" -d '{"product": 1, "quantity": 2}' http://localhost:3000/api/purchases
```

#### GET /purchases

This endpoint is used to get all purchases. Only admin users can access this endpoint.

Example request:

```
curl -X GET http://localhost:3000/api/purchases
```

#### GET /purchases/:id

This endpoint is used to get a purchase by its ID. Only admin users can access this endpoint.

Example request:

```
curl -X GET http://localhost:3000/api/purchases/1
```

#### PUT /purchases/:id

This endpoint is used to update a purchase by its ID. Only admin users can access this endpoint.

Request body should include:

- `product`: New product ID
- `quantity`: New quantity of the product

Example request:

```
curl -X PUT -H "Content-Type: application/json" -d '{"product": 2, "quantity": 3}' http://localhost:3000/api/purchases/1
```

#### DELETE /purchases/:id

This endpoint is used to delete a purchase by its ID. Only admin users can access this endpoint.

Example request:

```
curl -X DELETE http://localhost:3000/api/purchases/1
```

### Credit Card Routes

#### GET /credit-card

This endpoint is used to retrieve filtered credit card data. Only admin users can access this endpoint.

Example request:

```
curl -X GET http://localhost:3000/api/credit-card
```
