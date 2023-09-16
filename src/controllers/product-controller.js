// controllers/product.controller.js
import productService from "../services/product-service.js";

class ProductController {
	async addProduct(req, res) {
		try {
			const productData = req.body;
			const product = await productService.addProduct(productData);
			res.status(201).json(product);
		} catch (error) {
			console.error("Error adding product:", error);
			res.status(500).json({ error: "Error adding product" });
		}
	}

	async getProducts(req, res) {
		try {
			const {
				page = 1,
				limit = 10,
				name,
				category,
				minPrice,
				maxPrice,
			} = req.query;
			const filters = {};

			if (name) {
				filters.name = { $regex: new RegExp(name, "i") }; // Case-insensitive name search
			}

			if (category) {
				filters.category = category;
			}

			if (minPrice !== undefined || maxPrice !== undefined) {
				filters.price = {};
				if (minPrice !== undefined) {
					filters.price.$gte = minPrice;
				}
				if (maxPrice !== undefined) {
					filters.price.$lte = maxPrice;
				}
			}

			console.log(filters);
			console.log(page);
			console.log(limit);
			const products = await productService.getProducts({
				page: parseInt(page),
				limit: parseInt(limit),
				filters,
			});

			res.status(200).json(products);
		} catch (error) {
			console.error("Error fetching products:", error);
			res.status(500).json({ error: "Error fetching products" });
		}
	}

	async updateProduct(req, res) {
		try {
			const productId = req.params.id;

			const updates = {};
			for (const key of Object.keys(req.body)) {
				if (req.body[key] !== "") {
					updates[key] = req.body[key];
				}
			}
			const updatedProduct = await productService.updateProduct(
				productId,
				updates
			);

			if (!updatedProduct) {
				res.status(404).json({ error: "Product not found" });
			} else {
				res.status(200).json(updatedProduct);
			}
		} catch (error) {
			console.error("Error updating product:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async removeProduct(req, res) {
		try {
			const productId = req.params.id;
			await productService.removeProduct(productId);
			res.status(204).send(); // 204 No Content: Successful removal, no response body
		} catch (error) {
			console.error("Error removing product:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	async getProduct(req, res) {
		try {
			const productId = req.params.id;
			const product = await productService.getProduct(productId);

			if (!product) {
				res.status(404).json({ error: "Product not found" });
			} else {
				res.status(200).json(product);
			}
		} catch (error) {
			console.error("Error fetching product:", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
}

export default new ProductController();
