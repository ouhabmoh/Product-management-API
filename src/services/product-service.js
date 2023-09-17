// services/product.service.js
import Product from "../models/Product.js";

class ProductService {
	async addProduct(productData) {
		try {
			const product = new Product(productData);
			await product.save();
			return product;
		} catch (error) {
			throw error;
		}
	}

	async getProducts({ page, limit, filters }) {
		try {
			const skip = (page - 1) * limit;

			const query = Product.find(filters)
				.skip(skip)
				.limit(limit)
				.populate("category"); // Populate the category field

			const totalCount = await Product.countDocuments(filters);
			const products = await query.exec();

			return {
				products,
				totalCount,
				currentPage: page,
				totalPage: Math.ceil(totalCount / limit),
			};
		} catch (error) {
			throw error;
		}
	}

	async getProduct(productId) {
		try {
			const product = await Product.findById(productId);

			return product;
		} catch (error) {
			throw error;
		}
	}

	async updateProduct(productId, updates) {
		try {
			console.log(updates);
			const updatedProduct = await Product.findByIdAndUpdate(
				productId,
				updates,
				{
					new: true, // Return the updated product
					runValidators: true, // Run validation checks on updates
				}
			);

			return updatedProduct;
		} catch (error) {
			throw error;
		}
	}

	async removeProduct(productId) {
		try {
			const product = await Product.findById(productId);

			if (!product) {
				throw new Error("Product not found");
			}

			await Product.deleteOne({ _id: product._id });
		} catch (error) {
			throw error;
		}
	}
}

export default new ProductService();
